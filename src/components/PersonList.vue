<template>
  <div>
    <h2>In Person List</h2>
    <div v-if="people.length">
      <div v-for="person in people" :key="person.id.value">
        <img :src="person.picture.medium" />
        {{person.name.first}} {{person.name.last}}
      </div>
    </div>
  </div>
</template>

<script>
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
  async mounted() {
    // using promises
    fetch("https://randomuser.me/api/?results=10")
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.people = result.results;
      });
  }
};
</script>



    // using async await
    // let response = await fetch("https://randomuser.me/api/");
    // let result = await response.json();
    // this.people = result.results;

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
