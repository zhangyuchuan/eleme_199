@extends('Homes.Users.public.public')

@section('title','饿了么-网上订餐_外卖_饿了么订餐官网')

@section('content')
                <!-- ngIf: pageTitleVisible -->
                <h3 ng-if="pageTitleVisible" class="profile-paneltitle ng-scope">
                        <span ng-bind="pageTitle" class="ng-binding">
                            我的红包
                        </span>
                    <span class="subtitle ng-binding" ng-bind-html="pageSubtitle | toTrusted">
                        </span>
                </h3>
                <!-- end ngIf: pageTitleVisible -->
                <ul class="hongbao-list clearfix">
                    <!-- ngRepeat: data in pageContext.pageData -->
                    <li class="hongbaoblock ng-scope" ng-repeat="data in pageContext.pageData">
                        <div class="hongbaoblock-count"><span class="hongbaoblock-amount">
                                <em class="ng-binding">15</em>
                                <em class="ng-binding">.0</em></span>
                            <p class="hongbaoblock-condition ng-binding">满15元可用</p>
                        </div>
                        <h3 class="hongbaoblock-name ng-binding">新用户首单红包</h3>
                        <div class="hongbaoblock-intro"><p>仅限手机客户端使用</p><!-- ngIf: data.subscriber_line_number --><p class="ng-binding">2018-03-28<i class="to">至</i>2018-04-03</p></div><!-- ngIf: data.used || data.passed -->
                        <i class="hongbaoblock-tip ng-scope" ng-if="data.used || data.passed"></i>
                        <!-- end ngIf: data.used || data.passed --></li>
                    <!-- end ngRepeat: data in pageContext.pageData --></ul>
                        <!-- end ngIf: !pointsLoading && !records.pageData.length -->
@endsection