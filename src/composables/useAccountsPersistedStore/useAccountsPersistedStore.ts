import { onBeforeUnmount, onMounted } from "vue";
import { useAccountsStore } from "../../stores/accounts";
import { LocalStorageKeys } from "../../constants/LocalStorageKeys";

export function useAccountsPersistedStore() {
    const accountsStore = useAccountsStore()

    const getAccounts = () => {
        const accountsJson = localStorage.getItem(LocalStorageKeys.accounts)
        accountsStore.setAccounts(accountsJson ? JSON.parse(accountsJson) : [])
    }

    const saveAccounts = () => {
        const accountsToSave = accountsStore.accounts.filter(a => a.login)
        localStorage.setItem(LocalStorageKeys.accounts, JSON.stringify(accountsToSave))
    }

    onMounted(() => {
        getAccounts()
        window.addEventListener('beforeunload', saveAccounts)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('beforeunload', saveAccounts)
    })

    return accountsStore
}
