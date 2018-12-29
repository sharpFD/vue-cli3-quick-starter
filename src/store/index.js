import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import admin from "./modules/admin";

if (process.env.NODE_ENV === "local") {
    Vue.use(Vuex);
}

const debug = process.env.NODE_ENV !== "prod";

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        admin
    },
    strict: debug
    // plugins: debug ? [createLogger()] : []
});
