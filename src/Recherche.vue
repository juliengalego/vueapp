<script>
import data from "./data/list_products.json";

export default {
  data(){
      return {
          query: '',
          aliments : data,
      }
  },
     methods: {
        selectItem: function(result){
            history.pushState("Test", this.query, "/a/"+this.query)
            this.$emit('clicked', result)
        },
    }
  }

</script>

<template>
<v-autocomplete
          v-model="query"
          :items="aliments"  
          item-text="nom_fr" 
          persistent-hint
          prepend-icon="search"
          v-on:change="selectItem(query)"
          chips
        >
</v-autocomplete>
</template>

<style scoped>
/* The overlay effect with black background */
.overlay {
  height: 100%;
  width: 100%;
  display: visible;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.9); /* Black with a little bit see-through */
}

.overlay-content {
  position: relative;
  top: 5%;
  width: 60%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.search-zone{
    background-color: white;
    width: 100%;
    font-size: 20px;
}

.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 97%;
  background: white;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
}

</style>
