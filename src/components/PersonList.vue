<template>
  <div>
    <h2>In Person List</h2>
    <div v-if="people.length">
      <!-- <div v-for="person in people" :key="person.id.value">
      <router-link :to="'/detail/' + person.id.value">
        <img :src="person.picture.medium" />
        {{person.name.first}} {{person.name.last}}
      </router-link>
      </div>-->

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
  props: {},
  data() {
    return {
      people: []
    };
  },
  methods: {
    showPersonDetail(_person) {
      this.$router.push({
        name: "detail",
        params: { userId: _person.id.value }
      });
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
