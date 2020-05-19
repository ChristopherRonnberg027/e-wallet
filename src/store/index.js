import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCard: "5334 5554 8665 1233",
    cardStackList: [],
    userCards: [
      {
         name: 'Christopher Rönnberg', 
         valid: '9/22', 
         number: '5566 4568 9101 1123', 
         vendor: "bitcoin", 
         ccv: "123" },
      { 
        name: 'Elliott SharkfaceKillah', 
        valid: '10/25', 
        number: '3423 3444 2321 4322', 
        vendor: "blockchain", 
        ccv: "324" },
      { 
        name: 'Linda Gullbrandsson',   
        valid: '11/20', 
        number: '4323 4232 7442 4544', 
        vendor: "evil", 
        ccv: "647" },
      { 
        name: 'Alejandro Jodorowsky', 
        valid: '2/23', 
        number: '5334 5554 8665 1233', 
        vendor: "ninja", 
        ccv: "543" }
    ],
    newCards: {
    },
    vendors: {
      no_vendor: {
        name: "select your vendor",
        color: "grey"
      },
      bitcoin: {
        name: "bitcoin inc",
        color: "yellow"
      },
      ninja: {
        name: "ninja bank",
        color: "black"
      },
      blockchain: {
        name: "block chain inc",
        color: "indigo"
      },
      evil: {
        name: "evil corp",
        color: "red"
      }
    }
  },
  getters: {
    getVendorList(state) {
      let vendorList = []
      for (const vendor in state.vendors) {
        let listedVendor = { id: vendor, name: state.vendors[vendor].name }
        vendorList.push(listedVendor)
      }
      return vendorList;
    },
  
    getCardList(state) {
      return state.userCards
    },

    getActiveCard(state){
      return state.userCards.find(card => card.number == state.activeCard)
    },

    getActiveCardNo(state) {
      return state.activeCardNo
    },

    getCardStackList(state) {
      return state.cardStackList
    },
    getNonActiveCards(state){
      return state.userCards.filter(card => card.number !== state.activeCard)
    }
  },

  mutations: {
    setActiveCard(state, payload) {
      state.activeCard = payload
    },
    loadCardStack(state) {
      state.cardStackList = state.userCards.filter(card => card.number != state.activeCard)
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
