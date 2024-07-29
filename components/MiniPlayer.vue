<template>
  <div
    class=" fixed bottom-0 w-full h-[--player-height] left-0 right-0 flex p-[0.5rem_1rem] pr-6 backdrop-blur-md shadow-md bg-inherit bg-opacity-50">
    <div class="flex w-full justify-between items-center overflow-hidden">
      <div class="flex w-52">
        <template v-if="true">
          <div class="relative rounded-md overflow-hidden cursor-pointer w-14" @click="() => toggle()">
            <div class=" absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,.2)]"></div>
            <img class="blur-sm w-full h-full" lazy="loaded"
              src="http://p1.music.126.net/PFjUKo1MXRBHIWPrip1jkQ==/109951169808385330.jpg?param=80y80" />
            <div class=" absolute w-full h-full top-0 flex flex-col items-center justify-center cursor-pointer">
              <Icon class=" relative top-[1px]" :name="!value ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'"
                size="22" />
              <Icon class=" relative bottom-[1px]" :name="!value ? 'ri:arrow-down-s-line' : 'ri:arrow-up-s-line'"
                size="22" />
            </div>
          </div>
          <div class="flex flex-col w-full pl-2">
            <div class="flex h-1/2 items-center">
              <div class="text-sm">悬溺</div>
              <div class="dark:text-gray-400">-</div>
              <div class="text-[12px] dark:text-gray-400">葛东琪</div>
            </div>
            <div class="h-1/2 flex items-center text-[11px] dark:text-gray-500">
              <span>0:00</span>
              <span>/</span>
              <span>0:00</span>
            </div>
          </div>
        </template>
      </div>
      <div class="flex  justify-center flex-1  gap-6 items-center">
        <Icon name="ic:round-skip-previous" size="36" class=" text-red-600 " />
        <div class=" bg-red-600 rounded-[50%] h-12 w-12 flex items-center justify-center" @click="() => pauseToggle()">
          <Icon :name="pause ? 'ic:baseline-pause' : 'ic:baseline-play-arrow'" size="28" class="text-white" />
        </div>
        <Icon name="ic:round-skip-next" size="36" class=" text-red-600" />
      </div>
      <div class="flex items-center gap-8 px-4">
        <div class="flex-1"></div>
        <Icon class="cursor-pointer text-gray-300" :name="like ? 'ic:round-favorite' : 'ic:round-favorite-border'"
          :style="{ color: like ? 'red' : '' }" @click="() => likeToggle()" size="24" />
        <Icon class="cursor-pointer text-gray-300" name="ri:download-cloud-line" size="24" />
        <Icon class="cursor-pointer text-gray-300" :name="modeIcon" size="24"
          @click="() => mode < 2 ? mode++ : mode = 0" />
        <Icon class="cursor-pointer text-gray-300" name="ri:play-list-2-line" size="24" />
        <div class="w-40">
          <Volume :volume="volume" @volumeChange="onVolumeChange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PlayModeType } from '~/types/player'

const [value, toggle] = useToggle()
const [pause, pauseToggle] = useToggle()
const [like, likeToggle] = useToggle()

const mode = ref<PlayModeType>(PlayModeType.Order)
const modeIcon = computed(() => {
  switch (mode.value) {
    case PlayModeType.Order:
      return 'ic:outline-repeat'
    case PlayModeType.Random:
      return 'ic:outline-shuffle'
    case PlayModeType.Single:
      return 'ic:outline-repeat-one'
  }
})

const DEFAULT_VOLUME = 0.75
const volume = ref(DEFAULT_VOLUME)

function onProgressChange(percent: number) {
  console.log("onProgressChange", percent)
}
function onVolumeChange(percent: number) {
  console.log("onVolumeChange", percent)
}

</script>