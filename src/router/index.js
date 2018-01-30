import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
//引用页面模板->供路由使用
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path : '/test',
      name : 'test',
      component : test
    } */
    {
      path : '/',
      name : 'index',
      component : index
    },
    {
      path : '/btn',
      name : 'btn',
      component : pageQuiButton
    },
    {
      path : '/list',
      name : 'list',
      component : pageQuiList
    },
    {
      path : '/nav',
      name : 'nav',
      component : pageQuiNav
    }
  ]
})
