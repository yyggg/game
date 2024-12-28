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
                    <FormItem :label="t('user.bank.uid')" type="number" v-model="baTable.form.items!.uid" prop="uid" :input-attr="{ step: 1 }" :placeholder="t('Please input field', { field: t('user.bank.uid') })" />
                    <FormItem :label="t('user.bank.bank_name')" type="string" v-model="baTable.form.items!.bank_name" prop="bank_name" :placeholder="t('Please input field', { field: t('user.bank.bank_name') })" />
                    <FormItem :label="t('user.bank.branch')" type="string" v-model="baTable.form.items!.branch" prop="branch" :placeholder="t('Please input field', { field: t('user.bank.branch') })" />
                    <FormItem :label="t('user.bank.card_no')" type="string" v-model="baTable.form.items!.card_no" prop="card_no" :placeholder="t('Please input field', { field: t('user.bank.card_no') })" />
                    <FormItem :label="t('user.bank.username')" type="string" v-model="baTable.form.items!.username" prop="username" :placeholder="t('Please input field', { field: t('user.bank.username') })" />
                    <FormItem :label="t('user.bank.province')" type="string" v-model="baTable.form.items!.province" prop="province" :placeholder="t('Please input field', { field: t('user.bank.province') })" />
                    <FormItem :label="t('user.bank.city')" type="city" v-model="baTable.form.items!.city" prop="city" :placeholder="t('Please select field', { field: t('user.bank.city') })" />
                    <FormItem :label="t('user.bank.status')" type="radio" v-model="baTable.form.items!.status" prop="status" :input-attr="{ content: { '0': t('user.bank.status 0'), '1': t('user.bank.status 1'), '2': t('user.bank.status 2') } }" :placeholder="t('Please select field', { field: t('user.bank.status') })" />
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
    uid: [buildValidatorData({ name: 'number', title: t('user.bank.uid') })],
})
</script>

<style scoped lang="scss"></style>
