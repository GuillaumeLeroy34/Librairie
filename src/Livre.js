// addresse https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/23/livres
export default class Livre {
    constructor(id, titre, qtestock, prix) {
      this._id = id;
      this._titre = titre;
      this._qtestock = qtestock;
      this._prix = prix;
      


    }  

    get id() {
      return this._id;
    }

    get titre() {
      return this._titre;
    }

    get qtestock() {
      return this._qtestock;
    }

    get prix(){
        return this._prix;
    }
  

      ajouterStock(){
        this._qtestock = this._qtestock + 1;
       }

       test1(){
        console.log("test réussi")
       }
    }
  