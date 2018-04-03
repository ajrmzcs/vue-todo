import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import NewTaskComponent from '@/components/NewTaskComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/newtask',
      name: 'NewTaskComponent',
      component: NewTaskComponent
    }
  ]
})
