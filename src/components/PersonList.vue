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
// import function loadAllPeople & getPersonById
// from data-service
import { loadAllPeople, getPersonById } from "../data-service";

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
    showPersonDetail: function(_person) {
      let person = getPersonById(_person.id.value);
      alert(person.name.first + " " + person.name.last);
    }
  },
  mounted() {
    // using dataService without dot notation
    loadAllPeople().then(_people => {
      this.people = _people;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
