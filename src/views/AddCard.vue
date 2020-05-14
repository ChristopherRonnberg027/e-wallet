<template>
  <div class="wrapper">
    <router-link to="/">Home</router-link>
    <h1>AddCard</h1>
    <Top />
    <Card />
    <CardForm />
    <router-view />
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
export default {
    components:{
        Top,
        Card,
        CardForm
    }
};
</script>

<style>
</style>