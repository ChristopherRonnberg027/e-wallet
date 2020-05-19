import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCardNumber: "5334 5554 8665 1233",
    cards: [
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
    vendors: {
      no_vendor: {
        name: "select your vendor",
        color: "grey"
      },
      bitcoin: {
        name: "bitcoin inc",
        color: "rgb(253,181,85)"
      },
      ninja: {
        name: "ninja bank",
        color: "rgb(61,61,61)"
      },
      blockchain: {
        name: "block chain inc",
        color: "rgb(123,83,217)"
      },
      evil: {
        name: "evil corp",
        color: "rgb(210,47,76)"
      }
    }
  },
  getters: {
    getListOfVendor(state) {
      let vendorList = []
      for (const vendor in state.vendors) {
        let listedVendor = { id: vendor, name: state.vendors[vendor].name }
        vendorList.push(listedVendor)
      }
      return vendorList;
    },
    
    getActiveCard(state){
      return state.cards.find(card => card.number == state.activeCardNumber)
    },
    getNonActiveCards(state){
      return state.cards.filter(card => card.number !== state.activeCardNumber)
    }
  },

  mutations: {
    setActiveCard(state, payload) {
      state.activeCardNumber = payload
    },

    addCardToStack(state, payload) {
      state.cards.push(payload)
    }
  },



  actions: {
    switchCard(context, payload) {
      // let activeCard = context.getters.getActiveCard
      context.commit('setActiveCard', payload.card.number)
      context.commit('addCardToStack', { index: payload.index, card: activeCardNumber })
    }
  },
  modules: {
  }
})
