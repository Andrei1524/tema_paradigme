import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/Apartamente').default
    },
    {
      path: '/adauga',
      name: 'adauga-apartament',
      component: require('@/components/AdaugaApartament').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
