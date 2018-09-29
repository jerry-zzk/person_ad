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
        component: () => import('@/pages/index'),
        meta: { ...meta, title: '总览' }
      },
      {
        path: 'addCustomer',
        name: `${pre}addCustomer`,
        component: () => import('@/pages/page1'),
        meta: { ...meta, title: '新客戶提交' }
      },
      {
        path: 'examineCustomer',
        name: `${pre}examineCustomer`,
        component: () => import('@/pages/page2'),
        meta: { ...meta, title: '审核管理' }
      },
      {
        path: 'searchCustomer',
        name: `${pre}searchCustomer`,
        component: () => import('@/pages/searchCustomer'),
        meta: { ...meta, title: '客户检索' }
      }, {
        path: 'idCard',
        name: `${pre}idCard`,
        component: () => import('@/pages/page4'),
        meta: { ...meta, title: '客户黑名单' }
      },{
        path: 'creditLoan',
        name: `${pre}creditLoan`,
        component: () => import('@/pages/warn'),
        meta: { ...meta, title: '欺诈告警' }
      },{
        path: 'manage',
        name: `${pre}manage`,
        component: () => import('@/pages/manage'),
        meta: { ...meta, title: '业务管理' }
      }
      
      // {
      //   path: '/global',
      //   name: 'global',
      //   component: () => import('@/pages/global'),
      //   meta: { meta, title: '接口' }
      // }
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
        component: () => import('@/pages/idVerifi/verifi'),
        meta: { ...meta, title: '身份核验' },
      },
      {
        path: 'namePhone',
        name: `${pre}namePhone`,
        component: () => import('@/pages/idVerifi/verifi'),
        meta: { ...meta, title: '姓名/手机号' },
      },
      {
        path: 'idPhone',
        name: `${pre}idPhone`,
        component: () => import('@/pages/idVerifi/verifi1'),
        meta: { ...meta, title: '身份证号/手机号' },
      },
      {
        path: 'sexPhone',
        name: `${pre}sexPhone`,
        component: () => import('@/pages/idVerifi/verifi2'),
        meta: { ...meta, title: '性别/手机号' },
      },
      {
        path: 'peoPhone',
        name: `${pre}peoPhone`,
        component: () => import('@/pages/idVerifi/verifi3'),
        meta: { ...meta, title: '手机号/使用人职业' },
      },
      {
        path: 'addPhone',
        name: `${pre}addPhone`,
        component: () => import('@/pages/idVerifi/verifi4'),
        meta: { ...meta, title: '手机号/所在单位' },
      },
      // 虚拟账号核验
      {
        path: 'nameEmail',
        name: `${pre}nameEmail`,
        component: () => import('@/pages/accountVerifi/verifi'),
        meta: { ...meta, title: '姓名/邮箱' },
      },{
        path: 'nameEmail1',
        name: `${pre}nameEmail1`,
        component: () => import('@/pages/accountVerifi/verifi1'),
        meta: { ...meta, title: '企业/邮箱' },
      },{
        path: 'nameEmail2',
        name: `${pre}nameEmail2`,
        component: () => import('@/pages/accountVerifi/verifi2'),
        meta: { ...meta, title: '虚拟号码个数' },
      },{
        path: 'nameEmail3',
        name: `${pre}namePhone1`,
        component: () => import('@/pages/accountVerifi/verifi3'),
        meta: { ...meta, title: '手机号/虚拟账号' },
      },{
        path: 'nameEmail4',
        name: `${pre}nameEmail4`,
        component: () => import('@/pages/accountVerifi/verifi4'),
        meta: { ...meta, title: '手机号/信用卡' },
      },{
        path: 'nameEmail5',
        name: `${pre}nameEmail5`, 
        component: () => import('@/pages/accountVerifi/verifi5'),
        meta: { ...meta, title: '手机号/虚拟身份' },
      },{
        path: 'nameEmail6',
        name: `${pre}nameEmail6`,
        component: () => import('@/pages/accountVerifi/verifi6'),
        meta: { ...meta, title: '贷款类APP个数' },
      },{
        path: 'nameEmail7',
        name: `${pre}nameEmail7`,
        component: () => import('@/pages/accountVerifi/verifi7'),
        meta: { ...meta, title: '手机号/IMSI' },
      },
      //设备核验
      {
        path: 'naph',
        name: `${pre}naph`,
        component: () => import('@/pages/EquipmentVerifi/verifi'),
        meta: { ...meta, title: '同设备多手机号核验' },
      },{
        path: 'naph1',
        name: `${pre}naph1`,
        component: () => import('@/pages/EquipmentVerifi/verifi1'),
        meta: { ...meta, title: '设备操作系统核验' },
      },{
        path: 'naph2',
        name: `${pre}naph2`,
        component: () => import('@/pages/EquipmentVerifi/verifi2'),
        meta: { ...meta, title: '设备型号核验' },
      },{
        path: 'naph3',
        name: `${pre}naph3`,
        component: () => import('@/pages/EquipmentVerifi/verifi3'),
        meta: { ...meta, title: '同手机号设备数量核验' },
      },{
        path: 'naph4',
        name: `${pre}naph4`,
        component: () => import('@/pages/EquipmentVerifi/verifi4'),
        meta: { ...meta, title: '手机号与IMEI对应关系核验' },
      },
      // 位置核验‘
      {
        path: 'place',
        name: `${pre}place`,
        component: () => import('@/pages/placeVerifi/verifi'),
        meta: { ...meta, title: '手机号归属地核验' },
      },{
        path: 'place1',
        name: `${pre}place1`,
        component: () => import('@/pages/placeVerifi/verifi1'),
        meta: { ...meta, title: '手机号所在省市区县核验' },
      },{
        path: 'place2',
        name: `${pre}place2`,
        component: () => import('@/pages/placeVerifi/verifi2'),
        meta: { ...meta, title: '手机号近期活跃地方核验' },
      },{
        path: 'place3',
        name: `${pre}place3`,
        component: () => import('@/pages/placeVerifi/verifi3'),
        meta: { ...meta, title: '手机号居住地核验' },
      },{
        path: 'place4',
        name: `${pre}place4`,
        component: () => import('@/pages/placeVerifi/verifi4'),
        meta: { ...meta, title: '手机号工作地核验' },
      },{
        path: 'place5',
        name: `${pre}place5`,
        component: () => import('@/pages/placeVerifi/verifi5'),
        meta: { ...meta, title: '手机号机主籍贯核验' },
      },{
        path: 'place6',
        name: `${pre}place6`,
        component: () => import('@/pages/placeVerifi/verifi6'),
        meta: { ...meta, title: '手机号时间点出现位置核验' },
      },{
        path: 'place7',
        name: `${pre}place7`,
        component: () => import('@/pages/placeVerifi/verifi7'),
        meta: { ...meta, title: '手机号活跃时间核验' },
      },{
        path: 'place8',
        name: `${pre}place8`,
        component: () => import('@/pages/placeVerifi/verifi8'),
        meta: { ...meta, title: '两个手机号位置共现核验' },
      },{
        path: 'place9',
        name: `${pre}place9`,
        component: () => import('@/pages/placeVerifi/verifi9'),
        meta: { ...meta, title: '出行规律核验' },
      },
      //关系核验
      {
        path: 'relation',
        name: `${pre}relation`,
        component: () => import('@/pages/relationVerifi/verifi'),
        meta: { ...meta, title: '两个手机号熟悉程度' },
      },{
        path: 'relation1',
        name: `${pre}relation1`,
        component: () => import('@/pages/relationVerifi/verifi1'),
        meta: { ...meta, title: '两个手机号社会关系' },
      },{
        path: 'relation2',
        name: `${pre}relation2`,
        component: () => import('@/pages/relationVerifi/verifi2'),
        meta: { ...meta, title: '虚拟账号是否有关系' },
      },{
        path: 'relation3',
        name: `${pre}relation3`,
        component: () => import('@/pages/relationVerifi/verifi3'),
        meta: { ...meta, title: '实体是否有群体关系' },
      },{
        path: 'relation4',
        name: `${pre}relation4`,
        component: () => import('@/pages/relationVerifi/verifi4'),
        meta: { ...meta, title: '手机通联频次' },
      },
      //行为核验
      {
        path: 'action',
        name: `${pre}action`,
        component: () => import('@/pages/actionVerifi/verifi'),
        meta: { ...meta, title: '车牌违章核验' },
      },{
        path: 'action1',
        name: `${pre}action1`,
        component: () => import('@/pages/actionVerifi/verifi1'),
        meta: { ...meta, title: '搜索词核验' },
      },{
        path: 'action2',
        name: `${pre}action2`,
        component: () => import('@/pages/actionVerifi/verifi2'),
        meta: { ...meta, title: '近期搜索热词' },
      },{
        path: 'action3',
        name: `${pre}action3`,
        component: () => import('@/pages/actionVerifi/verifi3'),
        meta: { ...meta, title: '借贷行为核验' },
      },{
        path: 'action4',
        name: `${pre}action4`,
        component: () => import('@/pages/actionVerifi/verifi4'),
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
        component: () => import('@/pages/loanMonitor'),
        meta: { ...meta, title: '态势预警' }
      },
      {
        path: 'consumerMgt',
        name: `${pre}consumerMgt`,
        component: () => import('@/pages/loanMonitor'),
        meta: { ...meta, title: '客户管理' }
      },
      {
        path: 'situationWarning',
        name: `${pre}situationWarning`,
        component: () => import('@/pages/loanMonitor'),
        meta: { ...meta, title: '态势预警' }
      },
      {
        path: 'riskAssessment',
        name: `${pre}riskAssessment`,
        component: () => import('@/pages/riskRating'),
        meta: { ...meta, title: '客户风险评估' }
      },
      {
        path: 'lossRepair',
        name: `${pre}lossRepair`,
        component: () => import('@/pages/loseTrack'),
        meta: { ...meta, title: '失联修复' }
      },
      {
        path: 'blackList',
        name: `${pre}blackList`,
        component: () => import('@/pages/loanMonitor'),
        meta: { ...meta, title: '客户黑名单' }
      },
      {
        path: 'rulesMgt',
        name: `${pre}rulesMgt`,
        component: () => import('@/pages/loanMonitor'),
        meta: { ...meta, title: '规则集管理' }
      },
      {
        path: 'statisticReport',
        name: `${pre}statisticReport`,
        component: () => import('@/pages/loanMonitor'),
        meta: { ...meta, title: '统计报告' }
      },
      {
        path: 'businessMgt',
        name: `${pre}businessMgt`,
        component: () => import('@/pages/loanMonitor'),
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
