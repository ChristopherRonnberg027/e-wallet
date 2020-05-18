<template>
  <div class="card-stack">
    <Card
      class="stack"
      v-for="card in cards"
      :key="card.number"
      :cardName="card.name"
      :cardColor="card.color"
      :cardValid="card.valid"
      
    />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card
  },
  props:{
    cards : Array
  }
  // computed: {
  //   cardInfo() {
  //     // return this.$store.state.cards;
  //     return this.$store.getters.unActiveCards;
  //   }
  // }
};
</script>

<style scoped>
.card-stack {
  margin-top: 3em;
  display: grid;
  /* grid-template-columns: 250px 1fr;
  grid-template-rows: 150px 1fr; */
}

.stack {
  /* position: relative; */
  /* grid-area: 1/1/2/2; */
}

/* .stack:nth-child(3){
  margin-bottom:3em;
}
.stack:nth-child(2){
  margin-bottom:6em;
}

.stack:nth-child(1){
  margin-bottom:9em;
} */
</style>