<template>
    <div class="d2-container-full">
        <div v-if="$slots.header" class="d2-container-full__header" ref="header">
            <slot name="header"/>
        </div>
        <el-scrollbar style="height: 100%">
            <div class="d2-container-full__body">
                <slot/>
            </div>
        </el-scrollbar>
        <div v-if="$slots.footer" class="d2-container-full__footer" ref="footer">
            <slot name="footer"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'd2-container-full'
  }
</script>
