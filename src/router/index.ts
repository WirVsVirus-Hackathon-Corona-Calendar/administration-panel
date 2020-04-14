import Vue from 'vue';
import VueRouter from 'vue-router';
import { ListChallenges, CreateChallenge } from '@/views';
import { Routes } from './routes';

Vue.use(VueRouter);

const routes = [
  {
    path: Routes.ListChallenges,
    name: 'ListChallenges',
    component: ListChallenges,
    default: true,
  },
  {
    path: Routes.CreateChallenge,
    name: 'CreateChallenge',
    component: CreateChallenge,
  },
  /* {
    path: '/edit',
    name: 'EditChallenge',
    component: EditChallenge,
    props: true,
  }, */
  {
    path: '*',
    redirect: Routes.ListChallenges,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
