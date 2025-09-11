<script setup lang="ts">
import Header from '../components/header/Header.vue';
import Hint from '../components/hint/Hint.vue';
</script>

<template>
    <section class="page">
        <Header />
        <Hint />
    </section>
</template>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
