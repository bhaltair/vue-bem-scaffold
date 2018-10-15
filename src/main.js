import Vue from "vue";
import App from "./App.vue";
import "./style.css";

import vueBemCn from "vue-bem-cn";

// default delimiters settings
const bemConfig = {
  delimiters: {
    ns: "", // namespace
    el: "__", // element delimeter
    mod: "--", // modifier delimeter
    modVal: "-" // value delimeter for modifier
  }
};

Vue.use(vueBemCn, bemConfig);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
