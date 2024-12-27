import { createI18n } from 'vue-i18n';
import pinia from '@/stores/index';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '@/stores/themeConfig';
import messages from './langs';

// 读取 pinia 默认语言
const stores = useThemeConfig(pinia);
const { themeConfig } = storeToRefs(stores);

// 导出语言国际化
// https://vue-i18n.intlify.dev/guide/essentials/fallback.html#explicit-fallback-with-one-locale
export const i18n = createI18n({
	legacy: false,
	silentTranslationWarn: true,
	missingWarn: false,
	silentFallbackWarn: true,
	fallbackWarn: false,
	locale: themeConfig.value.globalI18n || 'zh-cn',
	fallbackLocale: 'zh-cn',
	messages
});
