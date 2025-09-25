import type { Account } from "../../../types/account"

export interface Props {
    data: Account
}

export interface Emits {
    save: [account: Account]
    remove: [id: string]
}
