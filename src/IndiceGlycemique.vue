<script>
function getColor(value){
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}
export default {
    props:['valeur'],
    computed: {
             styleObject: function(){
                return {backgroundColor: getColor(this.valeur/100)}
            }
        }
}
</script>

<template>
  <div :style="styleObject" class="box box1">
       <div class="evenboxinner">IG</div><span class="valeur">{{valeur}}</span>
    </div>
</template>


<style script="text/css">

.box{
  width:50px;
  height:50px;
  background:#fff;
  border: solid black;
  border-color: black;
}

.valeur{
    font-size:20px;
    margin: 10px;
}

.box1{
  border-width: 1px 2px 2px 3px;
  border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(2deg);
}



.evenboxinner{
  transform: rotate(2deg);
  padding:0 5px;
  float:left;
  background:#fff;
  border:1px solid #222;
  box-shadow:2px 2px 0 #222;
}
</style>