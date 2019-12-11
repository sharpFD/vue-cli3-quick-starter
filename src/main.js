import "babel-polyfill"; // 解决Ie9
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import ElementUI from 'element-ui'
import "./element";
import * as filters from "./filtres/index"; // 全局过滤器
import api from './config/install'
import "./assets/iconfont/iconfont.css";
import './styles/base.scss'
import './styles/color.scss'
//import './role'

Vue.use(ElementUI)
Vue.use(api)

// 注册全局实用程序过滤器（register global utility filters）.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
