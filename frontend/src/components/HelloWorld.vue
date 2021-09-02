<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button v-on:click="testBackend()"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Default",
    }
  },
  methods: {
    testBackend() {
        fetch("http://localhost:2020/bob")
          .then(response => response.json())
          .then(data => (this.title = data.message));
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
