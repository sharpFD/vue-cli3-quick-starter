import Vue from 'vue'
import Router from 'vue-router'

const DemoPage = () => import('views/DemoPage.vue')
const AuthPage = () => import('views/AuthPage.vue')
const Err403 = () => import('views/error/err403')
const Err404 = () => import('views/error/err404')
const Err500 = () => import('views/error/err500')

Vue.use(Router)

/**
 * 无权限限制页面
 * @type {*[]}
 */
export const constantRouterMap = [
    {
        path: "*",
        component: Err404
    }, {
        path: "/",
        redirect:'/demo-page'
    },
    {
        path: "/403",
        component: Err403,
        name: "403"
    },
    {
        path: "/404",
        name: "404",
        component: Err404
    },
    {
        path: "/500",
        name: "500",
        component: Err500
    },{
        path: '/demo-page',
        name: 'demo-page',
        component: DemoPage
    },
]
export default new Router({
    // mode: 'history',
    routes: constantRouterMap
})

/**
 * 包含权限控制页面
 * auth代表控制级别到用户
 * role代表控制级别到角色
 * @type {Array}
 */
export const asyncRouterMap = [
    {
        path: '/auth-page',
        name: 'auth-page',
        component: AuthPage,
        meta: {
            auth: 'authPage',
            role:['admin','user']/* 页面权限控制时，支持定义页面名称到auth。 角色级别控制时，role记录可以访问此页面的角色 */
        }
    },
]