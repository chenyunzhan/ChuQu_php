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
        $data = M('product_copy')->where($where)->select();


        foreach($data as $k=>$v){
            echo '<div class="pool-item">';
            echo '<div class="item-image"></div>';


            echo '<div class="label">'.$v["ccity"].'</div>';



            echo '<div class="item-label title">'.$v["productname"].'</div>';
            echo '<div class="item-label note">'.$v["category"].'</div>';
            echo '<div class="item-label city">'.$v["country"].' '.$v["city"].'</div>';
            echo '<div class="item-bottom">';
            echo '<div class="cost">￥80<span style="font-size:12px">.00</span></div>';
            echo '<div class="add">添加</div>';
            echo '</div>';
            echo '</div>';

        }



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