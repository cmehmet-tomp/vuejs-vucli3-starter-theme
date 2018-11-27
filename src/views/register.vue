<template>
    <!--register başladı-->
    
    <div class="row">
        
        <form class="col-lg-6 col-md-6 col-xs-12" @submit.prevent="tryToLogIn">
            <div class="r-form-baslik" style="background:#194d85;">
                <a href="#">
                    {{ $t('register_page.login_welcome') }}
                    
                </a>
            </div>
           
           
            <div class="form-group t-f-kutu-bg">
                <label class="col-md-2 col-xs-4 g-f-text" for="login_email" style="margin-left:-15px;">
                    <strong>{{ $t('fieldInputs.email') }}</strong>
                </label>
                <div class="col-md-6 col-xs-8">
                    <input 
                        id="login_email" 
                        v-model="login_email" 
                        name="login_email" 
                        type="text" 
                        class="form-control g-f-kutu">
                </div>
            </div>

            <div class="form-group t-f-kutu-bg">
                <label class="col-md-2 col-xs-4 g-f-text" for="login_password" style="margin-left:-15px;">
                        <strong>{{ $t('fieldInputs.password') }}</strong>
                </label>
                <div class="col-md-6 col-xs-8">
                    <input 
                        v-model="login_password"
                        name="login_password" 
                        type="password" 
                        class="form-control g-f-kutu">

                    <router-link :to="'/forgot'" style="float:right; margin-top:5px; color:#333;">
                        {{ $t('register_page.forgot_password') }}
                    </router-link>
                </div>
            </div>
            <div class="col-md-12 captcha-bg">
                    {{ $t('register_page.captcha_solve') }}
            </div>


            


            <button type="submit" class="site_btn">{{ $t('register_page.login_button') }}</button>

          
            
               
        </form>


        <form class="col-lg-6 col-md-6 col-xs-12"  @submit.prevent="tryToRegister">
            <div class="r-form-baslik"><a href="#">{{ $t('register_page.register_welcome') }}</a></div>
            <div class="creative_checkbox flex-container flex-row">
                    <div class="flex-3-cols checkbox_item" @click="signup_type_select('IN')" :class="{'selected_box': signup_type == 'IN'} ">
                        <div class="selected_icon">
                              <i class="fa fa-check"></i>
                        </div>
                        <div class="box_icon">
                              <i class="fa fa-user"></i>
                        </div>
                        <div class="box_description">
                            Bireysel
                        </div>
                    </div>
                    <div class="flex-3-cols checkbox_item" @click="signup_type_select('CO')" :class="{'selected_box': signup_type == 'CO'} ">
                        <div class="selected_icon">
                              <i class="fa fa-check"></i>
                        </div>
                        <div class="box_icon">
                              <i class="fa fa-building"></i>
                        </div>
                        <div class="box_description">
                            Kurumsal
                        </div>
                    </div>
            </div>
            
           


            <template v-if="signup_type == 'CO'">
                
                    <div class="form-group t-f-kutu-bg">
                        <label class="col-md-4 col-xs-4 g-f-text" for="companyName" style="margin-left:-15px;">* Gerçek Şirket Ünvanı</label>
                        <div class="col-md-6 col-xs-8">
                                <input 
                                    id="companyName"
                                    v-model="companyName"
                                    name="companyName" 
                                    placeholder="EA Corporation Limited"
                                    type="text" 
                                    class="form-control g-f-kutu">
                            </div>
                    </div>


                    <div class="form-group t-f-kutu-bg">
                        <label class="col-md-4 col-xs-4 g-f-text" for="CO_username" style="margin-left:-15px;">* Üyelik Ünvanı</label>
                        <div class="col-md-6 col-xs-8">
                                <input 
                                    id="CO_username"
                                    v-model="CO_username"
                                    placeholder="EA Corporation"
                                    name="CO_username" 
                                    type="text" 
                                    class="form-control g-f-kutu">
                            </div>
                    </div>
                
                        
            </template>

            <template v-if="signup_type == 'IN'">
                <div class="form-group t-f-kutu-bg">
                    <label class="col-md-4 col-xs-4 g-f-text" for="IN_fullname" style="margin-left:-15px;">* Gerçek Ad Soyad</label>
                    <div class="col-md-6 col-xs-8">
                            <input 
                                id="IN_fullname"
                                v-model="IN_fullname"
                                name="IN_fullname" 
                                type="text" 
                                class="form-control g-f-kutu">
                        </div>
                </div>


                <div class="form-group t-f-kutu-bg">
                    <label class="col-md-4 col-xs-4 g-f-text" for="IN_username" style="margin-left:-15px;">* Kullanıcı İsmi</label>
                    <div class="col-md-6 col-xs-8">
                            <input 
                                id="IN_username"
                                v-model="IN_username"
                                name="IN_username" 
                                type="text" 
                                class="form-control g-f-kutu">
                        </div>
                 </div>
                        
            </template>
            

            <div class="form-group t-f-kutu-bg">
               <label class="col-md-4 col-xs-4 g-f-text" for="email" style="margin-left:-15px;">* E-Mail</label>
               <div class="col-md-6 col-xs-8">
                    <input 
                        id="email"
                        v-model="email"
                        name="email" 
                        type="email" 
                        class="form-control g-f-kutu">
                </div>
            </div>

            <template v-if="signup_type == 'IN'">
                <!--Sabit kutu bg-->
                <!--Sabit kutu bg-->
                <div class="form-group t-f-kutu-bg">
                    <label class="col-md-4  g-f-text" for="dateOfBirth" style="margin-left:-15px;">*Doğum Tarihi</label>
                    <div class="col-md-2">
                        <input type="text"   maxlength="2" id="IN_birth_day" name="IN_birth_day"  v-model="IN_birth_day"  placeholder="Gun" class="form-control g-f-kutu" >
                    </div>
                    <div class="col-md-2">
                            <input type="text"  maxlength="2"  id="IN_birth_month" name="IN_birth_month"  v-model="IN_birth_month"  placeholder="Ay" class="form-control g-f-kutu" >
                    </div>
                    <div class="col-md-2">
                            <input type="text"  maxlength="4" name="IN_birth_year" id="IN_birth_year" v-model="IN_birth_year"  placeholder="Yil" class="form-control g-f-kutu" >
                    </div>
                    
                </div>

               
            </template>
            <template v-else>
                    <div class="form-group t-f-kutu-bg">
                        <label class="col-md-4  g-f-text" for="dateOfBirth" style="margin-left:-15px;">* Kuruluş Tarihi</label>
                        <div class="col-md-2">
                            <input type="text"   maxlength="2" id="CO_foundation_day" name="CO_foundation_day"  v-model="CO_foundation_day"  placeholder="Gun" class="form-control g-f-kutu" >
                        </div>
                        <div class="col-md-2">
                                <input type="text"  maxlength="2"  id="CO_foundation_month" name="CO_foundation_month"  v-model="CO_foundation_month"  placeholder="Ay" class="form-control g-f-kutu" >
                        </div>
                        <div class="col-md-2">
                                <input type="text"  maxlength="4" name="CO_foundation_year" id="CO_foundation_year" v-model="CO_foundation_year"  placeholder="Yil" class="form-control g-f-kutu" >
                        </div>
                        
                    </div>
                   
            </template>


            <div class="form-group t-f-kutu-bg">
               <label class="col-md-4 col-xs-4 g-f-text" for="register_password" style="margin-left:-15px;">{{ $t('fieldInputs.password') }}</label>
               <div class="col-md-6 col-xs-8">
                    <input 
                        id="register_password"
                        v-model="register_password"
                        name="register_password" 
                        type="password" 
                        class="form-control g-f-kutu">
                </div>
            </div>

            <div class="form-group t-f-kutu-bg">
               <label class="col-md-4 col-xs-4 g-f-text" for="register_password_confirm" style="margin-left:-15px;">{{ $t('fieldInputs.confirm_password') }}</label>
               <div class="col-md-6 col-xs-8">
                    <input 
                        v-model="register_password_confirm"
                        name="register_password_confirm" 
                        type="password" 
                        class="form-control g-f-kutu">
                </div>
            </div>
            
            <div class="col-md-12 captcha-bg" style="margin-top:0px;">{{ $t('register_page.captcha_solve') }}</div>
          
            <button type="submit" class="site_btn primary--color">{{ $t('register_page.register_button') }}</button>

         
            
        </form>
    </div>
    <!--register bitti-->
