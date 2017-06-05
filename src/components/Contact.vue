<template>

    <div class="container">
      <div class="jumbotron container-fluid">
          <h1 class="display-3">Contact Us</h1>
          <p class="lead">have an important question? </p>
          <hr class="my-4">

          <div class="well">EMAIL: <a href="mailto:test@email.com">alibaba@medjed.com</a></div>
          <div class="well">PHONE: <a href="tel:1-123-456-7890">123-456-7890</a></div>

      </div>
    </div>


</template>

<script>
import Employee from './Employee.vue'

export default {

computed: {
  employees() {
    return this.$store.getters.employees;
  }
},

components: {
  appEmployee: Employee
}

}

</script>

<style scoped>

a{
font-weight:300;
color:black;
}


</style>
