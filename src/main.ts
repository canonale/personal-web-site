import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";

import VueGtag from "vue-gtag-next";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const gaCode = import.meta.env.VITE_GA_CODE;

console.log("CODE: ", gaCode);
app.use(VueGtag, {
  property: {
    id: gaCode,
  },
});

app.mount("#app");
