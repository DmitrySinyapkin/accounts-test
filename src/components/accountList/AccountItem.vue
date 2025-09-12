<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup'
import { marksToString, stringToMarksArray } from '../../utils/marksTransform';
import { computed } from 'vue';

interface Props {
    data: Account
}

const props = defineProps<Props>()

const emit = defineEmits<{
    save: [account: Account]
    remove: [id: string]
}>()

const typeOptions = ['LDAP' , 'Локальная']

const initialValues = computed(() => ({
    ...props.data,
    marks: marksToString(props.data.marks),
    password: props.data.password || ''
}))

const { defineField, values, errors, validate } = useForm({
  validationSchema: yup.object({
    marks: yup.string().max(50),
    type: yup.string(),
    login: yup.string().max(100).required(),
    password: yup
        .string()
        .when('type', {
            is: (type: string) => type === 'Локальная',
            then: () => yup.string().max(100).required(),
            otherwise: () => yup.string()
        }),
  }),
  initialValues: initialValues.value
})

const [marks] = defineField('marks')
const [type] = defineField('type')
const [login] = defineField('login')
const [password] = defineField('password')

const onValidate = async () => {
    const { valid } = await validate()

    if (valid) {
        const newAccount = {
            ...values,
            password: values.password || null,
            marks: stringToMarksArray(values.marks)
        }
        
        emit('save', newAccount)
    }
}
</script>

<template>
    <form class="account-form">
        <div>
            <InputText
                v-model="marks"
                fluid
                @blur="onValidate"
            />
        </div>
        <div>
            <Select 
                v-model="type" 
                :options="typeOptions"
                size="large"
                @change="onValidate" 
            />
        </div>
        <div class="credentials">
            <div>
                <InputText 
                    v-model="login" 
                    :invalid="!!errors.login"
                    fluid
                    @blur="onValidate"
                />
            </div>
            <div v-if="type === 'Локальная'">
                <Password 
                    v-model="password"
                    :invalid="!!errors.password" 
                    toggle-mask
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
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;

    .credentials {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
    }
}
</style>
