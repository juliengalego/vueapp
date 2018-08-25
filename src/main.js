import Vue from 'vue'
import Saison from './Saison.vue'
import indiceglycemique from './IndiceGlycemique.vue'
import apportsenergetiques from './ApportsEnergetiques.vue'
import recherche from './Recherche.vue'
import data from "./data/data.json";

new Vue({
  el: '#myApplication',
  components: {
    Saison, indiceglycemique, apportsenergetiques, recherche
  },
  data(){
    return {
        res : '',
        aliment : '',
    }
},
  methods: {
    onClickChild: function(valeur){
        this.res = valeur;
        this.aliment = data.filter(function(item){return item.nom_fr.toLowerCase().indexOf(valeur.toLowerCase())>=0;})[0];
    },
  },

})
