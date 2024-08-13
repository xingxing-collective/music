<template>
  <Transition name="slide-fade">
    <div v-if="playerModeState"
      class="flex inset-0 fixed w-full bg-background overflow-hidden overflow-y-auto lg:z-10 md:z-50 lg:bottom-[--player-height] md:bottom-0">
      <div class="max-w-full m-auto w-full h-full">
        <div class="h-[--header-height] w-full flex items-center px-2">
          <Icon class="hidden md:block lg:hidden text-gray-300 cursor-pointer" name="ri:arrow-down-s-line" size="36"
            @click="playerModeStateToggle()" />
        </div>
        <div class="md:flex w-full md:gap-8 lg:px-24">
          <div class="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
            <img class="w-8 z-20" src="/images/player/play-bar-support.png" />
            <img class="w-24 relative left-12 bottom-3 origin-[0_0] z-10 transition-all"
              :style="{ transform: !playState ? 'rotate(-30deg)' : 'inherit' }" src="/images/player/play-bar.png" />
            <div
              class=" w-72 md:w-[20rem] lg:w-[22rem] flex justify-center items-center rounded-[50%] bg-[rgb(42,42,42)] aspect-square relative bottom-[5.25rem]">
              <div :class="$style.outer" :style="{ animationPlayState: !playState ? 'paused' : 'inherit' }">
                <img class="rounded-[50%] w-[75%] h-[75%]" :src="`${currentSongDetail?.al.picUrl}?param=400y400`"
                  lazy="loaded">
              </div>
            </div>
            <div class="hidden md:flex flex-col lg:hidden md:w-[20rem] gap-2 relative bottom-8">
              <div class="grid grid-cols-5 justify-between items-center">
                <Icon class="cursor-pointer w-full text-[--text-color]"
                  :name="likeState ? 'ic:round-favorite' : 'ic:round-favorite-border'"
                  :style="{ color: likeState ? 'red' : '' }" @click="likeStateToggle()" size="24" />
                <Icon class="cursor-pointer w-full text-[--text-color]" name="ri:download-cloud-line" size="24" />
                <Icon name="uil:comment-dots" class=" cursor-pointer w-full" size="24" />
                <Icon class="cursor-pointer w-full text-[--text-color]"
                  :name="volumeState ? 'ri:volume-up-line' : 'ri:volume-mute-line'" size="24" @click="volumeToggle()" />
                <Icon class=" cursor-pointer w-full text-[--text-color]" name="ri:more-2-fill" size="24" />
              </div>
              <div class="flex items-center text-[11px] dark:text-gray-500 px-4 pt-4 gap-2">
                <span>{{ $dayjs.unix(currentTime).format('mm:ss') }}</span>
                <div class="flex-1"><Progress :percent="percent" @percent-change="onPercentChange" /></div>
                <span>{{ $dayjs.unix(currentSongUrl.time / 1000).format('mm:ss') }}</span>
              </div>
              <div class="grid grid-cols-5 justify-between items-center">
                <Icon class="col-span-1 w-full cursor-pointer text-[--text-color]" :name="playmodeIcon" size="24"
                  @click="() => playmode < 2 ? playmode++ : playmode = 0" />
                <Icon class="col-span-1 w-full cursor-pointer text-[--text-color]" name="mage:previous" size="24"
                  @click="control('prev')" />
                <Icon class="col-span-1 w-full cursor-pointer text-[--text-color]"
                  :name="playState ? 'material-symbols-light:pause-circle-outline-rounded' : 'material-symbols-light:play-circle-outline-rounded'"
                  size="60" @click="playStateToggle()" />
                <Icon class="col-span-1 w-full cursor-pointer text-[--text-color]" name="mage:next" size="24"
                  @click="control('next')" />
                <Icon class="col-span-1 w-full cursor-pointer text-[--text-color]" name="ri:play-list-2-line"
                  size="24" />
              </div>
            </div>
          </div>
          <div class="hidden w-1/2 md:flex lg:flex flex-col flex-1 gap-4 text-[rgb(74,74,74)] dark:text-gray-200">
            <div class="w-[70%] text-center text-2xl font-semibold">{{ currentSongDetail?.name }}
            </div>
            <div class="flex w-[70%] justify-center">
              <div class="text-sm">歌手：</div>
              <div class="text-sm text-[rgb(81,126,175)]">{{ currentSongDetail?.ar.map(x => x.name).join('/') }}</div>
            </div>
            <div class="w-[70%] md:h-[32rem] lg:h-96">
              <Scroller ref="scrollerContainer" :data="currentLyric" :class="[$style.scroller]"
                :options="{ disableTouch: true }">
                <div>
                  <div
                    :class="[currentActiveLyricIndex === index ? 'text-base dark:text-[rgb(220,221,228)] font-bold' : 'text-sm', 'mb-4 text-center']"
                    ref="lyricContainer" :key="index" v-for="(l, index) in  currentLyric ">
                    {{ l.content }}
                  </div>
                </div>
              </Scroller>
            </div>
          </div>
        </div>
        <div class="hidden lg:grid grid-cols-4 gap-6 lg:px-8 lg:pb-20 w-full">
          <Comments class="col-span-3" :id="currentSongId" />
          <div class="col-span-1 flex flex-col gap-4">
            <p class="text-base font-bold">包含这首歌的歌单</p>
            <div class="flex flex-col gap-2">
              <template v-for="playlist in simiPlaylists">
                <Card direction="vertical" :hover="false"
                  :image="{ src: `${playlist.coverImgUrl.replace('http://', 'https://')}`, alt: playlist.description }"
                  :ui="{ image: 'w-12 h-12 max-w-none', container: 'border-none' }">
                  <template #title>
                    <div class="flex flex-col justify-center gap-2 w-full">
                      <p class="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium">{{ playlist.name }}
                      </p>
                      <div class=" flex">
                        <Icon name="ic:baseline-play-arrow" size="16" />
                        <span>{{ playlist.playCount }}</span>
                      </div>
                    </div>
                  </template>
                </Card>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import type { Playlist } from '~/types'

