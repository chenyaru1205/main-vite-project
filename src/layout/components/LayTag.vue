<template>
  <div class="lay-tag-container">
    <el-scrollbar ref="layoutScrollbarRef" class="layout-backtop" style="width: 100%;">
      <div class="lay-tag-wrap">
        <el-tabs
          v-model="tagActiveCode"
          type="card"
          @tab-remove="tabRemove"
          @tab-click="tabClick"
          @mouseenter.capture="tagMouseenter()"
          @mouseleave.capture="tagMouseleave()">
          <el-tab-pane
            v-for="tag in tagList"
            :closable="!tag.fixed"
            :key="tag.code"
            :label="tag.name"
            :name="tag.code"
          >
          </el-tab-pane>
        </el-tabs>
        <!-- <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
          <li @click="refreshSelectedTag(selectedTag)">{{$lang('刷新')}}</li>
          <li v-if="!(selectedTag.meta && selectedTag.meta.affix)" @click="closeSelectedTag(selectedTag)">{{$lang('关闭')}}</li>
          <li @click="closeOthersTags">{{$lang('关闭其他')}}</li>
          <li @click="closeAllTags(selectedTag)">{{$lang('关闭所有')}}</li>
        </ul> -->
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext, TabPaneName } from 'element-plus';
import { useNav } from "@/layout/hooks/useNav";
const { tagActiveCode, tagList, openTagItem, removeTagItem } = useNav();

const tabClick = (tab: TabsPaneContext) => {
  openTagItem(tab.paneName as string)
}
const tabRemove = (name: TabPaneName) => {
  removeTagItem(name as string)
}
const tagMouseenter = () => {}
const tagMouseleave = () => {}

</script>

<style lang="scss">
.lay-tag-container {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e4e7ed;
  .lay-tag-wrap {
    width: 100%;
    .el-tabs {
      --el-tabs-header-height: 30px;
    }
    .el-tabs__header{
      margin: 0;
      border: none !important;
    }
    .el-tabs__item {
      font-size: 12px;
    }
  }
}
</style>
