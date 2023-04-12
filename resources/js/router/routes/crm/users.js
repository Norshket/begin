export default [
  {
    path: '/users',
    name: 'users.index',
    // component: () => import('../../../pages/crm/reports/IndexPage.vue'),
    meta: {
      middleware: ['can:read users'],
      title: 'users.titles.index'
    },
    // children: [
    //   {
    //     path: 'clients',
    //     name: 'reports.clients',
    //     component: () => import('../../../pages/crm/reports/clients/ClientPage.vue'),
    //     meta: {
    //       middleware: ['can:read reports'],
    //       title: 'resources.reports.titles.index'
    //     }
    //   },
    // ]
  }
]