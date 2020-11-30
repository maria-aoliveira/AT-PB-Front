<template>
   <b-container>
    <div class="mt-5 py-5 text-center bg-light">
    <div class="container-fluid">
        <div class="col-md-12 bg-light">
          <div class="m-0">
          
            <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Nome Completo</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-center">
                Já é registrado?
                <router-link :to="{name: 'login'}">Sign in</router-link>
            </p>
        </form>
        </div>
          
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
name: "SignUp"
}
</script>

<style scoped>
.container {
  height: 80vh;
  margin-top: 25vh!important;
}
</style>
