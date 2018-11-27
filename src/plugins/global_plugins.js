import {store} from '@state'
import Multiselect from 'vue-multiselect'
import Spinner from 'vue-spinner-component/src/Spinner.vue'


export default {
    install (Vue, options) {
        Vue.component('spinner', Spinner )
        Vue.component('multiselect',Multiselect)

        Vue.mixin({
            data () {
                return {
                    content_loading: true,
                }
            }
           
        })
        Vue.prototype.$store = store;
       
    }
}
