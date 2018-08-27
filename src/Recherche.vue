<script>
import data from "./data/list_products.json";

export default {
  data(){
      return {
          query: '',
          aliments : data,
          isActive : false,
      }
  },
  computed:
    {
        searchedItems:function()
        {
            var self=this;
            if(this.query != '')
                return this.aliments.filter(function(item){
                    return item.nom_fr.toLowerCase().indexOf(self.query.toLowerCase())>=0;
                    });
        }
    },
     methods: {
        toggleSearch: function(){
            this.isActive = !this.isActive;   
            if(this.isActive)
            {
                this.$refs.search.focus();
            }
        },
        selectItem: function(result){
            this.isActive = !this.isActive;   
            this.$emit('clicked', result)
        },
    }
  }

</script>

<template>
<div>
    <button v-on:click="toggleSearch" >Search</button>
   <div v-show="isActive" id="myOverlay" class="overlay"  v-on:click.self="toggleSearch">
  <div class="overlay-content">
      <input type="text" placeholder="Recherche..." v-model="query" name="search" ref="search" autofocus><br /><br /><br />
       <div class="search-zone" v-bind:key="item.nom_fr" v-for="(item) in searchedItems">
        <a v-on:click="selectItem(item.nom_fr)" >{{item.nom_fr}}</a>
    </div>
  </div>
</div> 
  </div>
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
