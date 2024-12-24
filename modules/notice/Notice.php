<?php

namespace modules\notice;

use app\common\library\Menu;
use app\admin\model\AdminRule;
use ba\module\moduleException;
use ba\module\Server;
use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use think\Exception;

class Notice
{
    private $uid = 'notice';

    public function install()
    {
        $pMenu = AdminRule::where('name', 'routine')->value('id');
        $menu  = [
            [
                'type'      => 'menu',
                'title'     => '通知公告管理',
                'name'      => 'routine/notice',
                'path'      => 'routine/notice',
                'icon'      => 'el-icon-ChatLineRound',
                'menu_type' => 'tab',
                'component' => '/src/views/backend/routine/notice/index.vue',
                'keepalive' => '1',
                'pid'       => $pMenu ? $pMenu : 0,
                'children'  => [
                    ['type' => 'button', 'title' => '查看', 'name' => 'routine/notice/index'],
                    ['type' => 'button', 'title' => '添加', 'name' => 'routine/notice/add'],
                    ['type' => 'button', 'title' => '编辑', 'name' => 'routine/notice/edit'],
                    ['type' => 'button', 'title' => '删除', 'name' => 'routine/notice/del'],
                    ['type' => 'button', 'title' => '快速排序', 'name' => 'routine/notice/sortable'],
                ],
            ]
        ];
        Menu::create($menu);
    }

    public function uninstall()
    {
        Menu::delete('routine/notice', true);
    }

    public function enable()
    {
        Menu::enable('routine/notice');
    }

    public function disable()
    {
        Menu::disable('routine/notice');
    }

    public function update()
    {
        // 兼容系统v1.1.2的语言包按需加载
        // 寻找安装时备份中的lang/pages文件，如果有，还原到lang/backend内而不是原位置
        $ebakDir = root_path() . 'modules' . DIRECTORY_SEPARATOR . 'ebak' . DIRECTORY_SEPARATOR;
        $zipFile = $ebakDir . $this->uid . '-install.zip';
        $zipDir  = false;
        if (is_file($zipFile)) {
            try {
                $zipDir = Server::unzip($zipFile);
            } catch (moduleException|Exception $e) {
                // skip
            }
        }
        if ($zipDir) {
            $oldBaInputs = [
                path_transform('web\src\lang\pages\zh-cn\routine\notice.ts'),
                path_transform('web\src\lang\pages\en\routine\notice.ts')
            ];
            foreach ($oldBaInputs as $oldBaInput) {
                @unlink(root_path() . $oldBaInput);
            }

            foreach (
                $iterator = new RecursiveIteratorIterator(
                    new RecursiveDirectoryIterator($zipDir, FilesystemIterator::SKIP_DOTS),
                    RecursiveIteratorIterator::SELF_FIRST
                ) as $item
            ) {
                $ebakFile = path_transform($iterator->getSubPathName());
                if (!$item->isDir() && in_array($ebakFile, $oldBaInputs)) {
                    $newFileName = str_replace(DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR, DIRECTORY_SEPARATOR . 'backend' . DIRECTORY_SEPARATOR, $ebakFile);
                    copy($item, root_path() . $newFileName);
                }
            }
        }
        deldir($zipDir);
        del_empty_dir(root_path() . 'web/src/lang/pages/en');
        del_empty_dir(root_path() . 'web/src/lang/pages/zh-cn');
    }

}