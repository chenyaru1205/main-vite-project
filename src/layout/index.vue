<template>
  <div class="layout-container">
    <LaySide :style="`height: 100%; width: ${sideWidth}`" />
    <div :style="`height: 100%; width: calc(100% - ${sideWidth})`">
      <LayHeader :style="`width: 100%;`"/>
      <LayMain :style="`width: 100%; height: calc(100% - 72px)`"/>
    </div>
  </div>
</template>

<script setup lang="ts" name="layout">
import { computed } from "vue";
import LaySide from "./LaySide.vue";
import LayHeader from "./LayHeader.vue";
import LayMain from "./LayMain.vue";
import { useNav } from "@/layout/hooks/useNav";
const { isCollapse } = useNav()

const sideWidth = computed(() => {
  return isCollapse.value ? '70px' : '180px'
})
</script>

<style lang="scss" scoped>
.layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  &::after {
    display: table;
    clear: both;
    content: "";
  }
}
</style>

