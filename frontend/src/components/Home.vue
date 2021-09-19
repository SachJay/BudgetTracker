<template>
  <div class="hello">
    <h1>Titlesss</h1>
    <ul v-for="interact in interactions"  :key="interact._id">
        <li>{{interact.name}}</li>
    </ul>

  </div>
</template>

<script>
//import Catagory from './Catagory.vue';

  export default {
    data() {
      return {
        interactions: []
      }
    },
   async created() {
  // GET request using fetch with async/await
      const response = await fetch("http://localhost:2020/getInteractions");
      const data = await response.json();
      this.interactions = data;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
