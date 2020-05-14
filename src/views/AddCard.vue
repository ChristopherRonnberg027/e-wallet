<template>
  <div class="wrapper">
    <Top :title="'add a new bank card'" />
    <Card :title="'new card'" />
    <CardForm />
    <button @click="addCard">Add Card</button>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
export default {
  components: {
    Top,
    Card,
    CardForm
  },
  methods: {
    addCard() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style>
</style>