<template>
    <div class="text-center bg-dark pt-5" id="form">
    <div class="container w-50">
      <div class="row">
        <div class="col-md-12 p-3">
          <h2 class="mb-4">Fale Conosco</h2>
          <form class="w-100">
            <div class="form-group">
              <input id="email" type="email" class="form-control form-control-sm" placeholder="Seu e-mail" required="required" name="email"> </div>
            <div class="form-group">
              <input type="text" class="form-control form-control-sm" id="inlineFormInput" placeholder="Assunto" required="required" name="subject"> </div>
            <div class="form-group"><textarea class="form-control p-1 form-control-sm" id="exampleTextarea" rows="3" placeholder="Escreva sua mensagem" name="message"></textarea></div>
            <b-button variant="outline-success" type="submit">Enviar</b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Form"
}
</script>
<style scoped>

.bg-dark{
  background-color: #151515;
}
h2{
    color: #ffffff
}
</style>>

