import axios from "axios";
import {Message} from "element-ui";
//import store from "../store/index";
//import router from "../router/index";

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        if (process.env.NODE_ENV === 'local') {
            config.headers['X-AUTH-TOKEN'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMwMDAwMTExNiwibmFtZSI6Ind1eXVuZ2VuIiwiZXhwVGltZSI6MTU2MDM0MjA2NDY4NywiaXAiOiIwLjAuMC4wIiwiYnVzaW5lc3NJZCI6IjAifQ.IpyQ6ub-UzbhsYKEeyxf_ISbzBx8TSF1e5JT9qqGuoo'
        }
        return config;
    },
    error => {
        // Do something with request error
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        const data = response.data;
        /*if (data.code) {
            if (data.code === 2) {
                store.dispatch("fedLogout").then(() => {
                    Message.error("验证失败,请重新登录");
                    router.push({
                        path: "/login",
                        query: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转过来
                    });
                });
            }
        }*/
        return data;
    },
    error => {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;
