import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http'
import moment from 'moment'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import uploader from 'vue-simple-uploader'

Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)

})
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(uploader)
new Vue({
    router,
  render: h => h(App)
}).
$mount('#app')
