import { defineStore } from 'pinia';

// 布局配置
export const useThemeConfig = defineStore('themeConfig', {
  state: (): ThemeConfigState => ({
    themeConfig: {
      // 默认初始语言，可选值"<zh-cn|en>"，默认 zh-cn
			globalI18n: 'zh-cn'
    }
  })
});
