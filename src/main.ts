import { createApp } from "vue";
import router from "./router/index.ts";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import AppLink from "./components/AppLink.vue";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);             
app.component("AppLink", AppLink);  
app.use(router);            

app.mount("#app");          
