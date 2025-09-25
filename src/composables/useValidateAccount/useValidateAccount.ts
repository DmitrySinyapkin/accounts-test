import { useForm } from 'vee-validate';
import { schema } from './schema';
import type { Account } from '../../types/account';
import { transformAccountDataToFormValues, transformFormValuesToAccountData } from '../../utils/accountDataTransform';

export function useValidateAccount(data: Account, callback: (data: Account) => void) {
    const { defineField, values, errors, validate } = useForm({
        validationSchema: schema,
        initialValues: transformAccountDataToFormValues(data)
    })

    const onValidate = async () => {
        const { valid } = await validate()

        if (valid) {
            const newAccount = transformFormValuesToAccountData(values)
            callback(newAccount)
        }
    }

    return {
        errors,
        defineField,
        onValidate
    }
}
