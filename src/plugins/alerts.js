export default {
    install (Vue, options) {
        Vue.mixin({
            methods:{
                alert_handle_in_calls: function(response,action_type){
                    if(response.status === 500 ){
                        // If not loggedin IN
                        let error_code = response.data.code // get error code from server an send it 
                        // Leave the action_type blank, it will be filled from code error in the global function and translated if needed.
                        // this.show_alert(code,action_type) 
                        this.alert_show_notification(error_code,'') 
                    }else{
                        // If logged IN
                        // Leave error code blank when calling for success
                        // Logged in strings will be used to get translation for loggedin strings
                        //  this.show_alert(code,action_type) 
                        this.alert_show_notification('',action_type) 
                    }
                },
                // This will be used when there is no promise callback, only we want to alert something
                alert_handle_in_calls_directly: function(action_type, status){
                    if(status == 'error'){
                        this.alert_show_toaster(this.$t('errors.'+action_type), 'error')
                    }else{
                        this.alert_show_toaster(this.$t('alerts.'+action_type), 'error')
                    }
                },
                alert_show_notification(error_code,action_type){
                        // If this is an error message
                        if(error_code != ''){
                            let error_code_message = this.alert_get_error_mesages(error_code)
                            // Handle the error 
                            this.alert_show_toaster(this.$t(error_code_message), 'error')
                        }else{
                            /*
                            "succesful_login" : "Logged In successfully",
                            "succesful_logout" : "Logged out succesfuly",
                            ...
                            */
                            this.alert_show_toaster(this.$t('alerts.'+action_type), 'success')
                          
                        }
                },
                alert_show_toaster(message,status){
                    if(status == 'error'){
                        this.$toasted.global.app_error(message); 
                    }else{
                        this.$toasted.global.app_api_success(message); 
                    }
                },
                alert_get_error_mesages(code_data) {
                  
                    // Check error translation
                    switch(code_data){
                        case '0001':
                            return 'Bad credentials';
                        break;
                        case '0002':
                            return 'Access Token Required/Invalid/Expired';
                        break;
                        case '0053':
                            return  'Already Existing Username';
                        break;
                        case '0050':
                            return 'Already Existing Email';
                        break;
                        case '0062':
                            return 'Activation Token Invalid';
                        break;
                        case '0065':
                            return  'Language Missing';
                        break;
                        case '0070':
                            return  'Invalid recommender';
                        break;
                        case '9999':
                            return   'Unknown Error';
                        break;
                        
                    }
                }
            },
            mounted(){
               
            }
        })
        // If you cannot access this functions with this.alert_get_error_mesages , you can access it with $fullsepp_alerts.alert_get_error_mesages
        Vue.prototype.$fullsepp_alerts;
       
       
    }
}
