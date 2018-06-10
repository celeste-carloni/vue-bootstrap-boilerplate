import Vue from 'vue'
import Router from 'vue-router'

//PAGES
import HelloWorld from '@/pages/HelloWorld'
import SamplePage from '@/pages/SamplePage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'SamplePage',
      component: SamplePage
    }
  ]
})
