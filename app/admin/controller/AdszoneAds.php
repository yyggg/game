<?php

namespace app\admin\controller;

use Throwable;
use app\common\controller\Backend;

/**
 * 广告项目管理
 *
 */
class AdszoneAds extends Backend
{
    /**
     * AdszoneAds模型对象
     * @var object
     * @phpstan-var \app\admin\model\AdszoneAds
     */
    protected object $model;

    protected string|array $defaultSortField = 'weigh,desc';

    protected string|array $preExcludeFields = ['id', 'create_time', 'update_time'];

    protected array $withJoinTable = ['adszoneZone'];

    protected string|array $quickSearchField = ['id'];

    public function initialize(): void
    {
        parent::initialize();
        $this->model = new \app\admin\model\AdszoneAds;
    }

    /**
     * 查看
     * @throws Throwable
     */
    public function index(): void
    {
        $this->request->filter(['strip_tags', 'trim']);
        // 如果是select则转发到select方法,若select未重写,其实还是继续执行index
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->visible(['adszoneZone' => ['name']])
            ->paginate($limit);

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }
}