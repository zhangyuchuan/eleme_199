@extends('Homes.Users.public.public')

@section('title','饿了么-网上订餐_外卖_饿了么订餐官网')

@section('content')
            <!-- ngIf: pageTitleVisible -->
            <h3 ng-if="pageTitleVisible" class="profile-paneltitle ng-scope">
                        <span ng-bind="pageTitle" class="ng-binding">
                            账户余额
                        </span>
                <span class="subtitle ng-binding" ng-bind-html="pageSubtitle | toTrusted">
                        </span>
            </h3>
            <!-- end ngIf: pageTitleVisible -->
            <div class="profile-panelcontent" ng-transclude="">
                <!-- ngIf: !bindmobile -->
                <div class="balance-summary index ng-scope">
                    <p class="balance-tip">
                                <span class="balance-summary-title">
                                    当前账户余额：
                                </span>
                        <b class="balance-number ng-binding" ng-bind="balance.number">
                            @if(!empty($balance))
                                {{$balance['money']}}
                                @else
                                0
                                @endif
                        </b>
                        元
                    </p>
                    <p class="balance-fn">
                                <span class="btn-default balance-btn disabled" tooltip="暂不支持提现，可使用余额消费">
                                    暂不支持提现
                                </span>
                    </p>
                </div>


                <div class="balance-detail ng-scope">
                    <div class="balance-detail-header">
                        <h2 class="balance-detail-title">
                            账户资产明细
                        </h2>
                        <script>
                            function morenxuan(obj){
                                $(obj).siblings().removeClass("active");
                                $(obj).addClass("active");
                                // var add=$(".num-add").text();
                                // add++;
                                // $(".num-add").text(add);
                                return false;
                            };
                        </script>
                        <p class="selector-list ng-isolate-scope" selector="" label="分类" data="balance.type"
                           filter-selected="filter.type">
                                    <span class="selector-label ng-binding" ng-bind="label">
                                        分类
                                    </span>
                                {{--@if(active=='active')--}}

                            <span class="selector-content">

                                        <!-- ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope active" href="javascript:"
                                           ng-repeat="item in data" ng-class="{&#39;active&#39;: item.val === selected}"
                                           onclick="morenxuan(this)">
                                            全部
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope  " href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            充值
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            余额消费
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            第三方支付消费
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            支付失败退款
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            订单退款
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            提现
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                    </span>
                        </p>

                        <p class="selector-list ng-isolate-scope" selector="" label="时间" data="balance.days"
                           filter-selected="filter.days">
                                    <span class="selector-label ng-binding" ng-bind="label">
                                        时间
                                    </span>
                            <span class="selector-content">
                                        <!-- ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            今天
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            近7天
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            近15天
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                        <a class="selector-item ng-binding ng-scope" href="javascript:" ng-repeat="item in data"
                                           ng-class="{&#39;active&#39;: item.val === selected}" ng-bind="item.key"
                                           onclick="morenxuan(this)">
                                            1个月
                                        </a>
                                <!-- end ngRepeat: item in data -->
                                    </span>
                        </p>
                    </div>
                    <div class="balance-table">
                        <div class="balance-table-row balance-table-title">
                                    <span class="balance-table-date">
                                        创建时间
                                    </span>
                            <span class="balance-table-type">
                                        交易类型
                                    </span>
                            <span class="balance-table-money">
                                        金额变更
                                    </span>
                            <span class="balance-table-status">
                                        余额
                                    </span>
                        </div>
                        <!-- ngRepeat: record in records.pageData -->
                    </div>
                    <div class="loading ng-binding ng-isolate-scope ng-hide" loading="" content="正在载入资产明细..."
                         ng-show="balanceLoading">
                        <!-- ngIf: type==='profile' -->
                        <img ng-if="type===&#39;profile&#39;" src="./个人中心_账户余额 _ 饿了么网上订餐_files/profile-loading.4984fa.gif"
                             alt="正在加载" class="ng-scope">
                        <!-- end ngIf: type==='profile' -->
                        <!-- ngIf: type==='normal' -->
                        正在载入资产明细...
                    </div>
                    <!-- ngIf: !balanceLoading && !records.pageData.length -->
                    <div class="nodata ng-isolate-scope" nodatatip="" ng-if="!balanceLoading &amp;&amp; !records.pageData.length">
                        <p class="nodata-container ng-binding" ng-bind-html="content | toTrusted">
                            暂无记录
                        </p>
                    </div>
                    <!-- end ngIf: !balanceLoading && !records.pageData.length -->
                </div>
                <div pagination="" pagination-context="records" pagination-data="recordsData"
                     class="ng-scope pagination">
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection