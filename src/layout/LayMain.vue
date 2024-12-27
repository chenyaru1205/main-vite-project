<template>
  <div style="background-color: #ebebeb; padding: 5px; overflow: auto;">
    <router-view />
    <div id="app-micro"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import initMicro from '@/micro/index'

onMounted(() => {
  if (!window.qiankunStarted) {
    console.log('注册并调用函数Start', window.qiankunStarted)
    window.qiankunStarted = true
    initMicro()
  }
})
</script>
