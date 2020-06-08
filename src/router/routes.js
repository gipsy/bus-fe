
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'information',
        component: () => import('pages/Information.vue')
      },
      {
        path: 'stations',
        component: () => import('pages/Stations.vue')
      },
      {
        path: 'about',
        component: () => import('pages/About.vue')
      },
      {
        path: 'contacts',
        component: () => import('pages/Contacts.vue')
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
