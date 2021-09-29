<template>
  <div class="interaction">
      <p>{{ name }}: {{ cost }}</p>
      <button>Change Catagory</button>
      <button>Delete</button>

      <Modal
        v-show="true"
        @close="closeModal"
      />
  </div>
</template>

<script>
import Modal from './Modal.vue';
 export default {
  components: { Modal },
    props: {
        name: String,
        id: String,
        cost: Number
    },
    method: {

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
