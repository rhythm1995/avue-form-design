import Vue from 'vue'
import App from './App'

import 'normalize.css/normalize.css'

import "@/styles/index.scss"

import { loadCss } from "./utils";

const iconfont = ['//at.alicdn.com/t/font_1254447_qcxcvlwe2v.css']

iconfont.forEach(i => loadCss(i));

import Config from './components/config'

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(window.AVUE)
Vue.use(Config)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
