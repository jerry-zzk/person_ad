import Mock from 'mockjs'
const jsonAll = [
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:''},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:''},
]
const type = ["信用贷","XX贷","抵押贷"]

Mock.mock('/api/warn', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|12': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: jsonAll,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:'@integer(1,5)'
          }
        ]
      }
    }
  )
})
