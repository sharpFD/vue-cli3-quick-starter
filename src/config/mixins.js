/*
* 引入通用vuex
* */
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import * as types from '../store/mutation-types'

export default {
    computed: {
        ...mapState('admin',['userName']),
        ...mapGetters('admin',[])
    },
    methods: {
        ...mapActions('admin', ['userInfo', 'filterRouter']),
        ...mapMutations('admin', [[types.RECEIVE_ADMIN_ID], [types.RECEIVE_ADMIN_TOKEN], [types.RECEIVE_ADMIN_NAME], [types.RECEIVE_ADMIN_AUTH_PAGES], [types.RECEIVE_ADMIN_AUTH_ROLES], [types.RECEIVE_ROUTERS]])
    }
}