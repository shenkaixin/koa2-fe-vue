import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Index'
import Reg from './views/reg/Index'
import Home from './views/Home'
import AddUser from './views/user/add'
import UpdateUser from './views/user/update'
import Movie from './views/movie-file/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '/updateUser/:id',
      name: 'updateUser',
      component: UpdateUser
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    }
  ]
})
