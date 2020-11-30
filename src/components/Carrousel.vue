<template>
  <div class="py-5 bg-light m-0" id="galeria">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            indicators
            background="#fffffff"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide v-for="(info, index) in info" :key="index">
              <template #img>
                <b-img
                  class="col-lg-8 col-sm-10 col-xs-10 mx-0 d-inline-block pull-left"
                  width="1024"
                  height="480"
                  :src="info.img"
                  :alt="info.alt"
                  :title="info.titulo"
                  fluid
                />
                <div
                  class="col-md-4 col-sm-6 col-xs-2 d-inline-block pull=right mt-5"
                >
                  <h2 class="">{{ info.titulo }}</h2>
                  <p class="mt-2">
                    {{ info.texto }}
                  </p>
                </div>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      info: [
        {
          img:
            "https://cdn.pixabay.com/photo/2017/05/31/10/19/rio-2359870_960_720.jpg",
            alt: "Copabana",
          titulo: "COPACABANA",
          texto: "Sempre bastante movimentada, a praia carioca, que é uma das" +
                    "mais emblemáticas, reflete um pouco do que é o Rio de" +
                    "Janeiro, um local alto astral, com uma beleza natural ímpar!" +
                    "A praia é cumprida e tem uma longa faixa de areia, que" +
                    "durante o verão fica lotada de pessoas. O calçadão, feito" +
                    "com pedras portuguesas pretas e brancas, é outro símbolo do" +
                    "local."
        },
        {
          img:
            "https://cdn.pixabay.com/photo/2018/07/20/01/42/rio-de-janeiro-3549798_960_720.jpg",
          alt: "Arte urbana",
          titulo: "ETNIAS",
          texto: "Os graffitis do Eduardo Kobra se tornaram ponto de interesse"+
                   " na cidade. Para fazer o grafite, Kobra usou quase 3.000"+
                   " latas de spray, 180 Baldes de tinta acrílica e 7 elevadores"+
                   " hidráulicos. O paredão é considerado pelo Guinness, com 2,6"+
                   " mil m² de área, o maior grafite do mundo e levou 40 dias"+
                   " para ser pintado e faz parte de uma série sobre a paz."
        },
        {
          img:
            "https://cdn.pixabay.com/photo/2016/09/18/23/23/sugarloaf-mountain-1679285_960_720.jpg",
          titulo: "Pão de açúcar",
          alt: "Pão de açúcar",
          texto: "  Cartão-postal do Rio de Janeiro, permite que o visitante descubra novos ângulos da cidade, a uma altura de até 396 metros acima do nível do mar. Estando aqui no coração da Mata Atlântica, você pode aproveitar e viver as experiências que criamos com todo carinho: a ecológica, a histórica e a dos bastidores. Que tal vir curtir esse lugar maravilhoso?. "
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
};
</script>

<style>
img {
  border-radius: 4%;
}
.carousel-indicators {
  position: absolute;
  right: 35% !important;
}
</style>