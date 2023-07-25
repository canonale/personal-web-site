import type { RouteRecordRaw } from "vue-router";
import RedirectView from "@/views/RedirectView.vue";
import RouteNames from "@/router/routeNames";

interface ExternalRoute {
  domain: string;
  name: string;
}

const locations: ExternalRoute[] = [
  {
    domain: "twitter.com/canonale",
    name: RouteNames.TWITTER,
  },
  {
    domain: "github.com/canonale",
    name: RouteNames.GITHUB,
  },
  {
    domain: "instagram.com/canonale",
    name: RouteNames.INSTAGRAM,
  },
];

const routes: RouteRecordRaw[] = locations.map((item: ExternalRoute) => {
  return {
    name: item.name,
    path: `/${item.domain}`,
    beforeEnter: () => {
      location.href = `https://${item.domain}`;
    },
    component: RedirectView,
    props: {
      url: `https://${item.domain}`,
    },
  };
});

export default routes;
