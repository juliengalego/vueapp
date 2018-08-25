<script>
function getColor(value){
    //value from 0 to 1
    var hue=((value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}
export default {
    props: ['valeur','valeurMax'],
    data () {
        return {
        }
    },
    computed:
    {
        winkRapport(){
            let rapport = this.valeur/this.valeurMax;
            if(!isNaN(rapport))
                return this.valeur/this.valeurMax;
            else 
                return 0;
        },
        winkBackgroundColor(){
            let rapport = this.valeur/this.valeurMax;
            if(!isNaN(rapport))
                return  getColor(this.valeur/this.valeurMax);
        },
    }
}
</script>

<template >
  <div class="box6">
      <div :style="{width:Math.min(winkRapport, 1)*100+'%',backgroundColor:winkBackgroundColor, height:'100%'}">
          <span style="white-space:nowrap">{{ (winkRapport*100).toFixed(2) }}  %</span>
          <!-- <span style="white-space:nowrap">{{(rapport*100).toFixed(2)}} %</span> -->
       </div>

       
    </div>
</template>

<style scoped>
.box6{
  font-size:12px;
  width:200px;
  height:20px;
  border: solid black;
  border-color: black;
  font-size: 15px;
  border-width: 1px 2px 2px 3px;
  border-radius:95% 1% 92% 1%/1% 95% 1% 95%;
}
</style>