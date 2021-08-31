export default [
  {
    name: 'Home',
    path: '/home',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Home',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
