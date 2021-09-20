<template>
  <div class="hello">
      <h3>{{ name }}</h3>
  </div>
</template>

<script>
 export default {
    props: {
        name: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
