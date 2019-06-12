<template>
  <el-main>
      <el-row>
        <el-container>
            <div class="page-content text-center">
              <h1>{{ $t('vuex.title') }}</h1>
            </div>
        </el-container>
      </el-row>
      <test-vuex @print="print" description="Type anything and submit to see Vuex printing your input."/>
  </el-main>


</template>



<script>
import inputComponentwithProps from "@src/components/input"
export default {
  name: 'Homepage',
  components: {
      'test-vuex': inputComponentwithProps
  },
  data () {
    return {
      
    }
  },
 
  
  methods : {
      print:function(){
           alert('Parent component received the submit event')
      }
    
 },
  beforeUpdate() {
        
  },
  updated() {
     
  },
  beforeMount(){
    
  },
  

}
</script>

