<template>
  <div
    class="fixed bottom-0 z-20 w-full h-[--player-height] left-0 right-0 flex p-[0.5rem_1rem] pr-6 backdrop-blur-md shadow-md md:bg-background dark:lg:bg-[rgb(37,37,37)] bg-opacity-50">
    <div class="hidden md:grid lg:grid grid-cols-5 w-full justify-between items-center overflow-hidden">
      <div class="col-span-2 flex w-full">
        <template v-if="currentSongUrl && currentSongDetail">
          <div class="relative rounded-md overflow-hidden cursor-pointer w-14" @click="playerModeStateToggle()">
            <div class=" absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,.2)]"></div>
            <NuxtImg class="blur-sm w-full h-full" lazy="loaded" :src="`${currentSongDetail?.al.picUrl}?param=80y80`" />
            <div class="absolute w-full h-full top-0 flex flex-col items-center justify-center cursor-pointer">
              <Icon class=" relative text-gray-100 top-[1px]"
                :name="!playerModeState ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'" size="22" />
              <Icon class="relative bottom-[1px] text-gray-100"
                :name="!playerModeState ? 'ri:arrow-down-s-line' : 'ri:arrow-up-s-line'" size="22" />
            </div>
          </div>
          <div class="flex flex-col w-full pl-2">
            <div class="flex h-1/2 items-center gap-[2px]">
              <div class="text-sm">{{ currentSongDetail?.name }}</div>
              <div class="text-[--text-color]">-</div>
              <div class="text-[0.75rem] text-[--text-color]">{{ currentSongDetail?.ar.map(x => x.name).join('/') }}
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
          <Icon class="cursor-pointer text-[--text-color]"
            :name="likeState ? 'ic:round-favorite' : 'ic:round-favorite-border'"
            :style="{ color: likeState ? 'red' : '' }" @click="likeStateToggle()" size="24" />
        </div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-[--text-color]" name="ri:download-cloud-line" size="24" />
        </div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-[--text-color]" :name="playmodeIcon" size="24"
            @click="() => playmode < 2 ? playmode++ : playmode = 0" />
        </div>
        <div @click="isPlaylistOpen = !isPlaylistOpen" class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-[--text-color]" name="ri:play-list-2-line" size="24" />
        </div>
        <Volume class="lg:w-40 md:hidden" />
      </div>
    </div>
    <div class="fixed w-full bottom-12">
      <UProgress :percent="percent" @percent-change="onPercentChange" />
    </div>
  </div>
</template>
<script setup lang="ts">

const playerStore = usePlayerStore()
const volumeStore = useVolumeStore()
const slideoverStore = useSlideoverStore()
const { likeStateToggle, playStateToggle, playerModeStateToggle, control } = playerStore
const { audio, playState, playerModeState, likeState, playmode, playmodeIcon,
  currentTime,
  currentSongUrl, currentSongDetail } = storeToRefs(playerStore)
const { volume } = storeToRefs(volumeStore)
const { isPlaylistOpen } = storeToRefs(slideoverStore)

watch(volume, (newValue) => {
  audio.value!.volume = newValue
})

const percent = computed(() => {
  return Math.min(currentTime.value / currentSongUrl.value?.time * 1000, 1) || 0
})

function onPercentChange(percent: number) {
  audio.value!.currentTime = currentSongUrl.value.time / 1000 * percent
}

</script>