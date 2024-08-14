<template>
  <div class="fixed bottom-[--player-height] flex flex-col top-0 py-4 overflow-x-hidden overflow-y-auto">
    <div class="h-[--header-height]"></div>
    <div class="flex px-4">
      <div class="flex gap-4 px-4 w-full">
        <img :alt="playlistDetail?.name" :src="playlistDetail?.coverImgUrl" class=" w-52 h-52 rounded-md" />
        <div class="flex flex-col gap-2 flex-1">
          <div class="text-black dark:text-gray-200">{{ playlistDetail?.name }}</div>
          <div class="flex gap-2 items-center">
            <img :src="playlistDetail?.creator.avatarUrl" :alt="playlistDetail?.creator.nickname"
              class="w-8 rounded-[50%] cursor-pointer" />
            <span class="text-sm font-bold text-[rgb(81,126,175)] cursor-pointer">{{ playlistDetail?.creator.nickname
              }}</span>
            <span class="text-sm">{{ $dayjs(playlistDetail?.createTime).format('YYYY-MM-DD') }} 创建</span>
          </div>
          <div class="flex w-full py-2 gap-4 flex-wrap">
            <div class="w-40 grid grid-cols-4  text-white items-center justify-center">
              <button @click="playAll"
                class="flex border-r-slate-100 border-r-[0.5px] col-span-3 bg-red-600 rounded-l-full h-full items-center cursor-pointer justify-center hover:bg-red-500">
                <Icon name="i-material-symbols-light:play-circle-outline-rounded" size="22" />
                <span>播放全部</span>
              </button>
              <button @click="addSongs"
                class="flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-r-full h-full cursor-pointer col-span-1">
                <Icon name="material-symbols-light:add" size="28" />
              </button>
            </div>
            <UButton class="w-28" icon="fluent:collections-20-regular">
              <span>收藏({{ formatNumber(0) }})</span>
            </UButton>
            <UButton class="w-28" icon="fluent:share-20-regular">
              <span>分享</span>
            </UButton>
            <UButton class="w-28" icon="ic:outline-file-download">
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
    <UTabs class=" flex-1 pt-4 px-8 w-full h-full" v-model="active" :panes="panes">
      <template #songs>
        <div>
          <div class="grid grid-cols-12 h-8 gap-2 items-center text-xs font-semibold">
            <div class="col-span-2"></div>
            <div class="col-span-3 h-full flex pl-1 items-center hover:bg-neutral-700">音乐标题</div>
            <div class="col-span-3 h-full flex pl-1 items-center hover:bg-neutral-700">歌手</div>
            <div class="col-span-3 h-full flex pl-1 items-center hover:bg-neutral-700">专辑</div>
            <div class="col-span-1 h-full flex pl-1 items-center hover:bg-neutral-700">时长</div>
          </div>
          <div v-for="track in playlistDetail?.tracks"
            class="grid grid-cols-12 gap-2 even:bg-neutral-800 h-8 items-center text-sm  font-medium hover:bg-neutral-700">
            <div class="col-span-2"></div>
            <div class="col-span-3 h-full flex pl-1 items-center ">
              <span class="overflow-hidden whitespace-nowrap text-ellipsis">{{ track.name }}</span>
            </div>
            <div class="col-span-3 h-full flex pl-1 items-center w-full"><span
                class="overflow-hidden whitespace-nowrap text-ellipsis">{{ track.ar.map(x => x.name).join('/')
                }}</span>
            </div>
            <div class="col-span-3 h-full flex pl-1 items-center">
              <span class="overflow-hidden whitespace-nowrap text-ellipsis">{{ track.al.name }}</span>
            </div>
            <div class="col-span-1 h-full flex pl-1 items-center">
              <span>{{ $dayjs.unix(track.dt / 1000).format('mm:ss') }}</span>
            </div>
          </div>
        </div>
      </template>
      <template #comment>
        comment
      </template>
      <template #collectors>
        collectors
      </template>
    </UTabs>
  </div>
</template>
<script setup lang="ts">
import type { Playlist } from '~/types'

const playerStore = usePlayerStore()
const { getSong } = playerStore
const { playlist, currentSongId, playState, currentSongUrl, currentSongDetail, currentLyric } = storeToRefs(playerStore)
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

function addSongs() {
  if (playlistDetail.value?.trackIds)
    playlist.value.push(...playlistDetail.value.trackIds.map(x => x.id))
}

async function playAll() {
  if (playlistDetail.value?.trackIds) {
    playlist.value = [...playlistDetail.value.trackIds.map(x => x.id)]
    currentSongId.value = playlist.value[0]
    const { songUrl, songDetail, lrc } = await getSong(currentSongId.value)
    currentSongUrl.value = songUrl
    currentSongDetail.value = songDetail
    currentLyric.value = parseLyric(lrc.lyric)
    playState.value = true
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