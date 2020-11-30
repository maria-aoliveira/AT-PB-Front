<template>
  <div class="py-5 text-center section-primary" id="reviews">
    <div class="container">
      <div class="row">
        <div class="mx-auto col-12 p-3 section-light col-lg-5">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide v-for="(coments, index) in coments" :key="index">
              <template #img>
                <b-avatar :src="coments.img" size="10rem"></b-avatar>
                <p class="my-3">
                  {{ coments.prg }}
                </p>
                <b-icon
          icon="star-fill"
          v-for="nota in coments.nota"
          :key="nota"
        ></b-icon>
        <b-icon
          icon="star"
          v-for="notavazia in 5 - coments.nota"
          :key="'star' + notavazia"
        ></b-icon>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";


export default {
  name: "Reviews",
  data() {
    return {
      slide: 0,
      sliding: null,
      coments: [
        {
          img:
            "https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048__340.jpg",
          prg:
            "Melhor opção para os perdidos de plantão como eu. Muito fácil e prático de usar. Quando me recomendaram fiquei encantada. Agora uso sempre.",
            nota: 5
        },
        {
          img:
            "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg",
          prg:
            "Salvou completamente nossas férias em família. As sugestões são maravilhosas e fazem toda a diferença quando você não conhece a cidade e não sabe por onde começar",
          nota: 4
        },
        {
          img:
            "https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753__340.jpg",
          prg:
            "Um verdadeiro salva-vidas! Sempre utilizo para saber quais são os eventos e o que posso fazer no dia. E olha que moro no Rio há anos, mas sempre há algo para descobrir.",
          nota: 4
        },
      ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  components:{
    //   FontAwesomeIcon
  }
};
</script>

<style scoped>
.section-primary {
  background-image: url("https://cdn.pixabay.com/photo/2016/03/17/23/00/world-1264062_960_720.jpg");
  background-position: top left;
  background-size: 100%;
  background-repeat: repeat;
  height: 100%;
}
</style>