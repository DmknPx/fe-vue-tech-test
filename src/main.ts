import "./assets/main.css";

import { createApp } from "vue";

import { createPinia } from "pinia";
import router from "./router";

import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import Aura from "@primeuix/themes/aura";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(DialogService);

app.mount("#app");
