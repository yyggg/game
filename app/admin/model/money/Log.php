<?php

namespace app\admin\model\money;

use think\Model;

/**
 * Log
 */
class Log extends Model
{
    // 表名
    protected $name = 'money_log';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;
    protected $updateTime = false;


    public function getBeforeAmountAttr($value): float
    {
        return (float)$value;
    }

    public function getAmountAttr($value): float
    {
        return (float)$value;
    }
}