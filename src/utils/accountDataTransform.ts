import { AccountTypeOptions } from "../constants/AccountTypeOptions"
import type { Mark, Account, AccountFormValues } from "../types/account"



export const marksToString = (marks: Mark[]): string =>
    marks.reduce((str, mark, index, arr) => index === arr.length - 1 ? str + mark.text : str + `${mark.text}; `, '')

export const stringToMarksArray = (str: string): Mark[] =>
    str.split(';').map(sub => ({ text: sub.trim() }))

export const transformAccountDataToFormValues = (data: Account): AccountFormValues => {
    return {
        ...data,
        marks: marksToString(data.marks),
        password: data.password || ''
    }
}

export const transformFormValuesToAccountData = (data: AccountFormValues): Account => {
    return {
        ...data,
        password: data.password && data.type === AccountTypeOptions.local ? data.password : null,
        marks: stringToMarksArray(data.marks)
    }
}

