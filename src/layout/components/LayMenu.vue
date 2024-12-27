<template>
  <el-menu
    unique-opened
    mode="vertical"
    popper-class="layout-side-menu-popper"
    class="layout-side-menu h-[100%]"
    :collapse="isCollapse"
    :default-active="menuActiveCode"
  >
    <LayMenuItem
      v-for="val in menuList"
      :key="val.code"
      :item="val"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"
import LayMenuItem from './LayMenuItem.vue';
import { useNav } from "@/layout/hooks/useNav";
const {  menuList, menuActiveCode, isCollapse } = useNav()

</script>

<style lang="scss">
.layout-side-menu {
  background-color: transparent !important;
  border: none;
  .layout-side-menu-item {
    height: 50px;
    line-height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 6px;
    z-index: 0;
    &:hover {
      font-weight: bold;
    }
  }
  .is-active.layout-side-menu-item {
    color: #ffffff;
    &:before {
      background: var(--el-color-primary) !important;
      border-radius: 3px;
      clear: both;
      content: "";
      inset: 0 8px;
      position: absolute;
    }
  }
}
</style>
