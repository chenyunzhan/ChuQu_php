<?php

namespace Home\Model;
use Think\Model;

/**
 * Created by PhpStorm.
 * User: zhan
 * Date: 2017/3/3
 * Time: 17:46
 */
class CityBackModel extends Model
{


    /**
     * 获取文档列表
     * @param  integer  $category 分类ID
     * @param  string   $order    排序规则
     * @param  integer  $status   状态
     * @param  boolean  $count    是否返回总数
     * @param  string   $field    字段 true-所有字段
     * @return array              文档列表
     */
    public function lists(){

        return $this->distinct(true)->field('topicid, country')->select();
    }


}