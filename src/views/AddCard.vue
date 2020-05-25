<template>
  <div class="addcard-wrapper">
    <Top :topTitle="'add a new bank card'" />
    <Card :card="card" :title="'new card'" />
    <CardForm :card="card" />
    
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