<template>
  <d2-container class="page">
    
</template>

<script>
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': () => import('./componnets/PageHeader'),
  },
  data () {
    return {
    }
  }
}
// export default {
//   name: 'page1',
//   data () {
//     return {
//     }
//   }
// }
</script>
