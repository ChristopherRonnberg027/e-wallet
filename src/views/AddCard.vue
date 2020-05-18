<template>
  <div class="addcard-wrapper">
    <Top :title="'add a new bank card'" />
    <Card
      :title="'new card'"
      :cardName="addCard.cardName"
      :cardColor="'rgba(0,0,0,0.25)'"
      :cardValid="addCard.cardValid"
      :cardNumber="addCard.cardNumber"
    />
    <CardForm :addCard="addCard" />
    <button @click="addCard">Add Card</button>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
export default {
  data() {
    return {
      addCard: {
        title: "new card",
        cardName: "firstname lastname",
        cardColor: "rgba(0,0,0,0.25)",
        cardValid: "MM/YY",
        cardNumber: "XXXX XXXX XXXX XXXX",
        cardCCV : 'XXX'
      }
    };
  },
  components: {
    Top,
    Card,
    CardForm
  },
  methods: {
    addCard() {
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
  border-radius: 5px;
  height: 3em;
  color: white;
}
</style>