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
        component: () => import('@/pages/page3'),
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
        meta: { ...meta, title: '欺詐警告' }
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
        component: () => import('@/pages/index'),
        meta: { ...meta, title: '身份核验' }
      }
    ])('dataVerification-')
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
