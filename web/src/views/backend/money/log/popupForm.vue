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
                    <FormItem :label="t('money.log.uid')" type="number" v-model="baTable.form.items!.uid" prop="uid" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('money.log.uid') })" />
                    <FormItem :label="t('money.log.title')" type="string" v-model="baTable.form.items!.title" prop="title" :placeholder="t('Please input field', { field: t('money.log.title') })" />
                    <FormItem :label="t('money.log.type')" type="number" v-model="baTable.form.items!.type" prop="type" :input-attr="{ content: { '1': t('money.log.type 1'), '2': t('money.log.type 2') } }" :placeholder="t('Please input field', { field: t('money.log.type') })" />
                    <FormItem :label="t('money.log.before_amount')" type="number" v-model="baTable.form.items!.before_amount" prop="before_amount" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('money.log.before_amount') })" />
                    <FormItem :label="t('money.log.amount')" type="number" v-model="baTable.form.items!.amount" prop="amount" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('money.log.amount') })" />
                    <FormItem :label="t('money.log.relation_id')" type="remoteSelect" v-model="baTable.form.items!.relation_id" prop="relation_id" :input-attr="{ pk: 'gm_.id', field: 'name', remoteUrl: '' }" :placeholder="t('Please select field', { field: t('money.log.relation_id') })" />
                    <FormItem :label="t('money.log.remark')" type="string" v-model="baTable.form.items!.remark" prop="remark" :placeholder="t('Please input field', { field: t('money.log.remark') })" />
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
    uid: [buildValidatorData({ name: 'number', title: t('money.log.uid') })],
    type: [buildValidatorData({ name: 'number', title: t('money.log.type') })],
    before_amount: [buildValidatorData({ name: 'number', title: t('money.log.before_amount') })],
    amount: [buildValidatorData({ name: 'number', title: t('money.log.amount') })],
    create_time: [buildValidatorData({ name: 'date', title: t('money.log.create_time') })],
})
</script>

<style scoped lang="scss"></style>
