import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView   from './views/HomeView.vue'
import DetalleView from './views/DetalleView.vue'

const routes = [
  { path: '/',             name: 'home',    component: HomeView    },
  { path: '/planeta/:id',  name: 'detalle', component: DetalleView },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
