<template>
  <div class="interaction">
    <div v-if="editing">
      <p>{{ name }}: {{ cost }}</p>
     
      <div  v-for="catagory in catagories"  :key="catagory">
          <p>{{catagory}}</p>
        </div>
      <button v-on:click="this.saveChange()">Submit</button>
    </div>
    <div v-else>
      <p>{{ name }}: {{ cost }}</p>
      <button v-on:click="this.getCatagories()">Change Catagory</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

 export default {
  components: { },
    props: {
        name: String,
        id: String,
        cost: Number,
        catagory: Number
    },
    data() {
      return { 
        editing: false,
        inputValue: "",
        catagories: []
      }
    },
    methods: {
      saveChange() {

        console.log(this.inputValue);
        axios.post("http://localhost:2020/changeCatagory?name="+this.$props.name+"&catagory="+this.inputValue)
          .then(response => this.articleId = response.data.id);

        this.editing = !this.editing
      },
      async getCatagories() {
        this.editing = !this.editing;
        

          const response = await fetch("http://localhost:2020/getCatagoryTable");
          this.catagories = await response.json();
        
      }
    }
  }
</script>
<style scoped>
  .interaction {
    border-style: dashed;
    margin: 10px;
    padding: 15px;
  }
</style>
