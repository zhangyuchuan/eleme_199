<!DOCTYPE html>
<!-- saved from url=(0032)https://www.ele.me/cart/checkout -->
<html app="eleme" perf-error="desktop/" class="scope" xmlns="http://www.w3.org/1999/html">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
        @charset "UTF-8";[ng\:cloak],[cloak],[data-cloak],[x-cloak],.cloak,.x-cloak,.hide{display:none
        !important;}ng\:form{display:block;}.animate-block-transitions{transition:0s
        all!important;-webkit-transition:0s all!important;}.hide-add-active,.hide-remove{display:block!important;}
    </style>
    <meta name="renderer" content="webkit">
    <title bind="SEO.title" class="binding">
        饿了么-网上订餐_外卖_饿了么订餐官网
    </title>
    <meta name="format-detection" content="telephone=no, email=no">
    <meta name="application-name" content="饿了么网上订餐">
    <meta name="msapplication-tooltip" content="饿了么网上订餐">
    <meta name="msapplication-starturl" content="/home/">
    <meta name="msapplication-tileimage" content="=http://static11.elemecdn.com/apple-touch-icon.png?v=2">
    <meta name="msapplication-tilecolor" content="#0088ff">
    <meta name="msapplication-task" content="name=切换地区;action-uri=http://ele.me/home;icon-uri=http://static11.elemecdn.com/apple-touch-icon.png?v=2">
    <meta name="msapplication-task" content="name=我要订餐;action-uri=http://ele.me?from=IE;icon-uri=http://static11.elemecdn.com/apple-touch-icon.png?v=2">
    <meta name="msapplication-task" content="name=订单中心;action-uri=http://ele.me/profile?from=IE;icon-uri=http://static11.elemecdn.com/apple-touch-icon.png?v=2">
    <meta name="msapplication-task" content="name=寻求帮助（HELP）;action-uri=http://ele.me/support?from=IE;icon-uri=http://static11.elemecdn.com/apple-touch-icon.png?v=2">
    <meta property="qc:admins" content="2263606250655">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="apple-touch-icon-precomposed" href="https://static2.ele.me/apple-touch-icon.png?v=2">
    <link rel="shortcut icon" href="https://static2.ele.me/eleme/desktop/media/img/favicon-16x16.png"
          type="image/png">
    <link rel="icon" href="https://static2.ele.me/eleme/desktop/media/img/favicon-16x16.png"
          type="image/png" sizes="16x16">
    <link rel="icon" href="https://static2.ele.me/eleme/desktop/media/img/favicon-32x32.png"
          type="image/png" sizes="32x32">
    <link rel="icon" href="https://static2.ele.me/eleme/desktop/media/img/favicon.png"
          type="image/png" sizes="96x96">
    <link href="/home/jiesuan_files/vendor.162d72.css" rel="stylesheet">
    <link href="/home/jiesuan_files/main.fb5e6b.css" rel="stylesheet">
    <!--[if lte IE 8]>
    <script>
        window.location.href = 'https://h.ele.me/activities/landing';
    </script>
    <![endif]-->
    <script src="/home/jiesuan_files/api" data-ref="API_CONFIG">
    </script>
    <script src="/home/jiesuan_files/perf.js.下载" type="text/javascript" crossorigin="anonymous">
    </script>
    <script src="/home/jiesuan_files/vendor.6502b2.js.下载" type="text/javascript"
            crossorigin="anonymous">
    </script>
    <script src="/home/jiesuan_files/main.4f18c4.js.下载" type="text/javascript"
            crossorigin="anonymous">
    </script>
    <!--<base href="/">-->
    <base href=".">
    <meta name="mobile-agent" content="undefined">
    <meta name="description" content="”饿了么”2008年创立于上海，是中国领先的本地生活平台。截至目前，饿了么在线外卖交易平台已覆盖全国2000个城市，加盟餐厅130万家，用户量达2.6亿">
    <meta name="keywords" content="饿了么，网上订餐，外卖，快餐外卖，外卖网">
</head>

<body cute-title="" class="{hidesidebar: layoutState &amp;&amp; layoutState.hideSidebar, smallbody: layoutState.smallBody, whitebody: layoutState.whiteBody}"
      class="hidesidebar" style="position: relative;">
<div switch="state.type" state="layoutState" class="isolate-scope">
    <!-- ngSwitchWhen: checkout -->
    <header class="carttopbar" switch-when="checkout" topbar-checkout=""
            state="state">
        <div class="carttopbar-nav container clearfix">
            <div topbar-profilebox="">
                <div class="topbar-profilebox">
                    <!-- ngIf: $root.user.avatar && $root.topbarType !==' checkout' -->
                </div>
            </div>
        </div>
    </header>
    <!-- ngSwitchDefault: -->
</div>
<div class="importantnotification container" role="banner">
    <!-- ngIf: enable -->
</div>

