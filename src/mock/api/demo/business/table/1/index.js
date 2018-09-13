import Mock from 'mockjs'

Mock.mock('/api/demo/business/table/1', ({ body }) => {
  // 这是通过 post 传来的参数
  body = JSON.parse(body)
  const { page } = body
  page.total = 500
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        page,
        'list|20': [
          {
            'key': '@guid',
            'value|1': [10, 100, 200, 500],
            'type': '@boolean',
            'admin': '@cname',
            'adminNote': '@cparagraph(0.5)',
            'dateTimeCreat': '@datetime',
            'used': '@boolean',
            'dateTimeUse': '@datetime',
            'phone': '15596446321',
            'address':'山西省孝义市@csentence(3,7)',
            'card':'建设银行信用卡',
            'money':'@integer(10000, 100000)'
          }
        ]
      }
    }
  )
})
