import { createApp } from "vue";

import { router } from "./router/router.js"; // 라우터 추가하고
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";

// Create Vue Instance
const app = createApp(App);
Vue.use(BootstrapVue);
app.use(router); // 사용 설정 하기

app.mount("#app");
