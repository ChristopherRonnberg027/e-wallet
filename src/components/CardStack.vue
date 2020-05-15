<template>
  <div class="card-stack">
    <Card 
    v-for="card in cardInfo" :key="card"
    :cardName="card.name"
    :cardColor="card.color"
    :cardValid="card.valid"
    :cardNumber="card.number"
    />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card
  },
  computed: {
    cardInfo() {
      return this.$store.state.cards;
    }
  }
};
</script>

<style>
</style>