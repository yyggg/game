<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('adszoneZone.quick Search Fields') })"
        />

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" />

        <!-- 表单 -->
        <PopupForm />
        <el-dialog
            class="ba-operate-dialog"
            :title="dialogTitle + '-' + t('adszoneZone.ad list')"
            :model-value="baTable.form.operate == 'list' ? true : false"
            @close="baTable.toggleForm"
            width="70%"
            :append-to-body="true"
            :destroy-on-close="true"
        >
            <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
                <InfoDialog :zone_id="zone_id" />
            </el-scrollbar>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import InfoDialog from '../adszoneAds/index.vue'

const { t } = useI18n()
const tableRef = ref()
let zone_id = '',
    dialogTitle = ''
let optButtons: OptButton[] = [
    {
        render: 'tipButton',
        name: 'info',
        title: 'adszoneZone.ad list',
        text: '',
        type: 'warning',
        icon: 'fa fa-table',
        class: 'table-row-list',
        disabledTip: false,
        click: (row: TableRow) => {
            listButtonClick(row)
        },
    },
]
optButtons = optButtons.concat(defaultOptButtons(['edit', 'delete']))
const baTable = new baTableClass(
    new baTableApi('/admin/AdszoneZone/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('adszoneZone.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('adszoneZone.name'), prop: 'name', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('adszoneZone.mark'), prop: 'mark', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            {
                label: t('adszoneZone.type'),
                prop: 'type',
                align: 'center',
                render: 'tag',
                operator: '=',
                sortable: false,
                replaceValue: { 1: t('adszoneZone.type 1'), 2: t('adszoneZone.type 2'), 3: t('adszoneZone.type 3') },
            },
            { label: t('adszoneZone.width'), prop: 'width', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('adszoneZone.height'), prop: 'height', align: 'center', operator: 'RANGE', sortable: false },
            {
                label: t('adszoneZone.create_time'),
                prop: 'create_time',
                align: 'center',
                render: 'datetime',
                operator: 'RANGE',
                sortable: 'custom',
                width: 160,
                timeFormat: 'yyyy-mm-dd hh:MM:ss',
            },
            { label: t('Operate'), align: 'center', width: 180, render: 'buttons', buttons: optButtons, operator: false },
        ],
        dblClickNotEditColumn: [undefined],
    },
    {
        defaultItems: { type: '1' },
    }
)
const listButtonClick = (row: anyObj) => {
    baTable.form.operate = 'list'
    dialogTitle = row.name
    zone_id = row.id
}
provide('baTable', baTable)

onMounted(() => {
    baTable.table.ref = tableRef.value
    baTable.mount()
    baTable.getIndex()?.then(() => {
        baTable.initSort()
        baTable.dragSort()
    })
})

defineOptions({
    name: 'adszoneZone',
})
</script>

<style scoped lang="scss"></style>
