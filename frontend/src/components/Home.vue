<template>
  <div class="hello">
    <link rel="stylesheet" href="https://preview.oruga.io/cdn/oruga.min.css" />

    <h1>Bank Statement Parser</h1>

    <input @change="onFileChange" type="file">
    <button v-on:click="this.uploadInteraction()">Save</button>


     

     <div v-for="month in Object.keys(data)"  :key="month">
       
          {{ month }} Total: {{ data[month].totalMonthlyCost }}
          <div v-for="catagories in Object.keys(data[month].catagories)"  :key="catagories">
            <Catagory :name="catagories" :interactions="data[month].catagories[catagories].interactions" :totalCost="parseInt(data[month].catagories[catagories].totalCost)"></Catagory>
          </div>
     
    </div>


    

  </div>
</template>

<script src="https://preview.oruga.io/cdn/oruga.min.js">
 import Catagory from './Catagory.vue';
import axios from 'axios';
  export default {
     components: { Catagory },
    data() {
      return {
        data: {},
        file: "",
        activeTab: '0',
        showBooks: false,
        multiline: false
      }
    },
    async created() {
  // GET request using fetch with async/await
      const response = await fetch("http://localhost:2020/getInteractions");
      const data = await response.json();
      this.data = data;
    }, 
    methods: {
      onFileChange(event) {
        this.file = event.target.files[0].name;
      },
      uploadInteraction() {

        axios.post("http://localhost:2020/saveInteractions?file="+this.file)
          .then(response => console.log(response));
      },
      getReadableDate(date) {
        var dateVar = new Date(date)
        return dateVar.toISOString().split('T')[0].toString();
      }
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
