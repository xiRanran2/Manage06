import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Icon", Icon);
app.use(router).mount("#app");
