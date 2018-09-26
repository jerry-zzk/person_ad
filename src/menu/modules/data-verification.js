export default [
  { title: '身份核验', iconSvg: 'ihome',
    children: [
        { path: '/dataVerification/namePhone', title: '姓名/手机号',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/idPhone', title: '身份证号/手机号',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/sexPhone', title: '性别/手机号',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/peoPhone', title: '手机号/使用人职业',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/addPhone', title: '手机号/所在单位',iconSvg: 'iipAdressBlacklist' },
    ]
  },
  { path: '/dataVerification/addCustomer', title: '虚拟帐号核验', iconSvg: 'inewConsumerSubmit',
    children: [
        { path: '/dataVerification/nameEmail', title: '姓名/邮箱',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/nameEmail1', title: '企业/邮箱',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/nameEmail2', title: '虚拟号码个数',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/nameEmail3', title: '手机号/虚拟账号',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/nameEmail4', title: '手机号/信用卡',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/nameEmail5', title: '手机号/虚拟身份',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/nameEmail6', title: '贷款类APP个数',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/nameEmail7', title: '手机号/IMSI',iconSvg: 'itelephoneBlacklist' },
    ]
  },
  { path: '/dataVerification/examineCustomer', title: '设备核验', iconSvg: 'iauditsMgt',
    children: [
        { path: '/dataVerification/naph', title: '同设备多手机号核验',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/naph1', title: '设备操作系统核验',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/naph2', title: '设备型号核验',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/naph3', title: '同手机号设备核验',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/naph4', title: '手机号/IMEI对应',iconSvg: 'iipAdressBlacklist' },
    ]
  },
  { path: '/dataVerification/creditLoan', title: '位置核验', iconSvg: 'icheatWarn',
      children: [
        { path: '/dataVerification/place', title: '手机号归属地核验',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/place1', title: '手机号所在地核验',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/place2', title: '手机号活跃城市核验',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/place3', title: '手机号居住地核验',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/place4', title: '手机号工作地核验',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/place5', title: '手机号机主籍贯核验',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/place6', title: '手机号出现位置核验',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/place7', title: '手机号活跃时间核验',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/place8', title: '手机号位置共现核验',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/place9', title: '出行规律核验',iconSvg: 'ivirtualAccountBlacklist' },
    ]
  },
  { path: '/dataVerification/searchCustomer', title: '关系核验', iconSvg: 'iconsumerSearch',
    children: [
        { path: '/dataVerification/relation', title: '手机号之间熟悉程度',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/relation1', title: '手机号之间社会关系',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/relation2', title: '虚拟账号是否有关系',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/relation3', title: '实体是否有群体关系',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/relation4', title: '手机号之间通联频次',iconSvg: 'iipAdressBlacklist' },
    ]
  },
  { path: '/dataVerification/manage', title: '行为核验', iconSvg: 'iBusinessMgt',
    children: [
        { path: '/dataVerification/action', title: '车牌违章核验',iconSvg: 'iidCardBlacklist' },
        { path: '/dataVerification/action1', title: '搜索词核验',iconSvg: 'itelephoneBlacklist' },
        { path: '/dataVerification/action2', title: '近期搜索热词',iconSvg: 'ivirtualAccountBlacklist' },
        { path: '/dataVerification/action3', title: '借贷行为核验',iconSvg: 'iipAdressBlacklist' },
        { path: '/dataVerification/action4', title: '收入消费水平核验',iconSvg: 'iipAdressBlacklist' },
    ]
  }
]

