import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from "./database";
import "./registerServiceWorker";
// import "admin-lte/dist/js/adminlte.min";

import firebase from "firebase";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

Vue.config.productionTip = false;
// Vue.config.productionTip = true;

firebase.initializeApp({
  apiKey: "AIzaSyBIhqKgsI4d75iNUw5Uscpre2YJY6rkHpI",
  authDomain: "vue-adminlte.firebaseapp.com",
  databaseURL: "https://vue-adminlte-default-rtdb.firebaseio.com",
  projectId: "vue-adminlte",
  storageBucket: "vue-adminlte.appspot.com",
  messagingSenderId: "906463419950",
  appId: "1:906463419950:web:fe03524d022611427889bf",
  measurementId: "G-PQY2T4QPD1",
});
// let app
// firebase.auth.onAuthStateChanged(() => {
//   if (!app) {
//     new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount("#app");
//   }
// })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// createApp(App).mount('#app')
