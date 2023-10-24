<template>
    <header class="header">
        <router-link to="/">
            <div class="logo-wrap">
                <img :src="logo" alt="Logo" width="100">
                <p>... für den Sport</p>
            </div>
        </router-link>
        <nav class="nav-bar">
            <router-link to="/about" class="nav__link">
                Über uns
            </router-link>
        </nav>
    </header>
</template>
<script setup>
import logo from '@/assets/logo.png'
</script>
<style>
.logo-wrap {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: white;
    padding: 1rem;
}
</style>