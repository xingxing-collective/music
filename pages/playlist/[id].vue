<template>
  <div class="py-4">
    <div class="h-[--header-height]"></div>
    <div class="flex px-4">
      <div class="flex gap-4 px-4">
        <img :alt="playlist?.name" :src="playlist?.coverImgUrl" class=" w-48 rounded-md" />
        <div class="flex flex-col gap-4">
          <div class="text-black dark:text-gray-200">{{ playlist?.name }}</div>
          <div class="flex gap-2 items-center">
            <img :src="playlist?.creator.avatarUrl" :alt="playlist?.creator.nickname" class="w-8 rounded-[50%] cursor-pointer" />
            <span class="text-sm font-bold text-[rgb(81,126,175)] cursor-pointer">{{ playlist?.creator.nickname
              }}</span>
            <span class="text-sm">{{ playlist?.createTime }} 创建</span>
          </div>
          <div class="text-sm">
            <span class="text-gray-200">标签:</span>
            <span
              v-html="playlist?.tags.map(x => `<span class='px-2 text-[rgb(81,126,175)] cursor-pointer' >${x}</span>`).join('/')"></span>
          </div>
          <div class="text-sm flex gap-6">
            <p>
              <span class="text-gray-200">歌曲数:</span><span class="pl-2">{{ playlist?.trackCount }}</span>
            </p>
            <p>
              <span class="text-gray-200">播放数:</span><span class="pl-2">{{ playlist?.playCount }}</span>
            </p>
          </div>
          <div class="text-sm flex gap-2">
            <span class="text-gray-200">简介:</span>
            <div>{{ playlist?.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Playlist } from '~/types'

const route = useRoute()
const playlist = shallowRef<Playlist>()

onMounted(async () => {
  const res = await playlist_detail({
    id: route.params.id as string
  })
  playlist.value = res.playlist
})
</script>