<template>
  <div class="lay-top-container">
    <div class="lay-top-model-wrap">
      <el-tabs type="card"
        @tab-click="tabClick"
        v-model="modelActiveCode">
        <template v-for="tag in modelList">
          <el-tab-pane
            v-if="tag.isShow"
            ref="tag"
            :key="tag.code"
            :label="tag.name"
            :name="tag.code">
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus';
import { useNav } from "@/layout/hooks/useNav";
const { modelActiveCode, modelList, openModelItem } = useNav();

// 打开模块
const tabClick = (tab: TabsPaneContext) => {
  openModelItem(tab.paneName as string)
}

</script>

<style lang="scss">
.lay-top-container {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e4e7ed;
  .lay-top-model-wrap {
    width: 100%;
    .el-tabs__header{
      margin: 0;
      border: none !important;
    }
    .el-tabs__nav {
      border: none !important;
    }
    .el-tabs__item {
      font-size: 15px;
      font-weight: bold;
      border: none !important;
    }
  }
}
</style>
