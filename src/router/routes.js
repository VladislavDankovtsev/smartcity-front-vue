
const routes = [
  {
    path: '/',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '', component: () => import('components/SmartCity') },
      { path: 'smarthome', component: () => import('components/AboutSmartHome') },
      { path: 'agriculture', component: () => import('components/AboutAgriculture') },
      { path: 'production', component: () => import('components/AboutProduction') },
      { path: 'transport', component: () => import('components/AboutTransport') },
      {
        path: 'systems',
        component: () => import('components/Module'),
        meta: {
          title: 'Системы умного города'
        },
        children: [
          { path: 'smarthome', component: () => import('components/SmartHome') },
          { path: 'agriculture', component: () => import('components/Agriculture') },
          { path: 'production', component: () => import('components/Production') },
          { path: 'transport', component: () => import('components/Transport') }
        ]
      },
      {
        path: 'news',
        component: () => import('components/News'),
        meta: {
          title: 'Новости'
        }
      },
      {
        path: 'documents',
        component: () => import('components/Documentation'),
        meta: {
          title: 'Документация'
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
