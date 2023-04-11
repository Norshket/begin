export default [
  {
    path: '',
    component: () => import('../../pages/auth/index.vue'),
    meta: {
      layout: 'auth'
    },
    children: [
      {
        path: '/',
        redirect: {name:'login'}
      },
      {
        path: '/login',
        redirect: {name:'login'}
      },
      {
        path: '/login',
        name:'login',
        component:()=>import('../../pages/auth/SigninPage.vue')
      },
      {
        path:'/register',
        name:'register',
        component:()=>import('../../pages/auth/SignupPage.vue')
      },
      {
        path:'/verify-email',
        name:'auth-verify-email',
        component:()=>import('../../pages/auth/VerifyEmailPage.vue')
      }
    ]
  }
]