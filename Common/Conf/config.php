<?php
return array(
    //ChuQvft789
    //'配置项'=>'配置值'
    'URL_CASE_INSENSITIVE'  =>  true,
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  'localhost', // 服务器地址
    'DB_NAME'               =>  'chuqvsql',          // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  'chenyunzhan',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    //'DB_PREFIX'             =>  '',    // 数据库表前缀
    'DB_FIELDTYPE_CHECK'    =>  false,       // 是否进行字段类型检查
    //'DB_FIELDS_CACHE'       =>  true,        // 启用字段缓存
    'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf8
    // 显示页面Trace信息
    //'SHOW_PAGE_TRACE' =>false,
    //'URL_MODEL'          => '0', //URL模式

    //支付宝配置参数
    'alipay_config'=>array(
        'partner' =>'2088621514889501',   //这里是你在成功申请支付宝接口后获取到的PID；
        'seller_id' =>'2088621514889501',   //这里是你在成功申请支付宝接口后获取到的PID；
        'key'=>'e7x4pr2516l24b0iwm47n1mxnx9l11fl',//这里是你在成功申请支付宝接口后获取到的Key
        //这里是异步通知页面url，提交到项目的Pay控制器的notifyurl方法；
        'notify_url'=>'http://www.liuyuyao.com/Pay/notifyurl',
        //这里是页面跳转通知url，提交到项目的Pay控制器的returnurl方法；
        'return_url'=>'http://www.liuyuyao.com/Pay/returnurl',
        'sign_type'=>strtoupper('MD5'),
        'input_charset'=> strtolower('utf-8'),
        'cacert'=> getcwd().'\\cacert.pem',
        'transport'=> 'http',
        'payment_type'=> '1',
        'service'=> 'create_direct_pay_by_user',
        'anti_phishing_key'=> '',
        'exter_invoke_ip'=> '',

    ),
);