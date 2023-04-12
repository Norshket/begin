

import Users from './users'

export default [
  {
    path: '/crm',
    component: () => import('../../../pages/crm/index.vue'),
    meta: {
      middleware: ['auth'],
      layout: 'crm'
    },
    children: [
      {
        path: '',
        redirect: { name: 'user.index' },
      },
      ...Users,
    ]
  }
]