<?php
// 事件定义文件
return [
    'bind' => [
    ],

    'listen' => [
        'AppInit'  => [],
        'HttpRun'  => [],
        'HttpEnd'  => [],
        'LogLevel' => [],
        'LogWrite' => [],
        'MoneyLog' => [app\common\event\MoneyLog::class]
    ],

    'subscribe' => [
    ],
];
