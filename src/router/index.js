import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Auth/login.vue'
import addUser from '../components/Dashboard/addUser.vue'
import editUser from '../components/Dashboard/editUser.vue'
import listUser from '../components/Dashboard/listUser.vue'
import NotFound from '../views/notFound.vue';
import store from '../store/index.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresUnauth: true }
  },
  {
    path: '/addUser',
    name: 'addUser',
    component: addUser,
    meta: { requiresAuth: true }
  },
  {
    path: '/editUser',
    name: 'editUser',
    component: editUser,
    meta: { requiresAuth: true }
  },
  {
    path: '/listUser',
    name: 'listUser',
    component: listUser,
    meta: { requiresAuth: true }
  },
  { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/Login');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router
