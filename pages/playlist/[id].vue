<template>
  <div class="py-4">
    <div class="h-[--header-height]"></div>
    <div class="flex px-4">
      <div class="flex gap-4 px-4 w-full">
        <img :alt="playlist?.name" :src="playlist?.coverImgUrl" class=" w-52 h-52 rounded-md" />
        <div class="flex flex-col gap-2 flex-1">
          <div class="text-black dark:text-gray-200">{{ playlist?.name }}</div>
          <div class="flex gap-2 items-center">
            <img :src="playlist?.creator.avatarUrl" :alt="playlist?.creator.nickname"
              class="w-8 rounded-[50%] cursor-pointer" />
            <span class="text-sm font-bold text-[rgb(81,126,175)] cursor-pointer">{{ playlist?.creator.nickname
              }}</span>
            <span class="text-sm">{{ $dayjs(playlist?.createTime).format('YYYY-MM-DD') }} 创建</span>
          </div>
          <div class="flex w-full py-2 gap-4 flex-wrap">
            <div class="w-40 grid grid-cols-4  text-white items-center justify-center">
              <div
                class="flex border-r-gray-300 border-r-[0.25px] col-span-3 bg-red-600 rounded-l-full h-full items-center cursor-pointer justify-center hover:bg-red-500">
                <Icon name="i-material-symbols-light:play-circle-outline-rounded" size="22" />
                <div>播放全部</div>
              </div>
              <div
                class="flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-r-full h-full cursor-pointer col-span-1">
                <Icon name="material-symbols-light:add" size="28" />
              </div>
            </div>
            <Button class="w-28" icon="fluent:collections-20-regular">
              <span>收藏({{ formatNumber(0) }})</span>
            </Button>
            <Button class="w-28" icon="fluent:share-20-regular">
              <span>分享</span>
            </Button>
            <Button class="w-28" icon="ic:outline-file-download">
              <span>下载全部</span>
            </Button>
            <div class="flex-1"></div>
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
              <span class="text-gray-200">播放数:</span><span class="pl-2">{{ formatNumber(playlist?.playCount) }}</span>
            </p>
          </div>
          <div class="text-sm flex gap-2" v-if="playlist?.description">
            <span class="text-gray-200">简介:</span>
            <div class="flex-1 line-clamp-1">{{ playlist?.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex pt-4 px-8 h-full w-full">
      
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