<?php
/**
 * Created by PhpStorm.
 * User: ZHAN
 * Date: 2017/3/1
 * Time: 22:54
 */

namespace Home\Controller;
use Think\Controller;

class RouteController extends Controller {

    public function destination(){
        $this->display();
//        session("route", 1);
    }


    public function poi(){
        $this->display();
//        session("route", 1);
    }



}