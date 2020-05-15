<template>
  <div class="app-wrapper">
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

.app-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #efefef;
}
</style>
