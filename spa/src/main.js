// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {sync} from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
    let token = localStorage['token'];
    if (!token) {
        return next();
    }
    token = JSON.parse(token);
    request.headers.set('Authorization', 'Bearer ' + token.access_token)
    next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
    routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    watch:{
        '$route'(to, from){this.$store.dispatch('clearRegistries')}
    },
    template: '<App/>',
    components: { App }
})
