@extends('Homes.Users.public.public')

@section('title','饿了么-网上订餐_外卖_饿了么订餐官网')

@section('content')
            <!-- ngIf: pageTitleVisible -->
            <h3 ng-if="pageTitleVisible" class="profile-paneltitle ng-scope">
                        <span ng-bind="pageTitle" class="ng-binding">
                            订单详情
                        </span>
                <span class="subtitle ng-binding" ng-bind-html="pageSubtitle | toTrusted">
                        </span>
            </h3>
            <!-- end ngIf: pageTitleVisible -->
            <div class="profile-panelcontent" ng-transclude="">

                <div ng-show="progressDisplay" class="ng-scope">
                    <div orderprogress-refundinfo="" link="orderReady" class="ng-isolate-scope">
                        <!-- ngIf: refundingShow -->
                    </div>
                    <!-- ngIf: data -->
                    <ul class="orderprogress-topcard orderprogress-timeline ng-isolate-scope"
                        orderprogress-timeline="" link="orderReady">
                        <!-- ngRepeat: item in timeline -->
                        <li ng-repeat="item in timeline" ng-class="{active: item.status === &#39;ongoing&#39;}"
                            class="ng-binding ng-scope">
                            订单已提交
                        </li>
                        <!-- end ngRepeat: item in timeline -->
                        <li ng-repeat="item in timeline" ng-class="{active: item.status === &#39;ongoing&#39;}"
                            class="ng-binding ng-scope">
                            商家已接单
                        </li>
                        <!-- end ngRepeat: item in timeline -->
                        <li ng-repeat="item in timeline" ng-class="{active: item.status === &#39;ongoing&#39;}"
                            class="ng-binding ng-scope active">
                            已送达
                        </li>
                        <!-- end ngRepeat: item in timeline -->
                    </ul>
                    <div class="orderprogress-card ng-isolate-scope" orderprogress-status=""
                         link="orderReady">
                        <!-- ngIf: showStatus -->
                        <div class="orderprogress-status ng-scope" ng-if="showStatus">
                            <h5 class="orderprogress-statustitle ng-binding" ng-bind-html="status.title | toTrusted">
                                订单已完成
                            </h5>
                            <p class="orderprogress-statusdesc ng-binding" ng-bind-html="status.description | toTrusted">
                                18:48确认送达
                            </p>
                            <div class="orderprogress-statusbuttons">
                                <!-- ngIf: remind.show -->
                                <!-- ngRepeat: button in status.buttons -->
                                <a href="javascript:" ng-repeat="button in status.buttons" ng-bind="button.text"
                                   ng-class="button.style" ng-click="button.method()" class="ng-binding ng-scope linktype">
                                    再来一单
                                </a>
                                <!-- end ngRepeat: button in status.buttons -->
                            </div>
                        </div>
                        <!-- end ngIf: showStatus -->
                    </div>
                    <div orderprogress-rstinfo="" link="orderReady" class="ng-isolate-scope">
                        <div class="orderprogress-rstinfo">
                            @foreach($shop_all as $v)
                            <a ng-href="/shop/155134506" href="https://www.ele.me/shop/155134506">
                                <img class="orderprogress-rstimg" ng-src=""
                                     width="44" height="44" ng-alt="西域美食中国兰州牛肉面" src="{{ $shop['logo']}}">
                            </a>
                            @endforeach
                            <div class="orderprogress-rstgrid">
                                <h4 class="orderprogress-rstname">

                                    @foreach($shop_all as $v)
                                    <a class="inherit ng-binding" ng-href="/shop/155134506" ng-bind="restaurant.name"
                                       href="https://www.ele.me/shop/155134506">
                                        {{ $shop['name']}}
                                    </a>
                                        @endforeach
                                </h4>
                                <div class="orderprogress-rstextra">
                                            <span ng-bind="&#39;订单号：&#39; + order.unique_id" class="ng-binding">
                                                订单号：1217606784916104398
                                            </span>
                                    <span ng-bind="&#39;商家电话：&#39; + restaurant.phoneMade" class="ng-binding">
                                                商家电话：15321281416
                                            </span>
                                </div>
                            </div>
                            <div class="orderprogress-rstoperate">
                                <!-- ngIf: !favored -->
                                <a href="javascript:" class="rstinfo-favor ng-scope" ng-if="!favored"
                                   ng-click="favor(&#39;addition&#39;)">
                                    <i class="icon icon-order-favor">
                                    </i>
                                    收藏
                                </a>
                                <!-- end ngIf: !favored -->
                                <!-- ngIf: favored -->
                                <!-- ngIf: !complaintStatus -->
                                <a href="javascript:" ng-if="!complaintStatus" dialog-trigger="complaintDialog"
                                   class="ng-scope">
                                    <i class="icon icon-order-complaint">
                                    </i>
                                    投诉
                                </a>
                                <!-- end ngIf: !complaintStatus -->
                                <!-- ngIf: complaintStatus===1 -->
                            </div>
                        </div>
                        <div class="dialog" role="dialog" dialog="complaintDialog" style="display: none;">
                            <div class="dialog-close icon-close">
                            </div>
                            <div class="dialog-content" ng-transclude="">
                                <h5 class="complaint-title ng-scope">
                                    投诉举报
                                </h5>
                                <form ng-submit="complaint()" class="ng-scope ng-pristine ng-valid">
                                    <!-- ngRepeat: reasonText in complaintType.typeMap -->
                                    <label class="complaint-field ng-scope" ng-repeat="reasonText in complaintType.typeMap">
                                        <input name="reason" type="radio" ng-model="complaintType.type" ng-value="$index"
                                               class="ng-pristine ng-valid" value="0">
                                        <span ng-bind="reasonText" class="ng-binding">
                                                    商家已确认，但没有送外卖
                                                </span>
                                    </label>
                                    <!-- end ngRepeat: reasonText in complaintType.typeMap -->
                                    <label class="complaint-field ng-scope" ng-repeat="reasonText in complaintType.typeMap">
                                        <input name="reason" type="radio" ng-model="complaintType.type" ng-value="$index"
                                               class="ng-pristine ng-valid" value="1">
                                        <span ng-bind="reasonText" class="ng-binding">
                                                    商家参加了活动，但没有优惠
                                                </span>
                                    </label>
                                    <!-- end ngRepeat: reasonText in complaintType.typeMap -->
                                    <label class="complaint-field ng-scope" ng-repeat="reasonText in complaintType.typeMap">
                                        <input name="reason" type="radio" ng-model="complaintType.type" ng-value="$index"
                                               class="ng-pristine ng-valid" value="2">
                                        <span ng-bind="reasonText" class="ng-binding">
                                                    其他
                                                </span>
                                    </label>
                                    <!-- end ngRepeat: reasonText in complaintType.typeMap -->
                                    <label class="complaint-field">
                                                <textarea ng-model="complaintType.reason_text" rows="2" cols="40" ng-disabled="complaintType.type !== 2"
                                                          class="ng-pristine ng-valid">
                                                </textarea>
                                    </label>
                                    <div class="complaint-field">
                                        <button type="submit" class="btn-primary">
                                            提交
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="orderprogress-cardtable">
                        <div class="orderprogress-cardcell ng-isolate-scope" orderprogress-total=""
                             link="orderReady">
                            <div class="orderprogress-total">
                                <div class="orderprogress-totalrow orderprogress-totaltitle">
                                            <span class="cell name">
                                                菜品
                                            </span>
                                    <span class="cell quantity">
                                                数量
                                            </span>
                                    <span class="cell price">
                                                小计（元）
                                            </span>
                                </div>
                                <!-- ngRepeat: row in totalList -->
                                <div ng-repeat="row in totalList" ng-switch="" on="row.type" class="ng-scope">
                                    <!-- ngSwitchWhen: baseline -->
                                    <!-- ngSwitchWhen: basketTitle -->
                                    <!-- ngSwitchWhen: food -->
                                        @foreach($all as $v)


                                    <div ng-switch-when="food" class="orderprogress-totalrow ng-scope">
                                                <span class="cell name ng-binding" ng-bind="row.food.name">

                                                    {{ $v->goods['gname'] }}
                                                </span>


                                        <span class="cell quantity ng-binding" ng-bind="row.food.quantity">
                                                   {{ $v->bcnt}}
                                                </span>

                                        <span class="cell price ng-binding" ng-bind="row.food.price * row.food.quantity | number:2">

                                                {{ $v->goods['price'] * $v->bcnt }}

                                                </span>
                                        <?php $arr[] =  $v->goods['price'] * $v->bcnt  ?>

                                    </div>

                                    @endforeach

                                    <!-- ngSwitchWhen: extra -->
                                </div>
                                <!-- end ngRepeat: row in totalList -->


                                <!-- end ngRepeat: row in totalList -->
                                <div ng-repeat="row in totalList" ng-switch="" on="row.type" class="ng-scope">
                                    <!-- ngSwitchWhen: baseline -->
                                    <div ng-switch-when="baseline" class="orderprogress-baseline ng-scope">
                                    </div>
                                    <!-- ngSwitchWhen: basketTitle -->
                                    <!-- ngSwitchWhen: food -->
                                    <!-- ngSwitchWhen: extra -->
                                </div>
                                <!-- end ngRepeat: row in totalList -->
                                <div class="orderprogress-totalactual">
                                    实际支付：
                                    <span ng-bind="order.total_amount | number:2" class="ng-binding">
                                                <?php echo array_sum($arr)?>
                                            </span>
                                </div>
                            </div>
                        </div>
                        <div class="orderprogress-cardcell rightside ng-isolate-scope" orderprogress-deliveryinfo=""
                             link="orderReady">
                            <div class="orderprogress-deliveryinfo">
                                <h5 class="orderprogress-deliverytitle">
                                    配送信息
                                </h5>
                                <div class="orderprogress-deliverygroup">
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    配送方式：
                                                </span>
                                        <span class="ng-binding">
                                                    蜂鸟专送
                                                </span>
                                    </p>
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    送达时间：
                                                </span>
                                        <span ng-bind="order.detail_info.deliver_description" class="ng-binding">
                                                    尽快送出
                                                </span>
                                    </p>
                                </div>
                                <div class="orderprogress-deliverygroup">
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    联 系 人：
                                                </span>
                                        <span ng-bind="order.detail_info.consignee" class="ng-binding">
                                                    徐(先生)
                                                </span>
                                    </p>
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    联系电话：
                                                </span>
                                        <span ng-bind="order.detail_info.phone" class="ng-binding">
                                                    18310462731
                                                </span>
                                    </p>
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    收货地址：
                                                </span>
                                        <span ng-bind="order.detail_info.address" class="ng-binding">
                                                    科信马连店甲6号 对面六百米理发店
                                                </span>
                                    </p>
                                </div>
                                <div class="orderprogress-deliverygroup tail">
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    发票信息：
                                                </span>
                                        <span ng-bind="order.detail_info.invoice || &#39;无发票&#39;" class="ng-binding">
                                                    无发票
                                                </span>
                                    </p>
                                    <p>
                                                <span class="orderprogress-deliverykey">
                                                    备 注：
                                                </span>
                                        <span ng-bind="order.detail_info.description || &#39;无备注&#39;" class="ng-binding">
                                                    不要辣, 不要辣，两人餐具，把辣椒单独放个小包包带过来，这样，要多一点
                                                </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderprogress-roundborder">
                    </div>
                </div>
            </div>

@endsection