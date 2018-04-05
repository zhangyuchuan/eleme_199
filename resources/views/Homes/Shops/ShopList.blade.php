<style>
    #clearfix{
        height:840px;
        overflow:hidden;
    }
</style>
<div class="clearfix" id="clearfix" data="filteredRestaurants = (rstStream.restaurants | filter: rstStream.filter | filter: otherFilter | orderBy: [ '-is_opening', rstStream.orderBy || 'index' ])"
        >
        {{--商家列表--}}
        @if(!$shops->isEmpty())
            @foreach($shops as $k=>$v)
                @if($v->status==1)
                <a class="rstblock" href="/shop/{{$v->id}}" data-rst-id="152185819" data-bidding=""target="_blank">
                    <div class="rstblock-logo" style="opacity:0.4">
                        <img class="rstblock-logo-icon" src="{{$v->logo}}"
                             alt="" width="70" height="70">
                        <span>
                                {{$v->finishtime}}分钟
                                </span>
                    </div>

                    <div class="rstblock-content"  style="opacity:0.4">
                        @elseif($v->status==0)
                            <a class="rstblock" href="/shop/{{$v->id}}" data-rst-id="152185819" data-bidding=""target="_blank">
                                <div class="rstblock-logo" >
                                    <img class="rstblock-logo-icon" src="{{$v->logo}}"
                                         alt="" width="70" height="70">
                                    <span>
                                {{$v->finishtime}}分钟
                                </span>
                                </div>

                                <div class="rstblock-content"  >
                            @endif
                        <div class="rstblock-title">
                            {{$v->name}}
                        </div>
                        <div class="starrating icon-star">

                        <span class="icon-star" style="width:{{$v->score}}%;">
                        </span>

                        </div>
                        <span class="rstblock-monthsales">
                        月售{{$v->sailcount}}单
                    </span>
                        <div class="rstblock-cost">
                            配送费¥{{$v->sendmoney}}
                        </div></div>
                        @if($v->status==1)
                        <div class="rstblock-relaxing" style="opacity:1;position:relative;bottom:20px" >商家休息,暂不接单</div>
                        @endif

                </a>

            @endforeach
    </div>
    <div class="loading ng-binding ng-isolate-scope ng-hide" style="display:none" ng-show="rstStream.status === 'LOADING'"
         loading="" content="正在载入更多商家..." type="normal">
        <img class="normal ng-scope"  ng-if="type==='normal'" src="/home/img/loading.0e7b2e.gif"
             alt="正在加载">
        正在载入更多商家...
    </div>
    <div id="fetchMoreRst" class="">
        点击加载更多商家...
    </div>
    @else
    <div class="place-rstbox-nodata " ng-show="rstStream.status === 'COMPLETE' && !filteredRestaurants.length">
        <img class="nodata" src="/home/img/icon-restaurant.b3a359.png" alt="找不到商家"
             width="100">
        <div class="typo-small">
            附近没有找到符合条件的商家，换个筛选条件试试吧
        </div>
    </div>
    @endif
    </div>

<script>
    $('#fetchMoreRst').click(function(){
        //店铺的数量
        var count =  $('.rstblock').length;
        //所需的行数
        var lines = Math.ceil(count/4);
        //所需的高度
        var lineheight = lines*140;
        // console.log(lineheight);

        var height = parseInt($('#clearfix').css('height'));
        if(height<lineheight){
            height = height + 420;
        }else{
            $('#fetchMoreRst').html('已加载全部');
        }
        $('#clearfix').css('height',height);
    })
</script>
