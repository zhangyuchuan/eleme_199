<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    //1.模型关联的数据表
    public $table = 'userinfo';

    //    2. 主键
    public $primaryKey = 'id';

    //    3. 是否维护created_at updated_at字段
    public $timestamps = false;

    //    4. 是否允许批量操作字段
    public $guarded = [];
}
