import { createApp } from "vue";
import App from "./App.vue";
import "@/app/global.css";
import router from "./app/routes/router";

createApp(App).use(router).mount("#app");
