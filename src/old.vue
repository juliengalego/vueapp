    <svg :width="largeur" height="20">
      <rect :width="largeur" height="20" style="fill-opacity:0.1;fill:rgb(100,100,100);stroke-width:1;stroke:rgb(0,0,0)"  v-on:mouseover="mouseOver" />
      <rect :width="taille" height="20" :x="debut" style="fill:rgb(65, 244, 65);fill-opacity:0.7;stroke-width:0;stroke:rgb(0,0,0)"  v-on:mouseover="mouseOver" />
      <text fill="#111" font-size="12" font-family="Verdana" x="3" y="15" v-on:mouseover="mouseOver">Janvier</text>
      <text fill="#111" font-size="12" font-family="Verdana" x="330" y="15" v-on:mouseover="mouseOver">Décembre</text>
      <rect width="5" :x="emplacement" y="0" height="20" style="fill:rgb(255,0,0)"  v-on:mouseover="mouseOver" />
      <rect :width="largeur" v-show="active" height="20" style="fill-opacity:0.5;fill:rgb(0,0,0);stroke-width:1;stroke:rgb(0,0,0)" v-on:mouseleave="mouseOver" />
      <text :width="largeur" v-show="active" fill="#fff" font-size="12" font-family="Verdana" x="3" y="15" v-on:mouseleave="mouseOver" >Saison entre {{debut_saison_libelle}} et {{fin_saison_libelle}}</text>
    </svg>