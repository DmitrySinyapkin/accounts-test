<script setup lang="ts">
import { useAccountsStorage } from '../../composables/useAccountsStorage/useAccountsStorage';
import AccountItem from './accountItem/AccountItem.vue';
import AccountListHeader from './AccountListHeader.vue';

const { accountsStore } = useAccountsStorage()
</script>

<template>
    <DataView :value="accountsStore.accounts">
        <template #header>
            <AccountListHeader />
        </template>
        <template #list="slotProps">
            <AccountItem
                v-for="item in slotProps.items"
                :key="item.id"
                :data="item"
                @save="accountsStore.saveAccount"
                @remove="accountsStore.removeAccount"
            />
        </template>
    </DataView>
</template>
