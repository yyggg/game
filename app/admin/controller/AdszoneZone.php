<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 广告位管理
 *
 */
class AdszoneZone extends Backend
{
    /**
     * AdszoneZone模型对象
     * @var object
     * @phpstan-var \app\admin\model\AdszoneZone
     */
    protected object $model;

    protected string|array $preExcludeFields = ['id', 'create_time', 'update_time'];

    protected string|array $quickSearchField = ['id'];

    public function initialize(): void
    {
        parent::initialize();
        $this->model = new \app\admin\model\AdszoneZone;
    }

}