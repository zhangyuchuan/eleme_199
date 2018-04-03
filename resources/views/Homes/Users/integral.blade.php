@extends('Homes.Users.public.public')

@section('title','饿了么-网上订餐_外卖_饿了么订餐官网')

@section('content')
            <!-- ngIf: pageTitleVisible -->
            <h3 ng-if="pageTitleVisible" class="profile-paneltitle ng-scope">
                        <span ng-bind="pageTitle" class="ng-binding">
                            我的积分
                        </span>
                <span class="subtitle ng-binding" ng-bind-html="pageSubtitle | toTrusted">
                        </span>
            </h3>
            <!-- end ngIf: pageTitleVisible -->
            <div class="profile-panelcontent" ng-transclude="">
                <div class="points-summary index ng-scope">
                    <p class="points-tip">
                                <span>
                                    当前账户积分：
                                </span>
                        <b class="points-number ng-binding" ng-bind="points">
                            {{$users['score']}}
                        </b>
                        分
                    </p>
                    <p class="points-link">
                        <a class="btn-link" href="https://www.ele.me/support/question/hotissue"
                           target="_blank">
                            如何获得积分？
                        </a>
                    </p>
                </div>
                <h4 class="points-detailtitle ng-scope">
                    最近30天积分记录
                </h4>
                <div class="points-detail ng-scope">
                    <div class="points-table">
                        <div class="points-table-row points-table-title">
                                    <span class="points-table-createtime">
                                        创建时间
                                    </span>
                            <span class="points-table-delta">
                                        积分变化
                                    </span>
                            <span class="points-table-detail">
                                        详情
                                    </span>
                        </div>
                        <!-- ngRepeat: record in records.pageData -->
                    </div>
                    <div class="loading ng-binding ng-isolate-scope ng-hide" loading="" content="正在载入积分记录..."
                         ng-show="pointsLoading">
                        <!-- ngIf: type==='profile' -->
                        <img ng-if="type===&#39;profile&#39;" src="./个人中心_积分详情 _ 饿了么网上订餐_files/profile-loading.4984fa.gif"
                             alt="正在加载" class="ng-scope">
                        <!-- end ngIf: type==='profile' -->
                        <!-- ngIf: type==='normal' -->
                        正在载入积分记录...
                    </div>
                    <!-- ngIf: !pointsLoading && !records.pageData.length -->
                    <div class="nodata ng-isolate-scope" nodatatip="" ng-if="!pointsLoading &amp;&amp; !records.pageData.length">
                        <p class="nodata-container ng-binding" ng-bind-html="content | toTrusted">
                            暂无记录
                        </p>
                    </div>
                    <!-- end ngIf: !pointsLoading && !records.pageData.length -->
                </div>
                <div pagination="" pagination-context="records" pagination-data="recordsData"
                     class="ng-scope pagination">
                    <ul>
                    </ul>
                </div>
            </div>

@endsection