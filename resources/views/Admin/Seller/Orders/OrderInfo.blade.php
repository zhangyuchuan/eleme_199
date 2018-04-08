@extends('Admin.Common.Common')
<meta name="csrf-token" content="{{ csrf_token() }}">
@section('content')
    <body>
    <div class="x-body">

        <table class="layui-table">
            <thead>
            <tr>
                <th>商品名称</th>
                <th>商品图片</th>
                <th>购买单价</th>
                <th>购买数量</th>
                <th>小计</th>
            </tr>
            </thead>
            <tbody>
            @foreach($details as $v)
                <tr>
                    <td>{{$v->goods['gname']}}</td>
                    <td><img src="/uploads/{{$v->gpic}}" alt="" style="width:80px"></td>
                    <td>{{$v->bprice}}</td>
                    <td>{{$v->bcnt}}</td>
                    <td>{{$v->bcnt*$v->bprice}}</td>
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