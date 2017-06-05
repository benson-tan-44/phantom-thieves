<template>

    <div class="container">
      <div class="jumbotron container-fluid">
          <h1 class="display-3">About Us</h1>
          <p class="lead">meet the team... </p>
          <hr class="my-4">

          <app-employee v-for="employee in employees" :employee="employee"></app-employee>

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


</style>
