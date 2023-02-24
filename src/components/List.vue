
<script setup >
import LivreForm from './LivreForm.vue';
import Livre from '../Livre.js'
import { reactive, onMounted } from "vue";
import ItemListe from './ItemListe.vue';
import RechercheLivre from './RechercheLivre.vue';
const url = 'https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/33/livres'
const listeL = reactive([]);


defineProps(["Livre"])

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

        .then((dataJSON) => {
            listeL.splice(0, listeL.length)
            dataJSON.forEach((l) => (listeL.push(new Livre(l.id, l.titre, l.qtestock, l.prix))))
            console.log(listeL)
        })

        .catch((error) => console.log(error));

}

onMounted(
    () => { getListeLivres(); }
)

function handlerDeleteLivre(id) {
    console.log("tentative de suppression détectée pour l'id" + id)
    const fetchOptions = {
        method: 'DELETE'
    }
    fetch(url + '/' + id, fetchOptions)
        .then((response) => {
            getListeLivres();
            return response.json();

        })



}

function handlerAddLivre(titre, qtestock, prix) {
    console.log(titre, qtestock, prix)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")


    const fetchOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ titre: titre, qtestock: qtestock, prix: prix }),
    }

    console.log(fetchOptions)

    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })

        .then((dataJSON) => {
            console.log(dataJSON);
            getListeLivres();
        })
        .catch((error) => console.log(error));
}

function handlerModifierLivre(Livre, qteMod) {
    let id = Livre._id;
    let titre = Livre.titre;
    let qtestock = Livre.qtestock + qteMod;
    let prix = Livre.prix;
    if (Livre.qtestock <= 0) {
        handlerDeleteLivre(Livre.id);
    }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    const fetchOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({
            'id': id,
            'titre': titre,
            'qtestock': qtestock,
            'prix': prix,

        })
    }

    fetch(url, fetchOptions)

        .then((response) => { return response.json(); })



        .then(getListeLivres)

        .catch((error) => console.log(error))



}

function handlergetLivre(id) {
    const fetchOptions = {
        method: 'GET'

    }
    fetch(url + '/' + id, fetchOptions)
        .then((response) => {
            return response.json();

        })
        .then((dataJSON) => {
            listeL.splice(0, listeL.length)
            dataJSON[0] = l;
            listeL.push(new Livre(l.id, l.titre, l.qtestock, l.prix))
            console.log(listeL);
        })
    }

function handlerSearchWithName(name) {
    const fetchOptions = {
        method: "GET"
    }

    fetch(url + "?search=" + name, fetchOptions)
        .then((response) => {
            console.log("résultats de la reqûete" + response)
            return (response.json())
        })

        .then((dataJSON) => {
            listeL.splice(0, listeL.length)
            dataJSON.forEach((l) => (listeL.push(new Livre(l.id, l.titre, l.qtestock, l.prix))))
            console.log(listeL)
        })

        .catch((error) => console.log(error));

}
</script>





<template>
    <div id: total>
        <div>
            liste des livres en stock:
        </div>
        <button id="boutonTest" @click="getListeLivres">actualiser la liste:</button>
        <div>
            <RechercheLivre @getL="handlergetLivre" id @searchL="handlerSearchWithName" name></RechercheLivre>
        </div>
        <hr>
        <LivreForm @addL="handlerAddLivre"> </LivreForm>
        <ul>
            <ItemListe v-for="a of listeL" :key="a.id" :Livre="a" @modL="handlerModifierLivre" a
              @delL="handlerDeleteLivre" id/>
        </ul>
    </div>
</template>


<style scoped></style>