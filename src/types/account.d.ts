interface Mark {
    text: string
}

type AccountType = 'LDAP' | 'Локальная'

interface Account {
    id: string
    marks: Mark[]
    type: AccountType
    login: string
    password: string | null
}
