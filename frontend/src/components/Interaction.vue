<template>
  <div class="interaction">
      <p>{{ name }}</p>
      <button>Change Catagory</button>
      <button>Delete</button>
  </div>
</template>

<script>
 export default {
    props: {
        name: String
    },
    method: {
      deleteInteraction(){
        
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
