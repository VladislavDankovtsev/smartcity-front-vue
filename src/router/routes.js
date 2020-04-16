
const routes = [
  {
    path: '/',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '', component: () => import('components/SmartCity') },
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
        path: 'contacts',
        component: () => import('components/Contact'),
        meta: {
          title: 'Контакты'
        }
      },
      {
        path: 'setting',
        component: () => import('components/Setting'),
        meta: {
          title: 'Контакты'
        }
      },
      {
        path: 'documents',
        component: () => import('components/Documentation'),
        meta: {
          title: 'Контакты'
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
