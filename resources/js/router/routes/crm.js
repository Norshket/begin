export default [
  {
    path: '/users',
    component: () => import('../../pages/auth/index.vue'),
    meta: {
      layout: 'user'
    },
    children: [
      {
        path: 'login',
        name:'login',
        component:()=>import('../../pages/auth/SigninPage.vue')
      },
      {
        path:'register',
        name:'register',
        component:()=>import('../../pages/auth/SignupPage.vue')
      },
      {
        path:'verify-email',
        name:'auth-verify-email',
        component:()=>import('../../pages/auth/VerifyEmailPage.vue')
      }
    ]
  }
]