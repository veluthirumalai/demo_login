<template>
    <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">Cover</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <router-link class="btn btn-outline-red" v-if="!isLoggedIn" to="/login">LOGIN</router-link>
        <a class="btn btn-outline-red" v-if="isLoggedIn" @click="logout">LOGIN OUT</a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
name: 'header',
data() {
},
methods: {
  logout() {
        this.$store.dispatch('logout');
        this.$router.replace('/');
  }
},
computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
}
}
</script>

<style>

</style>