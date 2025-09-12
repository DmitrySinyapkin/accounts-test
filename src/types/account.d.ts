interface Mark {
    text: string
}

type AccountType = typeof ACCOUNT_TYPES[number]

interface Account {
    id: string
    marks: Mark[]
    type: AccountType
    login: string
    password: string | null
}
