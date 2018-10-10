import Mock from 'mockjs'

Mock.mock('/api/getSearchCustomer', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'data|10': [
          {
            'index|+1': 1, 
            'name': '@cname',
            'gender|1': ['男','女'],
            'age|1-100': 20,
            'cellphone': /13[0-9]{10}/,
            'idcard': '@id',
            'type': '种类',
            'time': '@date("yyyy-MM-dd")',
            'address': '@county(true)',
            'blackList|1': true,
            'grade|1-9.1': 1,
            'flag|1': [1, 2]
          }
        ]
      }
    }
  )
})

Mock.mock('/api/getBlackList1_left', 'get',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'leftTotal': 6,
        'data|6': [
          {
            'index|+1': 1, 
            'idcard': '@id',
            'date': '@date("yyyy/MM/dd")',
            'active|1-14': true
          }
        ]
      }
    }
  )
})
