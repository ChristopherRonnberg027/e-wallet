import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { id: 2, name: 'Christopher Rönnberg', color: 'red', valid: '9/22', number: '1234 9845 6743 1397', active: false, vendor: "blockchain", ccv: "123" },
      { id: 3, name: 'Elliott SharkfaceKillah', color: 'indianred', valid: '10/25', number: '3423 3444 2321 4322', active: true, vendor: "bitcoin", ccv: "324" },
      { id: 4, name: 'Linda Gullbrandsson', color: 'indigo', valid: '11/20', number: '4323 4232 7442 4544', active: false, vendor: "evil", ccv: "647" },
      { id: 5, name: 'Alejandro Jodorowsky', color: 'blue', valid: '2/23', number: '5334 5554 8665 1233', active: false, vendor: "ninja", ccv: "543" }
    ],
    newCards: {
    },
    activeId: 1,
    nextId: 5
    // vendors: [
    //   {
    //     id: 1, name: 'Bitcoin Inc', image: '@/assets/vendor-bitcoin.svg', color: '#fdb455'
    //   },
    //   {
    //     id: 2, name: 'Ninja Bank', image: '@/assets/vendor-ninja.svg', color: '#3d3d3d'
    //   },
    //   {
    //     id: 3, name: 'Block Chain Inc', image: '@/assets/vendor-blockchain.svg', color: '#7b53d9'
    //   },
    //   {
    //     id: 4, name: 'Evil Corp', image: '@/assets/vendor-evil.svg', color: '#d22f4d'
    //   }
    // ]
  },
  getters: {
    unActiveCards(state) {
      return state.cards.filter(card => {
        return !card.active
      })
    },
    activeCard(state) {
      return state.cards.filter(card => {
        return card.active
      })
    },
    getAllVendor(state) {
      return state.cards.filter(card => {
        return card.vendor
      })
    }
  },
  mutations: {
    setActive(activeId) {
      this.activeId = activeId
    }
  },
  actions: {
  },
  modules: {
  }
})
