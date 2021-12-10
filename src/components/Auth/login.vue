<template>
  <section>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 ">

           <form @submit.prevent="submitForm">
            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase text-center">Login</h2>
              <p :v-show="!error" class="text-white-50 mb-5">{{error}}</p>
              <p
              v-if="!formIsValid"
              >Please enter a valid email and password (must be at least 6 characters long).</p>
 

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="email">Email</label>
                <input type="email" id="email" v-model.trim="email" class="form-control form-control-lg" />                
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password" id="password" v-model.trim="password" class="form-control form-control-lg" />                
              </div>

             <div class="row mb-6">
               <span class="col-6"><a class="text-white-50" href="#!">Forgot password?</a></span>
               <span class="col-6 d-flex justify-content-end"><a href="#!" class="text-white-50 fw-bold">Sign Up</a> </span>
             </div>          
              
              <div class="text-center pt-4">
              <button class="btn btn-outline-light btn-lg px-5 " type="submit">Login</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
name: 'Login',
 data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      if(this.email === '' || !this.email.includes("@") || this.password < 6){
        this.formIsValid = false;
        return
      }

      this.formIsValid = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {   
        
        await this.$store.dispatch('login', actionPayload);
        const redirectUrl = '/' + 'listUser';
        this.$router.replace(redirectUrl);
   
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }  
    }

    
  }
}
</script>
<style scoped>

</style>