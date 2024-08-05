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
              <Scroller ref="scrollerContainer" :data="lyricData" :class="[$style.scroller]"
                :options="{ disableTouch: true }" @init="onScrollerInit">
                <div>
                  <div
                    :class="[activeLyricIndex === index ? 'text-sm dark:text-[rgb(220,221,228)] font-bold' : 'text-xs', 'mb-4 text-[rgb(177,177,177)]']"
                    ref="lyricContainer" :key="index" v-for="(l, index) in  lyricWithTranslation ">
                    <p :key="contentIndex" class="lyric-text" v-for="( content, contentIndex ) in  l.contents ">{{
      content }}
                    </p>
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
import type { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'

const playerStore = usePlayerStore()
const { playerModeState, playState, currentSongDetail } = storeToRefs(playerStore)
const lyricStore = useLyricStore()
const { lyricWithTranslation, activeLyricIndex, lyricData } = storeToRefs(lyricStore)

const scrollerContainer = ref()
const lyricContainer = ref()

const WHEEL_TYPE = "wheel"
const SCROLL_TYPE = "scroll"
// 恢复自动滚动的定时器时间
const AUTO_SCROLL_RECOVER_TIME = 1000

const lyricScrolling = ref({
  [WHEEL_TYPE]: false,
  [SCROLL_TYPE]: false
})
const lyricTimer = ref<Record<typeof WHEEL_TYPE | typeof SCROLL_TYPE, NodeJS.Timeout | null>>({
  [WHEEL_TYPE]: null,
  [SCROLL_TYPE]: null
})

function scrollToActiveLyric() {
  if (activeLyricIndex.value !== -1) {
    if (lyricContainer.value?.[activeLyricIndex.value]) {
      scrollerContainer.value
        .getScroller()
        .scrollToElement(lyricContainer.value[activeLyricIndex.value], 200, 0, true)
    }
  }
}

function clearTimer(type: typeof WHEEL_TYPE | typeof SCROLL_TYPE) {
  lyricTimer.value[type] && clearTimeout(lyricTimer.value[type])
}
function onScrollerInit(scroller: BScrollConstructor) {
  const onScrollStart = (type: typeof WHEEL_TYPE | typeof SCROLL_TYPE) => {
    clearTimer(type)
    lyricScrolling.value[type] = true
  }
  const onScrollEnd = (type: typeof WHEEL_TYPE | typeof SCROLL_TYPE) => {
    // 滚动结束后两秒 歌词开始自动滚动
    clearTimer(type)
    lyricTimer.value[type] = setTimeout(() => {
      lyricScrolling.value[type] = false
    }, AUTO_SCROLL_RECOVER_TIME)
  }
  scroller.on("scrollStart", onScrollStart.bind(null, SCROLL_TYPE))
  scroller.on("mousewheelStart", onScrollStart.bind(null, WHEEL_TYPE))

  scroller.on("scrollEnd", onScrollEnd.bind(null, SCROLL_TYPE))
  scroller.on("mousewheelEnd", onScrollEnd.bind(null, WHEEL_TYPE))
}

watch(activeLyricIndex, (newIndex, oldIndex) => {
  if (
    newIndex !== oldIndex &&
    !lyricScrolling.value[WHEEL_TYPE] &&
    !lyricScrolling.value[SCROLL_TYPE]
  ) {
    scrollToActiveLyric()
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