<template>
    <div v-if="product">
        <div class="card">
            <img :src="product.imageName" class="card__image">
            <div class="card__details">
                <h1>{{ product.name }}</h1>
                <h3 class="card__price">{{ product.price }}</h3>
                <p>{{ product.details }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>
</template>

<script setup>
import { products } from '@/data';
import { useRoute } from 'vue-router';
import NotFoundPage from '@/views/NotFoundView.vue'

const route = useRoute()
const product = products.find(product => product.id === route.params.productId);
</script>
<style scoped>
.card {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 1rem;
}
</style>

