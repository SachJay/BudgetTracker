<template>
  <div class="hello">
    <h1>Titlessss</h1>

    <h3>Total Cost: {{ totalCost }}</h3>
    <ul>
        <li v-for="interact in interactions"  :key="interact._id">
          <Interaction :name="interact.name"></Interaction>
        </li>
    </ul>
    
  </div>
</template>

<script>
//import Catagory from './Catagory.vue';
import Interaction from './Interaction.vue';

  export default {
    components: { Interaction },
    data() {
      return {
        interactions: [],
        totalCost: 0
      }
    },
   async created() {
  // GET request using fetch with async/await
      const response = await fetch("http://localhost:2020/getInteractions");
      const data = await response.json();
      this.interactions = data.data[0].interactions;
      this.totalCost = data.data[0].totalCost;
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
