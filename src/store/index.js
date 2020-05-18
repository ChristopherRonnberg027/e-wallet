import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCardNo: "1234567891011123",
    cardStackList: [],
    userCards: [
      { id: 2, name: 'Christopher Rönnberg', valid: '9/22', number: '1234567891011123', vendor: "block_chain", ccv: "123" },
      { id: 3, name: 'Elliott SharkfaceKillah', valid: '10/25', number: '3423 3444 2321 4322', vendor: "bitcoin_inc", ccv: "324" },
      { id: 4, name: 'Linda Gullbrandsson', valid: '11/20', number: '4323 4232 7442 4544', vendor: "evil_corp", ccv: "647" },
      { id: 5, name: 'Alejandro Jodorowsky', valid: '2/23', number: '5334 5554 8665 1233', vendor: "ninja_bank", ccv: "543" }
    ],
    newCards: {
    },
    activeId: 1,
    nextId: 5,
    vendors: {
      no_vendor: {
        name: "default",
        logo: "vendor-bitcoin.svg",
        bgColor: "#8b8b8b"
      },
      bitcoin_inc: {
        name: "bitcoin inc",
        logo: "vendor-bitcoin.svg",
        bgColor: "#ffb546"
      },
      ninja_bank: {
        name: "ninja bank",
        logo: "vendor-ninja.svg",
        bgColor: "#383838"
      },
      block_chain: {
        name: "block chain inc",
        logo: "vendor-blockchain.svg",
        bgColor: "#7d4fe1"
      },
      evil_corp: {
        name: "evil corp",
        logo: "vendor-evil.svg",
        bgColor: "#d82d4c"
      }
    }
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
    },
    getVendorList(state) {
      let vendorList = []
      for (const vendor in state.vendors) {
        let listedVendor = { id: vendor, name: state.vendors[vendor].name }
        vendorList.push(listedVendor)
      }
      return vendorList;
    }
  },
  mutations: {
    setActive(activeId) {
      this.activeId = activeId
    },
    setActiveCardNo(state, payload) {
      state.activeCardNo = payload
    },
    loadCardStack(state) {
      state.cardStackList = state.userCards.filter(card => card.cardNumber != state.activeCardNo)
    },
    addCardToStack(state, payload) {
      state.cardStackList.splice(payload.index, 1, payload.card)
    }
  },
  actions: {
    swapActiveCard(context, payload) {
      let activeCard = context.getters.getActiveCard
      context.commit('setActiveCardNo', payload.card.cardNumber)
      context.commit('addCardToStack', { index: payload.index, card: activeCard })
    }
  },
  modules: {
  }
})
