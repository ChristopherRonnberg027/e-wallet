<template>
  <div class="home">
    <Top :title="'e-wall it'" />

    <Card
      :title="'active card'"
      class="stack"
      v-for="card in cardInfo"
      :key="card"
      :cardName="card.name"
      :cardColor="card.color"
      :cardValid="card.valid"
      :cardNumber="card.number"
    />

    <CardStack />
    <button @click="addNewCard">add a new card</button>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    cardInfo() {
      return this.$store.getters.activeCard;
    }
  },
  methods: {
    addNewCard() {
      this.$router.push({ name: "AddCard" });
    }
  }
};
</script>
<style scoped>
.home {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  display: grid;
  margin: 0.5em;
}

button {
  max-width: 280px;
  text-transform: uppercase;
  background: none;
  border: 1px solid black;
  font-weight: bolder;
  font-size: 1em;
  margin-top: 1em;
  border-radius: 5px;
  height: 3em;
}
</style>
