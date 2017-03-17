<?php
/**
 * Created by PhpStorm.
 * User: zhan
 * Date: 17/3/17
 * Time: 上午11:22
 */

namespace Home\Controller;


use Think\Controller;

class PayController extends Controller
{



    //在类初始化方法中，引入相关类库
    public function _initialize() {
        vendor('Alipay.Corefunction');
        vendor('Alipay.Md5function');
        vendor('Alipay.Notify');
        vendor('Alipay.Submit');

    }

    public function index() {
        $this->assign('payForm',session('payForm'));//列表

        $this->display();
    }


    public function doPay() {
        /**************************请求参数**************************/
        //商户订单号，商户网站订单系统中唯一订单号，必填
        $out_trade_no = $_POST['WIDout_trade_no'];

        //订单名称，必填
        $subject = $_POST['WIDsubject'];

        //付款金额，必填
        $total_fee = $_POST['WIDtotal_fee'];

        //商品描述，可空
        $body = $_POST['WIDbody'];





        //这里我们通过TP的C函数把配置项参数读出，赋给$alipay_config；
        $alipay_config=C('alipay_config');

        /************************************************************/

        //构造要请求的参数数组，无需改动
        $parameter = array(
            "service"       => $alipay_config['service'],
            "partner"       => $alipay_config['partner'],
            "seller_id"  => $alipay_config['seller_id'],
            "payment_type"	=> $alipay_config['payment_type'],
            "notify_url"	=> $alipay_config['notify_url'],
            "return_url"	=> $alipay_config['return_url'],

            "anti_phishing_key"=>$alipay_config['anti_phishing_key'],
            "exter_invoke_ip"=>$alipay_config['exter_invoke_ip'],
            "out_trade_no"	=> $out_trade_no,
            "subject"	=> $subject,
            "total_fee"	=> $total_fee,
            "body"	=> $body,
            "_input_charset"	=> trim(strtolower($alipay_config['input_charset']))
            //其他业务参数根据在线开发文档，添加参数.文档地址:https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.kiX33I&treeId=62&articleId=103740&docType=1
            //如"参数名"=>"参数值"

        );

        //建立请求
        $alipaySubmit = new \ AlipaySubmit($alipay_config);
        $html_text = $alipaySubmit->buildRequestForm($parameter,"get", "确认");
        session("payForm",$html_text);
        echo json_encode(array('status' =>'ok', 'url' => '/home/pay/index'));

    }

}