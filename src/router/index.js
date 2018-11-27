import Vue from 'vue'
import VueRouter from 'vue-router'
// ADD NEW PLUGINS HERE 

import { Layout,Button,Dropdown,Nav,Navbar,Table,Tabs,Card,Tooltip } from 'bootstrap-vue/es/components';


// https://github.com/declandewet/vue-meta
import Meta from 'vue-meta'
// Adds a loading bar at the top during page loads.
import NProgress from 'nprogress/nprogress'
import Toasted from 'vue-toasted' 



import {store} from '@state'
import routes from './routes'
import VueJWT from 'vuejs-jwt'

Vue.use(VueJWT)

Vue.use(Toasted)
Vue.use(VueRouter)
Vue.use(Meta)

Vue.use(require('vue-moment'));

Vue.use(Toasted)
Vue.use(Layout);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(Nav);
Vue.use(Navbar);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(Tooltip);
Vue.use(VueRouter);

// options to the toast
let TostedOptions = {
  type : 'error',
  position: 'bottom-right',
  duration: '2000'
  
};
// options to the toast
let ToastedSuccessOptions = {
  type : 'success',
  position: 'bottom-right',
  duration: '2000'
  
};
// register the toast with the custom message
Vue.toasted.register('app_error',
    (payload) => {
		 
        // if there is no message passed show default message
        if(! payload) {
    	    return "Oops.. Something Went Wrong.."
        }
		
        // if there is a message show it with the message
        return payload
    },
    TostedOptions
)

// register the toast with the custom message
Vue.toasted.register('app_api_success',
    (payload) => {
		  // if there is no message passed show default message
        if(! payload) {
    	    return "Oops.. Something Went Wrong.."
        }
		
        // if there is a message show it with the message
        return payload
    },
    ToastedSuccessOptions
)



const router = new VueRouter({
    routes,
    // Use the HTML5 history API (i.e. normal-looking routes)
    // instead of routes with hashes (e.g. example.com/#/about).
    // This may require some server configuration in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    mode: 'history',
    // Simulate native-like scroll behavior when navigating to a new
    // route and using back/forward buttons.
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
})


// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
    // If this isn't an initial page load...
    if (routeFrom.name !== null) {
      // Start the route progress bar.
      NProgress.start()
    }
  
    // Check if auth is required on this route
    // (including nested routes).
    const authRequired = routeTo.matched.some(route => route.meta.authRequired)
  
    // If auth isn't required for the route, just continue.
    if (!authRequired) return next()
    
    
    

    // If auth is required and the user is logged in...
    if (store.getters['auth/loggedIn']) {
     
      return next() 
    }else{
      redirectToLogin()
    }


    // If auth is required and the user is NOT currently logged in,
    // redirect to login.
    redirectToLogin()

    function redirectToLogin() {
      // Pass the original route to the login component
      next({ path: '/register'})
    }

    // If auth is required and the user is logged in...
    
    /*
    // If the next route is requires user to be Logged IN
      if (routeTo.matched.some(m => m.meta.authRequired)){
        let authentication_status = do_user_check()
        if(authentication_status == false){
          return next({ path : '/register'})
        }else{
          
          return next()
        }
    }
    */

  
})
  
// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
// Complete the animation of the route progress bar.
    NProgress.done()
})

 
export default router 