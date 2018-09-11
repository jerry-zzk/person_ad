import Mock from 'mockjs'

const userDB = [
  { 'list': 1, 'name': 'zk', 'phone': 18800556336, 'star': 3 },
  { 'list': 3, 'name': 'zk', 'phone': 18851556966, 'star': 6 },
  { 'list': 5, 'name': 'zk', 'phone': 18856556866, 'star': 9 }
]

Mock.mock('/api/qz', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  console.log(bodyObj)
})
