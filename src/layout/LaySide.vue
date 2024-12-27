<template>
  <div class="layout-side-container">
    <div class="layout-side-top w-[100%] h-[48px] flex items-center justify-center flex-nowrap">
      <img v-if="getLogo()" :src="getLogo()" alt="logo" />
      <span class="text-lg font-bold">{{ title }}</span>
    </div>
    <div class="h-[calc(100%-48px)]">
      <el-scrollbar wrap-class="layout-side-content">
        <LayMenu />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { computed, defineComponent, h } from "vue";
import LayMenu from './components/LayMenu.vue';
import { useNav } from "@/layout/hooks/useNav";

const { title, getLogo } = useNav();

</script>

<style lang="scss" scoped>
.layout-side-container {
  background: var(--color-background) !important;
  border-right: 1px solid var(--color-border);
  font-size: 0;
  overflow: visible;
  transition: width var(--vt-transition-duration);
  z-index: 1001;
  .layout-side-top {
    overflow: hidden;
    position: relative;
  }
}
</style>
