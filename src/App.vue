<template>
  <div id="app">    
         <site-header/>
        <router-view/>
        <site-footer/>
    </div>
</template>

<script>
import siteHeader from '@components/header/header_top'
import siteFooter from '@components/footer/footer.vue'
export default {
 name: 'App',
  metaInfo: {
     
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Title',
      // all titles will be injected into this template
      titleTemplate: '%s | Default description goes here',
      
  },
  computed: {
       
     
  },
  data () {
    return {
         
     }
  },
  components :{
      'site-header'  : siteHeader ,
      'site-footer'  : siteFooter
   },
  created(){
      
  }
  
}
</script>


<!-- lang="scss" -->

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
@import '~vue-multiselect/dist/vue-multiselect.min.css';

// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

// ===
// Vendor
// ===

#nprogress .bar {
  background: #1FC665;
}
</style>


