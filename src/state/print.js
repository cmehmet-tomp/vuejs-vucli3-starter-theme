const state = {
    message: []
}


const mutations = {
    SET_MESSAGE (state,data) {
        state.message = data
    },
    RESET (state) {
        state.message = ''
    }
}
const actions = {
        message({commit}, message){
            if(!message) return 
            commit('SET_MESSAGE',message)
        },
}

const getters = {
   // End of getPageAlerts getter
    get(state){
        return state.message
    },
};

export default {
namespaced : true, 
    state, mutations, actions, getters
}
