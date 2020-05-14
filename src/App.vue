<template>
  <div class="container">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  padding-bottom: 2em;
  text-transform: uppercase;
  max-width: 250px;
}

.container {
  background: #efefef;
  max-width: 300px;
  display: grid;
  // grid-template-columns: 10px 50px auto 50px 10px;
}

#app {
  
}

button {
  max-width: 280px;
  text-transform: uppercase;
  background: none;
  border: 1px solid black;
  font-weight: bolder;
  font-size: 1em;
  margin: 1em;
  padding: 1em 3em;
  border-radius: 5px;
}
</style>
