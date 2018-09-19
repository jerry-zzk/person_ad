import Mock from 'mockjs'
const status = ["danger","warning","primary","success"]


Mock.mock('/api/qz', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|4': [
          {
            'img': "@dataImage('300x250', 'mock的图片')",
            'phone': '15596446321',
            'name': '@cname',
            'status': status,
          }
        ]
      }
    }
  )
})
