<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//网站首页

Route::get('/', function () {


    return view('index');


});
Route::post('/doMap','Shouye\ShouyeController@doMap');
//后台登陆
Route::group(['prefix'=>'admin','namespace'=>'Admin'],function(){
    //登录首页
    Route::get('login','Login\LoginController@login');
    //生成验证码
    Route::get('code/captcha/{id}','Login\LoginController@captcha');
    //登陆验证
    Route::post('dologin','Login\LoginController@dologin');

});

//后台路由组
Route::group(['middleware'=>'adminIslogin'],function() {
    // 退出登录
    Route::get('/admin/logout', 'Admin\Login\LoginController@logout');
    //后台首页路由
    Route::get('/admin/index', 'Admin\Login\LoginController@index');

    //后台管理员路由
    //Admin\Users\MangerController
    Route::post('/admin/users/manger/status', 'Admin\Users\MangerController@changestatus');
    Route::get('/admin/users/manger/repass/{id}', 'Admin\Users\MangerController@repass');
    Route::post('/admin/users/manger/dorepass/{id}', 'Admin\Users\MangerController@dorepass');
    Route::get('/admin/users/manger/delall', 'Admin\Users\MangerController@delall');
    Route::resource('/admin/users/manger', 'Admin\Users\MangerController');


    //后台商铺路由 Admin\Shops\ShopController
    //管理员修改排序
    Route::post('/admin/shops/changeorder', 'Admin\Shops\ShopsController@changeorder');
    //管理员修改店铺状态
    Route::post('/admin/shops/changestatus', 'Admin\Shops\ShopsController@changestatus');
    //管理员删除店铺
    Route::post('/admin/shops/delete/{id}', 'Admin\Shops\ShopsController@deleteshop');
    //商铺审核
    Route::get('/admin/shops/judgeshop', 'Admin\Shops\ShopsController@judgeShop');
    Route::resource('/admin/shops', 'Admin\Shops\ShopsController');

    //后台商品路由 Admin\Goods\GoodController
    Route::post('/admin/goods/delall','Admin\Goods\GoodsController@delall');
    Route::post('/admin/goods/upload', 'Admin\Goods\GoodsController@upload');
    Route::resource('/admin/goods', 'Admin\Goods\GoodsController');

    //后台商品分类路由
    Route::post('/admin/goodscate/delall','Admin\Goods\GoodsCateController@delall');
    Route::post('/admin/goodscate/statusup', 'Admin\Goods\GoodsCateController@statusup');
    Route::post('/admin/goodscate/statusdown', 'Admin\Goods\GoodsCateController@statusdown');
    Route::resource('/admin/goodscate', 'Admin\Goods\GoodsCateController');
    //后台商家路由
    Route::get('/admin/biz/biz/list','Admin\Biz\MerchantController@list');
    Route::get('/admin/biz/biz/grade','Admin\Biz\MerchantController@grade');
    Route::get('/admin/biz/biz/create','Admin\Biz\MerchantController@create');
    //删除
    Route::post('/admin/biz/biz/destroy/{id}','Admin\Biz\MerchantController@destroy');
    //禁用启用
    Route::post('/admin/biz/biz/changestatus','Admin\Biz\MerchantController@changestatus');
    //批量删除
    Route::get('/admin/biz/biz/delall','Admin\Biz\MerchantController@delall');
    Route::get('/admin/biz/biz/audit','Admin\Biz\MerchantController@audit');


    //后台普通用户路由
    Route::post('/admin/users/users/changestatus','Admin\Users\UserController@changestatus');
    Route::get('/admin/users/users/info','Admin\Users\UserController@info');
    Route::post('/admin/users/users/del/{id}','Admin\Users\UserController@del');
    Route::get('/admin/users/users/grade','Admin\Users\UserController@grade');
    Route::get('/admin/users/users/audit','Admin\Users\UserController@audit');
    Route::get('/admin/users/users/delall', 'Admin\Users\UserController@delall');
    Route::resource('/admin/users/users','Admin\Users\UserController');
    //后台用户修改状态
    //后台订单
    Route::get('/admin/order/order/info/{id}','Admin\Order\OrdersController@info');
    Route::get('/admin/order/order/list','Admin\Order\OrdersController@List');
    Route::post('/admin/order/order/changestatus','Admin\Order\OrdersController@changestatus');
    Route::resource('/admin/order/order','Admin\Order\OrdersController');
    //后台网站配置
    //批量修改网站配置项
    Route::post('/admin/config/changecontent','Admin\Config\ConfigController@changeContent');
    Route::resource('/admin/config','Admin\Config\ConfigController');

    //店家后台个人信息
//    Admin\Seller\SellerController
    Route::get('/admin/seller/sellers/repass/{id}', 'Admin\Seller\SellerController@repass');
    Route::resource('admin/seller/sellers', 'Admin\Seller\SellerController');

    //店家后台我的店铺
//    Admin\Seller\ShopsController
    Route::get('admin/seller/shops/changecontent', 'Admin\Seller\ShopsController@changecontent');
    Route::get('admin/seller/shops/changetime', 'Admin\Seller\ShopsController@changetime');
    Route::post('admin/seller/shops/changestatus', 'Admin\Seller\ShopsController@changestatus');
    Route::post('admin/seller/shops/uploadfile', 'Admin\Seller\ShopsController@uploadfile');
    Route::resource('admin/seller/shops', 'Admin\Seller\ShopsController');
    //店家后台商品管理
//    Admin\Seller\GoodsControlelr
    Route::post('/admin/seller/goods/delall','Admin\Seller\GoodsController@delall');
    Route::post('/admin/seller/goods/upload', 'Admin\Seller\GoodsController@upload');
    Route::post('/admin/seller/goods/chasta', 'Admin\Seller\GoodsController@chasta');
    Route::resource('admin/seller/goods','Admin\Seller\GoodsController');

    //店家后台分类路由
    Route::post('/admin/seller/goodscate/delall','Admin\Seller\GoodsCateController@delall');
    Route::post('/admin/seller/goodscate/statusup', 'Admin\Seller\GoodsCateController@statusup');
    Route::post('/admin/seller/goodscate/statusdown', 'Admin\Seller\GoodsCateController@statusdown');
    Route::resource('/admin/seller/goodscate', 'Admin\Seller\GoodsCateController');

    //店家拒单
    Route::get('/admin/seller/orders/stoporder/{id}','Admin\Seller\OrdersController@stopOrder');
    //修改订单状态
    Route::get('/admin/seller/orders/changestatus/{id}','Admin\Seller\OrdersController@changeStatus');
    //店家后台订单统计
   Route::resource('/admin/seller/orders','Admin\Seller\OrdersController');

});

