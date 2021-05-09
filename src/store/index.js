import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: 'Home',
        href: '#!',
      },
      {
        text: 'Music',
        href: '#music',
      },
      {
        text: 'Photos',
        href: '#photos',
      },
      {
        text: 'About',
        href: '#about',
      }
    ],
  },
  getters: {
    links: (state) => {
      return state.items
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
})
