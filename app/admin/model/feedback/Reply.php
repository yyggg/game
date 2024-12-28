<?php

namespace app\admin\model\feedback;

use think\Model;

/**
 * Reply
 */
class Reply extends Model
{
    // 表名
    protected $name = 'feedback_reply';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 字段类型转换
    protected $type = [
        'reply_time' => 'timestamp:Y-m-d H:i:s',
    ];

}