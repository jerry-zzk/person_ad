export default {
  path: '/antiFraud',
  title: '发欺诈',
  iconSvg: 'antifraud',
  children: (pre => [
    { path: `${pre}index`, title: '总览', icon: 'home' },
    { path: `${pre}addCustomer`, title: '新客户提交', iconSvg: 'people' },
    { path: `${pre}examineCustomer`, title: '审核管理', iconSvg: 'people' },
    {
      title: '欺诈警告',
      icon: 'fraudAlert',
      children: [
        { path: `${pre}creditLoan`, title: '信用贷客户',iconSvg: 'people' },
        { path: `${pre}Mortgage`, title: '抵押贷客户',iconSvg: 'people' },
        { path: `${pre}XX`, title: 'XX贷客户',iconSvg: 'people' }
      ]
    },
    { path: `${pre}searchCustomer`, title: '客户检索', iconSvg: 'people' },
    {  
      title: '客户黑名单', 
      iconSvg: 'blacklist',
      children: [
        { path: `${pre}idCard`, title: '身份证黑名单',iconSvg: 'idcard' },
        { path: `${pre}phone`, title: '手机号黑名单',iconSvg: 'phone' },
        { path: `${pre}virtualAcount`, title: '虚拟账号黑名单',iconSvg: 'virtualAcount' },
        { path: `${pre}ip`, title: 'IP地址黑名单',iconSvg: 'ip' }
      ]
    },
    { path: `${pre}count`, title: '统计报告', iconSvg: 'count' },
    { path: `${pre}manage`, title: '业务管理', iconSvg: 'people' },
  ])('/antiFraud/')
}
