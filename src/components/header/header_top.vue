<template>

    <!--Header Başlangıç-->
    <div class="row">
        <header>
            <div class="input-group-btn search-panel h-a-ikon" title="Dil Seçeneği">
                                        <button type="button" class="btn btn-default dropdown-toggle a-i-bg h-dil" data-toggle="dropdown">TR</button>
                                        <ul class="dropdown-menu acilir-ikon h-bayrak-bg" role="menu" style="left:-11px;">
                                            <li><a @click="changeLanguage('tr')"  href="#">TR</a></li>
                                            <li><a @click="changeLanguage('en')"  href="#">EN</a></li>
                                        </ul>
            </div>
           
           
        </header>
    </div>
    <!--Header Son-->



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