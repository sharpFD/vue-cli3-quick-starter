import {getUserInfo} from "../../api/auth/info";
import * as types from "../mutation-types";
import {constantRouterMap} from "../../router";
import {getToken, setToken, removeToken, getAdminId, setAdminId, removeAdminId} from "../../utils/auth";
import {Message} from "element-ui";

// initial state
const state = {
    adminId: getAdminId(), // id
    userName: "", // 昵称
    token: getToken(), // 登录token
    pages: [], // 页面权限列表
    roles: [], // 角色权限列表
    routers: constantRouterMap // 路由列表
};

// getters
const getters = {
    adminId: state => state.adminId,
    userName: state => state.userName,
    token: state => state.token,
    pages: state => state.pages,
    routers: state => state.routers
};

// actions
const actions = {
    userInfo({commit}) {
        return new Promise((resolve, reject) => {
            getUserInfo()
                .then(response => {
                    console.info('userInfo ===>',response.data.data)
                    const data = response.data || {};
                    commit(types.RECEIVE_ADMIN_ID, data.id);
                    commit(types.RECEIVE_ADMIN_TOKEN, data.token);
                    commit(types.RECEIVE_ADMIN_NAME, data.username);
                    commit(types.RECEIVE_ADMIN_AUTH_PAGES, data.page);
                    commit(types.RECEIVE_ADMIN_AUTH_ROLES, data.role);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    /**
     * 过滤路由列表
     * @param commit
     * @param data
     * @returns {Promise}
     */
    filterRouter({commit}, data) {
        const {accessedRouters} = data;
        if (accessedRouters && accessedRouters.length > 0) {
            commit(types.RECEIVE_ROUTERS, accessedRouters);
        }
    }
};

// mutations
const mutations = {
    [types.RECEIVE_ADMIN_ID](state, adminId) {
        state.adminId = adminId;
        if (adminId === "") {
            removeAdminId();
        } else {
            setAdminId(adminId);
        }
    },
    [types.RECEIVE_ADMIN_TOKEN](state, token) {
        state.token = token;
        if (token === "") {
            removeToken();
        } else {
            setToken(token);
        }
    },
    [types.RECEIVE_ADMIN_NAME](state, userName) {
        state.userName = userName;
    },
    [types.RECEIVE_ADMIN_AUTH_PAGES](state, pages) {
        state.authRules = pages;
    },
    [types.RECEIVE_ADMIN_AUTH_ROLES](state, roles) {
        state.authRules = roles;
    },
    [types.RECEIVE_ROUTERS](state, routers) {
        const tempRm = constantRouterMap.concat(routers);
        state.routers = JSON.parse(JSON.stringify(tempRm));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
