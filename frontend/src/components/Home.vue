<template>
  <div class="hello">
    <h1>Titlesss</h1>
    <ul v-for="interact in inters"  :key="interact._id">
        <li>{{interact.name}}</li>
    </ul>

  </div>
</template>

<script>
//import Catagory from './Catagory.vue';

  export default {
  //components: { Catagory },
    params: {
      inters: [],
    },
    methods: {
      testBackend() { //retrieves data from backend
          fetch("http://localhost:2020/getInteractions")
            .then(response => response.json())
            .then(data => {
              this.instance.inters = data;
            });
      }
    },
    beforeMount() {
        this.testBackend();
        this.inters = [{name: "test", _id:"sadsadsafgsadsa"}];
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
