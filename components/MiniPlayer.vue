<template>
  <div
    class="fixed bottom-0 w-full h-[--player-height] left-0 right-0 flex p-[0.5rem_1rem] pr-6 backdrop-blur-md shadow-md bg-inherit bg-opacity-50">
    <div class="hidden md:grid lg:grid grid-cols-5 w-full justify-between items-center overflow-hidden">
      <div class="col-span-2 flex w-full">
        <template v-if="currentSongUrl && currentSongDetail">
          <div class="relative rounded-md overflow-hidden cursor-pointer w-14" @click="() => playerModeStateToggle()">
            <div class=" absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,.2)]"></div>
            <img class="blur-sm w-full h-full" lazy="loaded" :src="`${currentSongDetail?.al.picUrl}?param=80y80`" />
            <div class="absolute w-full h-full top-0 flex flex-col items-center justify-center cursor-pointer">
              <Icon class=" relative top-[1px]" :name="!playerModeState ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'"
                size="22" />
              <Icon class=" relative bottom-[1px]"
                :name="!playerModeState ? 'ri:arrow-down-s-line' : 'ri:arrow-up-s-line'" size="22" />
            </div>
          </div>
          <div class="flex flex-col w-full pl-2">
            <div class="flex h-1/2 items-center gap-[2px]">
              <div class="text-sm">{{ currentSongDetail?.name }}</div>
              <div class="dark:text-gray-400">-</div>
              <div class="text-[0.75rem] dark:text-gray-400">{{ currentSongDetail?.ar.map(x => x.name).join('/') }}
              </div>
            </div>
            <div class="h-1/2 flex items-center text-[11px] dark:text-gray-500">
              <span>{{ $dayjs.unix(currentTime).format('mm:ss') }}</span>
              <span>/</span>
              <span>{{ $dayjs.unix(currentSongUrl.time / 1000).format('mm:ss') }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="col-span-1 w-full flex  justify-center flex-1  gap-6 items-center">
        <Icon name="ic:round-skip-previous" size="36" @click="control('prev')" class=" text-red-600 cursor-pointer" />
        <div class=" bg-red-600 rounded-[50%] h-12 w-12 flex items-center justify-center cursor-pointer"
          @click="playStateToggle()">
          <Icon :name="playState ? 'ic:baseline-pause' : 'ic:baseline-play-arrow'" size="28" class="text-white" />
        </div>
        <Icon name="ic:round-skip-next" @click="control('next')" size="36" class=" text-red-600 cursor-pointer" />
      </div>
      <div class="col-span-2 w-full flex items-center gap-6 lg:gap-8 px-4">
        <div class="flex-1"></div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-gray-300"
            :name="likeState ? 'ic:round-favorite' : 'ic:round-favorite-border'"
            :style="{ color: likeState ? 'red' : '' }" @click="likeStateToggle()" size="24" />
        </div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-gray-300" name="ri:download-cloud-line" size="24" />
        </div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-gray-300" :name="playmodeIcon" size="24"
            @click="() => playmode < 2 ? playmode++ : playmode = 0" />
        </div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-gray-300" name="ri:play-list-2-line" size="24" />
        </div>
        <Volume class="lg:w-40 md:hidden" />
      </div>
      <div class="absolute w-full bottom-12">
        <Progress :percent="percent" @percent-change="onPercentChange" />
      </div>
    </div>

    <div class="md:hidden lg:hidden">

    </div>
    <ClientOnly>
      <audio :loop="playmode === PlayModeType.Single" autoplay ref="audio" :src="currentSongUrl?.url.replace('http','https')"
        @ended="control('next')" @timeupdate="timeupdate" />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { PlayModeType } from '~/types/player'

const playerStore = usePlayerStore()
const volumeStore = useVolumeStore()
const { likeStateToggle, playStateToggle, playerModeStateToggle } = playerStore
const { playState, playerModeState, likeState, playmode, playmodeIcon,
  currentTime,
  currentSongUrl, currentSongDetail, currentSongId,
  nextSongId, nextSongDetail, nextSongUrl,
  prevSongId, prevSongDetail, prevSongUrl,
  playlist, randomPlaylist } = storeToRefs(playerStore)
const { volume } = storeToRefs(volumeStore)

const audio = ref<HTMLAudioElement>()

watch(volume, (newValue) => {
  audio.value!.volume = newValue
})

const percent = computed(() => {
  return Math.min(currentTime.value / currentSongUrl.value?.time * 1000, 1) || 0
})

/**
 * 切换歌曲
 * @param m  上一首或者下一首
 * @param options 
 */
async function control(m: 'next' | 'prev', options: {
  autoplay?: boolean
} = { autoplay: true }) {

  // 第一次加载时并没有获取上一首或者下一首歌曲信息
  if (m === 'next' && nextSongId.value) {
    currentSongId.value = nextSongId.value
    currentSongUrl.value = nextSongUrl.value
    currentSongDetail.value = nextSongDetail.value
  } else if (m === 'prev' && prevSongId.value) {
    currentSongId.value = prevSongId.value
    currentSongUrl.value = prevSongUrl.value
    currentSongDetail.value = prevSongDetail.value
  } else {
    currentSongId.value = await getNextSongId(m)
    const { songUrl, songDetail } = await getSong(currentSongId.value)
    currentSongUrl.value = songUrl
    currentSongDetail.value = songDetail
  }

  if (options.autoplay) {
    if (!playState.value) {
      playState.value = true
    } else {
      await audio.value?.play()
    }
  }
  // 预加载下一首要播放的歌曲
  nextSongId.value = await getNextSongId('next')
  const { songUrl: nextSongUrlData, songDetail: nextSongDetailData } = await getSong(nextSongId.value)
  nextSongDetail.value = nextSongDetailData
  nextSongUrl.value = nextSongUrlData
  prevSongId.value = await getNextSongId('prev')
  const { songUrl: prevSongUrlData, songDetail: prevSongDetailData } = await getSong(prevSongId.value)
  prevSongDetail.value = prevSongDetailData
  prevSongUrl.value = prevSongUrlData
}

/**
 * get the song information
 * @param id song id
 */
async function getSong(id: number) {
  const { data } = await songUrlV1({ id: id, level: SoundQualityType.exhigh, realIP: '116.25.146.177' })
  const { songs } = await song_detail({ ids: id.toString(), realIP: '116.25.146.177' })
  return {
    songUrl: data[0],
    songDetail: songs[0]
  }
}

function getNextSongId(m: 'next' | 'prev') {
  let nextIndex = 0
  const currentPlaylist = playmode.value === PlayModeType.Random ? [...randomPlaylist.value] : [...playlist.value]
  const index = currentPlaylist.indexOf(currentSongUrl.value?.id)
  if (m === 'next') {
    if (index !== -1 && index === currentPlaylist.length - 1)
      nextIndex = 0
    else
      nextIndex = index + 1
  } else {
    if (index !== -1 && index === 0) {
      nextIndex = currentPlaylist.length - 1
    } else {
      nextIndex = index - 1
    }
  }
  if (currentPlaylist.length === 0) {
    throw new Error('暂无歌曲')
  }
  return currentPlaylist[nextIndex]
}

function onPercentChange(percent: number) {
  audio.value!.currentTime = currentSongUrl.value.time / 1000 * percent
}

function timeupdate(e: Event) {
  currentTime.value = (e.target as AudioContext).currentTime
}


watch(playState, async (newVal) => {
  if (newVal) {
    await audio.value?.play()
  } else {
    audio.value?.pause()
  }
})

onMounted(async () => {
  await control('next', { autoplay: false })
})

</script>