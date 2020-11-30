<template>
  <nav
    class="navbar navbar-expand-md fixed-top navbar-dark"
    :class="{ scrolling: scrollPosition > 0 }"
  >
    <!-- <div class="container">           -->
    <b-navbar-brand tabindex="0"
      ><b
        ><font-awesome-icon :icon="circle" style="color: red" /><router-link to="/" id="a-logo" > SAP </router-link></b
      ></b-navbar-brand
    >
    <b-button
      tabindex="1"
      class="navbar-toggler navbar-toggler-right"
      v-b-toggle="'collapse-2'"
      type="button"
      data-toggle="collapse"
      data-target="#navbar3SupportedContent"
      aria-controls="navbar3SupportedContent"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </b-button>

    <b-collapse
      id="collapse-2"
      class="navbar-collapse text-center collapse show"
    >
      <!-- <ul class="navbar-nav m--2"> -->
      <b-navbar-nav >
        <!-- <b-nav-item tabindex="3">
          <router-link tag="nav" :to="{ name: 'home', hash: '#galeria' }"> GALERIA</router-link>
        </b-nav-item> -->
        <b-nav-item tabindex="4">
          <router-link tag="nav" :to="{ name: 'home', hash: '#sugestoes' }">SUGESTÕES </router-link>
        </b-nav-item>
        <!-- <b-nav-item tabindex="5">
          <router-link tag="nav" :to="{ name: 'home', hash: '#reviews' }"> REVIEWS </router-link>
        </b-nav-item> -->
              <b-nav-item tabindex="6">
          <router-link tag="nav" :to="{ name: 'home', hash: '#sobre' }"> SOBRE </router-link>
        </b-nav-item>
        <b-nav-item tabindex="7">
          <router-link tag="nav" :to="{ name: 'home', hash: '#form' }"> CONTATO </router-link>
        </b-nav-item>
        <b-nav-item tabindex="8">
          <router-link active-class="active" tag="nav" to="login"> LOGIN </router-link>
       </b-nav-item> 
        <b-button variant="outline-danger" tabindex="9" >
          <router-link active-class="active" tag="nav" to="signup"> CADASTRAR </router-link>
        </b-button>        

        <!-- </ul> -->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!-- <form class="form-inline justify-content-center m-0 my-2">
          <div class="input-group">
            <input
              type="text"
              class="form-control m-0"
              id="inlineFormInputGroup"
              placeholder="Pesquisar"
              v-model="pesquisa"
            />
            <div class="input-group-append"> -->
              <!-- <router-link to="resultado"> -->
                <!-- <button class="btn btn-danger" type="button" right>
                <font-awesome-icon :icon="search" />
              </button> -->
              <!-- </router-link> -->
            <!-- </div>
          </div>
        </form> -->
      </b-navbar-nav>
      <b-dropdown id="dropdown-1" text="Locais" class="m-md-2" variant="danger">
        <b-dropdown-item><router-link tag="nav" to="/hospitais"> Hospitais </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/delegacias"> Delegacias </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/pontos-turisticos"> Pontos Turísticos </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/praias"> Praias </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/onde-comer"> Onde Comer </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/onde-dormir"> Onde Dormir </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/eventos"> Eventos </router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link tag="nav" to="/banheiros"> Banheiros </router-link></b-dropdown-item>
      </b-dropdown>
    </b-collapse>
    <!-- </div> -->
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Navbar",
  data() {
    return {
      search: faSearch,
      circle: faCircle,
      scrollPosition: 0,
      pesquisa: "",
      dados:[]
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    handleTopBar() {
      this.scrollPosition = window.scrollY;
      console.log(scroll)
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleTopBar);
  },
};
</script>

<style>
.navbar {
  width: 100%;
  padding: 0.8rem !important;
  background-color: #1a384c;
  color:  #ffffff!important;
}
.scrolling {
  background-color: #151515;
}

.item {
    color: rgb(236, 117, 19)!important;
}


#a-logo{
  color: #ffffff!important;
}

</style>