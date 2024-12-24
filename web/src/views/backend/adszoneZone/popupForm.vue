<template>
    <!-- 对话框表单 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="baTable.form.operate && baTable.form.operate != 'list' ? true : false"
        @close="baTable.toggleForm"
        width="50%"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? (te(baTable.form.operate) ? t(baTable.form.operate) : '') : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    v-if="!baTable.form.loading"
                    ref="formRef"
                    @keyup.enter="baTable.onSubmit(formRef)"
                    :model="baTable.form.items"
                    label-position="right"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                >
                    <FormItem
                        :label="t('adszoneZone.name')"
                        type="string"
                        v-model="baTable.form.items!.name"
                        prop="name"
                        :placeholder="t('Please input field', { field: t('adszoneZone.name') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.mark')"
                        type="string"
                        v-model="baTable.form.items!.mark"
                        prop="mark"
                        :placeholder="t('Please input field', { field: t('adszoneZone.mark') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.type')"
                        type="radio"
                        v-model="baTable.form.items!.type"
                        prop="type"
                        :data="{ content: { '1': t('adszoneZone.type 1'), '2': t('adszoneZone.type 2'), '3': t('adszoneZone.type 3') } }"
                        :placeholder="t('Please select field', { field: t('adszoneZone.type') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.width')"
                        v-if="baTable.form.items!.type!=3"
                        type="number"
                        prop="width"
                        :input-attr="{ step: 1 }"
                        v-model.number="baTable.form.items!.width"
                        :placeholder="t('Please input field', { field: t('adszoneZone.width') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.height')"
                        v-if="baTable.form.items!.type!=3"
                        type="number"
                        prop="height"
                        :input-attr="{ step: 1 }"
                        v-model.number="baTable.form.items!.height"
                        :placeholder="t('Please input field', { field: t('adszoneZone.height') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.ad_code')"
                        v-if="baTable.form.items!.type==3"
                        type="textarea"
                        v-model="baTable.form.items!.code"
                        prop="code"
                        :input-attr="{ rows: 3 }"
                        @keyup.enter.stop=""
                        @keyup.ctrl.enter="baTable.onSubmit(formRef)"
                        :placeholder="t('Please input field', { field: t('adszoneZone.ad_code') })"
                    />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm('')">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'
import type { ElForm, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'

const formRef = ref<InstanceType<typeof ElForm>>()
const baTable = inject('baTable') as baTableClass

const { t, te } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    name: [buildValidatorData({ name: 'required', title: t('adszoneZone.name') })],
    mark: [buildValidatorData({ name: 'required', title: t('adszoneZone.mark') })],
    width: [buildValidatorData({ name: 'number', title: t('adszoneZone.width') })],
    height: [buildValidatorData({ name: 'number', title: t('adszoneZone.height') })],
    create_time: [buildValidatorData({ name: 'date', title: t('adszoneZone.create_time') })],
    update_time: [buildValidatorData({ name: 'date', title: t('adszoneZone.update_time') })],
})
</script>

<style scoped lang="scss"></style>
