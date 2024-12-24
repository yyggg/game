<?php

namespace app\admin\controller\routine;

use app\common\controller\Backend;
use voku\helper\AntiXSS;

/**
 * 通知公告管理
 *
 */
class Notice extends Backend
{
    /**
     * Notice模型对象
     * @var \app\admin\model\Notice
     */
    protected object $model;

    protected array|string $quickSearchField = ['id'];

    protected string|array $defaultSortField = 'weigh,desc';

    protected array|string $preExcludeFields = ['createtime', 'updatetime'];

    public function initialize(): void
    {
        parent::initialize();
        $this->model = new \app\admin\model\Notice;
    }

    public function add(): void
    {
        $this->request->filter('trim,htmlspecialchars');
        parent::add();
    }

    public function edit($id = null): void
    {
        $this->request->filter('trim,htmlspecialchars');
        parent::edit($id);
    }
}