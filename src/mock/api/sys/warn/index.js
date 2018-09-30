import Mock from 'mockjs'
const jsonAll = [
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:1,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:3,sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:4,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:2,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:5,sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:5,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:3,sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:2,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:2,sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:3,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:4,sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:1,sex:'女'}
]

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
            yuan:jsonAll,
            sex:jsonAll,
          }
        ]
      }
    }
  )
})

const jsonAll1 = [
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'5',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'5',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'5',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'5',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'5',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'5',sex:'女'}
]

Mock.mock('/api/warn1', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|6': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: jsonAll1,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:jsonAll1,
            sex:jsonAll1,
          }
        ]
      }
    }
  )
})


const jsonAll2 = [
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'4',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'4',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'4',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'4',sex:'女'},
]

Mock.mock('/api/warn2', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|4': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: jsonAll2,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:jsonAll2,
            sex:jsonAll2,
          }
        ]
      }
    }
  )
})

const jsonAll3 = [
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'3',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'3',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'3',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'3',sex:'女'},
]

Mock.mock('/api/warn3', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|4': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: jsonAll3,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:jsonAll3,
            sex:jsonAll3,
          }
        ]
      }
    }
  )
})

const jsonAll4 = [
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'2',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'2',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'信用贷',peoNum:'',time:'',yuan:'2',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'2',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'2',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'2',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'2',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'2',sex:'男'}
]

Mock.mock('/api/warn4', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|8': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: jsonAll4,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:jsonAll4,
            sex:jsonAll4,
          }
        ]
      }
    }
  )
})

const jsonAll5 = [
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'1',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'1',sex:'男'},
  {name:'',age:'',phone:'',star:'',type:'抵押贷',peoNum:'',time:'',yuan:'1',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'1',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'1',sex:'女'},
  {name:'',age:'',phone:'',star:'',type:'XX贷',peoNum:'',time:'',yuan:'1',sex:'男'},
]

Mock.mock('/api/warn5', 'post',({}) => {
  return Mock.mock(
    {
      code: 0,
      msg: '获取数据成功',
      data: {
        'list|6': [
          {
            name:'@cname',
            phone:'15522322212',
            age:'@integer(18, 80)',
            star:'@float(5, 9, 1,1)',
            type: jsonAll5,
            peoNum:'@integer(10000)',
            time:'@date("yyyy-MM-dd")',
            yuan:jsonAll5,
            sex:jsonAll5,
          }
        ]
      }
    }
  )
})
