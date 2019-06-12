<template>
  <el-main>
      <el-row>
        <el-container>
            <div class="page-content text-center">
              <h1>{{ $t('homepage.title') }}</h1>
            <el-row>
              <el-link type="primary" :href="'/components'">Components</el-link>
            </el-row>
          
        </div>
        </el-container>
      </el-row>

      <upcoming/>
  </el-main>


</template>



<script>
import thingsDone from "@src/components/thingsDone"
export default {
  name: 'Homepage',
  components: {
      'upcoming': thingsDone
  },
  data () {
    return {
      
    }
  },
  metaInfo: {
      title: 'Welcome',
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
  beforeUpdate() {
        
  },
  updated() {
     
  },
  beforeMount(){
    
  },
  

}
</script>

