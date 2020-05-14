<template>
  <div class="wrapper">
    <div id="app">
      <router-link to="/">Home</router-link>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components:{
  }
}
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

.wrapper {
  background: #efefef;
  max-width: 300px;
}

#app {
  text-align: center;
}
</style>
