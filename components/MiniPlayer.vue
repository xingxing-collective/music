<template>
  <div
    class="fixed bottom-0 w-full h-[--player-height] left-0 right-0 flex p-[0.5rem_1rem] pr-6 backdrop-blur-md shadow-md bg-inherit bg-opacity-50">
    <div class="grid grid-cols-5 w-full justify-between items-center overflow-hidden">
      <div class="col-span-2 flex w-full">
        <template v-if="true">
          <div class="relative rounded-md overflow-hidden cursor-pointer w-14" @click="() => playerModeStateToggle()">
            <div class=" absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,.2)]"></div>
            <img class="blur-sm w-full h-full" lazy="loaded"
              src="https://p1.music.126.net/2nH8yxLpYttZ2nqHsY0zhg==/109951168272219850.jpg?param=80y80" />
            <div class="absolute w-full h-full top-0 flex flex-col items-center justify-center cursor-pointer">
              <Icon class=" relative top-[1px]" :name="!playerModeState ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'"
                size="22" />
              <Icon class=" relative bottom-[1px]"
                :name="!playerModeState ? 'ri:arrow-down-s-line' : 'ri:arrow-up-s-line'" size="22" />
            </div>
          </div>
          <div class="flex flex-col w-full pl-2">
            <div class="flex h-1/2 items-center gap-[2px]">
              <div class="text-sm">整个冬天都是你</div>
              <div class="dark:text-gray-400">-</div>
              <div class="text-[0.75rem] dark:text-gray-400">陈奕楠/knowme/艾纳德</div>
            </div>
            <div class="h-1/2 flex items-center text-[11px] dark:text-gray-500">
              <span>0:00</span>
              <span>/</span>
              <span>0:00</span>
            </div>
          </div>
        </template>
      </div>
      <div class="col-span-1 w-full flex  justify-center flex-1  gap-6 items-center">
        <Icon name="ic:round-skip-previous" size="36" class=" text-red-600 " />
        <div class=" bg-red-600 rounded-[50%] h-12 w-12 flex items-center justify-center"
          @click="() => playStateToggle()">
          <Icon :name="playState ? 'ic:baseline-pause' : 'ic:baseline-play-arrow'" size="28" class="text-white" />
        </div>
        <Icon name="ic:round-skip-next" size="36" class=" text-red-600" />
      </div>
      <div class="col-span-2 w-full flex items-center gap-6 lg:gap-8 px-4">
        <div class="flex-1"></div>
        <div class="flex  h-full items-center gap-4">
          <Icon class="cursor-pointer text-gray-300"
            :name="likeState ? 'ic:round-favorite' : 'ic:round-favorite-border'"
            :style="{ color: likeState ? 'red' : '' }" @click="() => likeStateToggle()" size="24" />
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
        <Volume class="lg:w-40" />
      </div>
    </div>
    <div class="absolute w-full bottom-12">
      <Progress :percent="0.5" />
    </div>
    <audio ref="audio" :src="currentSong.url" />
  </div>
</template>
<script setup lang="ts">
const player = usePlayerStore()
const { likeStateToggle, playStateToggle, playerModeStateToggle } = player
const { playState, playerModeState, likeState, playmode, playmodeIcon } = storeToRefs(player)

const { data: [currentSong] } = await songUrlV1({ id: 2018096932, level: SoundQualityType.exhigh })

const audio = ref<HTMLAudioElement>()

watch(playState, (newVal) => {
  if (newVal) {
    audio.value?.play()
  } else {
    audio.value?.pause()
  }
})

onMounted(() => {

})
</script>