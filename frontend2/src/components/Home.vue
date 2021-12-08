<template>
  <div class="mainstage">
    <b-card  class="mb-1">
      <h1 left>Bank Statement Parser</h1>
       <img alt="Vue logo" src="./../assets/bankparser.png"><br>
      <input @change="onFileChange" type="file">
      <button v-on:click="uploadInteraction()">Upload Interactions</button>

     
    </b-card>
   <br>
    <b-card no-body  class="mb-1"
    >
      <b-tabs content-class="mt-3" card fill >
        <div v-for="month in Object.keys(data)"  :key="month">
            <b-tab  :title="getReadableDate(month)" active>
              <h3>Total Monthly Cost: {{ data[month].totalMonthlyCost.toFixed(2) }}</h3><br>
              <div v-for="catagories in Object.keys(data[month].catagories)"  :key="catagories">
                <Catagory :name="catagories" :interactions="data[month].catagories[catagories].interactions" :totalCost="parseFloat(data[month].catagories[catagories].totalCost)"></Catagory>
              </div>
            </b-tab>
        </div>
      </b-tabs>
    </b-card>
    
     

    

  </div>
</template>

<script>
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
        multiline: false,
        url: 'https://budget-tracker-sjay.herokuapp.com'
      }
    },
    async created() {
  // GET request using fetch with async/await
      const response = await fetch(this.url + "/getInteractions");
      const data = await response.json();
      this.data = data;
    }, 
    methods: {
      onFileChange(event) {
        this.file = event.target.files[0].name;
      },
      uploadInteraction() {
        console.log(this.file);
        axios.post(this.url + "/saveInteractions?file="+this.file)
          .then(response => console.log(response));
      },
      getReadableDate(date) {
        var options = { year: 'numeric', month: 'long'};

        var dateVar = new Date(date)
        return dateVar.toLocaleString('en-US', options);
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

    padding: 0;
  }
  li {

    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .mainstage {
    margin: 50px;
  }

  .tabss {
    background-color: red;
  }

  button {
    display: inline-block;
  }
</style>
