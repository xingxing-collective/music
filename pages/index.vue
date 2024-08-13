<template>
  <div class="px-4">
    <UHeader>
      <div class="grid grid-cols-12 w-full h-full">
        <div class=" hidden col-span-8 md:flex lg:flex items-center justify-end gap-6 ">
          <NuxtLink v-for="link in headLink" :to="link.to"
            class="w-24 flex flex-col justify-center  h-full items-center">
            <div class="w-[80%] text-center font-bold text-base "
              :style="{ color: $route.path === link.to ? 'red' : 'inherit' }">{{ link.name }}</div>
            <div class=" font-black text-lg relative top-4 border-b-[2px] border-b-red-600 w-[70%]"
              v-if="$route.path === link.to" />
          </NuxtLink>
        </div>
        <div class="col-span-12 md:col-span-4 lg:col-span-4 flex justify-center items-center">
          <div class="relative flex items-center  w-[70%]">
            <input type="text" placeholder="搜索"
              class="relative block w-full  focus:outline-none border-0 form-input rounded-lg placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-inherit text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1  ps-9">
            <Icon class="absolute flex  pointer-events-none px-4 text-gray-400 dark:text-gray-500" size="20"
              name="ri:search-line" />
          </div>
        </div>
      </div>
    </UHeader>
    <div ref="container">
      <Carousel3d style="margin: 0;" ref="carousel3d" @before-slide-change="onBeforeSlideChange"
        class=" hidden lg:block md:block" :perspective="0" :autoplay="true" :inverseScaling="inverseScaling"
        :width="width" :height="height" :border="0" :loop="true" :space="space" :display="3">
        <Slide v-for="(banner, i) in banners?.filter(x => !Boolean(x.adSource))" :key="banner.targetId" :index="i">
          <img class="object-fill w-full h-full" :src="banner.imageUrl.replace('http://', 'https://')"
            :alt="banner.typeTitle" />
        </Slide>
      </Carousel3d>
      <div class=" w-full  items-center md:gap-4 lg:gap-6 justify-center font-black text-3xl hidden lg:flex md:flex">
        <div v-for="i in banners?.filter(x => !Boolean(x.adSource)).length" :key="i"
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
        <Card title="每日歌曲推荐" :ui="{ container: 'w-full aspect-square' }">
          <div class="text-[5.25rem] font-light text-red-600">{{ new Date().getDate() }}</div>
        </Card>
        <template v-for="r in recommend">
          <NuxtLink :to="`/playlist/${r.id}`">
            <Card :image="{ src: r.picUrl, alt: r.name }" :title="r.name" />
          </NuxtLink>
        </template>
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
        <Card :hover="false" v-for="r in personalizedPrivatecontent" :image="{ src: r.sPicUrl, alt: r.name }"
          :ui="{ image: 'aspect-video', container: 'border-none aspect-auto' }" :title="r.name" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"

const banners = shallowRef<Array<Record<string, any>>>()
const cookie = ref<string>()
const recommend = shallowRef<Array<Record<string, any>>>()
const personalizedPrivatecontent = shallowRef<Array<Record<string, any>>>()

const headLink = computed(() => {
  return [{
    key: 'recommend',
    name: '推荐',
    to: '/',
  }, {
    key: 'playlist',
    name: '歌单',
    to: '/playlist',
  }, {
    key: 'djprogram',
    name: '电台',
    to: '/djprogram'
  }, {
    key: 'toplist',
    name: '排行榜',
    to: '/toplist'
  }, {
    key: 'topsong',
    name: '新歌',
    to: '/topsong'
  }]
})

const container = ref<HTMLDivElement>()
const width = ref(700)
const height = ref(250)
const inverseScaling = ref(150)
const space = ref(200)
const index = ref(1)

function onBeforeSlideChange(slideIndex: number) {
  index.value = slideIndex + 1
}

async function initialize() {
  const [bannerRes, anonimousRes, personalizedRes, privatecontentRes] = await Promise.all([
    //轮播图
    banner({ type: 0 }),
    //游客登录
    register_anonimous(),
    // production requires login  正式环境需要登录，先调用推荐歌单
    //recommendResource()
    personalized({ limit: 9 }),
    // 独家放送
    personalized_privatecontent(),
  ])

  banners.value = bannerRes.banners
  cookie.value = anonimousRes.cookie
  const token = useCookie('token')
  token.value = cookie.value
  recommend.value = personalizedRes.result
  personalizedPrivatecontent.value = privatecontentRes.result
}

const { createResizeObserver } = useObserver()

onMounted(async () => {
  await initialize()
  createResizeObserver(container.value!, async ([entry]) => {
    const [size] = entry.borderBoxSize || []
    width.value = size.inlineSize / 10 * 6
    height.value = width.value / 3
    inverseScaling.value = width.value / height.value * 1.5
    space.value = width.value / 2
  })
})
</script>