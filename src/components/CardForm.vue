<template>
  <div class="card-form">
    <form @submit.prevent="addNewCard">
      <input type="text" v-model="add" />
    </form>
    <div class="test" v-for="(card, index) in cards" :key="index"></div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  methods:{

  }
};
</script>

<style>
</style>