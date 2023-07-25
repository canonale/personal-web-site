import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import useAnalytics from "@/plugins/gAnalytics";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
useAnalytics(app);

app.mount("#app");
