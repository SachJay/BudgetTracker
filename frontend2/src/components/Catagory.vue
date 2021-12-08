<template>

  <div class="catagory" role="tablist">

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="collapseButton"  v-b-toggle="getTrimedName(name)" variant="info">{{ name }} - {{ totalCost.toFixed(2) }}</b-button>
      </b-card-header>
      <b-collapse visible  :id="getTrimedName(name)" role="tabpanel">
        <b-card-body>
          <b-card-title>Total Cost: {{ totalCost.toFixed(2) }}</b-card-title>
          <b-card-text>
            
            <ul class="interactionBlock">
                <div class="singleInteraction" v-for="interact in interactions"  :key="interact._id">
                  <Interaction :id="interact._id" :displayName="interact.displayName == '' ? interact.name : interact.displayName"  :name="interact.name" :cost ="parseFloat(interact.cost).toFixed(2)" :catagory="interact.catagory"></Interaction>
                </div>
            </ul>
            
            </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>


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
    },
    methods: {
      getTrimedName(name) {
        return name.replace(' ', '_');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .interactionBlock {

    padding: 20px 20px;
    margin: 10px;
    display:flex;
    flex-wrap: wrap;
  }
  .collapseButton {
    width: 100%;
    background-color: rgb(13,110,253);
    color: white;
  }

</style>
