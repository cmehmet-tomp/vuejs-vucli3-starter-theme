<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"  @click="$router.push('/')">Home</el-menu-item>
        <el-submenu >
            <template slot="title">Language</template>
            <el-menu-item  @click="changeLanguage('en')" >English</el-menu-item>
            <el-menu-item  @click="changeLanguage('tr')" >Turkish</el-menu-item>
         
        </el-submenu>
        <el-menu-item index="3" @click="$router.push('/components')">Components</el-menu-item>
        <el-menu-item index="4"  @click="$router.push('/somethingUnOrdinary')">404</el-menu-item>
        <el-menu-item index="5"  @click="$router.push('/vuex')">Vuex</el-menu-item>
       
    </el-menu>

    <!--
    <div class="row">
        <header>
            <div class="input-group-btn search-panel h-a-ikon" title="Dil Seçeneği">
                                        <button type="button" class="btn btn-default dropdown-toggle a-i-bg h-dil" data-toggle="dropdown">TR</button>
                                        <ul class="dropdown-menu acilir-ikon h-bayrak-bg" role="menu" style="left:-11px;">
                                            <li><a  href="#">TR</a></li>
                                            <li><a @click="changeLanguage('en')"  href="#">EN</a></li>
                                        </ul>
            </div>
           
           
        </header>
    </div>
    -->



</template>

<script>
    export default {
        name: "up",
        data() {
            return {
                
            }
        },
        methods: {
            changeLanguage: function(value){
                 this.$i18n.set(value)
            },
        },
        created() {

            
        }
    }
</script>

<style scoped>

</style>