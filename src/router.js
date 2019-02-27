import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [

    {
      path: '/',
      name: 'welcome',
      component: Welcome

    },
    {
      path: '/index',
      name: 'index',
      component: Index

    }



  ]
})