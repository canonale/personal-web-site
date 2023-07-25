import VueGtag from "vue-gtag-next";
import type { App } from "vue";

const gaCode = import.meta.env.VITE_GA_CODE;
const isProduction = !import.meta.env.DEV;

const useAnalytics = (app: App<Element>) => {
  if (isProduction) {
    app.use(VueGtag, {
      property: {
        id: gaCode,
      },
    });
  }
};

export default useAnalytics;
