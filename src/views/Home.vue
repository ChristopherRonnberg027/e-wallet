<template>
  <div class="home">
    <Top :title="'e-wall it'" />
    <Card :title="'active card'"/>
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
  methods:{
    addNewCard(){
      this.$router.push({name: 'AddCard'});
    }
  }
};
</script>
<style>

</style>
