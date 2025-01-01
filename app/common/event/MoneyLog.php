<?php
declare (strict_types = 1);

namespace app\common\event;

use app\common\model\MoneyLog as moneyLogModel;

class MoneyLog
{
    public function handle($data)
    {
        $moneyLogModel = new moneyLogModel();

        $moneyLogModel->save([
            'uid' => $data['param']['uid'],
            'title' => '',
            'type' => $data['param']['type'],
            'amount' => $data['param']['amount'],
            'before_amount' => '',
            'after_amount' => '',
            'remark' => '',
        ]);

        //$data->user->
    }
}


