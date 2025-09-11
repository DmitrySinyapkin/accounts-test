class LocalStorage {
    getAccounts() {
        const accountsJson = localStorage.getItem('account')
        return accountsJson ? JSON.parse(accountsJson) : []
    }
    updateAccounts(accounts: Account[]) {
        localStorage.setItem('accounts', JSON.stringify(accounts))
    }
}

export default new LocalStorage()
