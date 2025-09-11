interface Mark {
    text: string
}

type AccountType = 'LDAP' | 'Локальная'

interface Account {
    marks: Mark[]
    type: AccountType
    login: string
    password: string | null
}
