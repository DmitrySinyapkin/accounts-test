import type { Account } from "../types/account"
import { LocalStorageKeys } from "../constants/LocalStorageKeys"

class LocalStorage {
    getAccounts() {
        const accountsJson = localStorage.getItem(LocalStorageKeys.accounts)
        return accountsJson ? JSON.parse(accountsJson) : []
    }
    updateAccounts(accounts: Account[]) {
        localStorage.setItem(LocalStorageKeys.accounts, JSON.stringify(accounts))
    }
}

export default new LocalStorage()
