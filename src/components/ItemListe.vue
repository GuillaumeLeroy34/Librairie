<script setup>
const url = 'https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/23/livres'
const emit = defineEmits(["modL","delL"]);
const props = defineProps(['Livre'])
// utiliser search= à la place de motcle= dans la fonction de recherche de livre
function getListeLivres() {
    const fetchOptions = {
        method: 'GET'
    }
    fetch(url, fetchOptions) 

        .then((response) => {
            console.log(response.clone())
            return (response.json())
        })

        .then((dataJSON) => (dataJSON.forEach(element => {
            console.log(dataJSON.indexOf(element))
            console.log(element.titre)
        })))
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            getTodos();
        })

        .catch((error) => console.log(error));
}





</script>


<!-- truc à faire: en une ligne: titre du bouquin, prix, quantité, bouton - / + / supprimer
penser a faire le nécessaire pour créer une liste qui contient l'ensemble des élements créés avec
ce composant -->


<template>
    <div>
        <li>
            TITRE:{{ Livre._titre }}

            QUANTITÉ:{{ Livre._qtestock }}         


            PRIX:{{ Livre._prix }}

            <button @click="$emit('modL', Livre, 1)">+</button>

            <button @click="$emit('modL', Livre, -1)">-</button>

            <button @click="$emit('delL', Livre.id)">supprimer</button>
    
        </li>


    </div>
</template>


