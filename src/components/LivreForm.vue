<script setup>
import { ref } from 'vue';

const emit = defineEmits(["addL", "modL"]);
const prix = ref("");
const qtestock = ref("");
const titre = ref("");

</script>

<template>
    <form @submit.prevent="$emit('addL', titre, qtestock, prix)">
        <input type="text" v-model="titre" placeholder="titre ?" />
        <input type="number" v-model="qtestock" placeholder="quantité en stock ?" />
        <input type="number" v-model="prix" placeholder="prix ?" />
        <input type="submit" value="valider" />
    </form>
</template>


