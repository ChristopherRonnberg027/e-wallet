import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { id: 1, name: 'Christopher Gullig', color: 'red', valid: '9/22', number: '1234 9845 6743 1397', active : true },
      { id: 2, name: 'Elliott SharkfaceKillah', color: 'indianred', valid: '10/25', number: '3423 3444 2321 4322', active : false },
      { id: 3, name: 'Linda Gullbrandsson', color: 'indigo', valid: '11/20', number: '4323 4232 7442 4544', active : false },
      { id: 4, name: 'Alejandro Jodorowsky', color: 'blue', valid: '2/23' , number: '5334 5554 8665 1233', active: false}
    ],
    newCard: {
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
