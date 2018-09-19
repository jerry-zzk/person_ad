import Mock from 'mockjs'

const peo = [
    {idcard:'142300xxxxxxxx0000'},
    {idcard:'356700xxxxxxxx0870'},
    {idcard:'756400xxxxxxxx1230'},
    {idcard:'567600xxxxxxxx0430'},
    {idcard:'903400xxxxxxxx0012'},
    {idcard:'689500xxxxxxxx0123'},
    {idcard:'154200xxxxxxxx0456'},
    {idcard:'365140xxxxxxxx7531'},
    {idcard:'132500xxxxxxxx6584'},
    {idcard:'986450xxxxxxxx6544'}
]

Mock.mock('/api/risk', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|10': [
          {
            name:'@cname',
            idcard:peo,
            mz:'汉族',
            sex:'男',
            phone: 15555446665,
            address:'北京',
            country:'山西'
          }
        ]
      }
    }
  )
})
