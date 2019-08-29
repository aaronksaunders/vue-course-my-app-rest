<template>
  <div>
    <div>A Person Detail</div>
    <p>{{user.email}}</p>
    <div>
      <img :src="user.picture.large" />
    </div>
    <button @click="goBack">GO BACK</button>
  </div>
</template>

<script>
export default {
  name: "PersonDetail",
  props: {
    user: Object
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>