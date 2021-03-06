<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    //    1. 模型关联的数据表
    public $table = 'orders';

    //    2. 主键


    public $primaryKey = '  id';


    //    3. 是否维护created_at updated_at字段
    public $timestamps = false;

    //    4. 是否允许批量操作字段
    public $guarded = [];

    public function address()
    {
        return $this->hasOne('App\Model\Address','id','addrid');
    }
    public function  user()
    {
        return $this->hasOne('App\Model\User','id','uid');
    }
}
