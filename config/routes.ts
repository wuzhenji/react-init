export default [
  {
    name: '主页',
    path: '/home',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Home',
  },
  {
    name: '光标',
    path: '/rangetest',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/RangeTest',
  },
  {
    name: '鼠标进入移出动画',
    path: '/mouseanimation',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/MouseAnimation',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
