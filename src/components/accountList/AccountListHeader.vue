<script setup lang="ts">
const headers = {
    marks: 'Метки',
    type: 'Тип записи',
    login: 'Логин',
    password: 'Пароль',
    remove: ' ' 
}
</script>

<template>
    <div class="list-header">
        <div>
            <span>{{ headers.marks }}</span>
        </div>
        <div>
            <span>{{ headers.type }}</span>
        </div>
        <div class="internal-flex">
            <div class="internal-flex__item">
                <span>{{ headers.login }}</span>
            </div>
            <div>
                <span>{{ headers.password }}</span>
            </div>
        </div>
        <div>
            <span>{{ headers.remove }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list-header {
    @include list-grid;

    .internal-flex__item {
        max-width: 65%;
    }
}
</style>
