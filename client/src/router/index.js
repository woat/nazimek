import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'
import AboutUs from '@/components/AboutUs'
import Portfolio from '@/components/Portfolio'
import TheTeam from '@/components/TheTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/team',
      name: 'TheTeam',
      component: TheTeam
    }
  ]
})
