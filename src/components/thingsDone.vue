<template>
  <el-row>
        <h3>Starter template consists of </h3>
        <el-table ref="filterTable" :data="tableData" style="width: 100%">
            <el-table-column  prop="feature" label="Feature"  width="180"></el-table-column>
            <el-table-column  prop="description"  label="Description">  </el-table-column>
            <el-table-column  prop="status" label="Status" width="100">
                    <template slot-scope="scope"  label="sss">
                        <el-tag :type="scope.row.status === 'Done' ? 'primary' : 'danger'"
                            disable-transitions>{{scope.row.status}}</el-tag>
                    </template>
            </el-table-column>
        </el-table>
  </el-row>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            feature: 'i18n Vuex',
            description: 'Vuejs Vuex Localization',
            status: 'Done'
          }, 
          {
            feature: 'Element UI',
            description: 'Element UI implemented',
            status: 'Done'
          }, 
          {
            feature: 'Custom Alias',
            description: 'Custom alias for your folder structure',
            status: 'Done'
          }, 
          {
            feature: 'Vue-Router',
            description: 'Navigation between routes',
            status: 'Done'
          },
          {
            feature: 'VueX',
            description: 'Vuex Store modular method has been implemented',
            status: 'Done'
          },
          {
            feature: 'Global alerts',
            description: 'Global alerts are implemented',
            status: 'Done'
          },
          {
            feature: 'Axios',
            description: 'Make http request',
            status: 'Soon'
          }
        ]
      }
    },
    methods: {
      
    }
  }
</script>