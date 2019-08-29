import Vue from "vue";

// import the vue router
import VueRouter from "vue-router";

// import the components needed for this application
import App from "./App.vue";
import PersonList from "./components/PersonList.vue";

// import a specific function from the data-servce, the
// function that does the initial load of people from the
// API
import { loadAllPeople } from "./data-service";

Vue.config.productionTip = false;

// define all of the routes or paths that are used by the application
const routes = [
  // this defines the default route of the application
  { path: "/", component: PersonList }
];

// create the VueRouter Object and provide it the routes we created above
const router = new VueRouter({
  routes // short for `routes: routes`
});

// load the router
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router // <== provides access to the global router throughout the app
}).$mount("#app");
