<template>
  <div class="py-5 text-center bg-light" id="sugestoes">
    <div class="container-fluid">
        <div class="col-md-12 bg-light">
          <div class="m-0">
            <h1 class="text-danger text-uppercase my-2">
              Praias&nbsp;
            </h1>
          </div>
          <form class="form-inline justify-content-center m-0 my-2">
          <div class="input-group">
            <input
              type="text"
              class="form-control m-0"
              id="inlineFormInputGroup"
              placeholder="Pesquisar em Praias"
              v-model="search"
            />
          </div>
        </form>
          <b-row>
            <div class="col-md-4" v-for="(locais, index) in filtered" :key="index">
              <b-row class="mt-0 mb-0">
                
                <h3 class="m-auto">
                  <!-- <font-awesome-icon :icon="locais.icon" /> -->
                  <b-icon :icon="locais.icon"></b-icon>
                  {{ locais.heading }}
                </h3>
                
              </b-row>
              <b-card-group style="margin-top: 2%">
                
                <b-card class="text-left">
                  <h5 class="m-auto">{{ locais.titulo }}</h5>
                <img
                  class="img-fluid d-block w-40 mx-auto img-thumbnail"
                  :src="locais.src"
                /><p class="mt-2 mb-0">
                    Segurança:
                    <b-icon
                      icon="star-fill"
                      v-for="nota in locais.seguranca"
                      :key="nota"
                    ></b-icon>
                    <b-icon
                      icon="star"
                      v-for="notavazia in 5 - locais.seguranca"
                      :key="'star' + notavazia"
                    ></b-icon>
                  </p>
                  <p class="my-0 text-left">{{ locais.sobre_seguranca }}</p>
                  <p class="mt-2 mb-0"> Preço: <font-awesome-icon :icon="icon(locais)"  v-for="preco in locais.preco"
          :key="preco"/>
  <p class="my-0 text-left">{{ locais.sobre_preco }}</p>
                  <p class="mt-2 mb-0">O que esperar:</p>
                  <p class="my-0 text-left">{{ locais.review }}</p>
                  <p class="mt-2 mb-0">Ver no <a href="">Google Maps </a></p>
                  <template #footer>
        <small class="text-muted">Adicionar aos Favoritos</small>
      </template>
                </b-card>
              </b-card-group>
            </div>
          </b-row>
        </div>
      </div>
    </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";
// import { faUtensils } from "@fortawesome/free-solid-svg-icons";
// import { faMale } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "Praias",
  data() {
    return {
      // camera: faCamera,
      // utensils: faUtensils,
      // male: faMale,
      // heart: faHeart,
      money: faDollarSign,
      search:"",
      free: faCreativeCommonsNc,
      praias: [
        {
          titulo: "Arpoador",
          src:
            "http://visit.rio/wp-content/uploads/2015/08/8499036920_e0d626a650_k-1024x678.jpg",
          seguranca: 5,
          sobre_seguranca:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          preco: 4,
          sobre_preco:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
        },
        {
          titulo:"Grumari",
        src: "https://cdn.pixabay.com/photo/2017/10/07/05/32/grumari-2825554__340.jpg",
          seguranca: 3,
          sobre_seguranca:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          preco: 1,
          sobre_preco:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",

        },
        {
          titulo:"Ipanema",
        src: "https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_960_720.jpg",
          seguranca: 5,
          sobre_seguranca:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          preco: 4,
          sobre_preco:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
        },
        
      ],
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    icon(locais) {
      if (locais.preco < 2) {
        return this.free;
      } else {
        return this.money;
      }
    },
  },
  computed: {
    filtered: function () {
      var self = this;
      return this.praias.filter(function (result) {
        return (
          result.titulo.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        );
      });
      //return this.customers;
    },
  },
};
</script>
<style scoped>
h5{
    text-align: center;
}
</style>


