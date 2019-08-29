<template>
  <div>
    <h2>In Person List</h2>
    <div v-if="people.length">
      <div v-for="person in people" :key="person.id.value" @click="showPersonDetail(person)">
        <img :src="person.picture.medium" />
        {{person.name.first}} {{person.name.last}}
      </div>
    </div>
  </div>
</template>

<script>
import * as dataService from "../data-service";
export default {
  name: "PersonList",
  props: {
    msg: String
  },
  data() {
    return {
      people: []
    };
  },
  methods: {
    showPersonDetail(_person) {
      this.$router.push({ name: "detail", params: { user: _person } });
    }
  },
  async mounted() {
    this.people = dataService.getAllPeople();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