//前台登陆注册
Route::group(['prefix'=>'home','namespace'=>'Home'],function(){
    //登录
    Route::get('/login','Logins\LoginController@login');
    //登陆验证
    Route::post('/dologin','Logins\LoginController@dologin');
    //退出登陆
    Route::get('/logout','Logins\LoginController@logout');
    //注册
    Route::get('/register','Logins\LoginController@register');
    Route::post('/doregister','Logins\LoginController@doregister');

});

//前台路由组

Route::group(['middleware'=>'homeIslogin'],function(){
    //商品订单
    Route::get('/orders','Home\Orders\OrderController@orders');
    Route::post('/admin/config/upload','Admin\Config\ConfigController@upload');
    Route::resource('/admin/config','Admin\Config\ConfigController');
    //个人中心
    Route::get('/center','Home\Users\UserController@center');
    //用户积分
    Route::get('/integral','Home\Users\UserController@integral');
    //用户收藏
    Route::get('/collect','Home\Users\UserController@collect');
    //账户余额
    Route::get('/balance','Home\Users\UserController@balance');
    //开店申请1
    Route::get('/opendata','Home\Shops\OpenShopController@opendata');
    //开店信息采集
    Route::get('/openmessage','Home\Shops\OpenShopController@openmessage');
    //开店信息表单
    Route::get('/storeform','Home\Shops\OpenShopController@storeform');
    //获取二级分类
    Route::get('/home/getsecond','Home\Shops\OpenShopController@getsecond');
    //表单信息处理
    Route::post('/home/shop/doform','Home\Shops\OpenShopController@doform');
    //处理表单上传文件
    Route::post('/home/shop/uploadfile','Home\Shops\OpenShopController@uploadfile');
    //开店申请审核页面
    Route::get('/home/openlast','Home\Shops\OpenShopController@openlast');
    //结算
    Route::get('/shop/{id}/jiesuan','Home\Orders\OrderController@jiesuan');
    //添加地址
    Route::post('/shop/{id}/addaddr','Home\Orders\OrderController@addaddr');
    //提交生成订单
    Route::post('/shop/{id}/finish','Home\Orders\OrderController@finish');
    //商品订单
    Route::get('/orders','Home\Orders\OrderController@orders');
    //订单完成
    Route::get('/overorder','Home\Orders\OrderController@overorder');
    //用户红包
    Route::get('/hongbao','Home\Users\UserController@hongbao');
    //删除用户收藏
    Route::get('/del/{id}','Home\Users\UserController@del');
    //订单详情
    Route::get('/orderdata/{id}','Home\Orders\OrderController@orderdata');
    //我的资料开始
    //用户数据资料
    Route::get('/data','Home\Users\UserController@data');
    //添加地址
    Route::get('/create','Home\Users\UserController@create');
    Route::post('/store','Home\Users\UserController@store');
    //修改地址
    Route::get('/modify/{id}','Home\Users\UserController@modify');
    Route::post('/storemodify{id}','Home\Users\UserController@storemodify');
    //删除地址
    Route::get('/deletedizhi/{id}','Home\Users\UserController@deletedizhi');
    //我的资料结束
    //安全中心
    Route::get('/safety','Home\Users\UserController@safety');
    //用户地址
    Route::get('/add','Home\Users\UserController@add');
    //用户密码
    Route::get('/password','Home\Users\UserController@password');
    //用户密码修改
    Route::post('/repass','Home\Users\UserController@repass');
});
    //商品列表
    Route::get('/lists','Home\Shops\ShopController@lists');
    //首页获得商品列表
    Route::get('home/getshop','Home\Shops\ShopController@getShop');
    //首页获取子分类
    Route::get('home/getcate','Home\Shops\ShopController@getCate');
    //列表页搜索
    Route::post('home/dosearch','Home\Shops\ShopController@listDoSearch');
    //我要开店首页
    Route::get('home/openshop','Home\Shops\OpenShopController@index');
    //店铺详情详情
    Route::get('/shop/{id}','Home\Shops\ShopController@shop');
    //店铺评价
    Route::get('/shop/{id}/rate','Home\Shops\ShopController@rate');
    //商品详情
    Route::get('/home/show','Home\Shops\ShopController@show');
    //加入购物车
    Route::get('/home/addcart','Home\Shops\ShopController@addCart');
    //减购物车的商品数量
    Route::get('/home/delgcart','Home\Shops\ShopController@delgcart');
    //加购物车的商品的数量
    Route::get('/home/addgcart','Home\Shops\ShopController@addgcart');

    Route::get('/shopzizhi','Home\Sellers\SellerController@shopzizhi');
    //公共左
    Route::get('/public','Home\Users\UserController@public');
    //前台网站配置
    Route::resource('/home/config','Home\Config\ConfigController');
