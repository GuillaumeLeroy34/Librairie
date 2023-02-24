<script setup>
import ItemListe from './components/ItemListe.vue';
import List from './components/List.vue';
import LivreForm from './components/LivreForm.vue';

const emit = defineEmits(["addL"]);



</script>

<template>
  <header>
    <h1>Libravore: liste des livres disponibles</h1>  
    <List></List>
    

  </header>
</template>