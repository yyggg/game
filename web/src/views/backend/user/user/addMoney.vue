<template>
    <el-dialog
        class="ba-operate-dialog"
        :model-value="!!baTable.form.operate"
        @close="baTable.toggleForm"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">{{t('user.user.Give users extra money')}}</div>
        </template>
        <div
            class="ba-operate-form"
            :class="'ba-' + baTable.form.operate + '-form'"
            :style="config.layout.shrink ? '' : 'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
        >
            <el-form
                ref="formRef"
                @keyup.enter="baTable.onSubmit(formRef)"
                :model="baTable.form.items"
                :label-position="config.layout.shrink ? 'top' : 'right'"
                :label-width="baTable.form.labelWidth + 'px'"
                :rules="rules"

            >
                <el-form-item prop="username" :label="t('user.user.User name')">
                    <el-input
                        v-model="baTable.table.extend!.row.username"
                        type="string"
                        disabled
                    ></el-input>
                </el-form-item>

                <FormItem
                    :label="t('user.user.type')"
                    v-model="baTable.form.items!.type"
                    type="radio"
                    :input-attr="{
                            border: true,
                            content: { '3': t('user.user.type 3'), '5': t('user.user.type 5') },
                        }"
                />

                <el-form-item prop="amount" :label="t('user.user.amount')">
                    <el-input
                        v-model="baTable.form.items!.amount"
                        type="number"
                        :placeholder="t('Please input field', { field: t('user.user.amount') })"
                    ></el-input>
                </el-form-item>

                <el-form-item prop="remark" :label="t('user.user.remark')">
                    <el-input
                        v-model="baTable.form.items!.remark"
                        type="textarea"
                        :placeholder="t('Please input field', { field: t('user.user.remark') })"
                    ></el-input>
                </el-form-item>

            </el-form>

        </div>

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
import {inject, reactive, ref, watch} from "vue"
import baTableClass from '/@/utils/baTable'
import { useI18n } from 'vue-i18n'
import {FormInstance, FormItemRule} from "element-plus";
import FormItem from '/@/components/formItem/index.vue'
import {buildValidatorData, regularPassword} from "/@/utils/validate";
import { useConfig } from '/@/stores/config'
import {baTableApi} from "/@/api/common";

const { t } = useI18n()
const baTable = inject('baTable') as baTableClass

const formRef = ref<FormInstance>()

const config = useConfig()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    amount: [buildValidatorData({ name: 'required', title: t('user.user.amount') })],
})



</script>


<style scoped lang="scss">

</style>
