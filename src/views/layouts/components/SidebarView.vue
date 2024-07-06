<script setup lang="ts">
import SearchIcon from '@/assets/Icons/search-icon.svg?component'
import FolderIcon from '@/assets/Icons/folder-icon.svg?component'
import HistoryIcon from '@/assets/Icons/history-icon.svg?component'
import NotificationIcon from '@/assets/Icons/notification-icon.svg?component'
import SettingIcon from '@/assets/Icons/setting-icon.svg?component'
import Create from '@/assets/Icons/Create-Icon.svg?components'
import { ref } from 'vue'

const collapsed = ref(false)
const miniMenu = ref(false)
defineProps(['isCollapsed'])

const testMenu = [
  {
    name: 'ایجاد کلاس',
    icon: { text: 'search', class: 'material-icons-outlined' }
  },
  {
    name: 'کلاس ها',
    icon: { class: 'material-icons-outlined', text: 'folder' },
    children: [
      {
        name: 'کلاس 1'
      },
      {
        name: 'کلاس 2'
      }
    ]
  },
]
</script>

<template>
  <VueAwesomeSideBar
    :miniMenu="isCollapsed"
    v-model:collapsed="collapsed"
    :BottomMiniMenuBtn="false"
    :rtl="true"
    :position="'relative'"
    :menu="testMenu"
    vueRouterEnabel
  >
    <template #itemPrepandIcon="{ icon, active }">
      <SearchIcon v-if="icon && icon.text === 'search'" />
      <FolderIcon v-if="icon && icon.text === 'folder'" />
      <HistoryIcon v-if="icon && icon.text === 'history'" />
      <NotificationIcon v-if="icon && icon.text === 'notification'" />
      <SettingIcon v-if="icon && icon.text === 'setting'" />
    </template>
  </VueAwesomeSideBar>
</template>

<style scoped>
li {
  display: flex;
}
li > p {
  padding-inline-start: 12px;
}
</style>
