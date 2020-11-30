<template>
  <b-container>
      <div class="mainbox">
    <div class="err">4</div>
    <b-icon icon="question-circle" animation="spin" font-scale="4"></b-icon>
    <div class="err2">4</div>
    <div class="msg"><p>Página removida.</p><p> Será que foi deletada?</p><p> Ou talvez esteja se escondendo!</p><p> Já sei, vamos voltar à <router-link to="/"> página inicial </router-link>.</p></div>
      </div>
  </b-container>
</template>

<script>
export default {
name: "NotFound"
}
</script>

<style scoped>

.container {
  background-color: #95c2de;
  max-width: 100vw!important;
  height: 66vw;
}

.mainbox {
  background-color: #95c2de;
  margin: auto;
  height: 600px;
  width: 600px;
  position: relative;
}

  .err {
    color: #ffffff;
    font-size: 11rem;
    position:absolute;
    left: 20%;
    top: 8%;
  }

.b-icon {
    font-size: 600%;
    position: relative;
    color: white;
    top: 20%;
}

 .err2 {
    color: #ffffff;
    font-size: 11rem;
    position:absolute;
    left: 68%;
    top: 8%;
  }

.msg {
    text-align: center;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}
</style>>

