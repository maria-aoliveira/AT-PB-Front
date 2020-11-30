<template>
  <b-container>
    <div class="mt-5 py-5 text-center bg-light">
      <div class="container-fluid">
        <div class="col-md-12 bg-light">
          <div class="m-0">
            <form>
              <h3>Login</h3>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block">
                Sign In
              </button>

              <p class="forgot-password text-center mt-2 mb-4">
                <router-link to="/forgot-password"
                  >Forgot password ?</router-link
                >
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
  name: "Login"
};
</script>

<style scoped>
.container {
   height: 80vh;
  margin-top: 25vh!important;
}
</style>>

