<template>
  <div
    class="align-items-center d-flex py-5 cover section-primary"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 align-self-center text-center">
          <h1 class="mb-0 mt-4 display-1">{{ titulo }}</h1>
          <h2>{{ subtitulo }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data(){
      return{
          titulo: "Sistema de Apoio ao Visitante",
          subtitulo: "O SAP te ajuda a achar seu destino perfeito"
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
