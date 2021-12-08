<template>
  <div class="interaction">
    <b-card
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      header-bg-variant="primary"
     header-text-variant="white"
      :header="displayName"
       border-variant="primary"
    >
     

    <div v-if="editing">     
      <input v-model="displayNameInput" type="text" name="displayName" />
      <select v-model="catagoryInput">
        <option v-for="catagory in catagories"  :key="catagory">{{catagory}}</option>
      </select>

      <button v-on:click="saveChange()">Submit</button>
      <button v-on:click="updateEditing()">Cancel</button>
    </div>
    <div v-else>
      <p>Cost: {{ cost }}</p>
      <button v-on:click="getCatagories()">Change Catagory</button>
      <button>Delete</button>
    </div>

    </b-card>





  </div>
</template>

<script>
import axios from 'axios';

 export default {
  components: { },
    props: {
        name: String,
        displayName: String,
        id: String,
        cost: String,
        catagory: Number
    },
    data() {
      return { 
        editing: false,
        catagoryInput: "",
        displayNameInput: "",
        catagories: [],
        url: 'https://budget-tracker-sjay.herokuapp.com'
      }
    },
    methods: {
      saveChange() {
        axios.post(this.url + "/changeCatagory?name="+this.$props.name+"&catagory="+this.catagoryInput+"&displayName="+this.displayNameInput)
          .then(response => this.articleId = response.data.id);

        this.editing = !this.editing
      },
      async getCatagories() {
          this.updateEditing();
          const response = await fetch(this.url + "/getCatagoryTable");
          this.catagories = await response.json();
        
      },
      updateEditing() {
        this.editing = !this.editing;
      }
    }
  }
</script>
<style>
  .interaction {
    margin: 10px;
  }
</style>
