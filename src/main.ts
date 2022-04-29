import { createApp } from "vue";
import App from "./App.vue";
// 融云
import * as RongIMLib from "@rongcloud/imlib-v4";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import store from "./store";

const app = createApp(App);
// 应用初始化以获取 RongIMLib 实例对象，请务必保证此过程只被执行一次
app.config.globalProperties.im = RongIMLib.init({ appkey: "82hegw5u8e73x" });

app.use(ElementPlus).use(store).use(router).mount("#app");
