<template>
    <h2>Produkt-Liste</h2>
    <div class="product-container">
        <div class="card" v-for="product in products" :key="product.id">
            <img :src="product.imageName" :alt="product.name" class="card__image">
            <div class="card__details">
                <h3 class="card__name">{{ product.name }}</h3>
                <p class="card__price">{{ product.price }}</p>
                <footer class="footer">
                    <router-link :to="'/products/' + product.id">Details ansehen</router-link>
                </footer>
            </div>
        </div>
    </div>
</template>
<script setup>
import { products } from '@/data'
</script>
<style>
.product-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
}

.card {
    border-radius: .3rem;
    background-color: white;
    padding-bottom: 1rem;
}

.card__details {
    margin: 0 1rem;
}
</style>