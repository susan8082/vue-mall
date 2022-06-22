import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Backstage from '@/components/Backstage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/Backstage',
      name: 'Backstage',
      component: Backstage
    }

  ]
})
