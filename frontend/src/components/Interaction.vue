<template>
  <div class="interaction">
    <div v-if="editing">
      <p>{{ name }}: {{ cost }}</p>
      <input v-model="inputValue">
      <button v-on:click="this.saveChange()">Submit</button>
    </div>
    <div v-else>
      <p>{{ name }}: {{ cost }}</p>
      <p>Catagory: {{ catagory }}</p>
      <button v-on:click="editing = !editing">Change Catagory</button>
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
        inputValue: ""
      }
    },
    methods: {
      saveChange() {
        
        console.log(this.inputValue);
        axios.post("http://localhost:2020/changeCatagory?name="+this.$props.name+"&catagory="+this.inputValue)
          .then(response => this.articleId = response.data.id);

        this.editing = !this.editing
      }
    }
  }
</script>
<style scoped>
  .interaction {
    border-style: dashed;
    margin-bottom: 10px;
    padding: 15px 5px;
  }
</style>
