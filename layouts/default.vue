<template>
  <ULayout>
    <UPanel :width="120" collapsible>
      <div class="flex flex-col mt-16 h-[60%]">
        <NuxtLink v-for="link in links" :key="link.key" :to="link.to"
          class="w-full h-full flex flex-col justify-center items-center">
          <Icon :name="link.icon" size="26"></Icon>
          <div class="dark:text-gray-200 text-sm font-bold">{{ link.name }}</div>
        </NuxtLink>
      </div>
      <NuxtLink class="pt-12 flex flex-col justify-center items-center" :to="'/'">
        <Icon :name="route.path === '/' ? 'ri:radio-2-fill' : 'ri:radio-2-line'" size="26"></Icon>
        <div class="dark:text-gray-200 text-sm font-bold">{{ '私人漫游' }}</div>
      </NuxtLink>
    </UPanel>
    <UPage class="pb-[--player-height]">
      <UPanel grow>
        <UHeader>
          <div class="grid grid-cols-12 w-full h-full">
            <div class=" hidden col-span-8 md:flex lg:flex items-center justify-end gap-6 ">
              <NuxtLink v-for="link in headLink" :to="link.to"
                class="w-24 flex flex-col justify-center  h-full items-center">
                <div class=" w-[80%] text-center font-bold text-base "
                  :style="{ color: route.path === link.to ? 'red' : 'inherit' }">{{ link.name }}</div>
                <div class=" font-black text-lg relative top-4 border-b-[2px] border-b-red-600 w-[70%]"
                  v-if="route.path === link.to" />
              </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center items-center">
              <div class="relative flex items-center  w-[70%]">
                <input type="text" placeholder="搜索"
                  class="relative block w-full  focus:outline-none border-0 form-input rounded-lg placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-inherit text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1  ps-9">
                <Icon class="absolute flex  pointer-events-none px-4 text-gray-400 dark:text-gray-500" size="20"
                  name="ri:search-line" />
              </div>
            </div>
          </div>
        </UHeader>
        <UPanelContent>
          <slot />
        </UPanelContent>
      </UPanel>
      <MiniPlayer />
      <Player />
    </UPage>

  </ULayout>
</template>
<script setup lang="ts">
const route = useRoute()
const links = computed(() => {
  return [{
    key: 'recommend',
    name: '推荐',
    to: '/',
    icon: route.path === '/' ? 'ri:netease-cloud-music-fill' : 'ri:netease-cloud-music-line',
  }, {
    key: 'mv',
    name: 'MV',
    to: '/mv',
    icon: route.path.startsWith('/mv') ? 'ri:film-fill' : 'ri:film-line',
  }, {
    key: 'my',
    name: '我的',
    to: '/my',
    icon: route.path.startsWith('/my') ? 'ph:music-notes-fill' : 'ph:music-notes-light',
  }, {
    key: 'friends',
    name: '朋友',
    to: '/friends',
    icon: route.path.startsWith('/friends') ? 'mage:users-fill' : 'mage:users',
  }, {
    key: 'account',
    name: '账号',
    to: '/account',
    icon: route.path.startsWith('/account') ? 'ph:user-fill' : 'ph:user',
  }]
})

const headLink = computed(() => {
  return [{
    key: 'recommend',
    name: '推荐',
    to: '/',
  }, {
    key: 'playlist',
    name: '歌单',
    to: '/playlist',
  }, {
    key: 'djprogram',
    name: '电台',
    to: '/djprogram'
  }, {
    key: 'toplist',
    name: '排行榜',
    to: '/toplist'
  }, {
    key: 'topsong',
    name: '新歌',
    to: '/topsong'
  }]
})
</script>