<?php

namespace App\Http\Controllers\Home\Users;



use App\Model\Order;
use App\Model\Ordersinfo;
use App\Model\User;

use App\Model\UserInfo;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Collect;
use App\Model\Orders;
use App\Model\ShopInfo;
use App\Model\Address;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use DB;



class UserController extends Controller
{
    //个人中心  韩伟栋
    public function center()
    {
//        $oid = Orders::where('uid',33)->get();
//
//        foreach($oid as $k=>$v){
//            var_dump(json_encode($v['oid']));
//        }
//        dd();
        //假设一个用户id   韩伟栋
        $id=session('user')['id'];
        $all=User::with('Orders')->where('id',$id)->first();
//        dd($all->Orders);
//        2147483647
        //商家id
        $sids = [];
        //订单id
        $oids = [];
        foreach($all->Orders as $v){
            $sids[] = $v->sid;
            $oids[] = $v->oid;
        }
//        dd($oids);
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
        //获取用户积分    //获取用户余额
        $users = UserInfo::where('id',$id)->first();
//        dd($all);
        return view('Homes.Users.center',compact('n','sum','all','shops','users','goodsname'));


    }

    //用户收藏  韩伟栋
    public function collect()
    {
        //假设一个用户   韩伟栋
        $uid = session('user')['id'];
        //获取用户收藏的店铺id
        $collect = Collect::where('uid',$uid)->get();
        $arr = [];
        if(!empty($collect)) {
            foreach ($collect as $v) {
                $arr[] = $v->sid;
            }
        }
            //获取店铺信息
            $shop_data = ShopInfo::whereIn('id',$arr)->get();
        return view('Homes.Users.collect',compact('shop_data'));
    }
    //删除收藏 韩伟栋
    public function del($id)
    {
        $cid = Collect::where('sid', $id)->first();
        $res = $cid->delete();
        if ($res) {
            return redirect('/collect');
        }
    }

    //个人红包
    public function hongbao()
    {
        return view('Homes.Users.hongbao');
    }

    //用户积分
    public function integral()
    {
        //假设用户id   韩伟栋
        $id = session('user')['id'];
        $users = UserInfo::where('id',$id)->first();
        return view('Homes.Users.integral',compact('users'));
    }

    //账户余额
    public function balance()
    {
        //假设用户id  韩伟栋
        $id =session('user')['id'];
        $balance = UserInfo::where('id',$id)->first();
        return view('Homes.Users.balance',compact('balance'));
    }
    //安全中心
    public function safety()
    {
        $id =session('user')['id'];
        $users = User::find($id);
        return view('Homes.Users.safety', ['users' => $users]);
    }

    //用户地址
    public function add()
    {
        $id =session('user')['id'];
        $users = User::with('useraddr')->find($id);
        return view('Homes.Users.add', ['users' => $users]);
    }

    //添加地址
    public function create()
    {
        //这个id是死的   张晨思
        $id =session('user')['id'];
        $address = Address::find($id);
       return view('Homes.Users.UserInfo.addaddress', ['address' => $address]);
    }

    public function store(Request $request)
    {
        // 接收数据
        $input = $request->except('_token');
        //表单验证
        $rule = [
            'tel' => 'regex:/^1[34578][0-9]{9}$/'
        ];
        $msg = [
            'tel.regex' => '手机号格式不正确'
        ];
        $validator = Validator::make($input, $rule, $msg);
        if ($validator->fails()) {
                 return redirect('/create')->with('errors','手机号格式不正确');
                 }

        //执行添加 DB::table('users')->insert   Address::create
        $res = Address::create([
            'uid'=>1,
            'rec'=>$input['rec'],
            'addr'=>$input['address1'].$input['address2'],
            'tel'=>$input['tel'],
            'sex'=>$input['sex'],
        ]);
        if($res) {
            return redirect('/add');

        }else{
            return back();
        }
    }

    //删除地址
    public function deletedizhi($id)
    {
        $res= Address::destroy($id);

        if($res) {
            return redirect('/add');

        }else{
            return back();
        }
    }

    //修改地址
    public function modify($id)
    {
        $address = Address::find($id);
        return view('Homes.Users.UserInfo.modify', ['address' => $address]);
    }
    public function storemodify(Request $request,$id)
    {
//        获取用户的ID
        // 1.根据id获取要修改的用户
        $user = Address::find($id);
        // 接收数据
        $input = $request->except('_token');
        $user->rec=$input['rec'];
        $user->addr=$input['addr'];
        $user->tel=$input['tel'];
        $user->sex=$input['sex'];
        $res= $user->save();
        if($res) {
            return redirect('/add');

        }else{
           return back();
        }


    }
    //用户密码
    public function password()
    {
        //这个id是死的  张晨思
        $id=session('user')['id'];
        $users  = User::find($id);
        return view('Homes.Users.password',['user'=>$users]);
    }
    //修改密码
    public function repass(Request $request)
    {
        $input = $request->input();
        //这个id是死的  张晨思
        $id=session('user')['id'];
        $users  = User::find($id);
        $oldpass = $users->password;
        //判断原密码是否正确
        if((Crypt::decrypt($oldpass))!= ($request->input('oldpass'))){
            return back()->with('msg','原密码不正确');

        }else{
//            $this->validate($request, [
//
//                'newpass' => 'regex:/^[\S]{4,16}$/',
//                'repass'=>'same:newpass',
//
//            ],[
//
//                'newpass.regex' => '密码格式不正确',
//                'repass.same'=>'两次密码不一致',
//
//            ]);
            $rule = [
                'newpass' => 'regex:/^[\S]{4,16}$/',
                'repass'=>'same:newpass',
            ];
            $msg = [
                'newpass.regex' => '密码格式不正确',
                'repass.same'=>'两次密码不一致',
            ];

            $validator = Validator::make($input,$rule,$msg);
            if ($validator->fails()){
                return back()->with('msg','修改失败');
            }

        }

        //将密码进行加密
        $newpass = Crypt::encrypt($request->input('newpass'));
        $users->password = $newpass;
        $res = $users->save();
        if($res){
            //跳转路径错误   张晨思
            return back()->with('msg','修改成功');
        }else{
            return back()->with('msg','修改失败');
        }
    }



    //用户数据资料
    public function data()
    {
        //这个id是死的   张晨思
        $id = session('user')['id'];
        //获取数据
        $users  = User::find($id);
        return view('Homes.Users.data',['users'=>$users]);
    }

    //公共
    public function public()
    {
        return view('Homes.Users.public.public');
    }

}

