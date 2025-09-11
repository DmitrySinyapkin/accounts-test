<script setup lang="ts">
import { computed } from 'vue';
import { useAccountsStore } from '../../stores/accounts';

const accountsStore = useAccountsStore()

const disabled = computed(() => accountsStore.accounts.length > 0 && !accountsStore.accounts[accountsStore.accounts.length - 1].login)
</script>

<template>
    <Button
        icon="pi pi-plus" 
        severity="secondary"
        :disabled="disabled"
        @click="accountsStore.addAccount" 
    />
</template>
