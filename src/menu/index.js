import creditEvaluation from './modules/credit-evaluation'
import antiFraud from './modules/anti-fraud'

// 菜单 侧边栏
export const menuAside = [
  antiFraud,
  creditEvaluation,
]

// 菜单 顶栏
export const menuHeader = [
  {
    path: '/index',
    title: '首页',
    iconSvg: 'index'
  },
  {
    title: '精准营销平台',
    iconSvg: 'marketing'
  },
  {
    title: '贷前准入平台',
    iconSvg: 'approval',
    children: [
      antiFraud,
      creditEvaluation
    ]
  },
  {
    title: '贷中监控平台',
    iconSvg: 'monitor',
    children: [
      {
        title: '贷中预警',
        iconSvg: 'alert',
      },{
        title: '失联修复',
        iconSvg: 'restore',
      }
    ]
  },
  {
    title: '业务服务',
    iconSvg: 'service',
    children: [
      {
        title: '业务服务',
        iconSvg: 'service',
        path: '/service',
      },{
        title: '业务服务',
        iconSvg: 'service',
        path: '/service',
      },{
        title: '业务服务',
        iconSvg: 'service',
        path: '/service',
      },{
        title: '业务服务',
        iconSvg: 'service',
        path: '/service',
      }
    ]
  },
  {
    path: '/help',
    title: '帮助',
    iconSvg: 'help'
  }
]
