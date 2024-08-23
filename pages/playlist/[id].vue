<template>
  <div class="flex flex-col top-0 py-4 overflow-x-hidden overflow-y-auto w-full">
    <div class="h-[--header-height]"></div>
    <div class="flex px-4">
      <div class="flex gap-4 px-4 w-full">
        <NuxtImg :placeholder="(playlistDetail?.coverImgUrl) ? false : $config.public.image.placeholder"
          :alt="playlistDetail?.name" :src="playlistDetail?.coverImgUrl" class="w-48 h-48 rounded-md" />
        <div class="flex flex-col gap-2 flex-1">
          <div class="text-black dark:text-gray-200">{{ playlistDetail?.name }}</div>
          <div class="flex gap-2 items-center">
            <NuxtImg :placeholder="(playlistDetail?.creator.avatarUrl) ? false : $config.public.image.placeholder" :src="playlistDetail?.creator.avatarUrl" :alt="playlistDetail?.creator.nickname"
              class="w-8 rounded-[50%] cursor-pointer" />
            <span class="text-sm font-bold text-[rgb(81,126,175)] cursor-pointer">{{ playlistDetail?.creator.nickname
              }}</span>
            <span class="text-sm">{{ $dayjs(playlistDetail?.createTime).format('YYYY-MM-DD') }} 创建</span>
          </div>
          <div class="flex w-full py-1 gap-4 flex-wrap">
            <div class="w-40 grid grid-cols-4  text-white items-center justify-center">
              <button @click="playAll"
                class="flex border-r-slate-100 border-r-[0.5px] col-span-3 bg-red-600 rounded-l-full h-full items-center cursor-pointer justify-center hover:bg-red-500">
                <Icon name="i-material-symbols-light:play-circle-outline-rounded" size="22" />
                <span>播放全部</span>
              </button>
              <button @click="addAllSongs"
                class="flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-r-full h-full cursor-pointer col-span-1">
                <Icon name="material-symbols-light:add" size="28" />
              </button>
            </div>
            <UButton class="min-w-32" icon="fluent:collections-20-regular">
              <span>收藏({{ formatNumber(playlistDetail?.subscribedCount) }})</span>
            </UButton>
            <UButton class="min-w-32" icon="fluent:share-20-regular">
              <span>分享({{ playlistDetail?.shareCount }})</span>
            </UButton>
            <UButton class="min-w-32" icon="ic:outline-file-download">
              <span>下载全部</span>
            </UButton>
            <div class="flex-1"></div>
          </div>
          <div class="text-sm">
            <span class="text-gray-200">标签:</span>
            <span
              v-html="playlistDetail?.tags.map(x => `<span class='px-2 text-[rgb(81,126,175)] cursor-pointer' >${x}</span>`).join('/')"></span>
          </div>
          <div class="text-sm flex gap-6">
            <p>
              <span class="text-gray-200">歌曲数:</span><span class="pl-2">{{ playlistDetail?.trackCount }}</span>
            </p>
            <p>
              <span class="text-gray-200">播放数:</span><span class="pl-2">{{ formatNumber(playlistDetail?.playCount)
                }}</span>
            </p>
          </div>
          <div class="text-sm flex gap-2" v-if="playlistDetail?.description">
            <span class="text-gray-200">简介:</span>
            <div class="flex-1 line-clamp-1">{{ playlistDetail?.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <UTabs class=" pt-4 px-8 w-full h-full" v-model="active" :panes="panes">
      <template #songs>
        <div class="grid grid-cols-[repeat(24,1fr)] h-8 gap-2 items-center text-xs font-semibold">
          <div class="hidden lg:block lg:col-span-3"></div>
          <div class="col-span-7 h-full flex items-center hover:bg-neutral-700 pl-2"><span>音乐标题</span></div>
          <div class="col-span-6 h-full flex pl-1 items-center hover:bg-neutral-700"><span>歌手</span></div>
          <div class="col-span-5 h-full flex pl-1 items-center hover:bg-neutral-700"><span>专辑</span></div>
          <div class="col-span-3 h-full flex pl-1 items-center hover:bg-neutral-700"><span>时长</span></div>
        </div>
        <div v-for="(track, index) in playlistDetail?.tracks" @dblclick="playSong(track.id)"
          class="grid grid-cols-[repeat(24,1fr)] gap-2 even:bg-neutral-800 h-8 items-center text-sm  font-medium hover:bg-neutral-700 hover:cursor-pointer">
          <div class="hidden lg:col-span-3 lg:flex justify-center items-center gap-4">
            <div>{{ (index + 1).toString().padStart(2, '0') }}</div>
            <div class=" flex gap-2">
              <Icon class="cursor-pointer text-[--text-color]" :name="'ic:round-favorite-border'" size="20" />
              <Icon class="cursor-pointer text-[--text-color]" name="ri:download-cloud-line" size="20" />
            </div>
          </div>
          <div class="col-span-7 h-full flex pl-2 items-center">
            <span class="overflow-hidden whitespace-nowrap text-ellipsis">{{ track.name }}</span>
          </div>
          <div class="col-span-6 h-full flex pl-1 items-center w-full"><span
              class="overflow-hidden whitespace-nowrap text-ellipsis">{{ track.ar.map(x => x.name).join('/')
              }}</span>
          </div>
          <div class="col-span-5 h-full flex pl-1 items-center">
            <span class="overflow-hidden whitespace-nowrap text-ellipsis">{{ track.al.name }}</span>
          </div>
          <div class="col-span-3 h-full flex pl-1 items-center">
            <span>{{ $dayjs.unix(track.dt / 1000).format('mm:ss') }}</span>
          </div>
        </div>
      </template>
      <template #comment>
        <Comments :type="CommentType.playlist" :id="playlistDetail?.id" />
      </template>
      <template #collectors>
        <Subscribers :id="playlistDetail?.id" />
      </template>
    </UTabs>
  </div>
</template>
<script setup lang="ts">
import type { Playlist } from '~/composables/NeteaseCloudMusic.ts'

const playerStore = usePlayerStore()
const { replacePlaylist, addSongs, playSong } = playerStore
const route = useRoute()
const playlistDetail = shallowRef<Playlist>()

const panes = computed(() => {
  return [{
    key: 'songs',
    label: '歌曲列表'
  }, {
    key: 'comment',
    label: `评论(${playlistDetail.value?.commentCount || 0})`
  }, {
    key: 'collectors',
    label: '收藏者'
  }]
})
const active = ref('songs')

function addAllSongs() {
  if (playlistDetail.value?.trackIds)
    addSongs([...playlistDetail.value.trackIds.map(x => x.id)])
}

async function playAll() {
  if (playlistDetail.value?.trackIds) {
    replacePlaylist([...playlistDetail.value.trackIds.map(x => x.id)])
  }
}
async function initialize() {
  const res = await playlist_detail({
    id: route.params.id as string
  })
  playlistDetail.value = res.playlist
  useHead({
    title: playlistDetail.value?.name,
    meta: [
      { name: 'description', content: playlistDetail.value?.description },
      { property: 'og:title', content: playlistDetail.value?.name },
      { property: 'og:description', content: playlistDetail.value?.description },
      { property: 'og:image', content: playlistDetail.value?.coverImgUrl }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
    ]
  })
}

onMounted(async () => {
  await initialize()
})
</script>