<template>
  <div class="py-4 w-full flex flex-col gap-4">
    <div v-if="hotComments?.length">
      <p class="text-base font-bold">精彩评论</p>
      <CommentItem class="border-b dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]" v-for="c in hotComments"
        :comment="c" />
    </div>
    <div v-if="hotComments?.length" class="flex w-full justify-center">
      <div
        class="flex gap-1 cursor-pointer items-center px-4 py-2 text-sm  rounded-full border dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]">
        <div>更多精彩评论</div>
        <Icon name="ri:arrow-right-s-line" size="20" />
      </div>
    </div>
    <div v-if="comments?.length">
      <p class="text-base font-bold">最新评论（{{ total }}）</p>
      <CommentItem
        :class="[index + 1 === comments?.length ? 'border-none' : 'border-b', 'dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]']"
        v-for="(c, index) in comments" :comment="c">
        <template #time>
          <span>{{ c.timeStr }}</span>
        </template>
        <template #replied v-if="c.beReplied.length > 0">
          <div class="bg-[rgb(230,230,230)] dark:bg-[rgb(42,42,42)] p-2 rounded-md">
            <p>
              <span class="text-[rgb(81,126,175)]">{{ c.beReplied.at(0)?.user.nickname }}:</span>
              <span class="pl-2">{{ c.beReplied.at(0)?.content }}</span>
            </p>
          </div>
        </template>
      </CommentItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Comment } from '~/composables/NeteaseCloudMusic.ts'

const playerStore = usePlayerStore()
const { currentSongId } = storeToRefs(playerStore)
const total = ref<number>()
const hotComments = shallowRef<Array<Comment>>()
const comments = shallowRef<Array<Comment>>()

watch(currentSongId, async (newVal) => {
  if (newVal) {
    const res = await comment_music({
      id: newVal
    })
    hotComments.value = res.hotComments
    comments.value = res.comments
    total.value = res.total
  }
}, {
  immediate: true
})

</script>