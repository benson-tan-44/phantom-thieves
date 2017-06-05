<template>
  <div class="col-md-4">
    <div class="panel panel-default">
      <div class="panel-heading">{{employee.name}}</div>
      <div class="panel-body">
        {{employee.desc}}
      </div>
    </div>
  </div>
</template>


<script>
export default {
props:['employee']
}
</script>
