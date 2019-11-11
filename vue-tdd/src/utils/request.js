import axios from 'axios'
import {Message, Loading} from 'element-ui'

const service = axios.create({
  baseURL: '/',
  timeout: 6000
})

const loadingOptions = {
  lock: 'true',
  text: 'loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0,0,0,0.8)',
  fullscreen: true
}

let loadingInstance
// 请求拦截器
service.interceptors.request.use(config => {
  loadingInstance = Loading.service(loadingOptions)
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  // loadingInstance.close()
  if (response.data.status && response.data.status !== 200) {
    Message({
      message: response.data.message,
      type: 'error',
      duration: 1000
    })
    return Promise.reject(response.data)
  }
  return response
}, error => {
  loadingInstance.close()
  Message({
    message: error.message,
    type: 'error',
    duration: 1000
  })
  return Promise.reject(error)
})

export default service
