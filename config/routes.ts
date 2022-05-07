export default [
  {
    name: 'Home',
    path: '/home',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Home',
  },
  {
    name: 'RangeTest',
    path: '/rangetest',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/RangeTest',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
