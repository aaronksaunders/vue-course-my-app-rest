<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Class - Ionic - Person Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-card style="max-width: 300px">
        <img :src="user.picture.large" />
        <ion-card-content>
            <h1>{{user.name.first}} {{user.name.last}}</h1>
            <h2>{{user.location.city}}, {{user.location.state}}</h2>
            <h3>{{user.email}}</h3>
        </ion-card-content>
      </ion-card>
      <ion-button @click="goBack">GO BACK</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import * as dataService from "../data-service";
export default {
  name: "PersonDetail",
  props: {
    userId: String
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  },
  created() {
    this.user = dataService.getPersonById(this.userId);
  }
};
</script>

<style scoped>
</style>