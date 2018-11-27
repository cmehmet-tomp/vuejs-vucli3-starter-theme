<template>
<div class="page-content-center">
     
    <div class="page-content">
           <h1>{{ $t('homepage.hello_string') }}</h1>
           <router-link :to="'/register'">Register</router-link>
      </div>

</div>


</template>



<script>
export default {
  name: 'Homepage',
  data () {
    return {
      
    }
  },
  metaInfo: {
      title: 'Fullsepp',
      meta: [
        { name: 'description', content: 'Page description goes here.' },
        {
          'property': 'og:site_name',
          'content': 'About Loycha',
          'vmid': 'og:site_name'
        },
        {
          'property': 'og:title',
          'content': 'Test title',
          'vmid': 'og:title'
        },
        {
          'property': 'og:image',
          'content': 'https://davidwalsh.name/wp-content/themes/klass/img/facebooklogo.png',
          'vmid': 'og:image'
        },
         {
          'property': 'og:url',
          'content': 'https://davidwalsh.name/facebook-meta-tags',
          'vmid': 'og:url'
        },
        {
          'property': 'og:type',
          'content': 'website',
          'vmid': 'og:type'
        }

      ],
  },
  
  methods : {
    
    
   },
  components : { },
  beforeUpdate() {
        
  },
  updated() {
     
  },
  beforeMount(){
    
  }

}
</script>

