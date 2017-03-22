<?php
// 应用入口文件

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
error_reporting(0);
define('APP_DEBUG', true);



// 定义应用目录
// $_SERVER["HTTP_HOST"] == www.chuqv.com
define('WEB_PATH','http://'.$_SERVER["HTTP_HOST"].'/');
define('IMG_PATH',WEB_PATH.'Public/img');
define('CSS_PATH',WEB_PATH.'Public/css');
define('JS_PATH',WEB_PATH.'Public/scripts');

// 引入ThinkPHP入口文件
require './ThinkPHP/ThinkPHP.php';
