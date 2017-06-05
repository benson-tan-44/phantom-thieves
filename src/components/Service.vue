<template>
  <div class="col-md-4">
    <div class="panel panel-default">
      <div class="panel-heading">{{service.name}} [{{service.price | currency}}]</div>
      <div class="panel-body">
        {{service.desc}}
      </div>
    </div>
  </div>
</template>


<script>
export default {
props:['service']
}
</script>
