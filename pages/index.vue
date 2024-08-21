<template>
  <div class="px-4 pb-4">
    <UHeader>
      <div class="grid grid-cols-12 w-full h-full">
        <div class=" hidden col-span-8 md:flex lg:flex items-center justify-end gap-6 ">
          <NuxtLink v-for="link in headLink" :to="link?.to"
            class="w-24 flex flex-col justify-center  h-full items-center">
            <div class="w-[80%] text-center font-bold text-base "
              :style="{ color: $route.path === link?.to ? 'red' : 'inherit' }">{{ link.name }}</div>
            <div class=" font-black text-lg relative top-4 border-b-[2px] border-b-red-600 w-[70%]"
              v-if="$route.path === link?.to" />
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
      <ClientOnly>
        <Carousel3d style="margin: 0;" ref="carousel3d" @before-slide-change="onBeforeSlideChange"
          class=" hidden lg:block md:block" :perspective="0" :autoplay="true" :inverseScaling="inverseScaling"
          :width="width" :height="height" :border="0" :loop="true" :space="space" :display="3">
          <Slide v-for="(banner, i) in banners?.filter(x => !Boolean(x.adSource))" :key="banner.targetId" :index="i">
            <NuxtImg class="object-fill w-full h-full" :src="banner.imageUrl.replace('http://', 'https://')"
              :alt="banner.typeTitle" />
          </Slide>
        </Carousel3d>
        <div class=" w-full  items-center md:gap-4 lg:gap-6 justify-center font-black text-3xl hidden lg:flex md:flex">
          <div v-for="i in banners?.filter(x => !Boolean(x.adSource)).length" :key="i"
            :style="{ color: index == i ? 'red' : 'inherit' }">.</div>
        </div>
      </ClientOnly>
    </div>
    <div class="flex flex-col gap-8">
      <div>
        <div class="pt-4 flex items-center">
          <div class="flex cursor-pointer">
            <div class="font-black">推荐歌单</div>
            <Icon size="24" name="ri:arrow-right-s-line" />
          </div>
          <div class="flex-1"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 pt-2">
          <NuxtLink>
            <UCard title="每日歌曲推荐" :ui="{ container: 'w-full aspect-square' }">
              <div class="text-[5.25rem] font-light text-red-600">{{ new Date().getDate() }}</div>
            </UCard>
          </NuxtLink>
          <template v-for="r in recommendResource">
            <NuxtLink :to="`/playlist/${r.id}`">
              <UCard :image="{ src: r.picUrl, alt: r.name }" :title="r.name">
                <template #hover>
                  <div @click.prevent="playPlaylist(r.id)" class="hidden group-hover:flex absolute bottom-4 right-4">
                    <div class="flex-1"></div>
                    <div
                      class="w-9 opacity-100 bg-[rgba(255,255,255,0.5)] rounded-[50%] aspect-square flex items-center justify-center">
                      <Icon name="material-symbols-light:play-arrow" class=" text-red-600" size="32" />
                    </div>
                  </div>
                </template>
              </UCard>
            </NuxtLink>
          </template>
        </div>
      </div>
      <div>
        <div class="pt-4 flex items-center">
          <div class="flex cursor-pointer">
            <div class="font-black">独家放送</div>
            <Icon size="24" name="ri:arrow-right-s-line" />
          </div>
          <div class="flex-1"></div>
        </div>
        <div class=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-2">
          <UCard :hover="false" v-for="r in personalizedPrivatecontent" :image="{ src: r.sPicUrl, alt: r.name }"
            :ui="{ image: 'aspect-video', container: 'border-none aspect-auto' }" :title="r.name" />
        </div>
      </div>
      <div>
        <div class="pt-4 flex items-center">
          <div class="flex cursor-pointer">
            <div class="font-black">最新音乐</div>
            <Icon size="24" name="ri:arrow-right-s-line" />
          </div>
          <div class="flex-1"></div>
        </div>
        <div class=" grid grid-cols-2 grid-flow-col grid-rows-5 gap-4 pt-2">
          <template v-for="({ song }, index) in personalizedNewsong">
            <UCard direction="vertical" @dblclick="playSong(song.id)"
              class="col-span-1 dark:hover:bg-[rgb(46,46,46)] hover:bg-[rgb(245,245,245)]"
              :image="{ src: `${song.album.picUrl.replace('http://', 'https://')}`, alt: song.name }"
              :ui="{ image: 'w-16 h-16 max-w-none', container: 'border-none' }">
              <template #title>
                <div class="h-full items-center flex pl-2">
                  <span class="text-xs text-neutral-600">{{ (index + 1).toString().padStart(2, '0') }}</span>
                  <div>
                    <div class="flex pl-3 flex-col justify-center gap-1 w-full">
                      <p class="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium">{{ song.name }}
                        <span v-if="song.transName || song.alias?.length" class=" text-neutral-600">({{
            song.transName || song.alias?.join(',') }})</span>
                      </p>
                      <div class=" flex gap-1">
                        <span class="whitespace-nowrap text-ellipsis overflow-hidden">{{
            song.artists.map(x => x.name).join('/') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template #hover>
                <div @click="" class="flex justify-center items-center absolute w-full">
                  <div @click="playSong(song.id)"
                    class="w-7 opacity-100 bg-[rgba(255,255,255,0.5)] rounded-[50%] aspect-square flex items-center justify-center">
                    <Icon name="material-symbols-light:play-arrow" class=" text-red-600" size="28" />
                  </div>
                </div>
              </template>
            </UCard>
          </template>
        </div>
      </div>
      <div>
        <div class="pt-4 flex items-center">
          <div class="flex cursor-pointer">
            <div class="font-black">推荐MV</div>
            <Icon size="24" name="ri:arrow-right-s-line" />
          </div>
          <div class="flex-1"></div>
        </div>
        <div class=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-2">
          <UCard :hover="false" v-for="r in personalizedMv" :image="{ src: r.picUrl, alt: r.name }"
            :ui="{ image: 'aspect-video', container: 'border-none aspect-auto' }" :title="r.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"
import type { MV, NewSong } from '~/composables/NeteaseCloudMusic.ts'

const playerStore = usePlayerStore()
const { playSong, replacePlaylist } = playerStore

//轮播图
const { banners } = await banner({ type: 0 })
const cookie = ref<string>()
const recommendResource = shallowRef<Array<Record<string, any>>>()
const personalizedPrivatecontent = shallowRef<Array<Record<string, any>>>()
const personalizedNewsong = shallowRef<NewSong[]>()
const personalizedMv = shallowRef<MV[]>()

const headLink = computed<Array<{ key: string, name: string, to?: string }>>(() => {
  return [{
    key: 'recommend',
    name: '推荐',
    //to: '/',
  }, {
    key: 'playlist',
    name: '歌单',
    //to: '/playlist',
  }, {
    key: 'djprogram',
    name: '电台',
    //to: '/djprogram'
  }, {
    key: 'toplist',
    name: '排行榜',
    //to: '/toplist'
  }, {
    key: 'topsong',
    name: '新歌',
    //to: '/topsong'
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

async function playPlaylist(playlistId: number) {
  const { playlist } = await playlist_detail({
    id: playlistId,
  })
  if (playlist?.trackIds.length) {
    replacePlaylist([...playlist.trackIds.map(x => x.id)])
  }
}

async function initialize() {
  const [anonimousRes, personalizedRes, privatecontentRes, personalizedNewSongRes, personalizedMvRes] = await Promise.all([

    //游客登录
    register_anonimous(),
    // production requires login  正式环境需要登录，先调用推荐歌单
    //recommendResource()
    personalized({ limit: 9 }),
    // 独家放送
    personalized_privatecontent(),
    personalized_newsong(),
    personalized_mv(),

  ])
  cookie.value = anonimousRes.cookie
  const token = useCookie('token')
  token.value = cookie.value
  recommendResource.value = personalizedRes.result
  personalizedPrivatecontent.value = privatecontentRes.result
  personalizedNewsong.value = personalizedNewSongRes.result
  personalizedMv.value = personalizedMvRes.result
}

const { createResizeObserver } = useObserver()

useHead({
  title: '网易云音乐 - 发现音乐',
  meta: [
    { name: 'keywords', content: '网易云音乐, 音乐, 排行榜, 歌单, 新歌, 私人FM' },
    { name: 'description', content: '网易云音乐是一站式音乐播放器, 面向全球用户提供高速、无限的在线音乐体验。' },
  ]
})
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