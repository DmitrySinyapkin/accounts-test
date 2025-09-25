import { AccountTypeOptions } from "../constants/AccountTypeOptions"

export interface Mark {
    text: string
}

export type AccountType = (typeof AccountTypeOptions)[keyof typeof AccountTypeOptions]

export interface Account {
    id: string
    marks: Mark[]
    type: AccountType
    login: string
    password: string | null
}

export type AccountFormValues = Omit<Account, 'marks'> & { marks: string }
