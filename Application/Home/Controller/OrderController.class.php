<?php
/**
 * Created by PhpStorm.
 * User: zhan
 * Date: 2017/3/2
 * Time: 15:07
 */

namespace Home\Controller;
use Think\Controller;

class OrderController extends Controller
{

    public function index() {
        echo phpinfo();
    }

    public function order(){

        $lists = D("city_back")->lists();
        $this->assign('lists',$lists);//列表
        $this->display();

    }


    public function getCityByCountryId($id = 0){


        $where['Topicid'] = array('in',$id);
        $data = M('city_back')->where($where)->select();


        foreach($data as $k=>$v){

            echo '<div class="optionBox">';
            echo '<div class="label">'.$v["ccity"].'</div>';
            echo '<div class="button" id="'.$v["id"].'"><div class="x">&times;</div></div>';
            echo '</div>';
        }



    }


    public function getProductByCityId($id = 0){


        $where['CityID'] = array('in',$id);
        $where['Classification'] = array('like','%成人%');



        $user = M('product_copy');
        $list = $user->join('RIGHT JOIN productticket_copy ON product_copy.productname = productticket_copy.productname')->field('
        product_copy.id as id1,
        product_copy.name,
        productticket_copy.id as id2,
        product_copy.ProductName,
        product_copy.Category,
        product_copy.Country,
        product_copy.City,
        productticket_copy.Price,
        productticket_copy.Classification')->where($where)->select();

//        $data = M('product_copy')->where($where)->select();

        echo json_encode($list);//json_encode方式是必须的

//        foreach($data as $k=>$v){
//            echo '<div class="pool-item">';
//            echo '<div class="item-image"></div>';
//            echo '<div class="item-label title">'.$v["productname"].'</div>';
//            echo '<div class="item-label note">'.$v["category"].'</div>';
//            echo '<div class="item-label city">'.$v["country"].' '.$v["city"].'</div>';
//            echo '<div class="item-bottom">';
//            echo '<div class="cost">￥80<span style="font-size:12px">.00</span></div>';
//            echo '<div class="add">添加</div>';
//            echo '</div>';
//            echo '</div>';
//        }



    }

    public function preAddOrder($id = 0) {
        $where['product_copy.id'] = array('in',$id);
        $where['Classification'] = array('like','%成人%');



        $user = M('product_copy');
        $lists = $user->join('RIGHT JOIN productticket_copy ON product_copy.productname = productticket_copy.productname')->field('
        product_copy.id as id1,
        product_copy.name,
        productticket_copy.id as id2,
        product_copy.ProductName,
        product_copy.Category,
        product_copy.Country,
        product_copy.City,
        productticket_copy.Price,
        productticket_copy.Classification')->where($where)->select();

        $totalPrice = 0;

        foreach ($lists as $v) {
            $totalPrice += $v['price'];
        }

        $this->assign('lists',$lists);//列表
        $this->assign('totalPrice',$totalPrice);//列表

        $this->display();

    }


    public function doAddOrder() {
        $users     =  I('users');
        $totalPrice = I('totalPrice');
        $productIds = I('productIds');
        $nums = I('nums');
        $useDates = I('useDates');

        $userIds = array();
        foreach ($users as $user) {
            $productGuest = M("productguest"); // 实例化User对象
            $data['GuestCFirstName'] = $user['name1CN'];
            $data['GuestCLastName'] = $user['name2CN'];
            $data['GuestEFirstName'] = $user['name1PY'];
            $data['GuestELastName'] = $user['name2PY'];
            $data['GuestSex'] = $user['sex'];
            $data['GuestNational'] = $user['country'];
            $data['GuestCardType'] = $user['IDType'];
            $data['GuestCardNum'] = $user['IDNumber'];
            $result = $productGuest->add($data);
            if($result){
                // 如果主键是自动增长型 成功后返回值就是最新插入的值
                $insertId = $result;
                array_push($userIds,$insertId);
            }
        }

        $userIdsStr =implode(',',$userIds);


        $productOrder = M("productorder"); // 实例化User对象
        $dataOrder['UserID'] = $userIdsStr;
        $dataOrder['ProductID'] = $productIds;
        $dataOrder['ProductNUM'] = $nums;
        $dataOrder['DateTime'] = $useDates;
        $dataOrder['ContactName'] = I('contactName');
        $dataOrder['ContactMobile'] = I('contactMobile');
        $dataOrder['ContactWebChat'] = I('contactWebChat');
        $dataOrder['ContactMail'] = I('contactMail');
        $dataOrder['GuestInfo'] = I('guestInfo');
        $dataOrder['TotalPrice'] = $totalPrice;
        $dataOrder['OrderDate'] = time();

        $result = $productOrder->add($dataOrder);
        if($result){
            // 如果主键是自动增长型 成功后返回值就是最新插入的值
            $insertId = $result;
            echo $insertId;
        }


    }


    public function doAddTraveller() {
        $sex = I('sex');
        echo I;
    }


    public function data(){
        $t = D('FarmListView');
        $item_per_page = $this->pagesize;  //每页的条数
        //sanitize post value
        $page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH);

        //throw HTTP error if page number is not valid
        if(!is_numeric($page_number)){
            header('HTTP/1.1 500 Invalid page number!');
            exit();
        }

        //起始位置
        $position = ($page_number * $item_per_page);


        $data = $t->field(true)->order('id desc')->limit($position,$item_per_page)->select();
        // p($data);exit();
        echo '<ul>';
        foreach($data as $k=>$v){
            echo '<li id="item_'.$v["fid"].'">';
            echo '<a href="'.U("Farm/detail/",array("id"=>$v[fid])).'">';
            echo '<div class="pr">';
            echo '<div class="cd-img"><img src="'.__ROOT__.C('UPDATE_PATH').$v["fimg_url"].'"0 /></div><div class="cd-name">'.$v[title].'</div></div>';
            echo '<div class="cd-xx wbox"><span class="wfl"><em class="jg">'.$v[farm_price].'</em>元<em class="dw">(一茬)</em></span><span class="wfl syf">剩余：'. intval($v['farm_sarea']/10) .'份</span></div></a>';
            echo '</li>';
        }
        echo '</ul>';

    }
}