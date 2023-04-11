export default [
  { path: '/',  
    name: 'main',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue')
  },
]



