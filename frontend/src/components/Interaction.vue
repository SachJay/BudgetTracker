<template>
  <div class="hello">
      <h6>{{ name }}</h6><br>
  </div>
</template>

<script>
 export default {
    props: {
        name: String
    }
  }
</script>
<style scoped>
.hello {
    height: 10px;
  }

</style>
