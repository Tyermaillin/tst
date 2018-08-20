import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    box: {
      background: '#fff',
      height: '400px',
      width: '400px',

      border: '2px solid #000815',
      borderBottom: '4px solid #000815',
      borderLeft: '6px solid #000815',
      borderRight: '8px solid #000815',
      borderTop: '12px solid #000815',
      borderRadius: '0px',
      borderBottomLeftRadius: '195px',
      borderBottomRightRadius: '0px',
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '195px',

      boxShadow: 'rgb(255, 0, 28) 6px 6px 0px 2px'
    },

    color: {
      background: ''
    }
  },
  mutations: {
    background_color(state, payload) {
      state.color.background = payload.color
    },

    box_color(state, payload) {
      state.box.background = payload.color
    },

    update_height(state, payload) {
      state.box.height = payload.size
    },

    update_width(state, payload) {
      state.box.width = payload.size
    },

    update_border(state, payload){
      
      switch(payload.value) {
        case 'border':
          state.box.border = payload.size
          break
        case 'border-bottom':
          state.box.borderBottom = payload.size
          break
        
        case 'border-left':
          state.box.borderLeft = payload.size
          break

        case 'border-right':
          state.box.borderRight = payload.size
          break

        case 'border-top':
          state.box.borderTop = payload.size
          break
      }
      
    },

    update_border_radius(state, payload){

      switch(payload.value) {
        case 'border-radius':
          state.box.borderRadius = payload.size
          break

        case 'border-bottom-left-radius':
          state.box.borderBottomLeftRadius = payload.size
          break

        case 'border-bottom-right-radius':
          state.box.borderBottomRightRadius = payload.size
          break

        case 'border-top-left-radius':
          state.box.borderTopLeftRadius = payload.size
          break

        case 'border-top-right-radius':
          state.box.borderTopRightRadius = payload.size
          break
      }
    },

    update_box_shadow(state, payload){
      state.box.boxShadow = payload.value
    }
  },
  getters: {
    background: state => {
      return state.color.background
    },
  },
  actions: {

  }
})
