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

// Vue.http.interceptors.push((request, next) => {
//     request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxNjRmNmNmZDcwMmMwYWI3MWJmODk0MDM0MjA3NTU4YjdjMjhmNmRlMWQ0ODBiNGI3NjJlOTM1NjUwOWQ3NTc5MTFhMjZiMjNkYzNmOGU5In0.eyJhdWQiOiIyIiwianRpIjoiNDE2NGY2Y2ZkNzAyYzBhYjcxYmY4OTQwMzQyMDc1NThiN2MyOGY2ZGUxZDQ4MGI0Yjc2MmU5MzU2NTA5ZDc1NzkxMWEyNmIyM2RjM2Y4ZTkiLCJpYXQiOjE1MDg0MTMyNjIsIm5iZiI6MTUwODQxMzI2MiwiZXhwIjoxNTM5OTQ5MjYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LRMJ_bvFBAC4ACVTLPI95E-Hpj6T0EocSSHSc19xK_PSO7sHjuOn3xCCBcGJFSnYY1nqLO2JCZJArgK2EKmzd-kr6dqjeYfNSFWIGWi8EJJRWbqnUsAPggbL_y1YyJ-EZ8AuKSUuL7rVA7FqXqnvymkzOPMcbVXMAGBBXGkjt97SkcI7GoPsWRCiMXAgl_I7ElkcKcwJoFmckdM6yfJTD9VrnhDqahiBcWDwnvzAFqM2Wo3JyWfVVbnPa4JXWxgwb8xEb4tDRz-4LQFmYFYNYBtDaBLvUlyQWvmXNIs1cpfJtxdeT6Zos_FiL7mKyGsPcXtW8AidXCaRR64lvtxM7KFq0AhbkDNl7dPkr8K44F0ktAbOoKbJulUxHYR0HlTFB9Baj8ja-n7eV0xQ2nfbonLzgmr9tnrPvmYccv5UIxnac5C7cV8us_dnqnkqib2DNGLY6kmSPUG2ntBMBTxXugknFa7BjR3GRqFuefnSQqoEoJufoIxjyB0dSOOLSo4yqF_QhntCy3H4Cm9QP5pYE1av3hbPilBsRGTjVRzCqk7VnhHKJ-oCHAqqNkrODVjZBfG-SSKlRzeqgadnPX_cTgkb2pvOoeOPSFXLIzlH3uqDEJ_t03m9XG-64hgasZ21-1plKgIUx3Ik-ZkNODWymqpJu67ZFkIrIJl4srCkq8k')
//     next()
// })

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
