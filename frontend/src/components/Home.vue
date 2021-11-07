<template>
  <div class="hello">
    <h1>Bank Statement Parser</h1>
    
    <div v-for="catagories in Object.keys(data)"  :key="catagories">
      <Catagory :name="catagories" :interactions="data[catagories].interactions" :totalCost="parseInt(data[catagories].totalCost)"></Catagory>
    </div>

  </div>
</template>

<script>
import Catagory from './Catagory.vue';

  export default {
    components: { Catagory },
    data() {
      return {
        data: {}
      }
    },
   async created() {
  // GET request using fetch with async/await
      const response = await fetch("http://localhost:2020/getInteractions");
      const data = await response.json();
      this.data = data.data;
      console.log(this.data);
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
    display: inline-block;
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
