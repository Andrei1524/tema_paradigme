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
      path: '/search',
      name: 'cauta-apartament',
      component: require('@/components/SearchResults').default
    },
    {
      path: '/ap/:id',
      name: 'vizualizare-apartament',
      component: require('@/components/VizualizareAp').default
    },
    {
      path: '/ap/:id/edit',
      name: 'edit-apartament',
      component: require('@/components/EditareApartament.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
