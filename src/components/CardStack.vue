<template>
  <div class="card-stack">
    <Card 
    class="stack" 
    v-for="card in cards" 
    :key="card.number" 
    :card="card" />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: {
    Card
  },
  props: {
    cards: Array
  },
  method: {}
};
</script>

<style scoped>
.card-stack {
  padding-top: 1.5em;
  padding-bottom: 5em;
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1em;
  border: none;
  transition: 0.2s;
}

.card-stack:hover {
  grid-auto-rows: 10em;
}

.stack{
  border: none
}

.stack:focus{
  border: 2px solid indigo;
}
</style>