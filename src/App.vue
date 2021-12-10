<template> 
  <div class="container-fluid">
    <div class="row">
      <div class="col-12"><the-header></the-header></div>
    </div>
    <div class="row">
     <div class="col-12"> <router-view /></div>
    </div>
    <div class="row">
     <div class="col-12"><the-footer></the-footer></div>
    </div>
  </div> 
</template>

<script>
import TheHeader from './views/header.vue'
import TheFooter from './views/footer.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  created() {   
    this.$store.dispatch('tryLogin');
    const AUTH_TOKEN = this.$store.getters.isAuthenticated ? 'Bearer ' + this.$store.getters.token : ''
    console.log("AUTH_TOKEN", AUTH_TOKEN)
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }
}
</script>
<style>
</style>
