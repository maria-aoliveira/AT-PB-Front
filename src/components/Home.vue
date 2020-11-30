<template>
  <div>
    <Navbar />
    <Landing />
    <Carrousel />
    <Gallery />
    <Sugestoes />
    <Reviews />
    <Sobre/>
    <Form />
    
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"
import Landing from './Landing.vue'
import Carrousel from './Carrousel.vue'
import Gallery from './Gallery.vue'
import Sugestoes from './Sugestoes.vue'
import Reviews from './Reviews.vue'

import Form from './Form.vue'
import Sobre from './Sobre.vue'




export default {
  name: 'Home',
  components:{
    Navbar,
    Landing,
    Carrousel,
    Gallery,
    Sugestoes,
    Reviews,
    Form,
    Sobre
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.section-primary {
  position: relative;
  height: 120vh;
  width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: black;
  background-position: center;
  color: white;
  /* background-image: url(https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_960_720.jpg); */
  background-image: url("../assets/turismo-rj.jpg");


}
.section-primary:before {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  content: " ";
  background: rgba(21, 21, 21, 0.75);
}


html,body
{
    /* width: 100%; */
    /* height: 100%; */
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
</style>
