<?php

namespace app\admin\model;

use think\Model;

/**
 * Feedback
 */
class Feedback extends Model
{
    // 表名
    protected $name = 'feedback';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;
    protected $updateTime = false;

}