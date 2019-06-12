<template>
  <el-main>
        <el-row>
           <h1>{{ $t('components.title') }}</h1>
        </el-row>
        <el-row :gutter="24">
                    <el-col :span="8">
                            <div class="component_item">
                                    <h6>Icons</h6>

                                    <div class="inline">
                                         <i class="el-icon-edit"></i>
                                        <i class="el-icon-share"></i>
                                        <i class="el-icon-delete m-b-20"></i>
                                        <el-button type="primary" icon="el-icon-search">Search</el-button>
                                    </div>
                                   
                            </div>  
                    </el-col>
                    <el-col :span="8">
                            <div class="component_item">
                                    <h6>Buttons</h6>

                                    <div class="inline">
                                        <el-button>Default</el-button>
                                        <el-button type="primary">Primary</el-button>
                                        <el-button type="success">Success</el-button>
                                        <el-button type="info">Info</el-button>
                                        <el-button type="warning">Warning</el-button>
                                        <el-button type="danger">Danger</el-button>
                                    </div>
                                   
                            </div>  
                    </el-col>
                    <el-col :span="8">
                            <div class="component_item">
                                    <h6>Plain Buttons</h6>

                                    <div class="inline">
                                        <el-button plain>Plain</el-button>
                                        <el-button type="primary" plain>Primary</el-button>
                                        <el-button type="success" plain>Success</el-button>
                                        <el-button type="info" plain>Info</el-button>
                                        <el-button type="warning" plain>Warning</el-button>
                                        <el-button type="danger" plain>Danger</el-button>
                                    </div>
                                   
                            </div>  
                    </el-col>
                  
                </el-row>

                
                <el-row :gutter="24" class="m-t-50">
                    <el-col :span="8">
                            <div class="component_item">
                                    <h6>Basic Links</h6>

                                    <div class="inline">
                                       <el-link href="https://element.eleme.io" target="_blank" class="m-r-10">default</el-link>
                                        <el-link type="primary" class="m-r-10">primary</el-link>
                                        <el-link type="success" class="m-r-10">success</el-link>
                                        <el-link type="warning" class="m-r-10">warning</el-link>
                                        <el-link type="danger" class="m-r-10">danger</el-link>
                                        <el-link type="info">info</el-link>
                                    </div>
                                   
                            </div>  
                    </el-col>
                    <el-col :span="8">
                            <div class="component_item">
                                    <h6>Radio</h6>

                                    <div class="inline">
                                       <el-radio v-model="radio" label="1">Option A</el-radio>
                                        <el-radio v-model="radio" label="2">Option B</el-radio>
                                    </div>
                                   
                            </div>  
                    </el-col>
                    <el-col :span="8">
                            <div class="component_item">
                                    <h6>Checkbox</h6>

                                    <div class="inline">
                                        <el-checkbox v-model="checked">Option</el-checkbox>
                                    </div>
                                   
                            </div>  
                    </el-col>
                  
           </el-row>
       

            <el-row>
                <div class="highlight center">
                     <h2>For more components have a look at Element UI </h2>
                    <el-link type="primary" href="https://element.eleme.io/#/en-US/component/" target="_blank" class="m-r-10">Element UI</el-link>
                </div>
                   
            </el-row>
       
     
  </el-main>


</template>



<script>
export default {
  name: 'Components',
  data () {
    return {
        radio: '1',
         checked: true
    }
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


<style lang="scss" scoped>
    .m-b-20{
        margin-bottom:20px;
    }
    .m-t-50{
        margin-top:50px;
    }
    .m-r-10{
        margin-right:10px;
    }
    i{
            font-size:25px;
           
    }
    
    .component_item {
        h6{
                margin: 0;
                margin-bottom: 20px;
        }
        display: table;
        width: 100%;
        background: #f4ffff;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 13px;

        .inline{
            width: 100%;
            display: table;
            i,button{
                display:inline-block;
                   margin-bottom: 10px;
                    margin-left: 0;
                    margin-right: 10px;
                    vertical-align: middle;

            }
        }
    }

    .highlight {
        width: 70%;
        margin: 0 auto;
        text-align: center;
        background: #01807f0f;
        padding: 50px;
        border-radius: 10px;
        margin-top: 50px;
    }

</style>
