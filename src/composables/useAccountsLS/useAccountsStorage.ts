import { onBeforeUnmount, onMounted } from "vue";
import { useAccountsStore } from "../../stores/accounts";

export function useAccountsStorage() {
    const accountsStore = useAccountsStore()

    onMounted(() => {
        accountsStore.getAccounts()
        window.addEventListener('beforeunload', accountsStore.saveStoreToLocalStorage)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('beforeunload', accountsStore.saveStoreToLocalStorage)
    })

    return {
        accountsStore
    }
}
