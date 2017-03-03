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
}