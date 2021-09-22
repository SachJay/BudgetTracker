<template>
  <div class="hello">
    <h2>{{ name }}</h2>
    <ul>
        <li v-for="interact in interactions"  :key="interact._id">
          <Interaction :name="interact.name"></Interaction>
        </li>
    </ul>
    <h3>Total Cost: {{ totalCost }}</h3>
  </div>
</template>

<script>
import Interaction from './Interaction.vue';
 export default {
  components: { Interaction },
    props: {
      name: String,
      interactions: Array,
      totalCost: Number
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 5px;
}
</style>
