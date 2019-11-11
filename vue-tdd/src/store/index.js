import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'

Vue.use(Vuex)

const moduleList = ''
export default new Vuex.Store({
  modules: moduleList,
  getters
})
