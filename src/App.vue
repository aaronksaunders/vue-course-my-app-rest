<template>
  <div id="app">
    <PersonList></PersonList>
  </div>
</template>

<script>
import PersonList from "./components/PersonList.vue";

export default {
  name: "app",
  components: {
    PersonList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
