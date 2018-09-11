// layout
import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/pages/page1'),
        meta: { meta, title: '新客戶提交' }
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/pages/page2'),
        meta: { meta, title: '审核管理' }
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/pages/page3'),
        meta: { meta, title: '客户检索' }
      }, {
        path: '/page4',
        name: 'page4',
        component: () => import('@/pages/page4'),
        meta: { meta, title: '客户黑名单' }
      }
      // {
      //   path: '/global',
      //   name: 'global',
      //   component: () => import('@/pages/global'),
      //   meta: { meta, title: '接口' }
      // }
    ]
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
