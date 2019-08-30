<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Class - Ionic - In Person List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content  >
      <div v-if="people.length" style="padding-left:0px; padding-right: 8px">
        <!-- 
          <div v-for="person in people" :key="person.id.value">
      <router-link :to="'/detail/' + person.id.value">
        <img :src="person.picture.medium" />
        {{person.name.first}} {{person.name.last}}
      </router-link>
        </div>
        -->

        <ion-item v-for="person in people" :key="person.id.value" @click="showPersonDetail(person)">
          <ion-avatar slot="start">
            <img :src="person.picture.medium" />
          </ion-avatar>
          <ion-label>
            <h1>{{person.name.first}} {{person.name.last}}</h1>
            <h2>{{person.email}}</h2>
          </ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
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
