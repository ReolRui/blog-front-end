import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: null,
    content: '',
    title: '',
    lei: '',
    list: '',
    atid: '',
    date: '',
    ishas: false

  },
  mutations: {
    newatc(state) {
      state.content = '',
        state.title = '',
        state.lei = ''
      state.ishas = false

    },

    setUserId(state, id) {
      state.userid = id

    },
    updatelist(state, data) {
      state.list = data
    },
    updatectt(state, value) {
      state.content = value
    },
    updatettl(state, value) {
      state.title = value
    },
    updatelei(state, value) {

      state.lei = value
    },
    changearticle(state, data) {
      //console.log(data)

      state.content = data.content
      state.title = data.title
      state.lei = data.lei.name
      state.ishas = true
      state.atid = data._id
      state.date = data.createdAt.split('T')[0]
    }

  },
  actions: {

  }
})