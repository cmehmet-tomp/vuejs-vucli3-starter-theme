// Important imports that always should be present
import {API_CONFIG} from '@state_src/config.js';
import router from '@router'

// Import this features only if needed in this file
import VueJwtDecode from 'vue-jwt-decode'


const state = {
    isLoggedIn: getSavedState('auth.access_token'),
    userRoleCount: getSavedState('auth.user_role_count'),
   
}

const mutations = {
    SET_USER (state, data) {
        state.isLoggedIn = data.loggedin
    },
    UNSET_USER (state) {
        state.isLoggedIn = false
    },
}
const actions = {
        loginUser({commit}, login_data) {
            let current_api = API_CONFIG.API_ENDPOINT+ 'signin'
            let login_details = {
                email :login_data.email_address,
                password: login_data.password,
            }
            return API_CONFIG.SITE_API.post(current_api,login_details)
                .then((response) => {
                    // Get current login response
                    let login_response_data = {
                        access_token : response.data.accessToken,
                        refreshToken : response.data.refreshToken,
                        tokenType : response.data.tokenType,
                        issuedAt : response.data.issuedAt,
                        expiresAt : response.data.expiresAt,
                    }
                    // Decode token
                    let current_decoded_token = VueJwtDecode.decode(response.data.accessToken)
                    // If decoded data is null exit.
                    if(current_decoded_token.length < 1) return;
                    // Get current decoded data in array
                    let decoded_token_details = {
                        decoded_algorithm : current_decoded_token.alg,
                        decoded_ci : current_decoded_token.ci, // Client secret
                        decoded_name : current_decoded_token.dn, // // Display name for Individual, Company Name for Corporate
                        decoded_expiration : current_decoded_token.exp, // Expiry time
                        decoded_issued_at : current_decoded_token.iat, // Issued at time
                        decoded_user_roles : current_decoded_token.roles, //user roles 
                        decoded_user_id : current_decoded_token.sub, // User id - Subject : profile id
                        decoded_user_tt : current_decoded_token.tt, // Token Type AT (Access Token), RT (Refresh Token), ST (Switch Token)
                        decoded_user_type : current_decoded_token.ut, // User type - "IN" // IN : Individual, CO : Corporate 
                    }
                    
                    // Check if user has at least one role
                    let current_user_roles = 0;
                    if(decoded_token_details.decoded_user_roles.length > 0){
                        decoded_token_details.decoded_user_roles.forEach(function(user_role) {
                            // Save user roles to local storage
                            saveState('auth.user_role_' + current_user_roles, user_role)
                            current_user_roles++
                        });
                    }   
                        
                    // Save data to local storage
                    saveState('auth.access_token', login_response_data.access_token)
                    saveState('auth.refresh_token', login_response_data.refreshToken)
                    saveState('auth.token_expire_date', decoded_token_details.decoded_expiration)
                    saveState('auth.user_name', decoded_token_details.decoded_name)
                    saveState('auth.user_type', decoded_token_details.decoded_user_type)
                    saveState('auth.user_id', decoded_token_details.decoded_user_id)
                    
                    //Send a message to frontend to tell about succesfull login.
                    //This change is watched in Register.vue page. .
                    //dispatch('alert/print_success', {message: 'Logged in succesfuly', status: 'success'} , {root:true})
                    // Push router to profile page
                    router.push({ path : '/profile'});
                    
                    return response
                    
                }).catch((error) => {
                    return error.response
                })
        },
        logOutUser({commit, state,dispatch}) {
            // Remove states from localstorage
            removeState('auth.access_token')
            removeState('auth.refresh_token')
            removeState('auth.token_expire_date')
            removeState('auth.user_name')
            removeState('auth.user_type')
            removeState('auth.user_id')
            removeState('auth.user_role_count')
            
            //Tell the store that now user is loggedin.
            commit('UNSET_USER', true);    
            // Push router to profile page
            router.push({ path : '/'});
        },
        register_user({commit, dispatch}, register_data) {
            
            let current_api = API_CONFIG.API_ENDPOINT+ 'signup'
            let register_details = '';
            if(register_data.type == 'IN'){
                register_details = {
                    username: register_data.username,
                    displayName: register_data.displayName,
                    email: register_data.email,
                    dateOfBirth: register_data.dateOfBirth,
                    password: register_data.password,
                    passwordRetype: register_data.passwordRetype,
                    type: register_data.type,
                 }
            }else{
                register_details = {
                    companyName: register_data.companyName,
                    username: register_data.username,
                    email: register_data.email,
                    dateOfFoundation: register_data.dateOfFoundation,
                    password: register_data.password,
                    passwordRetype: register_data.passwordRetype,
                    type: register_data.type,
                }
            }
          
            return API_CONFIG.SITE_API.post(current_api,register_details)
            .then((response) => {
                return response
            }).catch((error) => {
                return error.response
            })
        },
        activate_user({commit, dispatch}, token_data) {
            let current_api = API_CONFIG.API_ENDPOINT+ 'activation?token=' + token_data
            if(current_api == '') return
            return API_CONFIG.SITE_API.get(current_api)
            .then((response) => {
                commit('SET_ACCOUNT_STATUS', true)
                return response
            }).catch((error) => {
                commit('SET_ACCOUNT_STATUS', false)
                return error.response
              
            })
        },
        reset_password({commit}, reset_data) {
            let current_api = API_CONFIG.API_ENDPOINT+ 'forgot-password'
            return API_CONFIG.SITE_API.post(current_api,reset_data)
            .then((response) => {
                // Push router to profile page
                router.push("/profile");
                return response
            }).catch((error) => {
                commit('UNSET_USER',{
                    error:error.response.data
                })
                return error.response
            })    
        },
}

const getters = {
   // End of getPageAlerts getter
    loggedIn(state){
        return state.isLoggedIn
    },
    getCurretUserAccessToken(){
        return state.isLoggedIn
    },
   
};

// ===
// Private helpers
// ===

function getSavedState(key) {
    return localStorage.getItem(key);
}
function saveState(key, state) {
    localStorage.setItem(key,state);
    
}
function removeState(key) {
    localStorage.removeItem(key);
}

export default {
namespaced : true, 
    state, mutations, actions, getters
}

