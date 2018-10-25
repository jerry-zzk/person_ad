// layout
import layoutHeaderAside from '@/layout/header-aside'
import layoutIndex from '@/layout/index'
const meta = { requiresAuth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    name: 'index',
    component: layoutIndex,
    meta: meta
  },
  {
    path: '/index',
    name: 'index',
    component: layoutIndex,
    meta: meta
  },
  {
    path: '/antiFraud',
    name:'antiFraud',
    redirect: { name: 'antiFraud-index' },
    component: layoutHeaderAside,
    children: (pre => [
      {
        path: 'index',
        name: `${pre}index`,
        // component: () => import('@/pages/index'),
        component: resolve => require(['@/pages/index'],resolve),
        meta: { ...meta, title: '总览' }
      },
      {
        path: 'addCustomer',
        name: `${pre}addCustomer`,
        // component: () => import('@/pages/page1'),
        component: resolve => require(['@/pages/page1'],resolve),
        meta: { ...meta, title: '新客戶提交' }
      },
      {
        path: 'examineCustomer',
        name: `${pre}examineCustomer`,
        // component: () => import('@/pages/page2'),
        component: resolve => require(['@/pages/page2'],resolve),
        meta: { ...meta, title: '审核管理' }
      },
      {
        path: 'searchCustomer',
        name: `${pre}searchCustomer`,
        // component: () => import('@/pages/searchCustomer'),
        component: resolve => require(['@/pages/searchCustomer'],resolve),
        meta: { ...meta, title: '客户检索' }
      }, {
        path: 'iblackList',
        name: `${pre}iblackList`,
        // component: () => import('@/pages/iblackList'),
        component: resolve => require(['@/pages/iblackList'],resolve),
        meta: { ...meta, title: '客户黑名单' }
      },{
        path: 'creditLoan',
        name: `${pre}creditLoan`,
        // component: () => import('@/pages/warn'),
        component: resolve => require(['@/pages/warn'],resolve),
        meta: { ...meta, title: '欺诈告警' }
      },{
        path: 'count',
        name: `${pre}count`,
        // component: () => import('@/pages/count'),
        component: resolve => require(['@/pages/count'],resolve),
        meta: { ...meta, title: '统计报告' }
      },{
        path: 'manage',
        name: `${pre}manage`,
        // component: () => import('@/pages/manage'),
        component: resolve => require(['@/pages/manage'],resolve),
        meta: { ...meta, title: '业务管理' }
      }
    ])('antiFraud-')
  },
  {
    path: '/dataVerification',
    name:'dataVerification',
    redirect: { name: 'dataVerification-index' },
    component: layoutHeaderAside,
    children: (pre => [
      {
        path: 'index',
        name: `${pre}index`,
        // component: () => import('@/pages/idVerifi/verifi'),
        component: resolve => require(['@/pages/idVerifi/verifi'],resolve),
        meta: { ...meta, title: '身份核验' },
      },
      {
        path: 'namePhone',
        name: `${pre}namePhone`,
        // component: () => import('@/pages/idVerifi/verifi'),
        component: resolve => require(['@/pages/idVerifi/verifi'],resolve),
        meta: { ...meta, title: '姓名/手机号' },
      },
      {
        path: 'idPhone',
        name: `${pre}idPhone`,
        // component: () => import('@/pages/idVerifi/verifi1'),
        component: resolve => require(['@/pages/idVerifi/verifi1'],resolve),
        meta: { ...meta, title: '身份证号/手机号' },
      },
      {
        path: 'sexPhone',
        name: `${pre}sexPhone`,
        // component: () => import('@/pages/idVerifi/verifi2'),
        component: resolve => require(['@/pages/idVerifi/verifi2'],resolve),
        meta: { ...meta, title: '性别/手机号' },
      },
      {
        path: 'peoPhone',
        name: `${pre}peoPhone`,
        // component: () => import('@/pages/idVerifi/verifi3'),
        component: resolve => require(['@/pages/idVerifi/verifi3'],resolve),
        meta: { ...meta, title: '手机号/使用人职业' },
      },
      {
        path: 'addPhone',
        name: `${pre}addPhone`,
        // component: () => import('@/pages/idVerifi/verifi4'),
        component: resolve => require(['@/pages/idVerifi/verifi4'],resolve),
        meta: { ...meta, title: '手机号/所在单位' },
      },
      // 虚拟账号核验
      {
        path: 'nameEmail',
        name: `${pre}nameEmail`,
        // component: () => import('@/pages/accountVerifi/verifi'),
        component: resolve => require(['@/pages/accountVerifi/verifi'],resolve),
        meta: { ...meta, title: '姓名/邮箱' },
      },{
        path: 'nameEmail1',
        name: `${pre}nameEmail1`,
        // component: () => import('@/pages/accountVerifi/verifi1'),
        component: resolve => require(['@/pages/accountVerifi/verifi1'],resolve),        
        meta: { ...meta, title: '企业/邮箱' },
      },{
        path: 'nameEmail2',
        name: `${pre}nameEmail2`,
        // component: () => import('@/pages/accountVerifi/verifi2'),
        component: resolve => require(['@/pages/accountVerifi/verifi2'],resolve), 
        meta: { ...meta, title: '虚拟号码个数' },
      },{
        path: 'nameEmail3',
        name: `${pre}namePhone1`,
        // component: () => import('@/pages/accountVerifi/verifi3'),
        component: resolve => require(['@/pages/accountVerifi/verifi3'],resolve), 
        meta: { ...meta, title: '手机号/虚拟账号' },
      },{
        path: 'nameEmail4',
        name: `${pre}nameEmail4`,
        // component: () => import('@/pages/accountVerifi/verifi4'),
        component: resolve => require(['@/pages/accountVerifi/verifi4'],resolve), 
        meta: { ...meta, title: '手机号/信用卡' },
      },{
        path: 'nameEmail5',
        name: `${pre}nameEmail5`, 
        // component: () => import('@/pages/accountVerifi/verifi5'),
        component: resolve => require(['@/pages/accountVerifi/verifi5'],resolve), 
        meta: { ...meta, title: '手机号/虚拟身份' },
      },{
        path: 'nameEmail6',
        name: `${pre}nameEmail6`,
        // component: () => import('@/pages/accountVerifi/verifi6'),
        component: resolve => require(['@/pages/accountVerifi/verifi6'],resolve), 
        meta: { ...meta, title: '贷款类APP个数' },
      },{
        path: 'nameEmail7',
        name: `${pre}nameEmail7`,
        // component: () => import('@/pages/accountVerifi/verifi7'),
        component: resolve => require(['@/pages/accountVerifi/verifi7'],resolve), 
        meta: { ...meta, title: '手机号/IMSI' },
      },
      //设备核验
      {
        path: 'naph',
        name: `${pre}naph`,
        // component: () => import('@/pages/EquipmentVerifi/verifi'),
        component: resolve => require(['@/pages/EquipmentVerifi/verifi'],resolve), 
        meta: { ...meta, title: '同设备多手机号核验' },
      },{
        path: 'naph1',
        name: `${pre}naph1`,
        // component: () => import('@/pages/EquipmentVerifi/verifi1'),
        component: resolve => require(['@/pages/EquipmentVerifi/verifi1'],resolve),
        meta: { ...meta, title: '设备操作系统核验' },
      },{
        path: 'naph2',
        name: `${pre}naph2`,
        // component: () => import('@/pages/EquipmentVerifi/verifi2'),
        component: resolve => require(['@/pages/EquipmentVerifi/verifi2'],resolve),
        meta: { ...meta, title: '设备型号核验' },
      },{
        path: 'naph3',
        name: `${pre}naph3`,
        // component: () => import('@/pages/EquipmentVerifi/verifi3'),
        component: resolve => require(['@/pages/EquipmentVerifi/verifi3'],resolve),
        meta: { ...meta, title: '同手机号设备数量核验' },
      },{
        path: 'naph4',
        name: `${pre}naph4`,
        // component: () => import('@/pages/EquipmentVerifi/verifi4'),
        component: resolve => require(['@/pages/EquipmentVerifi/verifi4'],resolve),
        meta: { ...meta, title: '手机号与IMEI对应关系核验' },
      },
      // 位置核验‘
      {
        path: 'place',
        name: `${pre}place`,
        // component: () => import('@/pages/placeVerifi/verifi'),
        component: resolve => require(['@/pages/placeVerifi/verifi'],resolve),
        meta: { ...meta, title: '手机号归属地核验' },
      },{
        path: 'place1',
        name: `${pre}place1`,
        // component: () => import('@/pages/placeVerifi/verifi1'),
        component: resolve => require(['@/pages/placeVerifi/verifi1'],resolve),
        meta: { ...meta, title: '手机号所在省市区县核验' },
      },{
        path: 'place2',
        name: `${pre}place2`,
        // component: () => import('@/pages/placeVerifi/verifi2'),
        component: resolve => require(['@/pages/placeVerifi/verifi2'],resolve),
        meta: { ...meta, title: '手机号近期活跃地方核验' },
      },{
        path: 'place3',
        name: `${pre}place3`,
        // component: () => import('@/pages/placeVerifi/verifi3'),
        component: resolve => require(['@/pages/placeVerifi/verifi3'],resolve),
        meta: { ...meta, title: '手机号居住地核验' },
      },{
        path: 'place4',
        name: `${pre}place4`,
        // component: () => import('@/pages/placeVerifi/verifi4'),
        component: resolve => require(['@/pages/placeVerifi/verifi4'],resolve),
        meta: { ...meta, title: '手机号工作地核验' },
      },{
        path: 'place5',
        name: `${pre}place5`,
        // component: () => import('@/pages/placeVerifi/verifi5'),
        component: resolve => require(['@/pages/placeVerifi/verifi5'],resolve),
        meta: { ...meta, title: '手机号机主籍贯核验' },
      },{
        path: 'place6',
        name: `${pre}place6`,
        // component: () => import('@/pages/placeVerifi/verifi6'),
        component: resolve => require(['@/pages/placeVerifi/verifi6'],resolve),
        meta: { ...meta, title: '手机号时间点出现位置核验' },
      },{
        path: 'place7',
        name: `${pre}place7`,
        // component: () => import('@/pages/placeVerifi/verifi7'),
        component: resolve => require(['@/pages/placeVerifi/verifi7'],resolve),
        meta: { ...meta, title: '手机号活跃时间核验' },
      },{
        path: 'place8',
        name: `${pre}place8`,
        // component: () => import('@/pages/placeVerifi/verifi8'),
        component: resolve => require(['@/pages/placeVerifi/verifi8'],resolve),
        meta: { ...meta, title: '两个手机号位置共现核验' },
      },{
        path: 'place9',
        name: `${pre}place9`,
        // component: () => import('@/pages/placeVerifi/verifi9'),
        component: resolve => require(['@/pages/placeVerifi/verifi9'],resolve),
        meta: { ...meta, title: '出行规律核验' },
      },
      //关系核验
      {
        path: 'relation',
        name: `${pre}relation`,
        // component: () => import('@/pages/relationVerifi/verifi'),
        component: resolve => require(['@/pages/relationVerifi/verifi'],resolve),
        meta: { ...meta, title: '两个手机号熟悉程度' },
      },{
        path: 'relation1',
        name: `${pre}relation1`,
        // component: () => import('@/pages/relationVerifi/verifi1'),
        component: resolve => require(['@/pages/relationVerifi/verifi1'],resolve),
        meta: { ...meta, title: '两个手机号社会关系' },
      },{
        path: 'relation2',
        name: `${pre}relation2`,
        // component: () => import('@/pages/relationVerifi/verifi2'),
        component: resolve => require(['@/pages/relationVerifi/verifi2'],resolve),
        meta: { ...meta, title: '虚拟账号是否有关系' },
      },{
        path: 'relation3',
        name: `${pre}relation3`,
        // component: () => import('@/pages/relationVerifi/verifi3'),
        component: resolve => require(['@/pages/relationVerifi/verifi3'],resolve),
        meta: { ...meta, title: '实体是否有群体关系' },
      },{
        path: 'relation4',
        name: `${pre}relation4`,
        // component: () => import('@/pages/relationVerifi/verifi4'),
        component: resolve => require(['@/pages/relationVerifi/verifi4'],resolve),
        meta: { ...meta, title: '手机通联频次' },
      },
      //行为核验
      {
        path: 'action',
        name: `${pre}action`,
        // component: () => import('@/pages/actionVerifi/verifi'),
        component: resolve => require(['@/pages/actionVerifi/verifi'],resolve),
        meta: { ...meta, title: '车牌违章核验' },
      },{
        path: 'action1',
        name: `${pre}action1`,
        // component: () => import('@/pages/actionVerifi/verifi1'),
        component: resolve => require(['@/pages/actionVerifi/verifi1'],resolve),
        meta: { ...meta, title: '搜索词核验' },
      },{
        path: 'action2',
        name: `${pre}action2`,
        // component: () => import('@/pages/actionVerifi/verifi2'),
        component: resolve => require(['@/pages/actionVerifi/verifi2'],resolve),
        meta: { ...meta, title: '近期搜索热词' },
      },{
        path: 'action3',
        name: `${pre}action3`,
        // component: () => import('@/pages/actionVerifi/verifi3'),
        component: resolve => require(['@/pages/actionVerifi/verifi3'],resolve),
        meta: { ...meta, title: '借贷行为核验' },
      },{
        path: 'action4',
        name: `${pre}action4`,
        // component: () => import('@/pages/actionVerifi/verifi4'),
        component: resolve => require(['@/pages/actionVerifi/verifi4'],resolve),
        meta: { ...meta, title: '收入消费水平核验' },
      },
    ])('dataVerification-')
  },
  {
    path: '/loaningMonitor',
    name:'loaningMonitor',
    redirect: { name: 'loaningMonitor-index' },
    component: layoutHeaderAside,
    children: (pre => [
      {
        path: 'index',
        name: `${pre}index`,
        // component: () => import('@/pages/loanMonitor'),
        component: resolve => require(['@/pages/loanMonitor'],resolve),
        meta: { ...meta, title: '态势预警' }
      },
      {
        path: 'consumerMgt',
        name: `${pre}consumerMgt`,
        // component: () => import('@/pages/loanMonitor'),
        component: resolve => require(['@/pages/loanMonitor'],resolve),
        meta: { ...meta, title: '客户管理' }
      },
      {
        path: 'situationWarning',
        name: `${pre}situationWarning`,
        // component: () => import('@/pages/loanMonitor'),
        component: resolve => require(['@/pages/loanMonitor'],resolve),
        meta: { ...meta, title: '态势预警' }
      },
      {
        path: 'riskAssessment',
        name: `${pre}riskAssessment`,
        // component: () => import('@/pages/riskRating'),
        component: resolve => require(['@/pages/riskRating'],resolve),
        meta: { ...meta, title: '客户风险评估' }
      },
      {
        path: 'lossRepair',
        name: `${pre}lossRepair`,
        // component: () => import('@/pages/loseTrack'),
        component: resolve => require(['@/pages/loseTrack'],resolve),
        meta: { ...meta, title: '失联修复' }
      },
      {
        path: 'kblackList',
        name: `${pre}kblackList`,
        // component: () => import('@/pages/kblackList'),
        component: resolve => require(['@/pages/kblackList'],resolve),
        meta: { ...meta, title: '客户黑名单' }
      },
      {
        path: 'rulesMgt',
        name: `${pre}rulesMgt`,
        // component: () => import('@/pages/rulesMgt'),
        component: resolve => require(['@/pages/rulesMgt'],resolve),
        meta: { ...meta, title: '规则集管理' }
      },
      {
        path: 'statisticReport',
        name: `${pre}statisticReport`,
        // component: () => import('@/pages/statisticReport'),
        component: resolve => require(['@/pages/statisticReport'],resolve),
        meta: { ...meta, title: '统计报告' }
      },
      {
        path: 'businessMgt',
        name: `${pre}businessMgt`,
        // component: () => import('@/pages/businessMgt'),
        component: resolve => require(['@/pages/businessMgt'],resolve),
        meta: { ...meta, title: '业务管理' }
      }
    ])('loaningMonitor-')
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
