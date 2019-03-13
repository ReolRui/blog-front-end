import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Admin from './views/admin.vue'
import Index from './views/index.vue'
import List from './components/front/list.vue'
import Home from './components/front/home.vue'
import Body from './components/front/body.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [

    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome

    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin

    },
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: Index,
      children: [{
        path: '/home',
        component: Home,
        name: 'home'
      },
      {
        path: '/list',
        component: List,
        name: 'list'
      },
      {
        path: '/article/:name',
        component: Body,
        name: 'article'
      }]
    }



  ]
});
router.beforeEach((to, from, next) => {
  console.log(document.cookie)
  if ((!document.cookie) && to.path == '/admin') {
    console.log('未登录，跳转中....')
    next({ name: 'welcome' })

  }
  else [
    next()

  ]

})
export default router