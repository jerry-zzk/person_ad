import Mock from 'mockjs'

const peo = [
    {idcard:'142300xxxxxxxx0000',mz:'汉族',sex:'男',phone:'17965422651',address:'北京',country:'北京'},
    {idcard:'356700xxxxxxxx0870',mz:'X族',sex:'女',phone:'15222446644',address:'北京',country:'北京'},
    {idcard:'756400xxxxxxxx1230',mz:'XX族',sex:'男',phone:'18866554422',address:'北京',country:'北京'},
    {idcard:'567600xxxxxxxx0430',mz:'X族',sex:'女',phone:'15562231444',address:'北京',country:'北京'},
    {idcard:'903400xxxxxxxx0012',mz:'汉族',sex:'男',phone:'15222446644',address:'北京',country:'北京'},
    {idcard:'689500xxxxxxxx0123',mz:'XXX族',sex:'男',phone:'15222446644',address:'北京',country:'北京'},
    {idcard:'154200xxxxxxxx0456',mz:'XXXX族',sex:'女',phone:'1895456123',address:'北京',country:'北京'},
    {idcard:'365140xxxxxxxx7531',mz:'X族',sex:'男',phone:'15222446644',address:'北京',country:'北京'},
    {idcard:'132500xxxxxxxx6584',mz:'汉族',sex:'女',phone:'16655456644',address:'北京',country:'北京'},
    {idcard:'986450xxxxxxxx6544',mz:'汉族',sex:'男',phone:'11234565689',address:'北京',country:'北京'}
]

Mock.mock('/api/send', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|10': [
          {
            name:'@cname',
            idcard:peo,
            mz:peo,
            sex:peo,
            phone: peo,
            address:peo,
            country:peo
          }
        ]
      }
    }
  )
})
