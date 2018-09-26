import { version } from '../package'

const setting = {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 侧边栏默认折叠状态
  menu: {
    asideCollapse: false
  },
  // 在读取持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'index',
        meta: {
          title: '首页',
          requiresAuth: false
        }
      }
    ]
  },
  // 版本
  releases: {
    version: version,
    api: 'https://api.github.com/repos/FairyEver/d2-admin/releases/latest'
  },
  // 菜单搜索
  search: {
    enable: true
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: '简约线条',
        name: 'line',
        type: 'light',
        backgroundImage: 'image/theme/line/bg.jpg',
        preview: 'image/theme/line/bg.jpg'
      },
      {
        title: '纯色',
        name: 'd2',
        type: 'dark',
        backgroundImage: 'image/theme/d2/bg.jpg',
        preview: 'image/theme/d2/bg.jpg'
      },
      {
        title: '蓝色',
        name: 'violet',
        type: 'dark',
        backgroundImage: 'image/theme/violet/bg.jpg',
        preview: 'image/theme/violet/bg.jpg'
      },
      {
        title: '模糊',
        name: 'star',
        type: 'dark',
        backgroundImage: 'image/theme/star/bg.jpg',
        preview: 'image/theme/star/bg.jpg'
      }
    ]
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  },
  // 在读取持久化数据失败时默认用户信息
  user: {
    info: {
      name: 'Ghost'
    }
  }
}

export default setting
