import Mock from 'mockjs'



Mock.mock('/api/demo/business/table/2', ({ body }) => {
  // 这是通过 post 传来的参数
  body = JSON.parse(body)
  const { page } = body
  page.total = 30
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        page,
        'list|20': [
          {
            'admin': '@cname',
            'dateTimeUse': '@datetime',
            'phone': '15596446321',
            'address':'山西省孝义市@csentence(3,7)'
          }
        ]
      }
    }
  )
})
