import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HOME_ROUTERS from '@/views/home/viewRouter'

let configRouters = []
const routerContent = require.context('@/views', true, /.viewRouter.js$/)
routerContent.keys().forEach(key => {
  configRouters = configRouters.concat(routerContent(key).default)
})

Vue.use(Router)

export default new Router({
  routes: configRouters
})
