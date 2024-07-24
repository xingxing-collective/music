<template>
  <ULayout>
    <UPanel :width="120" collapsible>
      <div class="flex flex-1 flex-col gap-12 my-16">
        <NuxtLink v-for="link in links" :key="link.key" :to="link.to"
          class="w-full h-full flex flex-col justify-center items-center">
          <Icon :name="link.icon" size="26"></Icon>
          <div>{{ link.name }}</div>
        </NuxtLink>
      </div>
    </UPanel>
    <UPage>
      <UPanel grow>
        <UHeader>

        </UHeader>
        <UPanelContent>
          <slot />
        </UPanelContent>
      </UPanel>
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
</script>