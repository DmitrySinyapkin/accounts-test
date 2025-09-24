import { defineStore } from "pinia";
import { ref } from "vue";
import ls from '../utils/localStorage'
import { v4 as uuidv4 } from "uuid";
import type { Account } from "../types/account";
import { AccountTypeOptions } from "../constants/AccountTypeOptions";

export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<Account[]>(ls.getAccounts())

    const addAccount = () => {
        const emptyAccount: Account = {
            id: uuidv4(),
            marks: [],
            type: AccountTypeOptions.local,
            login: '',
            password: null
        }
        
        accounts.value.push(emptyAccount)
    }

    const saveAccount = (account: Account) => {
        accounts.value = accounts.value.map(a => account.id === a.id ? account : a)
        ls.updateAccounts(accounts.value)
    }

    const removeAccount = (id: string) => {
        accounts.value = accounts.value.filter(a => a.id !== id)
        ls.updateAccounts(accounts.value)
    }

    return {
        accounts,
        addAccount,
        saveAccount,
        removeAccount
    }
})
