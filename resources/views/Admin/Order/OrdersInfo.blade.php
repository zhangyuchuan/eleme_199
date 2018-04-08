@extends('Admin.Common.Common')
<meta name="csrf-token" content="{{ csrf_token() }}">
@section('content')
    <body>
    <div class="x-body">

        <table class="layui-table">
            <thead>
            <tr>
                <th>订单ID</th>
                <th>商品ID</th>
                <td>订单号</td>
                <th>商品图片</th>
                <th>商品单价</th>
                <th>商品数量</th>
            </tr>
            </thead>
            <tbody>
            @foreach($ordersinfo as $v)
                <tr>
                    <td>{{$v->id}}</td>
                    <td>{{$v->gid}}</td>
                    <td>{{$v->oid}}</td>
                    <td><img src="/uploads/{{$v->gpic}}"></td>
                    <td>{{$v->bprice}}</td>
                    <td>{{$v->bcnt}}</td>




                </tr>
            </tbody>
            @endforeach
        </table>

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


    </script>
    </body>
@endsection