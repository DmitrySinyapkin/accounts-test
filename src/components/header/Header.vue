<script setup lang="ts">
import AddButton from './AddButton.vue';
</script>

<template>
    <div class="header">
        <h2>Учетные записи</h2>
        <AddButton />
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    gap: 20px;
    align-items: center;

    h2 {
        font-weight: 700;
        font-size: 1.5em;
    }
}
</style>
