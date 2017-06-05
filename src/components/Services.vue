<template>

    <div class="container">
      <div class="jumbotron container-fluid">
          <h1 class="display-3">Services</h1>
          <p class="lead">what we can do for you... </p>
          <hr class="my-4">

          <app-service v-for="service in services" :service="service"></app-service>

      </div>
    </div>


</template>

<script>
import Service from './Service.vue'

export default {

computed: {
  services() {
    return this.$store.getters.services;
  }
},

components: {
  appService: Service
}

}

</script>

<style scoped>


</style>
