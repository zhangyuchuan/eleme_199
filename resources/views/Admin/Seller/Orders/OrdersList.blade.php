@extends('Admin.Common.Common')
@section('content')



    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div class="x-body">
        <div class="layui-row">
            <form class="layui-form layui-col-md12 x-so" action="/admin/order/order/list" method="get">

                <input type="text" name="oid" value="{{$request->oid}}" placeholder="请订单号" autocomplete="off" class="layui-input">




                <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
            </form>
        </div>
        <xblock>



            {{--<button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>--}}

            <span class="x-right" style="line-height:40px">共有数据：{{count($order)}}  条</span>
        </xblock>
        <table class="layui-table">
            <thead>
            <tr>
                <th>订单号</th>
                <th>用户</th>
                <th>数量</th>
                <th>买家留言</th>
                <th>订单时间</th>
                <th>总价</th>
                <th>地址</th>
                <th>评分</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach($orders as $k => $v)
            <tr>
                <td >{{$v->oid}}</td>
                {{--<td >{{date('Ymd ',$v->oid)}}</td>--}}
                <td>{{$v->user['username']}}</td>
                <th>{{$v->ocnt}}</th>
                <td>{{$v->umsg}}</td>
                <td>{{date('Y-m-d H:i:s',$v->ordertime)}}</td>
                <td>{{$v->totalprice}}</td>
                <td>{{$v->address['addr']}}</td>
                <td>{{$v->oscore}}</td>
                @if($v->status==1)
                    <td class="td-status">
                        <a class="layui-btn layui-btn-normal layui-btn-mini" status="{{ $v->status }}"  onclick="changestatus(this,'{{ $v->id }}')">接　单</a></td>
                @elseif($v->status==2)
                    <td class="td-status">
                        <span class="layui-btn layui-btn-normal layui-btn-mini" status="{{ $v->status }}"  onclick="changestatus(this,'{{ $v->id }}')">签　收</span></td>
                @elseif($v->status==3)
                    <td class="td-status">
                        <span class="layui-btn layui-btn-normal layui-btn-mini " >交易成功</span></td>
                @else
                    <td class="td-status">
                        <span class="layui-btn layui-btn-normal layui-btn-mini layui-btn-disabled">订单失败</span></td>
                @endif

                <td class="td-manage" width="90px">
                    <a title="订单详情" class=" layui-btn layui-btn-normal layui-btn-mini" onclick="x_admin_show('订单详情','/admin/seller/orders/{{ $v->oid }}',600,400)" title="订单详情" href="javascript:;">
                        订单详情
                    </a>

                @if($v->status==1)
                        <a onclick="member_stop(this,'{{ $v->id }}') " href="javascript:;"  title="拒单">
                            <i class="layui-icon">&#xe601;</i>
                        </a>
                @endif
                </td>
            </tr>

            @endforeach


            </tbody>
        </table>
        <div class="page">
            <div>



                {!! $orders->appends($request->all())->render() !!}



            </div>
        </div>

    </div>
    <script>
        layui.use('laydate', function(){
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#start' //指定元素
            });

            //执行一个laydate实例
            laydate.render({
                elem: '#end' //指定元素
            });
        });




        /*用户-下单*/

        function changestatus(obj,id){

            var status = $(obj).attr('status');
            // console.log(status);

            $.get('/admin/seller/orders/changestatus/'+id,{'status':status},function(data){
                // console.log(data);
                if(data.status == 1) {

                    location.reload(true);
                }
            })

        }

        /*用户-删除*/
        function member_stop(obj,id){
            layer.confirm('确认要拒单吗？',function(index){

                $.get("{{ url('admin/seller/orders/stoporder') }}/"+id,{},function(data){

                    // console.log(data);
                    if(data.status == 1) {
                        //发异步删除数据
                        layer.msg('拒单成功!', {icon: 1, time: 1000});
                        location.reload(true);
                    }
                });

            });
        }







    </script>
    <script>var _hmt = _hmt || []; (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();</script>

@endsection