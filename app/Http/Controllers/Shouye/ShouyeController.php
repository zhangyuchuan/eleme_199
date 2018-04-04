<?php

namespace App\Http\Controllers\Shouye;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Map\Map;

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
            'lnglat'=> $res->result->location->lng.','.$res->result->location->lat,
        ];
        dd($address);
        session('address',$address);
        dd(session('address'));
        return redirect('/shop/10');


    }

}
