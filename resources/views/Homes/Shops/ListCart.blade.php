<div class="sidebar" id="sidebar" role="complementary" hide="layoutState && layoutState.hideSidebar">
    <div class="sidebar-tabs">
        <div class="toolbar-tabs-middle">
            <a class="toolbar-btn icon-order toolbar-close" href=""
               hardjump="" tooltip="我的订单" tooltip-placement="left" ubt-click="toolbar_order">
            </a>
            <div class="toolbar-separator">
            </div>
            <a class="toolbar-cartbtn icon-cart toolbar-open" href="JavaScript:" template="cart"
               class="{'focus': (activeTemplate === 'cart' && isSidebarOpen), 'toolbar-cartbtn-shownum': foodCount.count}"
               ubt-click="390" id="goodscart">
                购物车
            </a>
            <div class="toolbar-separator">
            </div>
            <a id="news" class="toolbar-btn icon-notice toolbar-open " href="JavaScript:"
               template="message" class="{'focus': (activeTemplate === 'message' && isSidebarOpen), 'toolbar-open': user, 'modal-hide': user}"
               tooltip="我的信息" tooltip-placement="left" ubt-click="392">
            </a>
        </div>
        <div class="toolbar-tabs-bottom">
            <div class="toolbar-btn icon-QR-code">
                <div class="dropbox toolbar-tabs-dropbox" >
                    <a href="http://static11.elemecdn.com/eleme/desktop/mobile/index.html"
                       target="_blank">
                        <img src="/home/img/appqc.95e532.png" alt="下载手机应用">
                        下载手机应用
                        </p>
                        <p class="icon-QR-code-bonus">
                            即可参加分享红包活动
                        </p>
                    </a>
                </div>
            </div>
            <a id="live800iconlink" class="toolbar-btn icon-service" online-service=""
               tooltip="在线客服" title="在线客服" tooltip-placement="left" target="_blank" href="JavaScript:"
               style="visibility: hidden;">
            </a>
            <a class="toolbar-btn sidebar-btn-backtop icon-top" tooltip="回到顶部" href="#toptool" id="top" title="回到顶部"
               href="JavaScript:" tooltip-placement="left"  style="display:none">
            </a>
        </div>
        <div class="sidebar-content"  id="cartslide" >
            <!-- ngInclude: activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+
            activeTemplate + '/sidebar-'+ activeTemplate + '.html') : '' -->
            <div ng-include="activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : ''"
                 class="ng-scope">
                <div ng-controller="sidebarCartCtrl" class="ng-scope" >
                    <div class="sidebarcart-caption">
                        <a ng-href="/shop/2296214" ng-bind="cart.restaurant_info.name || '购物车'"
                           ubt-click="394" class="ng-binding" href="/shop/2296214">
                            购物车
                        </a>
                        <span class="icon-angle-double-right" ng-click="toggleSidebar()">
                </span>
                    </div>
                    <!-- ngIf: loading -->
                    {{--购物车内容开始--}}
                    @if(!empty($gcart))
                        @foreach($gcart as $k=>$v)
                    <div ng-if="pieces" class="sidebarcart ng-scope">
                        <!-- ngRepeat: basket in cart -->
                        <!-- ngIf: basket.length -->
                        <dl ng-if="basket.length" ng-repeat="basket in cart" class="ng-scope">
                            <dt>
                            <span ng-bind="$index + 1 + '号购物车'" class="ng-binding">
                                1号购物车
                            </span>
                                <!-- ngIf: basket.length -->
                                <a ng-if="basket.length" ng-click="clearGroup($index, $event)" href="JavaScript:"
                                   class="sidebarcart-clear ng-scope">
                                    [清空]
                                </a>
                                <!-- end ngIf: basket.length -->
                            </dt>
                            <!-- ngRepeat: item in basket -->
                            <dd ng-repeat="item in basket" class="ng-scope">
                                <ul>
                                    <li class="clearfix">
                                        <div class="sidebarcart-name ng-binding" ng-bind="item.name" title="鲜肉小笼包">
                                            {{$v->gname}}
                                        </div>
                                        <div class="sidebarcart-quantity">
                        <span ng-click="update(item, item.quantity - 1, $parent.$index, $event)">
                            -
                        </span>
                                            <input ng-model="item.quantity" ng-change="update(item, item.quantity, $parent.$index)"
                                                   class="ng-pristine ng-valid" value="{{$v->bnt}}">
                                            <span ng-click="update(item, item.quantity + 1, $parent.$index)">
                            +
                        </span>
                                        </div>
                                        <div class="sidebarcart-price ng-binding" ng-bind="item.price * item.quantity">
                                            {{$v->price}}
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                            <!-- end ngRepeat: item in basket -->
                        </dl>
                        <!-- end ngIf: basket.length -->
                        <!-- end ngRepeat: basket in cart -->
                        <!-- ngIf: cart.extra -->
                    </div>
                        @endforeach
                    {{--购物车内容结束--}}

                    <!-- ngIf: pieces -->
                    <div class="sidebarcart-summary ng-hide" ng-show="pieces">
                        <p>
                            共
                            <span class="color-stress ng-binding" ng-bind="pieces">
                        {{--{{count}}--}}
                    </span>
                            份，总计
                            <span class="color-stress ng-binding" ng-bind="total">
                        0
                    </span>
                        </p>
                        <button ng-click="settle()" style="background:#fa5858;" class="sidebarcart-submit ng-binding sidebarcart-hasagio"
                                ng-class="{ 'sidebarcart-hasagio': submitButton.disabled }" ng-bind="submitButton.text"
                                ubt-click="391">
                            去结算
                        </button>
                    </div>
                    <!-- ngIf: !loading && !pieces -->
                    @else
                        <div class="sidebarcart-summary ng-hide" ng-show="pieces">
                            <p>
                                共
                                <span class="color-stress ng-binding" ng-bind="pieces">
                        0
                    </span>
                                份，总计
                                <span class="color-stress ng-binding" ng-bind="total">
                        0
                    </span>
                            </p>
                            <button ng-click="settle()" class="sidebarcart-submit ng-binding sidebarcart-hasagio"
                                    ng-class="{ 'sidebarcart-hasagio': submitButton.disabled }" ng-bind="submitButton.text"
                                    ubt-click="391">
                                购物车是空的
                            </button>
                        </div>
                    <div  ng-if="!loading &amp;&amp; !pieces" class="sidebarcart-notice ng-scope">
                        <i class="icon-history">
                        </i>
                        <h3>
                            购物车空空如也
                        </h3>
                        <p>
                            快去订餐吧，总有你心仪的美食
                        </p>
                    </div>
                    @endif
                    <!-- end ngIf: !loading && !pieces -->
                </div>
            </div>
        </div>
        <div class="sidebar-content" id="newslide">
            <!-- ngInclude: activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+
            activeTemplate + '/sidebar-'+ activeTemplate + '.html') : '' -->
            <div ng-include="activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : ''"
                 class="ng-scope">
                <div ng-controller="sidebarMessageCtrl" class="ng-scope">
                    <div class="sidebarmessage-title">
                        我的消息
                        <span class="icon-angle-double-right" ng-click="toggleSidebar()">
                </span>
                        <!-- ngIf: 0 && messageList.$resolved && messageList.length -->
                    </div>
                    <!-- ngIf: !messageList.$resolved -->
                    <div ng-show="messageList.$resolved &amp;&amp; !messageList.length" class="sidebarmessage-notice">
                        <i class="icon-notice">
                        </i>
                        您没有新的消息哦
                    </div>
                    <!-- ngRepeat: item in messageList -->
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <eleme-sidebar hide="layoutState && layoutState.hideSidebar"></eleme-sidebar> -->
<!-- <div view role="main"></div> -->
<script>
    // var start = null;
    $('#goodscart').click(function(){
        $('#cartslide').css('display','block');
        $('#newslide').css('display','none');
        if($('#sidebar').css('marginRight')!='0px'){
            $('#sidebar').animate({
                'marginRight':'0px'
            },400);
        }else{
            $('#sidebar').animate({
                'marginRight':'300px'
            },400);
        }
    })
    $('#news').click(function(){
        $('#cartslide').css('display','none');
        $('#newslide').css('display','block');
        if($('#sidebar').css('marginRight')!='0px'){
            $('#sidebar').animate({
                'marginRight':'0px'
            },400);
        }else{
            $('#sidebar').animate({
                'marginRight':'300px'
            },400);
        }
    })
    $('.icon-angle-double-right').click(function(){
        $('#sidebar').animate({
            'marginRight':'0px'
        },400);
    })
    document.onscroll=function(){
        if($(document).scrollTop()>=500){
            $('#top').css('display','block');
        }else{
            $('#top').css('display','none');
        }
    }
</script>