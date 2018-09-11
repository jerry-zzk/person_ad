import Mock from 'mockjs'

Mock.mock('/api/qz', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  console.log(bodyObj)
})
