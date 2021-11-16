<template>

  <div class="catagory">
    <h2>{{ name }} Total Cost: {{ totalCost }}</h2>
    <ul class="interactionBlock">
        <div class="singleInteraction" v-for="interact in interactions"  :key="interact._id">
          <Interaction :id="interact._id" :displayName="interact.displayName" :name="interact.name" :cost ="parseInt(interact.cost)" :catagory="interact.catagory"></Interaction>
        </div>
    </ul>
    <h3></h3>
  </div>
</template>

<script>
import Interaction from './Interaction.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
  .interactionBlock {
    border-style: solid;
    padding: 50px 20px;
    margin-bottom: 50px;
    display:flex;
    flex-wrap: wrap;
  }

  .singleInteraction {
    width: 33%;
  }
</style>
