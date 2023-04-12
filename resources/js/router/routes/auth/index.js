export default [
  {
    path: '',
    component: () => import('../../../pages/auth/index.vue'),
    meta: {
      middleware: ['guest'],
      layout: 'auth'
    },
    children: [
      {
        path: '',
        redirect: {name:'login'}
      },
      {
        path: 'login',
        redirect: {name:'login'}
      },
      {
        path: '/login',
        name:'login',
        component:()=>import('../../../pages/auth/LoginPage.vue')
      },
      {
        path:'/register',
        name:'register',
        component:()=>import('../../../pages/auth/RegisterPage.vue')
      },
      {
        path:'/verify-email',
        name:'auth-verify-email',
        component:()=>import('../../../pages/auth/VerifyEmailPage.vue')
      }
    ]
  }
]