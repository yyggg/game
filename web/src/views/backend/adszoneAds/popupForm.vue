<template>
    <!-- 对话框表单 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="baTable.form.operate ? true : false"
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
                        :label="t('adszoneZone.zone_id')"
                        v-if="!baTable.form.items!.zone_id"
                        type="remoteSelect"
                        v-model="baTable.form.items!.zone_id"
                        prop="zone_id"
                        :input-attr="{ pk: 'adszone_zone.id', field: 'name', 'remote-url': '/admin/AdszoneZone/index' }"
                        :placeholder="t('Please select field', { field: t('adszoneZone.zone_id') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.title')"
                        type="string"
                        v-model="baTable.form.items!.title"
                        prop="title"
                        :placeholder="t('Please input field', { field: t('adszoneZone.title') })"
                    />
                    <FormItem :label="t('adszoneZone.image')" type="image" v-model="baTable.form.items!.image" prop="image" />
                    <FormItem
                        :label="t('adszoneZone.linkurl')"
                        type="string"
                        v-model="baTable.form.items!.linkurl"
                        prop="linkurl"
                        :placeholder="t('Please input field', { field: t('adszoneZone.linkurl') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.target')"
                        type="radio"
                        v-model="baTable.form.items!.target"
                        prop="target"
                        :data="{ content: { _self: t('adszoneZone.target _self'), _blank: t('adszoneZone.target _blank') } }"
                        :placeholder="t('Please select field', { field: t('adszoneZone.target') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.ad_code')"
                        type="textarea"
                        v-model="baTable.form.items!.code"
                        prop="code"
                        :input-attr="{ rows: 3 }"
                        @keyup.enter.stop=""
                        @keyup.ctrl.enter="baTable.onSubmit(formRef)"
                        :placeholder="t('Please input field', { field: t('adszoneZone.ad_code') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.effectime')"
                        type="datetime"
                        v-model="baTable.form.items!.effectime"
                        prop="effectime"
                        :placeholder="t('Please select field', { field: t('adszoneZone.effectime') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.expiretime')"
                        type="datetime"
                        v-model="baTable.form.items!.expiretime"
                        prop="expiretime"
                        :placeholder="t('Please select field', { field: t('adszoneZone.expiretime') })"
                    />
                    <FormItem
                        :label="t('adszoneZone.weigh')"
                        type="number"
                        prop="weigh"
                        :input-attr="{ step: 1 }"
                        v-model.number="baTable.form.items!.weigh"
                        :placeholder="t('Please input field', { field: t('adszoneZone.weigh') })"
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

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    effectime: [
        buildValidatorData({ name: 'required', title: t('adszoneZone.effectime') }),
        buildValidatorData({ name: 'date', title: t('adszoneZone.effectime') }),
    ],
    expiretime: [
        buildValidatorData({ name: 'required', title: t('adszoneZone.expiretime') }),
        buildValidatorData({ name: 'date', title: t('adszoneZone.expiretime') }),
    ],
    create_time: [buildValidatorData({ name: 'date', title: t('adszoneZone.create_time') })],
    update_time: [buildValidatorData({ name: 'date', title: t('adszoneZone.update_time') })],
})
</script>

<style scoped lang="scss"></style>
