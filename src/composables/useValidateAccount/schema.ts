import * as yup from 'yup'
import { AccountTypeOptions } from '../../constants/AccountTypeOptions'

export const schema = yup.object({
    marks: yup.string().max(50),
    type: yup.string(),
    login: yup.string().max(100).required(),
    password: yup
        .string()
        .when('type', {
            is: (type: string) => type === AccountTypeOptions.local,
            then: () => yup.string().max(100).required(),
            otherwise: () => yup.string()
        }),
})
