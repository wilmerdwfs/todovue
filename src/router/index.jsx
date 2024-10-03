import { createRouter, createWebHistory } from 'vue-router';
import TaskEdit from '../components/task/TaskEdit.vue';
import TaskList from '../components/task/TaskList.vue';
import TaskRegister from '../components/task/TaskRegister';
import LoginLogin from '../components/login/LoginLogin';

const routes = [

  {
    path: '',
    name: 'TaskList',
    component: TaskList, // Componente para la página de edición
  },

  {
    path: '/task/editar/:id',
    name: 'TaskEdit',
    component: TaskEdit, // Componente para la página de edición
  },
  {
    path: '/task/registrar',
    name: 'TaskRegister',
    component: TaskRegister, // Componente para la página de edición
  },
  {
    path: '/login',
    name: 'LoginLogin',
    component: LoginLogin, // Componente para la página de edición
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;