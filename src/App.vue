<template>
  <el-config-provider :locale="getGlobalI18n">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

// 定义变量内容
const { messages, locale } = useI18n();

// 获取全局 i18n
const getGlobalI18n = computed(() => {
	return messages.value[locale.value];
});

</script>

<style scoped>

</style>
