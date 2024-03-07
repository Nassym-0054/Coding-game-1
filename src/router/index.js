import { createRouter, createWebHistory } from 'vue-router'
import AlbumDetails from '../views/AlbumDetails.vue'
import AlbumList from '../views/AlbumList.vue'

const routes = [
  {
    path: '/',
    name: 'AlbumList',
    component: AlbumList
  },
  {
    path: '/details/:id',
    name: 'AlbumDetails',
    component: AlbumDetails
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
