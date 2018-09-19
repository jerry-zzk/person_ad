import Mock from 'mockjs'
const type = ["信用贷","XX贷","抵押贷"]

Mock.mock('/api/warn', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|20': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: type,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:'@integer(1,5)'
          }
        ]
      }
    }
  )
})
