import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#fff'
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
