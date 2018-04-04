<?php

namespace App\Map;
/**
 * 百度地图相关业务封装
 */

class Map
{
    /*
     * 根据地址得到经纬度
     */
    public function getLngLat($address)
    {
        $data = [
            'address'=>$address,
            'ak'=>config('map.ak'),
            'output'=>'json',
        ];
        $url = config('map.baidu_map_url').config('map.geocoder').'?'.http_build_query($data);
        $result = $this->doCurl($url);
         return $result;
//        dd($url);
    }

    public function doCurl($url, $type = 0, $data = [])
    {
        $ch = curl_init(); // 初始化
        // 设置选项
        curl_setopt($ch,CURLOPT_URL, $url );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_HEADER,0);
        if ($type == 1){
            curl_setopt($ch, CURLOPT_POST,1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }

        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }
}