<template>
  <div class="hello">
    <h1>{{ testBackend() }}</h1>

    <table>
      <tr v-for="inter in inters" :key="inter.name">
        <td>{{ inter.name }}</td>
        <td>-${{ inter.cost }} | +${{ inter.income }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Default",
      }
    },
    params: {
      inters: Object,
    },
    methods: {
      testBackend() {
          fetch("http://localhost:2020/data")
            .then(response => response.json())
            .then(data => {
              this.inters = data;
            });
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
