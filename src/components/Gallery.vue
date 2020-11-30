<template>
  <div class="section" id="galeria">
    <div class="container-fluid">
      <div class="row">
        <div class="p-0 col-md-2 col-4" v-for="(pics, index) in pics" :key="index">
          <img
            :src="pics.url"
            :alt="pics.alt"
            :title="pics.title"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      pics: [
        {url: "https://cdn.pixabay.com/photo/2015/06/14/23/33/rio-de-janeiro-809755__340.jpg", alt:"Pão de açúcar", title: "Pão de açúcar" },
        {url: "https://cdn.pixabay.com/photo/2014/02/22/14/16/rio-de-janeiro-272052__340.jpg", alt:"Arcos da Lapa", title: "Arcos da Lapa"  },
        {url: "https://cdn.pixabay.com/photo/2016/02/19/15/49/beach-1210567__340.jpg", alt:"Calçadão de Copacabana", title: "Calçadão de Copacabana"  },
        {url: "https://cdn.pixabay.com/photo/2016/07/25/19/10/rio-1541151__340.jpg", alt:"Cristo Redentor", title: "Cristo Redentor"  },
        {url: "https://cdn.pixabay.com/photo/2020/03/23/20/41/castle-4962039__340.jpg", alt:"Arte na areia", title: "Arte na areia"  },
        {url: "https://cdn.pixabay.com/photo/2018/06/27/07/12/church-3500955__340.jpg", alt:"Catedral", title: "Catedral"  },
        {url: "https://cdn.pixabay.com/photo/2016/09/18/23/03/sugar-loaf-pao-de-acucar-1679237__340.jpg", alt:"Miquinho", title: "Miquinho"  },
        {url: "https://cdn.pixabay.com/photo/2018/07/20/01/42/rio-de-janeiro-3549797__340.jpg", alt:"Biblioteca Nacional", title: "Biblioteca Nacional"  },
        {url: "https://cdn.pixabay.com/photo/2018/07/20/01/42/rio-de-janeiro-3549803__340.jpg", alt:"Água de coco", title: "Água de coco"  },
        {url: "https://cdn.pixabay.com/photo/2016/01/15/23/46/rio-1142673__340.jpg", alt:"Prédios", title: "Prédios"  },
        {url: "https://cdn.pixabay.com/photo/2015/03/11/01/26/beach-667969__340.jpg", alt:"Trilha", title: "Trilha"  },
       {url: "https://cdn.pixabay.com/photo/2019/12/04/20/45/brazil-4673664__340.jpg", alt:"Maracanã", title: "Maracanã"  }
      ],
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 0%;
  margin: 0;
  padding: 0;
}
</style>