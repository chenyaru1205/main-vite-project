import { computed, reactive, ref } from 'vue'
import router from '@/router'
import { type modelType, type menuType, type tagType } from "@/layout/types";

// 全局变量
const DETAULT_INDEX = 'index'
// 菜单是否折叠
const isCollapse = ref<boolean>(true)
// 选中的模块
const modelActiveCode = ref<string>()
// 选中的菜单
const menuActiveCode = ref<string>()
// 选中的tag
const tagActiveCode = ref<string>(DETAULT_INDEX)
// 展示的左侧菜单
const menuList = ref<menuType[]>()
// tag的列表展示
const tagList = ref<tagType[]>([
  { code: 'index', routeName: 'home', name: '主页', fixed: true }
])

export function useNav() {
  // 系统logo
  function getLogo() {
    return new URL("/logo.svg", import.meta.url).href;
  }
  // 系统名称
  const title = computed(() => {
    return isCollapse.value ? '' : 'qiankun微前端';
  })

  // 打开模块
  const openModelItem = (modelCode: string) => {
    const modelObj = modelList.find((ele: modelType) => ele.code === modelCode)
    if (modelObj) {
      modelActiveCode.value = modelObj.code
      getMenuList(modelObj.code as string)
      if (isCollapse.value) isCollapse.value = false
    }
  }
  // 打开菜单
  const openMenuItem = (menuCode: string) => {
    const menuObj = treeToArray(menuListAll).find((ele: menuType) => ele.code === menuCode) as unknown as menuType
    if (menuObj) {
      menuActiveCode.value = menuObj.code
      addTagItem(menuObj as tagType)
      tagActiveCode.value = menuObj.code as string
      if (isCollapse.value) isCollapse.value = false
      const path = menuObj.modelCode ? `/${menuObj.modelCode}/${menuObj.routeName}` : `/${menuObj.routeName}`
      console.log('path', path)
      router.push(path).catch(() => {
        console.log('跳转失败')
      })
    }
  }
  // 获取左侧的展示的菜单
  const getMenuList = (modelCode: string) => {
    menuList.value = menuListAll.filter((ele: menuType) => ele.modelCode === modelCode)
  }
  // 添加tag
  const addTagItem = (tagObj: tagType) => {
    const tagIdx = tagList.value.findIndex((ele: tagType) => ele.code === tagObj.code)
    if (tagIdx === -1) {
      tagList.value.push(tagObj)
    } else {
      tagList.value[tagIdx] = tagObj
    }
  }
  // 移除tag
  const removeTagItem = (tagCode: string) => {
    const tagIdx = tagList.value.findIndex((ele: tagType) => ele.code === tagCode)
    tagList.value.splice(tagIdx, 1)
    if (tagActiveCode.value === tagCode) {
      openTagItem(tagList.value[tagList.value.length - 1].code as string)
    }
  }
  // 打开tag
  const openTagItem = (tagCode: string) => {
    const tagObj = tagList.value.find((ele: menuType) => ele.code === tagCode) as unknown as menuType
    if (tagObj) {
      tagActiveCode.value = tagObj.code as string
      if (tagCode === DETAULT_INDEX) {
        isCollapse.value = true
        menuActiveCode.value = ''
        router.push({ name: tagObj.routeName })
      } else {
        openMenuItem(tagObj.code as string)
        if (tagObj?.modelCode) {
          openModelItem(tagObj?.modelCode)
        }
      }
    }
  }

  const modelList = reactive<modelType[]>([
    { id: 1, code: 'vue3-app', name: 'vue3微应用', routeName: 'vue3-app', isShow: 1, moduleType: 1 },
    { id: 2, code: 'vue2-app', name: 'vue2微应用', routeName: 'vue2-app', isShow: 1, moduleType: 1 },
    { id: 3, code: 'react-app', name: 'react微应用', routeName: 'react-app', isShow: 1, moduleType: 1 }
  ])

  const menuListAll = reactive<menuType[]>([
    { modelCode: 'vue3-app', id: 100, code: 'vue3Home', name: 'vue3首页', routeName: 'home', icon: 'ep:avatar', isShow: 1, moduleType: 3 },
    { modelCode: 'vue3-app', id: 101, code: 'vue3About', name: 'vue3关于', routeName: 'about', icon: 'ep:brush-filled', isShow: 1, moduleType: 3 },
    { modelCode: 'vue3-app', id: 102, code: 'csml', name: 'vue3测试目录', icon: 'ep:bell-filled', isShow: 1, moduleType: 2, children: [
      { modelCode: 'vue3-app', id: 1021, code: 'vue3Home1', name: 'vue3首页1', routeName: 'home', isShow: 1, moduleType: 3 },
      { modelCode: 'vue3-app', id: 1022, code: 'vue3About1', name: 'vue3关于1', routeName: 'about', isShow: 1, moduleType: 3 }
    ]},
    { modelCode: 'vue2-app', id: 103, code: 'vue2Home', name: 'vue2首页', routeName: 'home', icon: 'ep:brush-filled', isShow: 1, moduleType: 3 },
    { modelCode: 'vue2-app', id: 104, code: 'vue2About', name: 'vue2关于', routeName: 'about', icon: 'ep:brush-filled', isShow: 1, moduleType: 3 },
    { modelCode: 'react-app', id: 105, code: 'reactHome', name: 'react首页', routeName: 'home', icon: 'ep:brush-filled', isShow: 1, moduleType: 3 },
    { modelCode: 'react-app', id: 106, code: 'reactAbout', name: 'react关于', routeName: 'about', icon: 'ep:brush-filled', isShow: 1, moduleType: 3 }
  ])

  const treeToArray = (treeNodes: any[]) => {
    const result: any[] = []
    const traverse = (node: any) => {
      const newNode = { ...node }
      delete newNode.children
      result.push(newNode)
      if (node.children) {
        node.children.forEach(traverse)
      }
    }
    treeNodes.forEach(traverse)
    return result
  }

  return {
    title,
    getLogo,
    // 模块
    modelList,
    modelActiveCode,
    openModelItem,
    // 菜单
    isCollapse,
    menuListAll,
    menuList,
    menuActiveCode,
    openMenuItem,
    // tag
    tagList,
    tagActiveCode,
    addTagItem,
    removeTagItem,
    openTagItem
  }
}
