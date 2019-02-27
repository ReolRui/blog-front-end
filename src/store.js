import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: null,
    x: 0

  },
  mutations: {
    setUserId(state, id) {
      state.userid = id
    }

  },
  actions: {

  }
})