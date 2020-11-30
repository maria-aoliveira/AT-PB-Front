<template>
  <div class="py-5 text-center bg-light" id="sugestoes">
    <div class="container-fluid">
      <div class="row bg-danger p-4">
        <div class="col-md-12 bg-light">
          <div class="m-0">
            <h1 class="text-danger text-uppercase mt-4 mb-0">
              Nossas Sugestões do mês&nbsp;
            </h1>
            <p class="m-0">(para todos os bolsos!)</p>
          </div>
          <b-row>
            <div class="col-md-3" v-for="(locais, index) in sugestoes" :key="index">
              <b-row class="mt-4 mb-0">
                
                <h3 class="m-auto">
                  <!-- <font-awesome-icon :icon="locais.icon" /> -->
                  <b-icon :icon="locais.icon"></b-icon>
                  {{ locais.heading }}
                </h3>
                
              </b-row>
              <b-card-group style="margin-top: 15%">
                <b-card class="text-center">
                
                <h5 class="m-auto">{{ locais.titulo }}</h5>
                <img
                  class="img-fluid d-block w-40 mx-auto img-thumbnail"
                  :src="locais.src"
                />
                <div class="text-left">
                  <p class="mt-2 mb-0">
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
                  <p class="mt-2 mb-0"> Preço: <font-awesome-icon :icon="icon(locais)" v-for="preco in locais.preco"
          :key="preco"/>
  <p class="my-0 text-left">{{ locais.sobre_preco }}</p>
                  <p class="mt-2 mb-0">O que esperar:</p>
                  <p class="my-0 text-left">{{ locais.review }}</p>
                  <p class="mt-2 mb-0">Ver no <a href="">Google Maps </a></p>    
                </div>
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
  name: "Sugestoes",
  data() {
    return {
      // camera: faCamera,
      // utensils: faUtensils,
      // male: faMale,
      // heart: faHeart,
      money: faDollarSign,
      free: faCreativeCommonsNc,
      sugestoes: [
        {
          heading: "Pontos Turísticos",
          icon: "camera",
          titulo: "Teatro Municipal",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Teatro_Municipal_-_panoramio_%284%29.jpg/1280px-Teatro_Municipal_-_panoramio_%284%29.jpg",
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
          heading: "Para comer bem",
          icon: "egg-fried",
          titulo: "Antiquarius",
          src:
            "https://media.istockphoto.com/photos/male-chef-cooking-spaghetti-on-stove-in-open-air-restaurant-picture-id1059836196?b=1&amp;k=6&amp;m=1059836196&amp;s=170667a&amp;w=0&amp;h=3U-O6eS-1BF2-bW9CtpNxzmre3Ztt46zV2rS78_rT8c=",

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
          heading: "Para toda a família",
          icon: "unlock",
         titulo:"Jardim Botânico",
        src: "https://cdn.pixabay.com/photo/2015/03/12/17/24/nature-670516__340.jpg",

          seguranca: 5,
          sobre_seguranca:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          preco: 2,
          sobre_preco:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
        },
        {
          heading: "Para curtir juntinho",
          icon: "emoji-heart-eyes",
          titulo:"Passeio na Roda Gigante",
        src: "https://cdn.pixabay.com/photo/2019/04/15/13/48/ferris-wheel-4129391__340.jpg",

          seguranca: 5,
          sobre_seguranca:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          preco: 3,
          sobre_preco:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
        },
        {
         titulo:"Calçadão de Copacabana",
        src: "https://cdn.pixabay.com/photo/2016/02/19/15/49/beach-1210567__340.jpg",
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
          titulo: "Bar Tradicional",
          src:
            "https://media.istockphoto.com/photos/bolinho-de-bacalhau-traditional-portuguese-cod-fish-croquette-picture-id896486300?b=1&amp;k=6&amp;m=896486300&amp;s=170667a&amp;w=0&amp;h=7u-gdd09UGOFgtdtfSoA9-Q89ul_BJBBrHtzvcc7UVw=",
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
          titulo:"Museu do Amanhã",
        src: "https://cdn.pixabay.com/photo/2017/05/16/22/11/rio-de-janeiro-vacation-2319223__340.jpg",
          seguranca: 5,
          sobre_seguranca:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          preco: 3,
          sobre_preco:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam a est elementum aliquet porttitor et sapien. Praesent in gravida lorem.",
        },
        {
          titulo:"Aprazível",
        src: "https://vejario.abril.com.br/wp-content/uploads/2016/08/aprazivel.jpg?quality=70&amp;strip=info&amp;resize=680,453"
,
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
          titulo:"Cristo Redentor",
        src: "https://cdn.pixabay.com/photo/2017/06/27/16/15/christ-the-redeemer-2447923__340.jpg",
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
          titulo:"La paysage",
        src: "https://cdn.pixabay.com/photo/2019/04/28/21/13/meat-4164429__340.jpg",

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
          titulo:"Parque  da Catacumba",
        src: "https://a.cdn-hotels.com/gdcs/production173/d123/424ce630-e42c-11e8-a0e4-0242ac110002.jpg",
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
          titulo: "Confeitaria Colombo",
          src:
            "https://cache.quantocustaviajar.com/blog/wp-content/uploads/2019/07/confeitaria-colombo-rio-de-janeiro-6-768x513.jpg",
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
};
</script>
<style scoped>

h5{
  margin: 10px auto!important;
}
</style>>


