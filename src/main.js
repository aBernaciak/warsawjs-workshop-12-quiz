import Vue from 'vue'
import App from './App.vue'
import HomePage from './Home.vue'
import PlayQuiz from './PlayQuiz.vue'
import AddQuestion from './AddQuestion.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import quizzes from './assets/data.json'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue);

const router = new VueRouter({
	mode: 'history',
  routes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path: '/play',
			component: PlayQuiz
		},
		{
			path: '/addquestion',
			component: AddQuestion
		},
	]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),

  data: {
  	quizzes: quizzes.quizzes
  }
})
