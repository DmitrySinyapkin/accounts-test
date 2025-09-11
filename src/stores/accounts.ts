import { defineStore } from "pinia";
import { ref } from "vue";
import ls from '../utils/localStorage'

export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<Account[]>(ls.getAccounts())

    const addAccount = () => {
        const emptyAccount: Account = {
            marks: [],
            type: 'LDAP',
            login: '',
            password: null
        }
        
        accounts.value.push(emptyAccount)
    }

    const saveAccount = (account: Account) => {
        accounts.value.forEach(a => account.login === a.login ? account : a)
        ls.updateAccounts(accounts.value)
    }

    const removeAccount = (login: string) => {
        accounts.value = accounts.value.filter(a => a.login !== login)
        ls.updateAccounts(accounts.value)
    }

    return {
        accounts,
        addAccount,
        saveAccount,
        removeAccount
    }
})
