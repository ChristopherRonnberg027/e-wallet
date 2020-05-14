<template>
  <div class="home">
    <Top />
    <Card />
    <CardStack />
    <router-link to="/addcard">AddCard</router-link>
      <router-view />
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
  }
};
</script>
