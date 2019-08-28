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
}
</style>
