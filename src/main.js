import Vue from "vue";

// import the vue router
import VueRouter from "vue-router";

// import the components needed for this application
import App from "./App.vue";
import PersonList from "./components/PersonList.vue";
import PersonDetail from "./components/PersonDetail.vue";

// import a specific function from the data-servce, the
// function that does the initial load of people from the
// API
import { loadAllPeople } from "./data-service";

Vue.config.productionTip = false;

// define all of the routes or paths that are used by the application
const routes = [
  // this defines the default route of the application
  { path: "/", component: PersonList },

  // this defines the path detail, which will render the PersonDetail Component.
  // we have defined a name property on this specific route because we will
  // use the name when redirecting to the path
  //
  // - we also specify the path parameter "user"
  // - we set the "props" to true so the router knows to expect properties
  {
    path: "/detail/:user",
    name: "detail",
    component: PersonDetail,
    props: true
  }
];

// create the VueRouter Object and provide it the routes we created above
const router = new VueRouter({
  routes // short for `routes: routes`
});

// load the router
Vue.use(VueRouter);

// call function to load all of my data, since this is a promise,
// nothing else will happen until the call returns or completes
loadAllPeople().then(() => {
  new Vue({
    render: h => h(App),
    router // <== provides access to the global router throughout the app
  }).$mount("#app");
});
