// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import http from './utils/http.js'
import api from './utils/api.js'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/'
import 'swiper/dist/css/swiper.min.css'
import SIdentify from './components/identify'
Vue.use(SIdentify)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.prototype.api = api;


new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
