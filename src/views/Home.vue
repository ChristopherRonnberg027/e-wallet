<template>
  <div class="home">
    <Top :topTitle="'e-wall it'" />
    <Card :title="'active card'" :card="cardActive" />
    
    <CardStack :cards="cardsInStack"/>
    <button @click="toAddNewCard">add a new card</button>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";
export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    cardActive() {
      return this.$store.getters.getActiveCard;
    },

    cardsInStack() {
      return this.$store.getters.getNonActiveCards;
    }
  },
  methods: {
    toAddNewCard() {
      this.$router.push({ name: "AddCard" });
    }
  }
};
</script>
<style scoped>
.home {
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
