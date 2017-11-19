import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import quizzes from './assets/data.json'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),

  data: {
  	quizzes: quizzes.quizzes
  }
})
