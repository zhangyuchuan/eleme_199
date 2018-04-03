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
        $shopinfo = ShopInfo::find($id);
        $carts = session()->get('gcarts');
        $sum = 0;
        $sbnt = 0;
        foreach ($carts as $v){
            $sum += $v->price*$v->bnt;
            $sbnt += $v->bnt;
        }
//        dd($sum);
        return view('Homes.Orders.jiesuan',compact('sum','sbnt','shopinfo'));





    }

    //商品订单
    public function orders()
    {
        return view('Homes.Orders.orders');
    }




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
