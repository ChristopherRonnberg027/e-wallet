<template>
  <div class="addcard-wrapper">
    <Top :title="'add a new bank card'" />
    <Card v-bind:card="card" :title="'New Card'" />
    <CardForm v-bind:card="card" />
    <button @click="toAddCard">Add Card</button>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
export default {
  data() {
    return {
      card: {
        title: "new card",
        name: "firstname lastname",
        valid: "MM/YY",
        number: "XXXX XXXX XXXX XXXX",
        ccv: "XXX",
        vendor : 'bitcoin'
      }
    };
  },
  components: {
    Top,
    Card,
    CardForm
  },
  methods: {
    toAddCard() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.addcard-wrapper {
  display: grid;
}

button {
  max-width: 280px;
  text-transform: uppercase;
  background: black;
  font-weight: bolder;
  font-size: 1em;
  margin-top: 1em;
  border-radius: 6px;
  height: 3em;
  color: white;
}
</style>