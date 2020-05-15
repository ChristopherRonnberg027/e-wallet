<template>
  <div class="card-form">
    <form @submit.prevent="addNewCard">
      <input type="text" v-model="add" />
    </form>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {}
};
</script>

<style scoped>
.card-form {
    display: grid;
}
</style>