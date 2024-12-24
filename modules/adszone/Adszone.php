<?php

namespace modules\adszone;

use Throwable;
use app\common\library\Menu;
use app\admin\model\AdminRule;

class Adszone
{
    /**
     * 安装
     * @throws Throwable
     */
    public function install(): void
    {
        $pMenu    = AdminRule::where('name', 'routine')->value('id');
        $newMenus = [
            [
                'type'      => 'menu',
                'title'     => '广告位管理',
                'name'      => 'adszoneZone',
                'path'      => 'adszoneZone',
                'icon'      => 'el-icon-Picture',
                'menu_type' => 'tab',
                'component' => '/src/views/backend/adszoneZone/index.vue',
                'keepalive' => '0',
                'pid'       => $pMenu ? $pMenu : 0,
                'children'  => [
                    ['type' => 'button', 'title' => '查看', 'name' => 'adszoneZone/index'],
                    ['type' => 'button', 'title' => '添加', 'name' => 'adszoneZone/add'],
                    ['type' => 'button', 'title' => '编辑', 'name' => 'adszoneZone/edit'],
                    ['type' => 'button', 'title' => '删除', 'name' => 'adszoneZone/del'],
                    ['type' => 'button', 'title' => '快速排序', 'name' => 'adszoneZone/sortable'],
                ],
            ],
            [
                'type'      => 'menu',
                'title'     => '广告列表管理',
                'name'      => 'adszoneAds',
                'path'      => 'adszoneAds',
                'icon'      => 'el-icon-Operation',
                'menu_type' => 'tab',
                'component' => '/src/views/backend/adszoneAds/index.vue',
                'keepalive' => '0',
                'pid'       => $pMenu ? $pMenu : 0,
                'extend'    => 'add_rules_only',
                'children'  => [
                    ['type' => 'button', 'title' => '查看', 'name' => 'adszoneAds/index'],
                    ['type' => 'button', 'title' => '添加', 'name' => 'adszoneAds/add'],
                    ['type' => 'button', 'title' => '编辑', 'name' => 'adszoneAds/edit'],
                    ['type' => 'button', 'title' => '删除', 'name' => 'adszoneAds/del'],
                    ['type' => 'button', 'title' => '快速排序', 'name' => 'adszoneAds/sortable'],
                ],
            ]
        ];
        Menu::create($newMenus);
    }

    /**
     * 卸载
     * @throws Throwable
     */
    public function uninstall(): void
    {
        Menu::delete('adszoneZone', true);
        Menu::delete('adszoneAds', true);
    }

    /**
     * 启用
     * @throws Throwable
     */
    public function enable(): void
    {
        Menu::enable('adszoneZone');
        Menu::enable('adszoneAds');
    }

    /**
     * 禁用
     * @throws Throwable
     */
    public function disable(): void
    {
        Menu::disable('adszoneZone');
        Menu::disable('adszoneAds');
    }

}