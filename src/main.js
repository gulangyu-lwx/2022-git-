import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/flexible";
import "../src/static/css/global.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
