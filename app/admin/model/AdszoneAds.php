<?php

namespace app\admin\model;

use think\Model;
use think\model\relation\BelongsTo;

/**
 * AdszoneAds
 */
class AdszoneAds extends Model
{
    // 表名
    protected $name = 'adszone_ads';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;

    // 字段类型转换
    protected $type = [
        'effectime'  => 'timestamp:Y-m-d H:i:s',
        'expiretime' => 'timestamp:Y-m-d H:i:s',
    ];

    protected static function onAfterInsert($model)
    {
        if ($model->weigh == 0) {
            $pk = $model->getPk();
            $model->where($pk, $model[$pk])->update(['weigh' => $model[$pk]]);
        }
    }

    public function adszoneZone(): BelongsTo
    {
        return $this->belongsTo(\app\admin\model\AdszoneZone::class, 'zone_id', 'id');
    }
}