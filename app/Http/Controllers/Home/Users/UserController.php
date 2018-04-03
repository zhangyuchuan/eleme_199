<?php

namespace App\Http\Controllers\Home\Users;

<<<<<<< HEAD


use App\Model\User;

use App\Model\UserInfo;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Collect;
use App\Model\Orders;
use App\Model\ShopInfo;

use DB;


class UserController extends Controller
{
    //个人中心
    public function center()
    {



        $all=User::with('Orders')->where('id',6)->first();
//        dd($all);
        $sids = [];
        foreach($all->Orders as $v){
            $sids[] = $v->sid;
        }
//        dd($sids);
        $shops = ShopInfo::whereIn('id',$sids)->get();
//        dd($shops);
        return view('Homes.Users.center',compact('all','shops'));


    }

    //用户收藏
    public function collect()
    {

        //假设一个用户
        $uid = 24;

        //获取用户收藏的店铺id
        $collect = Collect::where('uid',$uid)->get();
        $arr = [];
        if(!empty($collect)) {
            foreach ($collect as $v) {
                $arr[] = $v->sid;
            }
        }
//        dd($arr);
            //获取店铺信息
            $shop_data = ShopInfo::whereIn('id',$arr)->get();

//        dd($shop_data);

        return view('Homes.Users.collect',compact('shop_data'));
    }
    //删除收藏
    public function delete($id)
    {
//        dd($id);
        $cid = Collect::where('sid',$id)->first();
//        dd($cid);
        $res= $cid->delete();
//        dd($res);
        if($res) {
            return redirect('/collect');

        }else{
=======
use App\Model\Address;
use App\Model\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use DB;

class UserController extends Controller
{


    //安全中心
    public function safety()
    {
        //return view('Homes.Users.safety');
        $users = User::find(1);
        return view('Homes.Users.safety', ['users' => $users]);
    }

    //用户地址
    public function add()
    {
        //return view('Homes.Users.add');
        $users = User::with('useraddr')->find(1);
//        dd($users->useraddr);
        return view('Homes.Users.add', ['users' => $users]);
    }

    //添加地址
    public function create()
    {
        $address = Address::find(1);
       return view('Homes.Users.UserInfo.addaddress', ['address' => $address]);
        //return view('Homes.Users.UserInfo.addaddress');
    }

    public function store(Request $request)
    {
        // 接收数据
        $input = $request->except('_token');
//  dd($input);
        //表单验证
//        $rule = [
//            'phone' => 'required'
//        ];
//        $msg = [
//            'phone.required' => '手机号格式不正确'
//        ];
//        $validator = Validator::make($input, $rule, $msg);
//        if ($validator->fails()) {
//            $arr = [
//                'status' => 1,
//                'msg' => '添加失败'
//            ];
//            return $arr;
//        }
        //执行添加 DB::table('users')->insert   Address::create
        $res = Address::create([
            'uid'=>1,
            'rec'=>$input['rec'],
            'addr'=>$input['address1'].$input['address2'],
            'tel'=>$input['tel'],
            'sex'=>$input['sex'],
//            'auth'=>tel
        ]);
        if($res) {
            $arr = [
                'status' => 0,
                'msg' => '添加成功'
            ];

        }else{
            $arr = [
                'status'=>1,
                'msg'=>'添加失败'
            ];
        }

      //  return $arr;
        return view('Homes.Users.add');
    }

    //删除地址
    public function delete($id)
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
        //return view('Homes.Users.UserInfo.addaddress');
    }
    public function storemodify(Request $request,$id)
    {
//        获取用户的ID
        // 1.根据id获取要修改的用户
        $user = Address::find($id);
        // 接收数据

        $input = $request->except('_token');
 // dd($input);


        $user->rec=$input['rec'];

        $user->addr=$input['addr'];
        $user->tel=$input['tel'];
        $user->sex=$input['sex'];
//            'auth'=>tel

        $res= $user->save();
        if($res) {
            return redirect('/add');

        }else{
           return back();
        }

        //  return $arr;

    }
    //用户密码
    public function password()
    {
        $users  = User::find(1);

        return view('Homes.Users.password',['user'=>$users]);
    }
    //修改密码
    public function repass(Request $request)
    {
        $users  = User::find(1);
        $oldpass = $users->password;
        // dd($oldpass);
        //判断原密码是否正确
        if((Crypt::decrypt($oldpass))!= ($request->input('oldpass'))){
            $arr = [
                'status'=>1,
                'msg'=>'原密码不正确'
            ];
            return $arr;

        }else{
            $this->validate($request, [

                'newpass' => 'regex:/^[\S]{4,16}$/',
                'repass'=>'same:newpass',

            ],[

                'newpass.regex' => '密码格式不正确',
                'repass.same'=>'两次密码不一致',

            ]);
        }

        //将密码进行加密
        $newpass = Crypt::encrypt($request->input('newpass'));


        $users->password = $newpass;
        $res = $users->save();
        if($res){
            return redirect('/center');
        }else{
>>>>>>> origin/zcs
            return back();
        }
    }

<<<<<<< HEAD
}

=======

    //用户数据资料
    public function data()
    {
       // return view('Homes.Users.data');
        //获取数据
        $users  = User::find(1);
        //dd($users);
       // dd(session());
        return view('Homes.Users.data',['users'=>$users]);
    }

    //公共
    public function public()
    {
        return view('Homes.Users.public.public');
    }

}
>>>>>>> origin/zcs
