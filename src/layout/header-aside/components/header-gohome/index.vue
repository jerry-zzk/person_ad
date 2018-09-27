<template>
  <div>
    <el-tooltip effect="dark" content="回到导览页" placement="bottom">
      <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text" @click="$router.replace({ path: '/' })">
        <d2-icon name="home" style="font-size: 20px;"/>
      </el-button>
    </el-tooltip>
  </div>
</template>