<!-- ngView: -->
<div view="" role="main" class="scope">
    <div class="checkoutguide isolate-scope" checkout-guide="" guide="guide">
        <div class="container">

            <span class="checkoutguide-text binding" bind="guide.text">
                        订单信息
                    </span>
            <!-- ngIf: guide.step -->
            <div class="checkoutguide-content step3" if="guide.step">
                        <span class="checkoutguide-item active" class="{active: guide.step &gt;= 1}">
                            选择商品
                        </span>
                <span class="checkoutguide-item active" class="{active: guide.step &gt;= 2}">
                            确认订单信息
                        </span>
                <span class="checkoutguide-item active" class="{active: guide.step &gt;= 3}">
                            成功提交订单
                        </span>
                <p class="checkoutguide-line">
                            <span class="line line1">
                            </span>
                    <span class="line line2">
                            </span>
                    <span class="line line3">
                            </span>
                    <span class="line line4">
                            </span>
                </p>
            </div>
            <!-- end ngIf: guide.step -->
        </div>
    </div>


    @extends('Homes.personal')
    @section('title', '已完成订单')

    @section('css')
        <style>
            td{
                font-size:10px;
            }
        </style>
    @stop

    @section('content')

        <div class="order-block" data-id="12358330119834450">
            <div class="order-table-wrapper">
                <table class="order-table table table-striped">
                    <thead>
                    <tr>
                        <th class="col-sub-total">订单编号:{{$oid}}</th>
                        {{--<td class="col-sub-total"></td>--}}
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
</div>
<div>
    <div class="pagination"  style="height: 100px">
        <center><h1><b><image src="/uploads/999999999009.png" style="height: 50px"></image>&nbsp;&nbsp;&nbsp;饿单已成功提交并付款 , 请耐心等待你的外卖</b></h1></center>
    </div>
    <center><b><a href="/lists">2秒后系统会自动跳转首页，也可点击本处直接跳</a></b></center>
    <script>
        function jumpurl(){
          location='/lists';
        }
        setTimeout('jumpurl()',2000);
    </script>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <center><image style="width:800px;height: 150px" src="/uploads/000000000000000.png"></image></center>
</div>
</div>
<div id="modal-shuiqunawaimai" class="modal-who-get-dishes modal hide fade" aria-hidden="true" tabindex="-1">
    <div class="modal-header">
        <a href="#" class="close" aria-hidden="true">&times;</a>
        <h3>谁去拿外卖</h3>
    </div>
    <div class="modal-body">
        <div class="who-get-dishes-wrapper">
            <h2 class="wgd-badge"></h2>
            <a id="trigger" class="wgd-btn"></a>
            <span class="wgd-rules">随机到最小数字的人去拿外卖</span>
            <span id="lastResult" class="wgd-bg-text">↓ Start</span>
            <ul id="result" class="wgd-result-list"></ul>
        </div>
    </div>
</div>
<div id="modal-cart-not-the-same-restaurant" class="modal hide fade" aria-hidden="true" tabindex="-1">
    <div class="modal-header">
        <a href="#" class="close" aria-hidden="true">&times;</a>
        <h3>请先清空美食篮子</h3>
    </div>
    <div class="modal-body">
        <p>您需要先清空美食篮子才能挑选其他餐厅的美食哦:)</p>
    </div>
    <div class="modal-footer">
        <a href="/cart/clearGroup" class="btn  btn-yellow clear-cart">清空美食篮子</a>
    </div>
</div>
<div id="modal_cancelOrderByPhone" class="modal-cancel-order-by-phone modal hide fade" aria-hidden="true" tabindex="-1">
    <div class="modal-header">
        <a href="#" class="close" aria-hidden="true">&times;</a>
        <h3> <i class="icon-phone"></i>拨打餐厅电话退单： <span id="cancel_rstTel"></span> </h3>
    </div>
    <div class="modal-body">
        <div class="order-info clearfix">
            <img id="cancel_rstLogo" />
            <h4 id="cancel_rstName"></h4>
            <p> 饿单号：<span id="cancel_orderSn"></span>&nbsp; 金额：<span id="cancel_orderTotal"></span>元 </p>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#" class="btn  btn-yellow close" aria-hidden="true">返回饿单</a>
    </div>
</div>
<div id="modal_tradeReport" class="modal-who-get-dishes modal hide fade" aria-hidden="true" tabindex="-1">
    <div class="modal-header">
        <a href="#" class="close" aria-hidden="true">&times;</a>
        <h3>投诉举报</h3>
    </div>
    <div class="modal-body">
        <div class="alert-error trade-error" id="trade-warning-banner"></div>
        <form name="trade-form" id="trade-form">
            <input type="hidden" name="trade-order-id" id="trade-order-id" />
            <input type="hidden" id="exchange_csrf" value="f8fad6e4510afe5fbd48dc5206d213175bf57c1f" />
            <label><input type="radio" class="trade-radio" name="trade-item" value="0" />餐厅已确认，但没送外卖</label>
            <label><input type="radio" class="trade-radio" name="trade-item" value="1" />餐厅参加了活动，但没有优惠</label>
            <label><input type="radio" class="trade-radio" name="trade-item" value="2" />吐槽其他</label>
            <div>
                <textarea class="trade-text" id="trade-text" name="trade-text" disabled="disabled" placeholder="输入您想要吐槽的内容"></textarea>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <a id="trade-check-btn" class="btn" aria-hidden="true">确定</a>
    </div>
</div>
</div>
</div>
</div>

<footer class="site-footer">
    <p class="sfooter-link-list"> <a class="sfooter-link" href="http://kaidian.ele.me">我要开店</a> <a class="sfooter-link" href="contact.html">联系我们</a> <a class="sfooter-link" href="agreement.html">服务条款和协议</a> <a class="sfooter-link" href="sitemaps.html">站点地图</a> <a class="sfooter-link" href="http://jobs.ele.me">加入我们</a> </p>
    <p> 增值电信业务许可证：<a class="sfooter-link sfooter-link-zero" target="_blank" rel="nofollow" href="http://www.shca.gov.cn">沪B2-20150033</a> <a class="sfooter-link" target="_blank" rel="nofollow" href="http://www.miibeian.gov.cn">沪ICP备 09007032</a> <a class="sfooter-link" target="_blank" rel="nofollow" href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120305173227823">上海工商行政管理</a> Copyright &copy;2008-2015 ele.me, All Rights Reserved. </p>
</footer>
</div>


@stop