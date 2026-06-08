<template>
  <ULayout>
    <UPanel :width="160" class="md:w-28">
      <div class="hidden lg:flex md:hidden pl-4 flex-col gap-3 mt-16 h-[60%]">
        <NuxtLink
          v-for="link in lglinks"
          :key="link.key"
          :to="link.to"
          :class="[
            'w-full flex gap-2 items-center',
            [$route.path === link?.to ? 'text-red-600' : 'dark:text-gray-200'],
          ]"
        >
          <Icon :name="link.icon" size="24" :class="[]"></Icon>
          <div class="text-sm font-bold">{{ link.name }}</div>
        </NuxtLink>
      </div>
      <div class="hidden lg:hidden md:flex flex-col mt-16 h-[60%]">
        <NuxtLink
          v-for="link in mdlinks"
          :key="link.key"
          :to="link.to"
          class="w-full h-full flex flex-col justify-center items-center"
        >
          <Icon :name="link.icon" size="26"></Icon>
          <div class="dark:text-gray-200 text-sm font-bold">{{ link.name }}</div>
        </NuxtLink>
      </div>
      <NuxtLink
        class="hidden lg:hidden pt-12 md:flex flex-col justify-center items-center"
        :to="'/'"
      >
        <Icon :name="route.path === '/' ? 'ri:radio-2-fill' : 'ri:radio-2-line'" size="26"></Icon>
        <div class="dark:text-gray-200 text-sm font-bold">{{ '私人漫游' }}</div>
      </NuxtLink>
    </UPanel>
    <UPage class="pb-[--player-height]">
      <UPanel grow>
        <UPanelContent>
          <slot />
        </UPanelContent>
      </UPanel>
    </UPage>
    <MiniPlayer />
    <Player />
    <CurrentlyPlaying />
    <audio
      :loop="playmode === PlayModeType.Single"
      ref="audio"
      @loadedmetadata="playState ? audio?.play() : undefined"
      :src="currentSongUrl?.url.replace('http://', 'https://')"
      @ended="control('next')"
      @timeupdate="timeupdate"
    />
  </ULayout>
</template>
<script setup lang="ts">
import { PlayModeType } from '~/types/player';

const playerStore = usePlayerStore();
const { control } = playerStore;
const { audio, playmode, currentTime, playState, currentSongUrl } = storeToRefs(playerStore);

function timeupdate(e: Event) {
  currentTime.value = (e.target as AudioContext).currentTime;
}

const route = useRoute();
const mdlinks = computed(() => [
  {
    icon: route.path === '/' ? 'ri:netease-cloud-music-fill' : 'ri:netease-cloud-music-line',
    key: 'recommend',
    name: '推荐',
    to: '/',
  },
  {
    icon: route.path.startsWith('/mv') ? 'ri:film-fill' : 'ri:film-line',
    key: 'mv',
    name: 'MV',
  },
  {
    icon: route.path.startsWith('/my') ? 'ph:music-notes-fill' : 'ph:music-notes-light',
    key: 'my',
    name: '我的',
  },
  {
    icon: route.path.startsWith('/friends') ? 'mage:users-fill' : 'mage:users',
    key: 'friends',
    name: '朋友',
  },
  {
    icon: route.path.startsWith('/account') ? 'ph:user-fill' : 'ph:user',
    key: 'account',
    name: '账号',
  },
]);

const lglinks = computed(() => [
  {
    icon: 'ri:netease-cloud-music-line',
    key: 'recommend',
    name: '发现音乐',
    to: '/',
  },
  {
    icon: 'ri:broadcast-line',
    key: '',
    name: '播客',
  },
  {
    icon: 'ph:music-notes-light',
    key: '',
    name: '私人漫游',
  },
  {
    icon: 'ri:movie-line',
    key: 'mv',
    name: '视频',
    to: '/mv',
  },
  {
    icon: 'ph:user',
    key: '',
    name: '关注',
  },
]);
</script>
