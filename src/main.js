import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
//引入axios库
import axios from 'axios'
//配置axios,创建一个axios的实例
//在Vue的原型中添加$http的方法，往后调用即可用$http.get/$http.post来发送请求
Vue.prototype.$http = axios.create({
    baseURL: 'http://106.53.81.209:3000/api',
})



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
