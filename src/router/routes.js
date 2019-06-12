import PageHome from '@views/home'
import PageComponents from '@views/components'
import PageVuex from '@views/vuex'


export default [
  {
    path: '/',
    name: 'home',
    component: PageHome,
    meta: {
      authRequired: false
    }
  },
  
  
  {
    path :'/components',
    component: PageComponents,
    meta: {
      authRequired: false,
    }
  },
  {
    path :'/vuex',
    component: PageVuex,
    meta: {
      authRequired: false,
    }
  },
  
  {
    path: '/404',
    name: '404',
    component: require('@views/404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  }
]

