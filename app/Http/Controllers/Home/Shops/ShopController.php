<?php

namespace App\Http\Controllers\Home\Shops;




use App\Model\Goods;


use App\Model\Orders;
use App\Model\ShopCategory;

use App\Model\GoodsCate;

use App\Model\ShopInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;




class ShopController extends Controller
{
    //商品列表
    public function lists()
    {

        //获得全部一级分类
        $cateone = ShopCategory::where('pid',0)->get();
        //判断购物车是为空
        if(session()->exists('gcarts')){
            $gcart = session('gcarts');
        }else{
            $gcart = [];
        }


        if(session('address')){
            //发送经纬度
            $address = session('address');
        }else{
            $address = ['address'=>'北京昌平回龙观it兄弟连教育'];
        }

        return view('Homes.Shops.lists',compact('cateone','gcart','address'));
    }
    //获得二级分类
    public function getCate(Request $request)
    {
        //获取分类id
        $id = $request->input('id');
        //获取子分类
        $catesecond = ShopCategory::where('pid',$id)->get();
        return view('Homes.Shops.ShopCate',compact('catesecond'));
    }
    //获得任何分类下的店铺
    public function getShop(Request $request)
    {

        //获取分类id
        $id = $request->input('id');
        if($id==0){
            //获取全部店铺
            $shops = ShopInfo::whereIn('status',['0','1'])
                                ->orderBy('status')
                                ->orderBy('score','desc')

                                ->get()->toArray();

        }else{
            //判断是否有子类
            $ids=[];
            $ids[] = $id;
            $catesecond = ShopCategory::where('pid',$id)->get();
            if($catesecond){
                foreach($catesecond as $k=>$v){
                    $ids[] = $v->id;
                }
            }
            $shops = ShopInfo::whereIn('cateid',$ids)
                                ->whereIn('status',['0','1'])
                                ->orderBy('status')
                                ->orderBy('score','desc')
                                ->get()->toArray();
        }
//        dd($shops);
        //进行位置判断
        //遍历数组
        if(!empty($shops)){
            //从session中取出经纬度
            $session_lng = !empty(session('address'))?session('address')['lng']:'116.341315';
            $session_lat = !empty(session('address'))?session('address')['lat']:'40.108366';
            $arr = [];
            foreach($shops as $k=>$v){
                $v_lng = $v['lng'];
                $v_lat = $v['lat'];
                $distance = GetDistance($session_lat,$session_lng,$v_lat,$v_lng);
                if($distance<=5){
                    $arr[]=$v;
                }
            }
            $shops = $arr;
        }
        return view('Homes.Shops.ShopList',compact('shops'));
    }
    //列表页搜索
    public function listDoSearch(Request $request)
    {
        $input= $request->except('_token');
        $keywords = $input['keywords'];
        //获得商品和商铺
        $shops =ShopInfo::with('goods')
                            ->where('name','like','%'.$keywords.'%')
                            ->get();

        if(session('address')){
            //发送经纬度
            $address = session('address');
        }else{
            $address = ['address'=>'北京昌平回龙观it兄弟连教育'];
        }
        //经纬度判断
        if(!empty($shops)){
            //从session中取出经纬度
            $session_lng = !empty(session('address'))?session('address')['lng']:'116.341315';
            $session_lat = !empty(session('address'))?session('address')['lat']:'40.108366';
            $arr = [];
            foreach($shops as $k=>$v){
                $v_lng = $v['lng'];
                $v_lat = $v['lat'];
                $distance = GetDistance($session_lat,$session_lng,$v_lat,$v_lng);
                if($distance<=5){
                    $arr[]=$v;
                }
            }
            $shops = $arr;
        }

        return view('Homes.Shops.listDoSearch',compact('keywords','shops','address'));

    }

    //商铺详情
    public function shop($id)
    {
        $ocnt = Orders::where('sid',$id)->get()->count();
        $shopinfo = ShopInfo::find($id);
        $gcate = GoodsCate::with('goods')->where('sid',$id)->get();
        return view('Homes.Shops.shop',compact('shopinfo','gcate','ocnt'));
    }


    //商品详情
    public function show(Request $request)
    {
//        接收传过来的id
        $gid = $request -> input('id');
        $goods = Goods::find($gid);
        return $goods;
    }

    //加入购物车
    public function addCart(Request $request)
    {
//        获取商品的信息
        $gid = $request ->input('id');
        $goods = Goods::find($gid);
        $goods['bnt'] = 1;
        if (session()->exists('gcarts')){
            $gcarts = session()->get('gcarts');
            if (!empty($gcarts[$gid])){
                $arr = [
                  'status'=>0,
                  'goods'=>0
                ];
            }else{
                $arr = [
                    'status'=>1,
                    'goods'=>$goods
                ];
            }
            $gcarts[$gid]= $goods;
            Session::put('gcarts',$gcarts);
        }else{
            $gcarts[$gid] = $goods;

            Session::put('gcarts',$gcarts);
            $arr = [
                'status'=>1,
                'goods'=>$goods
            ];
        }
        return $arr;

    }

    //加购物车商品的数量
    public function delGcart(Request $request)
    {
        $id = $request -> input('id');
        $gcarts = session()->get('gcarts');
        if ($gcarts[$id]['bnt'] == 1){
            unset($gcarts[$id]);
        }else{
            $gcarts[$id]['bnt'] = $gcarts[$id]['bnt']-1;
        }
        Session::put('gcarts',$gcarts);

        return 1;

    }

    //加购物车商品的数量
    public function addGcart(Request $request)
    {
        $id = $request -> input('id');
        $gcarts = session()->get('gcarts');

        $gcarts[$id]['bnt'] = $gcarts[$id]['bnt']+1;

        Session::put('gcarts',$gcarts);

        return 1;

    }

    //店铺的评价(订单的评价)
    public function rate($id)
    {
        $shopinfo = ShopInfo::find($id);
        $gcate = GoodsCate::where('sid',$id)->get();
        return view('Homes.Shops.rate',compact('shopinfo','gcate'));
    }




}
