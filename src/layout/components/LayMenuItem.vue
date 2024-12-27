<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <el-sub-menu
    v-if="item.children && item.children.length"
    ref="subMenu"
    teleported
    :index="item.code"
    class="layout-side-sub-menu"
  >
    <template #title>
      <div v-if="toRaw(item.icon)" :style="getSubMenuIconStyle" class="sub-menu-icon">
        <component :is="useRenderIcon(item.icon && toRaw(item.icon))" />
      </div>
      <el-text>{{ item.name }}</el-text>
    </template>
    <lay-menu-item
      v-for="child in item.children"
      :key="child.code"
      :item="child"
      class="layout-side-menu-item"
    />
  </el-sub-menu>
  <el-menu-item
    v-else-if="item.isShow"
    :key="item.code"
    :index="item.code"
    @click="openMenuItem(item.code)"
    class="layout-side-menu-item"
  >
    <div v-if="toRaw(item.icon)" :style="getSubMenuIconStyle" class="sub-menu-icon">
      <component :is="useRenderIcon(item.icon && toRaw(item.icon))" />
    </div>
    <template #title>
      <el-text truncated class="!w-full !text-inherit" style="z-index: 1;">
        {{ item.name }}
      </el-text>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { type PropType, type CSSProperties, toRaw, computed } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { type menuType } from "@/layout/types";
import { useNav } from "@/layout/hooks/useNav";
const { openMenuItem } = useNav()

const props = defineProps({
  item: {
    type: Object as PropType<menuType>
  }
})

const getSubMenuIconStyle = computed((): CSSProperties => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:  "0 5px 0 0",
    fontSize: "18px",
    zIndex: 1
  }
})
</script>
