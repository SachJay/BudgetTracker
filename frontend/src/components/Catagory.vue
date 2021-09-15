<template>
  <div class="hello">
    <h3>St</h3>
    <ul v-for="interact in interacts"  :key="interact._id">
        <li>{{interact.name}}</li>
    </ul>

  </div>
</template>

<script>
 export default {
    props: {
      interacts: []
    },
    methods: {
    },
    beforeMount() {
        console.log("Cat:"+this.interacts);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
