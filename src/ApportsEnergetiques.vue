<script>
import barre from './Barre.vue'

function getColor(value){
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}

export default {
     components: {
         barre
     },
     props:['aliment'],

    computed:{
        indicateurs: function(){
            var result = [
                    {titre:"Energie kcal", valeur:this.aliment.kcal, valeurMax:this.ajr.kcal}, 
                    {titre:"Lipides g", valeur:this.aliment.lipide, valeurMax:this.ajr.lipide},
                    {titre:"Protéines g", valeur:this.aliment.proteine,valeurMax:this.ajr.proteine},
                    {titre:"Glucides g", valeur:this.aliment.glucide,valeurMax:this.ajr.glucide},
                    {titre:"Sucres g", valeur:this.aliment.sucre,valeurMax:this.ajr.sucre},
                    {titre:"Fibres alimentaires g", valeur:this.aliment.fibre,valeurMax:this.ajr.fibre},
                    {titre:"AG saturés g", valeur:this.aliment.ags,valeurMax:this.ajr.ags},
                    {titre:"Calcium mg", valeur:this.aliment.calcium,valeurMax:this.ajr.calcium},
                    {titre:"Chlorure mg", valeur:this.aliment.chlorureSodium,valeurMax:this.ajr.chlorure},
                    {titre:"Cuivre mg", valeur:this.aliment.cuivre,valeurMax:this.ajr.cuivre},
                    {titre:"Fer mg", valeur:this.aliment.fer,valeurMax:this.ajr.fer},
                    {titre:"Iode µg", valeur:this.aliment.iode,valeurMax:this.ajr.iode},
                    {titre:"Magnésium mg", valeur:this.aliment.magnesium,valeurMax:this.ajr.magnesium},
                    {titre:"Manganese mg", valeur:this.aliment.manganese,valeurMax:this.ajr.manganese},
                    {titre:"Phosphore mg", valeur:this.aliment.phosphore,valeurMax:this.ajr.phosphore},
                    {titre:"Potassium mg", valeur:this.aliment.potassium,valeurMax:this.ajr.potassium},
                    {titre:"Sélénium µg", valeur:this.aliment.selenium,valeurMax:this.ajr.selenium},
                    {titre:"Sodium mg", valeur:this.aliment.sodium,valeurMax:this.ajr.sodium},
                    {titre:"Zinc mg", valeur:this.aliment.zinc,valeurMax:this.ajr.zinc},
                    {titre:"Vitamine A Rétinol µg", valeur:this.aliment.retinol,valeurMax:this.ajr.A},
                    {titre:"Beta-Carotène µg", valeur:this.aliment.betaCarotene,valeurMax:this.ajr.betaCarotene},
                    {titre:"Vitamine D", valeur:this.aliment.D,valeurMax:this.ajr.D3},                
                    {titre:"Vitamine E", valeur:this.aliment.E,valeurMax:this.ajr.E},               
                    {titre:"Vitamine K", valeur:this.aliment.K1,valeurMax:this.ajr.K},               
                    {titre:"Vitamine C", valeur:this.aliment.C,valeurMax:this.ajr.C},               
                    {titre:"Vitamine B1 mg", valeur:this.aliment.B1,valeurMax:this.ajr.B1},       
                    {titre:"Vitamine B2 mg", valeur:this.aliment.B2,valeurMax:this.ajr.B2},       
                    {titre:"Vitamine B3 mg", valeur:this.aliment.B3,valeurMax:this.ajr.B3},      {titre:"Vitamine B5 mg", valeur:this.aliment.B5,valeurMax:this.ajr.B5},       
                    {titre:"Vitamine B6 mg", valeur:this.aliment.B6,valeurMax:this.ajr.B6},      {titre:"Vitamine B8 mg", valeur:this.aliment.B9,valeurMax:this.ajr.B8},
                    {titre:"Vitamine B9 mg", valeur:this.aliment.B9,valeurMax:this.ajr.B9},
                    {titre:"Vitamine B12 mg", valeur:this.aliment.B12,valeurMax:this.ajr.B12},

                ];
                    return result.sort(function(a, b){ 
                        if (a.valeur == null && b.valeur != null) {
                            return -1;
                        } else if (a.valeur != null && b.valeur == null) {
                            return 1;
                        } else if (a.valeur == null && b.valeur == null) {
                            return 0;
                        }
                        if(a.valeur == null || b.valeur == null)
                            return -10000;
                        var rapportA = (a.valeur/a.valeurMax);
                        var rapportB =  (b.valeur/b.valeurMax);
                        return rapportA - rapportB;
                    }).reverse();
        },
    },
    data () {
        return {

            valeur: 1,
            ajr:{
                kcal:2000,
                A:800,
                D3:5,
                E:12,
                K:75,
                C :80,
                B1 :1.1,
                B2 :1.4,
                B3 :16,
                B6 :1.4,
                B9 :200,
                B12:2.5,
                B8 :50,
                B5 :6,
                potassium:2000,
                chlorure:800,
                calcium:800,
                phosphore:700,
                magnesium:375,
                fer:14,
                zinc:10,
                cuivre:1,
                manganese:2,
                fluorure:3.5,
                selenium:55,
                chrome: 40,
                molybdène: 50,
                iode :150,
                sodium :2000,
                fibre :38,
                glucide:260,
                sucre:90,
                proteine:50,
                lipide:70,
                ags:20,
                betaCarotene:4800,
            },
        }
    }
}
</script>

<template>
  <div>
      <div>
    <span v-for="item in indicateurs">
        <div v-if="item.valeur != null && item.valeur != 0">
        {{ item.titre }}
      <barre :valeur=item.valeur  :valeurMax=item.valeurMax></barre></div>
    </span>
   </div>

    </div>
</template>

								

							    
