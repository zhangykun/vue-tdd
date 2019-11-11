import Mock from 'mockjs'

const srcContent = require.context('@/views', true, /.viewMock.js$/)
srcContent.keys().forEach(srcContent)

export default Mock
