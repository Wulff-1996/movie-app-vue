import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ApiService from "@/services/ApiService";

Vue.config.productionTip = false;
Vue.prototype.$apiService = ApiService;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
