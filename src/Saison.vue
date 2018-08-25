<script>
export default {
  props:
  {
    debutsaison: Number,
    finsaison: Number,
  },
  data () {
    var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout', 'Septembre', 'Octobre','Novembre','Décembre'];
    var debut_saison = this.debutsaison;
    var fin_saison = this.finsaison;
    var month = new Date().getMonth() + 1 + new Date().getDay() / 30 ;
    var width = 400;
    var emplacement = width * (month/12);
    var debut = width * ((debut_saison-1)/12);
    var taille = width * (fin_saison/12)-debut;
    return {
      debut_saison: debut_saison,
      fin_saison: fin_saison,
      largeur : width,
      mois: month,
      emplacement :emplacement,
      debut:  debut,
      taille : taille,
      active: false,
      debut_saison_libelle: mois[debut_saison-1],
      fin_saison_libelle: mois[fin_saison-1]
    }
  },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        }
    }
}
</script>

<template >
  <div>

      <div class="box5">
      <svg :width="largeur" height="20">
      <rect :width="taille" height="20" :x="debut" style="fill:rgb(65, 244, 65);fill-opacity:0.7;stroke-width:0;stroke:rgb(0,0,0)"  v-on:mouseover="mouseOver" />
      <text fill="#111" font-size="12" font-family="Verdana" x="3" y="15" v-on:mouseover="mouseOver">Janvier</text>
      <text fill="#111" font-size="12" font-family="Verdana" x="330" y="15" v-on:mouseover="mouseOver">Décembre</text>
      <rect width="5" :x="emplacement" y="0" height="20" style="fill:rgb(255,0,0)"  v-on:mouseover="mouseOver" />
      <rect :width="largeur" v-show="active" height="20" style="fill-opacity:0.5;fill:rgb(0,0,0);stroke-width:1;stroke:rgb(0,0,0)" v-on:mouseleave="mouseOver" />
      <text :width="largeur" v-show="active" fill="#fff" font-size="12" font-family="Verdana" x="3" y="15" v-on:mouseleave="mouseOver" >Saison entre {{debut_saison_libelle}} et {{fin_saison_libelle}}</text>
    </svg>
    </div>
  </div>

</template>



<style script="text/css">
.box5{
  width:400px;
  height:20px;
  background:#fff;
  border: solid black;
  border-color: black;
  font-size: 15px;
  border-width: 1px 2px 2px 3px;
  border-radius:95% 1% 92% 1%/1% 95% 1% 95%;
}
</style>