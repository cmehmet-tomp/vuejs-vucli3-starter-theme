<template>
   <el-row>
       <p>
           {{description}}
       </p>
       <form @submit.prevent="submit" >   
             <el-input placeholder="Type anything and press enter" v-model="input"></el-input>
       </form>
       <div class="loading" v-loading="loading"></div>

    
   </el-row>
    

</template>



<script>
import inputComponentwithProps from "@src/components/input"
export default {
  name: 'Input',
  props: { 
      description: { 
          type: String,
          required: true,
          default: "Please add description"
      }
  },
  computed:{ 
        message() {
            let temp =  this.$store.getters['print/get']
            if(temp != ''){
                 this.$notify({
                    title: 'Vuex message',
                    message:  temp,
                    type: 'success'
                });
            }
            return temp
        }
  },
  watch:{
      message(newvalue) {
             return newvalue
        }
  },
  components: {
      'test-vuex': inputComponentwithProps
  },
  data () {
    return {
        loading: false,
        input: '',
    }
  },
 
  
  methods : {
        submit(){
            this.loading = true

            setTimeout(() => {
                    this.$store.dispatch('print/message', this.input )
                    this.loading = false
                    
                    this.input = ''
                    //Send the event to parent component
                    this.$emit('print')
            }, 700);
           
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


<style lang="scss" scoped>
    .loading{
        display:table;
        margin-top:50px;
        background:#000;
    }
</style>

