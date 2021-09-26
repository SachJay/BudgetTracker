<template>
  <div class="interaction">
      <p>{{ name }}: {{ cost }}</p>
      <button>Change Catagory</button>
      <button :click="deleteInteraction(id)">Delete</button>
  </div>
</template>

<script>
 export default {
    props: {
        name: String,
        id: String,
        cost: Number
    },
    method: {
      deleteInteraction(id){
        
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
