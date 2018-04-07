<?php

namespace App\Http\Controllers\Shouye;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Map\Map;
use Illuminate\Support\Facades\Session;

class ShouyeController extends Controller
{
    //
    public function doMap(Request $request)
    {
        $address = $request -> input('address');
//        dd($address);
        $map = new Map();
        $res = $map -> getLngLat($address);
        $res= json_decode($res);
//        dd($res->result->location->lat);

        $address = [
            'address'=>$address,
            'lng'=> $res->result->location->lng,
            'lat'=> $res->result->location->lat,
        ];
//        dd($res);
        Session::put('address',$address);
//        dd(session('address'));
        return redirect('/lists');
//        $res = GetDistance($address['lat'],$address['lng'],40.082429866218,116.33864404988);
//        dd($res);

    }

}
