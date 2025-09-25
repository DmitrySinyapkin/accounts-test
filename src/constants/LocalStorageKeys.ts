import type { LocalStorageKeysType } from "../components/composables/useLocalStorage/types"

export const LocalStorageKeys: LocalStorageKeysType = {
    accounts: 'accounts'
} as const

export type LSKeys = typeof LocalStorageKeys[keyof typeof LocalStorageKeys] 
