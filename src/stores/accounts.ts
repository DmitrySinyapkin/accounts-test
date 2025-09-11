import { defineStore } from "pinia";
import { ref } from "vue";
import ls from '../utils/localStorage'

export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<Account[]>(ls.getAccounts())

    const addAccount = (account: Account) => {
        accounts.value.push(account)
        ls.updateAccounts(accounts.value)
    }

    const removeAccount = (login: string) => {
        accounts.value = accounts.value.filter(a => a.login !== login)
        ls.updateAccounts(accounts.value)
    }

    return {
        accounts,
        addAccount,
        removeAccount
    }
})
