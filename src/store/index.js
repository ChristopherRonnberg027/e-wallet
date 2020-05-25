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
        ccv: "123"
      },
      {
        name: 'Elliott SharkfaceKillah',
        valid: '10/25',
        number: '3423 3444 2321 4322',
        vendor: "blockchain",
        ccv: "324"
      },
      {
        name: 'Linda Gullbrandsson',
        valid: '11/20',
        number: '4323 4232 7442 4544',
        vendor: "evil",
        ccv: "647"
      },
      {
        name: 'Alejandro Jodorowsky',
        valid: '2/23',
        number: '5334 5554 8665 1233',
        vendor: "ninja",
        ccv: "543"
      }
    ],
    vendors: {
      novendor: {
        name: "select your vendor",
        cardcolor: "grey"
      },
      bitcoin: {
        name: "bitcoin",
        cardcolor: "#fdb455"
      },
      ninja: {
        name: "ninja",
        cardcolor: "#3d3d3d"
      },
      blockchain: {
        name: "blockchain",
        cardcolor: "#7b53d9"
      },
      evil: {
        name: "evil",
        cardcolor: "#d22f4d"
      }
    }
  },
  getters: {
    getListOfVendor(state) {
      let listOfVendor = []
      for (const vendor in state.vendors) {
        let vendorInList = { id: vendor, name: state.vendors[vendor].name, color: state.vendors[vendor].cardcolor}
        listOfVendor.push(vendorInList)
      }
      return listOfVendor;
    },

    getActiveCard(state) {
      return state.cards.find(card => card.number == state.activeCardNumber)
    },

    getNonActiveCards(state) {
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
      let activeCard = context.getters.getActiveCard
      context.commit('setActiveCard', payload.card.number)
      context.commit('addCardToStack', { index: payload.index, card: activeCard })
    }
  },
  modules: {
  }
})
