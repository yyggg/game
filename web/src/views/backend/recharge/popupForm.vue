<template>
    <!-- 对话框表单 -->
    <!-- 建议使用 Prettier 格式化代码 -->
    <!-- el-form 内可以混用 el-form-item、FormItem、ba-input 等输入组件 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="['Add', 'Edit'].includes(baTable.form.operate!)"
        @close="baTable.toggleForm"
        width="50%"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? t(baTable.form.operate) : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="config.layout.shrink ? '':'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    v-if="!baTable.form.loading"
                    ref="formRef"
                    @submit.prevent=""
                    @keyup.enter="baTable.onSubmit(formRef)"
                    :model="baTable.form.items"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                >
                    <FormItem :label="t('recharge.uid')" type="number" v-model="baTable.form.items!.uid" prop="uid" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('recharge.uid') })" />
                    <FormItem :label="t('recharge.title')" type="string" v-model="baTable.form.items!.title" prop="title" :placeholder="t('Please input field', { field: t('recharge.title') })" />
                    <FormItem :label="t('recharge.order_no')" type="string" v-model="baTable.form.items!.order_no" prop="order_no" :placeholder="t('Please input field', { field: t('recharge.order_no') })" />
                    <FormItem :label="t('recharge.pay_time')" type="datetime" v-model="baTable.form.items!.pay_time" prop="pay_time" :placeholder="t('Please select field', { field: t('recharge.pay_time') })" />
                    <FormItem :label="t('recharge.amount')" type="number" v-model="baTable.form.items!.amount" prop="amount" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('recharge.amount') })" />
                    <FormItem :label="t('recharge.now_money')" type="number" v-model="baTable.form.items!.now_money" prop="now_money" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('recharge.now_money') })" />
                    <FormItem :label="t('recharge.pay_type')" type="string" v-model="baTable.form.items!.pay_type" prop="pay_type" :placeholder="t('Please input field', { field: t('recharge.pay_type') })" />
                    <FormItem :label="t('recharge.status')" type="number" v-model="baTable.form.items!.status" prop="status" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('recharge.status') })" />
                    <FormItem :label="t('recharge.do_uid')" type="number" v-model="baTable.form.items!.do_uid" prop="do_uid" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('recharge.do_uid') })" />
                    <FormItem :label="t('recharge.complete_time')" type="datetime" v-model="baTable.form.items!.complete_time" prop="complete_time" :placeholder="t('Please select field', { field: t('recharge.complete_time') })" />
                    <FormItem :label="t('recharge.remark')" type="string" v-model="baTable.form.items!.remark" prop="remark" :placeholder="t('Please input field', { field: t('recharge.remark') })" />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm()">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import type { FormInstance, FormItemRule } from 'element-plus'
import { inject, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FormItem from '/@/components/formItem/index.vue'
import { useConfig } from '/@/stores/config'
import type baTableClass from '/@/utils/baTable'
import { buildValidatorData } from '/@/utils/validate'

const config = useConfig()
const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    uid: [buildValidatorData({ name: 'number', title: t('recharge.uid') })],
    create_time: [buildValidatorData({ name: 'date', title: t('recharge.create_time') })],
    pay_time: [buildValidatorData({ name: 'date', title: t('recharge.pay_time') })],
    amount: [buildValidatorData({ name: 'number', title: t('recharge.amount') })],
    now_money: [buildValidatorData({ name: 'number', title: t('recharge.now_money') })],
    status: [buildValidatorData({ name: 'number', title: t('recharge.status') })],
    do_uid: [buildValidatorData({ name: 'number', title: t('recharge.do_uid') })],
    complete_time: [buildValidatorData({ name: 'date', title: t('recharge.complete_time') })],
})
</script>

<style scoped lang="scss"></style>
