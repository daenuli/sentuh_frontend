import { createRouter, createWebHistory } from 'vue-router'
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
