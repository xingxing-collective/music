<template>
  <div class="p-6 flex flex-col gap-2">
    <div class="text-xl font-bold"><span>精彩评论</span></div>
    <div>
      <template v-for="comment in data?.hotComments">
        <CommentsItem :comment="comment" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CommentType, type CommentTypeKeys } from '~/composables/NeteaseCloudMusic.ts'
const route = useRoute()
const { type, id } = route.params

const { data } = await useAsyncData('hotComment', async () => {
  switch (CommentType[type as CommentTypeKeys]) {
    case CommentType.song:
      return comment_hot({
        type: CommentType.song,
        id: Number(id)
      })
    case CommentType.playlist:
      return comment_hot({
        type: CommentType.playlist,
        id: Number(id)
      })
    default:
      throw new Error('Invalid comment type')
  }
})

useSeoMeta({
  title: '精彩评论',
  ogDescription: '精彩评论',
  ogTitle: '精彩评论',
})
</script>