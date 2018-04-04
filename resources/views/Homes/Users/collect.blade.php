@extends('Homes.Users.public.public')

@section('title','饿了么-网上订餐_外卖_饿了么订餐官网')

@section('content')

    {{--<div class="profile-panel" role="main">--}}
        <!-- ngIf: pageTitleVisible -->
        <h3 ng-if="pageTitleVisible" class="profile-paneltitle ng-scope">
                        <span ng-bind="pageTitle" class="ng-binding">
                            我的收藏
                        </span>
            <span class="subtitle ng-binding" ng-bind-html="pageSubtitle | toTrusted">
                        </span>
        </h3>
        <!-- end ngIf: pageTitleVisible -->
        <div class="profile-panelcontent" ng-transclude="">
            <div class="loading ng-binding ng-isolate-scope ng-hide" loading="" content="正在载入商家信息..."
                 ng-show="favorLoading">
                <!-- ngIf: type==='profile' -->
                <img ng-if="type===&#39;profile&#39;" src="./个人中心_我的收藏 _ 饿了么网上订餐_files/profile-loading.4984fa.gif"
                     alt="正在加载" class="ng-scope">
                <!-- end ngIf: type==='profile' -->
                <!-- ngIf: type==='normal' -->
                正在载入商家信息...
            </div>
            @foreach($shop_data as $v)
                <div class="favor-restaurants ng-scope" ng-show="!favorLoading" style="">

                    <div class="">
                        <!-- ngRepeat: restaurant in inRegionFavors -->
                        <div class="favor-rstblock" ng-class="{&#39;outofregion&#39;:outofregion}"
                             favor-rst-block="" ng-repeat="restaurant in inRegionFavors">
                            <div class="favor-rstblock-header">
                                <div class="favor-rstblock-headerbg" ng-style="{&#39;background-image&#39;: &#39;url(&#39; + backgroundUrl + &#39;)&#39;}"
                                     style="background-image: url(&quot;//shadow.elemecdn.com/faas/desktop/media/img/favor-rst-bg1.804470.jpg&quot;);">
                                </div>
                                <a class="favor-rstblock-name ng-binding" ng-bind="restaurant.name" ng-href="/shop/161298449"
                                   title="前往主食爱上粥(三期百汇店)" href="https://www.ele.me/shop/161298449">
                                    {{ $v->name }}
                                </a>
                                <!-- ngIf: !restaurant.is_opening && !outofregion -->
                                <!-- ngIf: restaurant.status===5 && !outofregion -->
                            </div>
                            <a ng-href="" title="前往主食爱上粥(三期百汇店)" href="/shop">
                                <img ng-src=""
                                     class="favor-rstblock-logo" alt="商家 LOGO" src="{{ $v->logo }}">
                            </a>
                            <div class="favor-rstblock-starrating icon-star">
                                        <span class="icon-star" ng-style="{ width: (restaurant.rating * 20) + &#39;%&#39; }"
                                              style="width: {{ $v->score }}%;">
                                        </span>
                            </div>
                            <div class="favor-rstblock-content">
                                <div class="favor-rstblock-item">
                                    <p>
                                        起送价
                                    </p>
                                    <p class="value icon-yen ng-binding" ng-bind="restaurant.float_minimum_order_amount">
                                        {{ $v->fsmoney }}
                                    </p>
                                </div>
                                <div class="favor-rstblock-item">
                                    <p>
                                        送餐时间
                                    </p>
                                    <p class="value time ng-binding" ng-bind="restaurant.order_lead_time_text ||  0">
                                        {{ $v->finishtime }}
                                    </p>
                                </div>
                            </div>
                            <div class="favor-rstblock-activity">
                                <!-- ngRepeat: activity in restaurant.activities | limitTo: 8 -->
                                <a href="/del/{{$v->id}}"><i class="favor-rstblock-cancel icon-trash" ng-click="showRemoveMask($index)">

                                    </i></a>
                            </div>
                        </div>
                        <!-- end ngRepeat: restaurant in inRegionFavors -->
                        <!-- ngIf: !inRegionFavors.length -->
                    </div>
                </div>
            @endforeach
        </div>
    {{--</div>--}}
@endsection