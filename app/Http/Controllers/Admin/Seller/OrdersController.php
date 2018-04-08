<?php

namespace App\Http\Controllers\Admin\Seller;

use App\Model\Orders;
use App\Model\Ordersinfo;
use App\Model\ShopInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //获取登录的商家id
        if (session('user')){
            $sellerid = session('user')->id;
        }
        $shopinfo = ShopInfo::where('sellerid',$sellerid)->first();
        $sid = $shopinfo->id;
        $order = Orders::with('address')->orderBy('id','desc')->where('sid',$sid)
            ->where(function($query) use($request){
                //检测关键字
                $oid = $request->input('oid');
                //如果订单号不为空
                if(!empty($oid)) {
                    $query->where('oid',$oid);
                }
            })->get();
//            dd($order);
        $orders = Orders::with(['address','user'])->orderBy('id','desc')->where('sid',$sid)
            ->where(function($query) use($request){
                //检测关键字
                $oid = $request->input('oid');
                //如果订单号不为空
                if(!empty($oid)) {
                    $query->where('oid',$oid);
                }
            })
            ->paginate($request->input('num', 5));
//        dd($orders);


        return view('Admin.Seller.Orders.OrdersList',['orders'=>$orders,'order'=>$order,'request'=>$request]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $details= Ordersinfo::with('Goods')->where('oid',$id)->get();

//        dd($details);
        return view('Admin.Seller.Orders.OrderInfo',compact('details'));
    }

    //店家拒单
    public function stopOrder($id)
    {
        $orders = Orders::find($id);
        $orders ->status = 0;
        $res = $orders -> save();
        if ($res){
            $arr = [
                'status'=>1,
                'msg'=>'修改成功'
            ];
        }else{
            $arr = [
                'status'=>0,
                'msg'=>'修改失败'
            ];
        }
        return $arr;
    }

    //修改订单状态
    public function changeStatus( Request $request, $id)
    {
        $orders = Orders::find($id);
        $status =  $request -> input('status');
        if ($status == 1){
            $orders ->status = 2;
            $res =  $orders -> save();
            if ($res){
                $arr = [
                    'status'=>1,
                    'msg'=>'修改成功'
                ];
            }else{
                $arr = [
                    'status'=>0,
                    'msg'=>'修改失败'
                ];
            }
        }else{
            $orders ->status = 3;
            $res =  $orders -> save();
            if ($res){
                $arr = [
                    'status'=>1,
                    'msg'=>'修改成功'
                ];
            }else{
                $arr = [
                    'status'=>0,
                    'msg'=>'修改失败'
                ];
            }
        }
        return $arr;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
