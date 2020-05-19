<template>
  <div class="addcard-wrapper">
    <Top :topTitle="'add a new bank card'" />
    <Card v-bind:card="card" :title="'new card'" />
    <CardForm v-bind:card="card" />
    
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
        name: "",
        valid: "",
        number: "",
        ccv: "",
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
    
  }
};
</script>

<style scoped>
.addcard-wrapper {
  display: grid;
}

</style>