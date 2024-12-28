<?php

namespace app\admin\model;

use think\Model;

/**
 * Withdraw
 */
class Withdraw extends Model
{
    // 表名
    protected $name = 'withdraw';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;
    protected $updateTime = false;

    // 字段类型转换
    protected $type = [
        'complete_time' => 'timestamp:Y-m-d H:i:s',
    ];


    public function getAmountAttr($value): float
    {
        return (float)$value;
    }

    public function getNowMoneyAttr($value): float
    {
        return (float)$value;
    }
}