import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import useAnalytics from "@/plugins/gAnalytics";
import { VueCookieNext } from "vue-cookie-next";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCookieNext);
useAnalytics(app);

app.mount("#app");
