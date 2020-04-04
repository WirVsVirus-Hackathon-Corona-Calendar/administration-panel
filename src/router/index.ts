import Vue from 'vue';
import VueRouter from 'vue-router';
import { ListChallenges, CreateChallenge } from '@/views';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ListChallenges',
    component: ListChallenges,
    default: true,
  },
  {
    path: '/create',
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
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
