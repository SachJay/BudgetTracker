<template>
  <div >
      <h2>Add New Catagory</h2>
      <label for="catagoryName">Catagory Name:</label>
      <input type="text" id="catagoryName" name="catagoryName"><br><br>
      <button click="saveCatagory()">Save</button>
  </div>
</template>

<script>
  export default {
    data() {
    },
    params: {
    },
    methods: {
     saveCatagory(name) {
        var catagory = {
            name: name
        };

       /* postData("http://localhost:2020/saveCatagory", catagory)
            .then(response => response.json())
            .then(data => {
              console.log(data);
            });*/
     },

    /* postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
        }*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
