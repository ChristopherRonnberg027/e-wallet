<template>
  <div class="top-container">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.top-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  padding-top: 1em;
  padding-bottom: 2em;
  text-transform: uppercase;
  max-width: 250px;
}
</style>