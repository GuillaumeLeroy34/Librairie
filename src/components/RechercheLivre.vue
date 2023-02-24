<script setup>
import { ref } from 'vue';

const id = ref("");
const name = ref("");
const emit = defineEmits(['getL', 'searchL'])

</script>

<template>
    <div>
        <form @submit.prevent="$emit('getL', id)">
        <input type="number" v-model="id" placeholder="id du livre ?">
        <input type="submit" value="récupérer">
        </form>
        <form @submit.prevent="$emit('searchL', name)">
            <input type="text" v-model="name" placeholder="titre du livre ?">
            <input type="submit" value="rechercher">
        </form>
    </div>
</template>