const playerStore = usePlayerStore()
const { playerModeStateToggle, likeStateToggle, control, playStateToggle } = playerStore
const { playerModeState, playState, currentSongDetail, currentLyric, currentSongId, likeState, playmode, playmodeIcon, currentTime, audio, currentSongUrl } = storeToRefs(playerStore)

const volumeStore = useVolumeStore()
const { volumeToggle } = volumeStore
const { volumeState } = storeToRefs(volumeStore)

const lyricStore = useLyricStore()
const { currentActiveLyricIndex } = storeToRefs(lyricStore)

const scrollerContainer = ref()
const lyricContainer = ref()

const percent = computed(() => {
  return Math.min(currentTime.value / currentSongUrl.value?.time * 1000, 1) || 0
})

function onPercentChange(percent: number) {
  audio.value!.currentTime = currentSongUrl.value.time / 1000 * percent
}

watch(currentActiveLyricIndex, (newIndex, oldIndex) => {
  if (
    newIndex !== oldIndex && newIndex !== -1 && playerModeState.value
  ) {
    nextTick(() => {
      scrollerContainer.value?.getScroller().scrollToElement(lyricContainer.value[newIndex], 300, 0, true)
    })
  }
})

const simiPlaylists = shallowRef<Playlist[]>()

watch(currentSongId, async (newVal) => {
  if (newVal) {
    const res = await simi_playlist({ id: newVal })
    simiPlaylists.value = res.playlists
  }
})

</script>
<style scoped module>
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}

.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: linear-gradient(-45deg, #333540, #070708, #333540);
  animation: rotate 20s linear infinite;
}

.scroller {
  mask-image: linear-gradient(180deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.6) 15%,
      #fff 25%,
      #fff 75%,
      hsla(0, 0%, 100%, 0.6) 85%,
      hsla(0, 0%, 100%, 0));
}
</style>