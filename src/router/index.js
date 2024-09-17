import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/preference',
      name: 'preference',
      component: () => import('../views/PreferenceView.vue')

    },
    {
      path: '/destination/:id',
      props: true,
      component: () => import('../views/DestinationView.vue'),
      children: [
        {
          redirect:{ name:'description'},
          path:'',
          name:'destination',
        },
        {
          path: 'description',
          name: 'description',
          props: true,
          component: () => import('../views/DescriptionView.vue'),
        },
        {
          path: 'experience',
          name: 'experience',
          props: true,
          component: () => import('../views/ExperiencesView.vue'),
        }
      ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundPage.vue')
    },
  ]
})

export default router
