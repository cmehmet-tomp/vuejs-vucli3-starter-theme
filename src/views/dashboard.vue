<template>
    <div class="">
        <button  @click="logout()">logout</button><br>

        <router-link :to="'/'">Homepage</router-link>
        <h1>
       
        Profile
        </h1>
        <ul>
            <li>
                <p>
                    User ID : <strong>{{current_user_id}}</strong>
                </p>
            </li>
             <li>
                 <p>
                    Username :<strong> {{current_username}}</strong>
                </p>
               
            </li>
             <li>
                 <p>
                    User Type :<strong> {{current_user_type}}</strong>
                </p>
             </li>
             <li>
                 <p>
                    User Roles :<strong> {{current_role}}</strong>
                </p>
                
            </li>
             <li>
                <p>
                    Total roles :<strong> {{current_rolecount}}</strong>
                </p>
               
            </li>
            
           
        </ul>
       
        
        
       
        
       
    
      
    </div>
    
  
</template>

<script>

export default {
  name: 'siteHeader',
  data () {
   return {
      current_user_id : '',
      current_username : '',
      current_user_type :'',
      current_role : '',
      current_rolecount :'', 
      current_rolecount : '',
      current_decoded_token :'', 
    }
  },
  methods: {
      
       logout: function(){
          this.$store.dispatch('auth/logOutUser')
       }
  },
  
  mounted: function(){

      this.current_user_id = localStorage.getItem('auth.user_id')
      this.current_username = localStorage.getItem('auth.user_name')
      this.current_user_type = localStorage.getItem('auth.user_type')
      this.current_role = localStorage.getItem('auth.user_role_0')
      this.current_rolecount = localStorage.getItem('auth.user_role_count')
      this.current_decoded_token = localStorage.getItem('auth.access_token')

  },
  destroyed: function(){
      
  },
  
  


}
</script>


