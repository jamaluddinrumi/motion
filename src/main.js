import { createRouter, createWebHashHistory } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";
import { createApp } from "vue";
import App from "./App.vue";

// 1. Define route components.
// These can be imported from other files
import Benang from "./pages/Benang.vue";
import Kipas from "./pages/Kipas.vue";
import Speedometer from "./pages/Speedometer.vue";
import CssBenang from "./pages/css/Benang.vue";
import CssSpeedometer from "./pages/css/Speedometer.vue";
import CssKipas from "./pages/css/Kipas.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/benang", component: Benang },
  { path: "/kipas-mask", component: Kipas },
  { path: "/speedometer", component: Speedometer },
  { path: "/css/benang", component: CssBenang },
  { path: "/css/speedometer", component: CssSpeedometer },
  { path: "/css/kipas-mask", component: CssKipas },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(Router);
app.use(MotionPlugin);

app.mount("#app");
