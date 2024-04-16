import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'
import BaseButton from './components/UI/base-button.vue'
import BaseCard from './components/UI/base-card.vue'
import DialogInfo from './components/UI/dialogInfo.vue'

Vue.component('base-button',BaseButton)
Vue.component('base-card',BaseCard)
Vue.component('dialog-box',DialogInfo)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
