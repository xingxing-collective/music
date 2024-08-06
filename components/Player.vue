<template>
  <Transition name="slide-fade">
    <div v-if="playerModeState"
      class="flex inset-0 z-40 fixed w-full  bg-background lg:bottom-[--player-height] md:bottom-0">
      <div class="max-w-full m-auto w-full h-full">
        <div class="h-[--header-height] w-full"></div>
        <div class="flex w-full">
          <div class="w-1/2 flex flex-col items-center">
            <img class="w-8 z-20" src="/images/player/play-bar-support.png" />
            <img class="w-24 relative left-12 bottom-3 origin-[0_0] z-10 transition-all"
              :style="{ transform: !playState ? 'rotate(-30deg)' : 'inherit' }" src="/images/player/play-bar.png" />
            <div
              class="w-[22rem] flex justify-center items-center rounded-[50%] bg-[rgb(42,42,42)] aspect-square relative bottom-[5.25rem]">
              <div :class="$style.outer" :style="{ animationPlayState: !playState ? 'paused' : 'inherit' }">
                <div class=" rounded-[50%] w-60 h-60">
                  <img class="rounded-[50%] w-full h-full" :src="`${currentSongDetail?.al.picUrl}?param=400y400`"
                    lazy="loaded">
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex flex-col flex-1 gap-4">
            <div class="dark:text-gray-200 text-2xl font-semibold">{{ currentSongDetail?.name }}</div>
            <div class="flex">
              <div class="text-sm text-gray-300">歌手：</div>
              <div class="text-sm text-[rgb(81,126,175)]">{{ currentSongDetail?.ar.map(x => x.name).join('/') }}</div>
            </div>
            <div class="w-[70%] h-96">
              <Scroller ref="scrollerContainer" :data="currentLyric" :class="[$style.scroller]"
                :options="{ disableTouch: true }">
                <div>
                  <div
                    :class="[currentActiveLyricIndex === index ? 'text-sm dark:text-[rgb(220,221,228)] font-bold' : 'text-xs', 'mb-4 text-[rgb(177,177,177)]']"
                    ref="lyricContainer" :key="index" v-for="(l, index) in  currentLyric ">
                    {{ l.content }}
                  </div>
                </div>
              </Scroller>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
const playerStore = usePlayerStore()
const { playerModeState, playState, currentSongDetail, currentLyric } = storeToRefs(playerStore)
const lyricStore = useLyricStore()
const { currentActiveLyricIndex } = storeToRefs(lyricStore)

const scrollerContainer = ref()
const lyricContainer = ref()

watch(currentActiveLyricIndex, (newIndex, oldIndex) => {
  if (
    newIndex !== oldIndex && newIndex !== -1 && playerModeState.value
  ) {
    scrollerContainer.value.getScroller().scrollToElement(lyricContainer.value[newIndex], 300, 0, true)
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
  width: 20.5rem;
  height: 20.5rem;
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