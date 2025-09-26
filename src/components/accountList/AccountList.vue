<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { useAccountsStore } from '../../stores/accounts';
import AccountItem from './accountItem/AccountItem.vue';
import AccountListHeader from './AccountListHeader.vue';

const accountsStore = useAccountsStore()

onMounted(() => {
    window.addEventListener('beforeunload', accountsStore.saveStoreToLocalStorage)
})

onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', accountsStore.saveStoreToLocalStorage)
})
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
