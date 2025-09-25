<script setup lang="ts">
import type { Account } from '../../types/account';
import { AccountTypeOptions } from '../../constants/AccountTypeOptions';
import { useValidateAccount } from '../../composables/useValidateAccount/useValidateAccount';

interface Props {
    data: Account
}

const props = defineProps<Props>()

const emit = defineEmits<{
    save: [account: Account]
    remove: [id: string]
}>()

const saveAccount = (data: Account) => {
    emit('save', data)
}

const { defineField, errors, onValidate } = useValidateAccount(props.data, saveAccount)

const [marks] = defineField('marks')
const [type] = defineField('type')
const [login] = defineField('login')
const [password] = defineField('password')
</script>

<template>
    <form class="account-form">
        <div class="marks">
            <InputText
                v-model="marks"
                :invalid="!!errors.marks"
                fluid
                @blur="onValidate"
            />
        </div>
        <div class="type">
            <Select 
                v-model="type" 
                :options="Object.values(AccountTypeOptions)"
                size="large"
                fluid
                @change="onValidate" 
            />
        </div>
        <div class="internal-flex">
            <div class="internal-flex__item">
                <InputText 
                    v-model="login" 
                    :invalid="!!errors.login"
                    fluid
                    @blur="onValidate"
                />
            </div>
            <div 
                v-if="type === AccountTypeOptions.local"
            >
                <Password 
                    v-model="password"
                    :invalid="!!errors.password" 
                    toggle-mask
                    fluid
                    @blur="onValidate"
                />
            </div>
        </div>
        <div>
            <Button
                icon="pi pi-trash" 
                severity="secondary"
                @click="emit('remove', data.id)" 
            />
        </div>
    </form>
</template>

<style lang="scss" scoped>
.account-form {
    width: 100%;
    @include list-grid;
    margin: 10px 0;
}
</style>
