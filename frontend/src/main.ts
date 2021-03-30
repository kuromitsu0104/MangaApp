import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./stores/index";
import "./index.css";

createApp(App).use(router).use(store, key).mount("#app");
