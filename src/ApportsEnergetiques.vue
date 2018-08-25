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
      <div>Energie kcal
        <barre :valeur=aliment.kcal  :valeurMax=ajr.kcal></barre></div>
       <div>Protéines g
        <barre :valeur=aliment.proteine  :valeurMax=ajr.Proteine></barre></div>
       <div>Glucides g
        <barre :valeur=aliment.glucide  :valeurMax=ajr.Glucide></barre></div>
       <div>Lipides g </div> 
        <barre :valeur=aliment.lipide  :valeurMax=ajr.Lipide></barre>
       <div>Sucres g</div>
        <barre :valeur=aliment.sucre  :valeurMax=ajr.Sucre></barre>
       <div>Fibres alimentaires g</div>
        <barre :valeur=aliment.fibre  :valeurMax=ajr.Fibre></barre>
       <div>AG saturés g</div>
        <barre :valeur=aliment.ags  :valeurMax=ajr.AGsature></barre>
        <div>Calcium mg</div>
        <barre :valeur=aliment.calcium  :valeurMax=ajr.Calcium></barre>
        <div>Chlorure mg</div>
        <barre :valeur=aliment.chlorureSodium  :valeurMax=ajr.Chlorure></barre>
        <div>Cuivre mg</div>
        <barre :valeur=aliment.cuivre  :valeurMax=ajr.Cuivre></barre>
        <div>Fer mg</div>
        <barre :valeur=aliment.fer  :valeurMax=ajr.Fer></barre>
        <div>Iode µg</div>
        <barre :valeur=aliment.iode  :valeurMax=ajr.Iode></barre>
        <div>Magnésium mg</div>
        <barre :valeur=aliment.magnesium  :valeurMax=ajr.Magnesium></barre>
        <div>Manganèse mg</div>
        <barre :valeur=aliment.manganese  :valeurMax=ajr.Manganese></barre>
        <div>Phosphore mg</div>
        <barre :valeur=aliment.phosphore  :valeurMax=ajr.Phosphore></barre>
        <div>Potassium mg</div>
        <barre :valeur=aliment.potassium  :valeurMax=ajr.Potassium></barre>
        <div>Sélénium µg</div>
        <barre :valeur=aliment.selenium  :valeurMax=ajr.Selenium></barre>
        <div>Sodium mg</div>
        <barre :valeur=aliment.sodium  :valeurMax=ajr.Sodium></barre>
        <div>Zinc mg</div>
        <barre :valeur=aliment.zinc  :valeurMax=ajr.Zinc></barre>
        <div>Vitamine A Rétinol µg</div>
        <barre :valeur=aliment.retinol  :valeurMax=ajr.A></barre>
        <div>Beta-Carotène µg</div>
        <barre :valeur=aliment.betaCarotene  :valeurMax=ajr.betaCarotene></barre>
        <div>Vitamine D µg</div>
        <barre :valeur=aliment.D  :valeurMax=ajr.D3></barre>
        <div>Vitamine E mg</div>
        <barre :valeur=aliment.E  :valeurMax=ajr.E></barre>
        <div>Vitamine K µg</div>
        <barre :valeur=aliment.K1  :valeurMax=ajr.K></barre>
        <div>Vitamine C mg</div>
        <barre :valeur=aliment.C  :valeurMax=ajr.C></barre>
        <div>Vitamine B1 ou Thiamine mg</div>
        <barre :valeur=aliment.B1  :valeurMax=ajr.B1></barre>
        <div>Vitamine B2 ou Riboflavine mg</div>
        <barre :valeur=aliment.B2  :valeurMax=ajr.B2></barre>
        <div>Vitamine B3 ou PP ou Niacine mg</div>
        <barre :valeur=aliment.B3  :valeurMax=ajr.B3></barre>
        <div>Vitamine B5 ou Acide pantothénique mg</div>
        <barre :valeur=aliment.B5  :valeurMax=ajr.B5></barre>
        <div>Vitamine B6 mg</div>
        <barre :valeur=aliment.B6  :valeurMax=ajr.B6></barre>
        <div>Vitamine B9 ou Folates totaux µg</div>
        <barre :valeur=aliment.B9  :valeurMax=ajr.B9></barre>
        <div>Vitamine B12 µg</div>
        <barre :valeur=aliment.B12  :valeurMax=ajr.B12></barre>
    </div>
</template>

								

							    
