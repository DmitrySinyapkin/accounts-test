import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { Account } from "../types/account";
import { AccountTypeOptions } from "../constants/AccountTypeOptions";

export const useAccountsStore = defineStore('accounts', () => {
 
    const accounts = ref<Account[]>([])

    const setAccounts = (accountsArr: Account[]) => {
        accounts.value = accountsArr
    }

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
    }

    const removeAccount = (id: string) => {
        accounts.value = accounts.value.filter(a => a.id !== id)     
    }

    return {
        accounts,
        setAccounts,
        addAccount,
        saveAccount,
        removeAccount
    }
})
