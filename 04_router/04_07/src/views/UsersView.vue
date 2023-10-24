<template>
    <h1>UsersView</h1>
    <p>Hallo {{ $route.params.username }}</p>
</template>
<script setup>
import { useRoute } from 'vue-router';


const route = useRoute()
console.log(route.params.username)
</script>