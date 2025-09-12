<script setup lang="ts">
import { useAccountsStore } from '../../stores/accounts';
import AccountItem from './AccountItem.vue';
import AccountListHeader from './AccountListHeader.vue';

const accountsStore = useAccountsStore()
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
