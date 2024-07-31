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
      <div class=" grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 pt-2">
        <Card :content="new Date().getDate()" title="每日歌曲推荐" />
        <Card v-for="r in recommend" :content="{ src: r.picUrl, alt: r.name }" :title="r.name" />
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
        <Card v-for="r in result" :content="{ src: r.sPicUrl, alt: r.name }" :ui="{ image: 'aspect-video' }"
          :title="r.name" />
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
const { cookie } = await register_anonimous()
const token = useCookie('token')
token.value = cookie

// production requires login  正式环境需要登录，先调用推荐歌单
//const { recommend } = await recommendResource()
const { result: recommend } = await personalized({ limit: 9 })

//独家放送(入口列表)
const { result } = await personalized_privatecontent()

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