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
                Potassium:2000,
                Chlorure:800,
                Calcium:800,
                Phosphore:700,
                Magnesium:375,
                Fer:14,
                Zinc:10,
                Cuivre:1,
                Manganese:2,
                Fluorure:3.5,
                Selenium:55,
                Chrome: 40,
                Molybdène: 50,
                Iode :150,
                Sodium :2000,
                Fibre :38,
                Glucide:260,
                Sucre:90,
                Proteine:50,
                Lipide:70,
                AGsature:20,
                betaCarotene:4800,
            },
        }
    }
}
</script>
<template>
<div>
    <li v-for="item in indicateurs">
    {{ item.titre }}
    {{ item.valeurMin }}
    {{ item.valeurMax }}
    </li>
</div>