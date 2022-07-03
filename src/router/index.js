import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserIndex from '../views/UserIndex.vue'
import UserEdit from '../views/UserEdit.vue'
import UserCreate from '../views/UserCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserIndex
    },
    {
      path: '/create',
      name: 'create',
      component: UserCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: UserEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// router.beforeResolve((to, from, next) => {
//   if(to.name) {
//     this.NProgress.start()
//   }
//   next()
// })
// router.afterEach(() => {
//   this.NProgress.done()
// });
export default router