</template>

<script>
    import Spinner from 'vue-spinner-component/src/Spinner.vue'
    export default {
        name: 'Register',
        data() {
            return {
                login_email: '',
                login_password: '',
                
                signup_type : 'IN',
                //individual signup fields
                IN_fullname: '',
                IN_username: '',
               
               
                IN_birth_day: '',
                IN_birth_month: '',
                IN_birth_year: '',
                dateOfBirth: '',
                
                email: '',
                register_password: '',
                register_password_confirm: '',


                //Company signup fields
                companyName: '',
                CO_username: '',
                CO_foundation_day: '',
                CO_foundation_month: '',
                CO_foundation_year: '',
                dateOfFoundation: ''
                
            }
        },

        metaInfo: {
            title: 'Register',
            meta: [
                { name: 'description', content: 'Page description goes here.' },
            ],
        },

        methods: {
            check_query_params: function(){
                let check_if_email_verification = this.$route.query

                if(Object.keys(check_if_email_verification).length != 0){
                    //?token=2139128309128309128309213
                    this.confirmin_email_address_spinner = true
                    let current_email_verify_token = check_if_email_verification.token
                    // Call API Here, to check if given Email verification ID is still valid.
                    this.$store.dispatch("auth/activate_user", current_email_verify_token);
                   
                    
                }
            },
            toaster(message,status){
                if(status == 'error'){
                    this.$toasted.global.app_error(this.$t(message)); 
                }else{
                    this.$toasted.global.app_api_success(this.$t(message)); 
                }
                
            },
            signup_type_select: function(value){
                this.signup_type = value
            },
            
            tryToRegister: function(){
                let errors = 0;

                // Validate Email function
                function validateEmail(email) {
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                }
                // Validate Email
                if(this.email == '' || this.email == 'undefined'){
                    document.getElementById("email").focus();
                    this.toaster('Please add your e-mail address', 'error')
                    errors++;
                }else{
                    //validate email 
                    if (!validateEmail(this.email)) {
                        errors++;
                        document.getElementById("email").focus();
                        this.toaster('Not a valid email address', 'error')
                    }
                }

                if (this.signup_type == 'IN'){
                    // IF ITS INDIVIDUAL SIGNUP
                    // Validate Fullname
                    if(this.IN_fullname == '' || this.IN_fullname == 'undefined'){
                        document.getElementById("IN_fullname").focus();
                        this.toaster('Please add your Fullname', 'error')
                        errors++;
                    }
                    // Validate Username
                    if(this.IN_username == '' || this.IN_username == 'undefined'){
                        document.getElementById("IN_username").focus();
                        this.toaster('Please add your Username', 'error')
                        errors++;
                    }
                    if(this.IN_birth_day == ''){
                        document.getElementById("IN_birth_day").focus();
                        this.toaster('Day of birth is a required field', 'error')
                        this.form_error = true
                    }  
                    if(this.IN_birth_month == ''){
                        document.getElementById("IN_birth_month").focus();
                        this.toaster('Month of birth is a required field', 'error')
                        this.form_error = true
                    }  
                    if(this.IN_birth_year == ''){
                        document.getElementById("IN_birth_year").focus();
                        this.toaster('Year of birth is a required field', 'error')
                        this.form_error = true
                    }  
                     var enteredAge = this.getAge(this.IN_birth_year);
                    
                    if( enteredAge < 18 ) {
                        document.getElementById("IN_birth_year").focus();
                        this.toaster('You need to be at least 18 years old to use our platform.', 'error')
                        this.form_error = true
                        return false
                    }
                    this.dateOfBirth = new Date(this.IN_birth_year+'.'+this.IN_birth_month+'.'+this.IN_birth_day).getTime() / 1000
                }else{
                    // IF ITS COMPANY SIGNUP
                    if(this.companyName == '' || this.companyName == 'undefined'){
                        document.getElementById("companyName").focus();
                        this.toaster('Please add your company name', 'error')
                        errors++;
                    }
                    if(this.CO_username == '' || this.CO_username == 'undefined'){
                        document.getElementById("CO_username").focus();
                        this.toaster('Please add your username preference', 'error')
                        errors++;
                    }
                    if(this.CO_foundation_day == ''){
                        document.getElementById("CO_foundation_day").focus();
                        this.toaster('Day of foundation is a required field', 'error')
                        this.form_error = true
                    }  
                    if(this.CO_foundation_month == ''){
                        document.getElementById("CO_foundation_month").focus();
                        this.toaster('Month of foundation is a required field', 'error')
                        this.form_error = true
                    }  
                    if(this.CO_foundation_year == ''){
                        document.getElementById("CO_foundation_year").focus();
                        this.toaster('Year of foundation is a required field', 'error')
                        this.form_error = true
                    }  
                    this.dateOfFoundation = new Date(this.CO_foundation_year+'.'+this.CO_foundation_month+'.'+this.CO_foundation_day).getTime() / 1000
                }


                    
                    if (this.register_password != this.register_password_confirm) {
                        document.getElementById("register_password").focus();
                        this.toaster('Passwords Do not match', 'error')
                        //document.getElementById("pass1").style.borderColor = "#E34234";
                        //document.getElementById("pass2").style.borderColor = "#E34234";
                        errors++;
                    }

                    if(errors == 0){
                        let submitted_user_data = ''
                        if(this.signup_type == 'IN'){
                            // First get all submitted user data for individual register
                             submitted_user_data = {
                                'displayName': this.IN_fullname,
                                'username': this.IN_username,
                                'email': this.email,
                                'dateOfBirth': this.dateOfBirth,// This is calculated inside function
                                'password': this.register_password,
                                'passwordRetype': this.register_password_confirm,
                                'type': this.signup_type,
                            } 
                        }else{
                            // First get all submitted user data for individual register
                             submitted_user_data = {
                                'companyName': this.companyName,
                                'username': this.CO_username,
                                'email': this.email,
                                'dateOfFoundation': this.dateOfFoundation,// This is calculated inside function
                                'password': this.register_password,
                                'passwordRetype': this.register_password_confirm,
                                'type': this.signup_type,
                            }
                        }
                      
                       
                        this.$store.dispatch("auth/register_user", submitted_user_data).then(response => {
                            // Handle the alerts
                            // Send response to alert function for more checks
                            // 'succesful_login' - is the action type will get if succedded - You need to check resources/en.json -> alerts.{action_type}here
                            this.alert_handle_in_calls(response, 'succesful_register' )
                        })
                        

                    }

                    
                return
            },
            getAge:function(DOB) {
                var today = new Date();
                var birthDate = new Date(DOB);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }    
                return age;
            },
            tryToLogIn() {
                // First get all submitted user data for login
                let submitted_user_data = {
                            'email_address': this.login_email,
                            'password': this.login_password
                }
                // Call the api set in Vuex Actions for LOGIN
                setTimeout(() => {
                        this.$store.dispatch("auth/loginUser", submitted_user_data).then(response => {
                            // Handle the alerts
                            // Send response to alert function for more checks
                            // 'succesful_login' - is the action type will get if succedded - You need to check resources/en.json -> alerts.{action_type}here
                            this.alert_handle_in_calls(response, 'succesful_login' )
                        })
                }, 800);

               
            },
        },
        components: {
            Spinner
        },
        beforeUpdate() {

        },
        created(){
            this.check_query_params()
        },
        updated() {

        },
        beforeMount() {
                
        }

    }
</script>