<template>
  <div class="hello">
    <h1>Titlesss</h1>
    <ul v-for="interact in interactions"  :key="interact._id">
        <li>
          <Interaction :name="interact.name"></Interaction>
        </li>
    </ul>
    <h3>Total: {{ interact.totalCost }}</h3>

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
      this.interactions = data.intertactions;
      this.totalCost = data.totalCost;
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
