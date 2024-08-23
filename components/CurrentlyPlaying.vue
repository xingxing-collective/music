<template>
  <USlideover v-model="isCurrentlyPlayingOpen">
    <template #container>
      <div class="h-full md:w-1/2 lg:w-1/3 flex flex-col bg-neutral-900 p-4" @click.stop>
        <div class="flex flex-col gap-2 h-full">
          <span class="text-xl font-black ">当前播放</span>
          <div class="flex gap-4 pt-2 items-center">
            <span class="text-sm font-semibold">共{{ currentPlaylist.length }}首</span>
            <div class=" flex-1"></div>
            <div class=" cursor-pointer select-none"><span class="font-bold text-base">收藏全部</span></div>
            <div class=" cursor-pointer select-none" @click="clearPlaylist"><span
                class="text-[rgb(81,126,175)] font-bold text-base">清空列表</span></div>
          </div>
          <div class="border-b dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]"></div>
          <div class="max-h-full overflow-y-auto">
            <div @dblclick="playSong(song.id)"
              class="grid grid-cols-12 select-none gap-2 hover:bg-neutral-700 hover:cursor-pointer odd:bg-neutral-800 text-sm py-1.5 px-2"
              v-for="song in currentPlaylist">
              <div class="col-span-6 w-full">
                <p class=" whitespace-nowrap text-ellipsis overflow-hidden">{{ song.name
                  }}</p>
              </div>
              <div class="col-span-4 w-full">
                <p class="whitespace-nowrap text-ellipsis overflow-hidden">{{ song.ar.map(x => x.name).join('/')
                  }}</p>
              </div>
              <div class="col-span-2 w-full"><span>{{ $dayjs(song.dt).format('mm:ss') }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </USlideover>
</template>
<script setup lang="ts">
import { PlayModeType } from '~/types'

const slideoverStore = useSlideoverStore()
const playerStore = usePlayerStore()
const { isCurrentlyPlayingOpen } = storeToRefs(slideoverStore)
const { clearPlaylist } = playerStore
const { playlist, playmode, playState, randomPlaylist, currentSongId } = storeToRefs(playerStore)

const currentPlaylist = computedAsync(async () => {
  const ids = (playmode.value === PlayModeType.Random ? randomPlaylist.value : playlist.value).join(',')
  if (!ids) return []
  const { songs } = await song_detail({ ids })
  return songs
})

/**
 * 播放歌曲不替换歌单顺序
 * @param id song id
 */
function playSong(id: number) {
  currentSongId.value = id
  playState.value = true
}

function handleEsc(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isCurrentlyPlayingOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEsc)
})
</script>