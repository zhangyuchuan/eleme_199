<?php

namespace App\Http\Controllers\Home\Orders;




use App\Model\Goods;

use App\Model\ShopInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Orders;
use App\Model\Ordersinfo;

use App\Model\User;

use DB;


class OrderController extends Controller
{

    //结算

    public function jiesuan($id)
    {
        $users = User::with('useraddr')->find(1);
        $shopinfo = ShopInfo::find($id);
        if (empty(session()->get('gcarts'))){
            $carts = [];
        }else{
            $carts = session()->get('gcarts');
        }
        $sum = 0;
        $sbnt = 0;
        foreach ($carts as $v){
            $sum += $v->price*$v->bnt;
            $sbnt += $v->bnt;
        }
//        dd($sum);
        return view('Homes.Orders.jiesuan',compact('sum','sbnt','shopinfo','users'));


    }

    // 提交生成订单
    public  function finish(Request $request,$id)
    {
        $input = $request ->except('_token');
        //店铺id
        $user = session('user');
        $data['uid']= $user['id'];

        $data['sid'] = $id;
        if(!empty($input['umsg'])){
            $data['umsg'] = $input['umsg'];
        }
        $data['addrid'] = $input['addrid'];
        $carts = session()->get('gcarts');
        $sum = 0;
        $sbnt = 0;
        foreach ($carts as $v){
            $sum += $v->price*$v->bnt;
            $sbnt += $v->bnt;
        }
        $data['totalprice'] = $sum;
        $data['ocnt'] = $sbnt;
        $data['status']= 1;
        $data['ordertime'] = time();
        $oid = date('YmdHis').mt_rand(1000,9999);
        $data['oid'] = $oid;

        DB::beginTransaction();
        $res = Orders::create($data);
        $flag = $this->writeOrders($oid);
        if ($res && $flag){
            DB::commit();
            session()->forget('gcarts');
            return redirect();
        }else{
            DB::rollBack();
            return back();
        }

//        return  $goods;
    }

//    向数据库添加订单详情数据
    public function  writeOrders($oid)
    {
        $goods = session('gcarts');
        $data = [];
        foreach ($goods as $k => $v) {
           $arr['oid']= $oid;
           $arr['gid']=$v['id'];
           $arr['gpic']=$v['gpic'];
           $arr['bprice']=$v['price'];
           $arr['bcnt'] = $v['bnt'];
           $data[] = $arr;
        }
        $res = Ordersinfo::insert($data);

        if ($res){
            return true;
        }else{
            return false;
        }

    }

    //商品订单
    public function orders()
    {
        //假设一个用户id   韩伟栋
        $id=6;

        $all=User::with('Orders')->where('id',$id)->first();

        //商家id
        $sids = [];
        //订单id
        $oids = [];
        foreach($all->Orders as $v){
            $sids[] = $v->sid;
            $oids[] = $v->oid;
        }

        $shops = ShopInfo::whereIn('id',$sids)->get();
        $goodsname = [];
        foreach($oids as $k=>$v){
            $goodsname[] = Ordersinfo::with('goods')->where('oid',$v)->get()->toArray();
        }

        $n = [];
        $sum = [];
        foreach($goodsname as $k=>$v){
            $m = 0; $sun =0;
            foreach($v as $vv){
                $m+= $vv['bcnt'];
                $sun += $vv['bcnt']*$vv['bprice'];
            }
            $n[] = $m;
            $sum[] = $sun;
        }

        return view('Homes.Orders.orders',compact('n','sum','all','shops','users','goodsname'));
    }


    //
    public function overorder()
    {
        return view('Homes.Orders.overorder');
    }



    //订单详情
    public function orderdata($id)
    {
       $order = Orders::where('oid',$id)->first();
//        dd($order);
       $sid = $order['sid'];
//       dd($sid);

        $shop = ShopInfo::where('id',$sid)->first();


        $all = Ordersinfo::with('goods')->where('oid',$id)->get();

        $shop_all = Ordersinfo::with('shopinfo')->where('oid',$id)->get();

//        dd($shop_all);

        return view('Homes.Orders.orderdata',compact('all','shop_all','shop'));
    }


}
