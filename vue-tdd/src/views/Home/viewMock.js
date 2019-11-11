import Mock from 'mockjs'

Mock.mock('/getData', 'get', getData)

function getData (config) {
  const data = {
    'status': 0,
    'message': 'ok',
    'value': '[]'
  }
  return data
}
