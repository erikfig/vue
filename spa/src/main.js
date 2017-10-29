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
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI1NzU2MGJkZGJmNWFlYzJhMmVhMWY4YjMwZWRjOGNhZTZmMjMzYTRhNjdhN2YzNWQ2ZjgxOTcxZTc4MTkwNDQ2M2E2MDUwY2I2NTIwY2Q0In0.eyJhdWQiOiIyIiwianRpIjoiYjU3NTYwYmRkYmY1YWVjMmEyZWExZjhiMzBlZGM4Y2FlNmYyMzNhNGE2N2E3ZjM1ZDZmODE5NzFlNzgxOTA0NDYzYTYwNTBjYjY1MjBjZDQiLCJpYXQiOjE1MDg2OTEyOTEsIm5iZiI6MTUwODY5MTI5MSwiZXhwIjoxNTA4Njk0ODkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kHxHdMg5lvUvZuWtpIdnizClJ8OIf_Yskx1oBqhD-2fcej00rSLZy75smPfSo9BM9WT8Y0HRv0APAFF3-5_5fj-VNb-YAXZ88k6AZyfkQlzN5nJ2G_4H7ZvfNXgaOLkAaT9eZ-bX_ldHyiuA8lTHL0jyIb86qJ2hdpAgGGGdLVTCmcMC2oDoHBhQCc2mISLJQWT5gyYp4UVnRf74ywyYcOIHL_zqoFd0WrcEBkygf6L-ifsfqv7kHrhKEPNBG_f6qiA5aLKOLPU3J8FFmK6EqHLWk4ZXrdOPgnjT_e722owURiDodEpYfVwiu_Kd4pcgSxa78mYTRfM9b2WMqJCqgZKRqKDaEZ-JbzBbNjZE3_oeBimAEdw0Hj39TvnVb8EHrWbg5tfp-4i19xQlviRdW3iOTfw2uSob3L2Fwgupz-LgE3C4SGlWY2a49i-Y_5XwJHPtqkQ0F82bJh1GXcj9nx1ubrLVdF6muzsjWOhK3RVC3oqthEvIhbU2VKw33_luhh2tqhW_l8TRwJNQ0eCKXth2_2kbAfiiiJvx-gaeQ-yPckHVWW-Mm3AWiUkgJ-vmEtX_s1HAzPSIfla8Tgb6wPbTKHnBcjYrxHQ7TNPK-F0zX4zOZxGXEWYE3BzBW-SslG-6Qd-LegxkNNEM3B6DCGlihnPZemPDtq6VheEMy2M')
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
