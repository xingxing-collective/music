<template>
  <div class="px-4 py-4">
    <div ref="container">
      <Carousel3d style="margin: 0;" ref="carousel3d" @before-slide-change="onBeforeSlideChange"
        class=" hidden lg:block md:block" :perspective="0" :autoplay="true" :inverseScaling="inverseScaling"
        :width="width" :height="height" :border="0" :loop="true" :space="space" :display="3">
        <Slide v-for="(banner, i) in banners.filter(x => !Boolean(x.adSource))" :key="banner.targetId" :index="i">
          <img class="object-fill w-full h-full" :src="banner.imageUrl" :alt="banner.typeTitle" />
        </Slide>
      </Carousel3d>
      <div class=" w-full  items-center md:gap-4 lg:gap-6 justify-center font-black text-3xl hidden lg:flex md:flex">
        <div v-for="i in banners.filter(x => !Boolean(x.adSource)).length" :key="i"
          :style="{ color: index == i ? 'red' : 'inherit' }">.</div>
      </div>
    </div>
    <div>
      <div class="pt-4 flex items-center">
        <div class="font-black">推荐歌单</div>
        <div class="flex-1"></div>
        <div class=" dark:text-gray-300 text-sm flex justify-center items-center cursor-pointer">
          <div>更多</div>
          <Icon size="18" name="ri:arrow-right-s-line" />
        </div>
      </div>
      <div class=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2">
        <div class="flex flex-col w-full cursor-pointer">
          <div
            class="p-2 w-full aspect-square border-[0.5px] border-gray-500 dark:border-gray-800 flex justify-center items-center">
            <div class=" text-[6rem] font-light text-red-600">{{ new Date().getDate() }}</div>
          </div>
          <div class="text-sm md:text-sm lg:text-xs pt-1 dark:text-gray-200 max-w-full overflow-hidden line-clamp-2">
            每日歌曲推荐
          </div>
        </div>
        <div v-for="r in recommend" class="flex flex-col w-full cursor-pointer" :key="r.id">
          <img :src="r.picUrl" class="  w-full aspect-square  object-fill" :alt="r.name">
          <div
            class="text-sm md:text-sm lg:text-xs pt-1 px-2 dark:text-gray-200 max-w-full overflow-hidden line-clamp-2"
            :title="r.name">{{ r.name }}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="pt-4 flex items-center">
        <div class="font-black">独家放送</div>
        <div class="flex-1"></div>
        <div class=" dark:text-gray-300 text-sm flex justify-center items-center cursor-pointer">
          <div>更多</div>
          <Icon size="18" name="ri:arrow-right-s-line" />
        </div>
      </div>
      <div class=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-2">
        <div v-for="r in result" class="flex flex-col w-full cursor-pointer" :key="r.id">
          <img :src="r.sPicUrl" class=" aspect-video w-full  object-fill" :alt="r.name">
          <div
            class="text-sm md:text-sm lg:text-xs pt-1 px-2 dark:text-gray-200 max-w-full overflow-hidden line-clamp-2"
            :title="r.name">{{ r.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"

//轮播图
const { banners } = await banner({ type: 0 })

//游客登录 
//TODO: 登录
const { cookie } = await registerAnonimous()
const token = useCookie('token')
token.value = cookie

const { recommend } = await recommendResource()

//独家放送(入口列表)
const { result } = await personalizedPrivatecontent()

const container = ref<HTMLDivElement>()
const width = ref(700)
const height = ref(250)
const inverseScaling = ref(150)
const space = ref(200)
const index = ref(1)
const onBeforeSlideChange = (slideIndex: number) => {
  index.value = slideIndex + 1
}

const { createResizeObserver } = useObserver()
onMounted(() => {
  createResizeObserver(container.value!, async ([entry]) => {
    const [size] = entry.borderBoxSize || []
    width.value = size.inlineSize / 10 * 6
    height.value = width.value / 3
    inverseScaling.value = width.value / height.value * 1.5
    space.value = width.value / 2
  })
})
</script>