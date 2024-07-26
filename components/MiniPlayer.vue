<template>
  <div
    class=" fixed bottom-0 w-full h-[--player-height] left-0 right-0 flex p-[0.5rem_1rem] pr-6 backdrop-blur-md shadow-md bg-inherit bg-opacity-50">
    <div class="grid grid-cols-10 w-full items-center overflow-hidden">
      <div class="col-span-4 flex">
        <template v-if="true">
          <div class="relative mr-2 rounded-md overflow-hidden cursor-pointer w-11 h-11" @click="() => toggle()">
            <div class=" absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,.2)]"></div>
            <img class=" blur-sm w-full h-full" lazy="loaded"
              src="http://p1.music.126.net/PFjUKo1MXRBHIWPrip1jkQ==/109951169808385330.jpg?param=80y80" />
            <div class=" absolute w-full h-full top-0 flex flex-col items-center justify-center cursor-pointer">
              <Icon class=" relative top-[1px]" :name="!value ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'"
                size="22" />
              <Icon class=" relative bottom-[1px]" :name="!value ? 'ri:arrow-down-s-line' : 'ri:arrow-up-s-line'"
                size="22" />
            </div>
          </div>
          <div class="flex flex-col w-full">
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
      <div class="col-span-2 grid grid-cols-3 items-center w-full h-full">
        <div class="col-span-1 flex justify-center">
          <Icon name="ic:round-skip-previous" size="36" class=" text-red-600 " />
        </div>
        <div class="col-span-1 w-full h-full flex flex-1 items-center justify-center">
          <div class=" bg-red-600 rounded-[50%] h-12 w-12 flex items-center justify-center"
            @click="() => pauseToggle()">
            <Icon :name="pause ? 'ic:baseline-pause' : 'ic:baseline-play-arrow'" size="28" class="text-white" />
          </div>
        </div>
        <div class="col-span-1 flex justify-center">
          <Icon name="ic:round-skip-next" size="36" class=" text-red-600" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const [value, toggle] = useToggle()
const [pause, pauseToggle] = useToggle()

</script>