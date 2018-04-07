@extends('Homes.Users.public.public')

@section('title','饿了么-网上订餐_外卖_饿了么订餐官网')

@section('content')
                    <!-- ngIf: pageTitleVisible -->
                    <h3 if="pageTitleVisible" class="profile-paneltitle scope">
                        <span bind="pageTitle" class="binding">
                            我的所有订单
                        </span>
                        <span class="subtitle binding" bind-html="pageSubtitle | toTrusted">
                        </span>
                    </h3>
                    <!-- end ngIf: pageTitleVisible -->
                    <div class="profile-panelcontent" transclude="">
                        <div class="order-fetchtakeout scope isolate-scope" show-fetch-takeout-dialog="">
                            <img src="/home/img/takeout.408a87.png">
                        </div>
                        <div class="order-extra scope">


                            <a href="javascript:;">
                                热门问题
                            </a>
                            <a href="javascript:;"

                            target="_blank">
                                随时关注订单状态
                            </a>
                        </div>


                        @if(!empty($all->Orders))
                        <table class="order-list ng-scope" ng-show="orderList.length">
                            <thead>
                            <tr>
                                <th>
                                    下单时间
                                </th>
                                <th class="order-list-infoth">
                                    订单内容
                                </th>
                                <th>
                                </th>
                                <th>
                                    支付金额（元）
                                </th>
                                <th>
                                    状态
                                </th>
                                <th>
                                    操作
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            </tr>
                            <!-- ngRepeat: item in orderList -->

                            @foreach($all->Orders as $k=>$v)

                            <tr class="timeline" order-timeline="" ng-repeat="item in orderList">
                                <td class="ordertimeline-time">
                                    <p ng-bind="item.formatted_created_at | date:&#39;HH:mm&#39;" class="ng-binding">
                                        {{ date('Ymd',$v->ordertime) }}
                                    </p>
                                    <!-- ngIf: item.realStatus !==5 -->
                                    <!-- ngIf: item.realStatus===5 -->
                                    <i class="ordertimeline-time-icon icon-uniE65E finish ng-scope" ng-if="item.realStatus === 5">
                                    </i>
                                    <!-- end ngIf: item.realStatus===5 -->
                                </td>
                                <td class="ordertimeline-avatar">
                                    @foreach($shops as $vv)
                                        @if($vv->id == $v ->sid)
                                    <a ng-href="" href="">
                                        <img ng-src=""
                                             src="{{ $vv->logo }}">
                                    </a>
                                        @endif
                                    @endforeach
                                </td>
                                <td class="ordertimeline-info">
                                    <h3 class="ordertimeline-title">
                                        <a ng-href="" ng-bind="item.restaurant.name" class="ng-binding"
                                           href="">
                                        </a>
                                        <!-- ngIf: item.is_book -->
                                    </h3>


                                    <p class="ordertimeline-info-food">
                                        <a ng-href="order/id/1217606784916104398" href="">
                                            @if(count($goodsname[$k]!=1))
                                                @foreach($goodsname[$k] as $kkk=>$vvv)
                                            <span class="ordertimeline-food ng-binding" ng-bind="item.product">
                                                    {{ $vvv['goods']['gname'] }}{{$n[$k]}}份
                                            </span>
                                            @endforeach
                                            <!-- ngIf: item.productnamenum> 2 -->
                                            <span ng-if="item.productnamenum &gt; 2" class="ng-scope">
                                                    等
                                                </span>
                                            <!-- end ngIf: item.productnamenum> 2 -->
                                            <span class="ordertimeline-info-productnum ng-binding" ng-bind="item.productnum">
                                                    {{$n[$k]}}
                                                </span>
                                            <span>
                                                    个菜品
                                                </span>
                                        </a>
                                    </p>
                                    <p>
                                        订单号:
                                        <a ng-href="order/id/1217606784916104398" ng-bind="item.unique_id" class="ng-binding"
                                           href="">
                                            1217606784916104398
                                        </a>
                                    </p>
                                </td>
                                <td class="ordertimeline-amount">
                                    <h3 class="ordertimeline-title ordertimeline-price ui-arial ng-binding"
                                        ng-bind="item.total_amount.toFixed(2)">
                                        ¥{{ $sum[$k] }}
                                    </h3>
                                </td>

                                @endif

                                <td class="ordertimeline-status">
                                    <h3 ng-bind="item.statusText" ng-class="{&#39;waitpay&#39;: (item.realStatus === 1), &#39;end&#39;: (item.realStatus === 5)}"
                                        class="ng-binding end">
                                        订单已完成
                                    </h3>
                                    <!-- ngIf: statusText -->
                                </td>
                                <td class="ordertimeline-handle">
                                    <a class="ordertimeline-handle-detail"
                                       href="/orderdata/{{ $v->oid }}">
                                        订单详情
                                    </a>
                                </td>
                            </tr>
                                @endforeach
                            </tbody>
                        </table>

                    @else
                        <div class="order-nocontent nodata isolate-scope" show="orderList &amp;&amp; !orderList.length"
                        nodatatip="" content="暂无记录，现在就去&lt;a href=&#39;/place&#39;&gt;订餐&lt;/a&gt;吧!">
                            <p class="nodata-container binding" bind-html="content | toTrusted">
                                暂无记录，现在就去

                                <a href="/lists">

                                    订餐
                                </a>
                                吧!
                            </p>
                        </div>
                    </div>
                    @endif
@endsection