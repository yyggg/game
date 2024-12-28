<?php

namespace app\admin\controller\feedback;

use app\common\controller\Backend;

/**
 * 反馈回复管理
 */
class Reply extends Backend
{
    /**
     * Reply模型对象
     * @var object
     * @phpstan-var \app\admin\model\feedback\Reply
     */
    protected object $model;

    protected array|string $preExcludeFields = ['id'];

    protected string|array $quickSearchField = ['id'];

    public function initialize(): void
    {
        parent::initialize();
        $this->model = new \app\admin\model\feedback\Reply();
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}