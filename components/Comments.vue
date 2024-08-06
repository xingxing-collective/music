<template>
  <div class="py-4 w-full flex flex-col gap-4">
    <div>
      <p class="text-base dark:text-[--text-primary-gray] font-bold">精彩评论</p>
      <CommentItem
        :class="[index + 1 === hotComments?.length ? 'border-none' : 'border-b', 'dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]']"
        v-for="(c, index) in hotComments?.data.comments" :comment="c" />
    </div>
    <div>
      <p class="text-base dark:text-[--text-primary-gray] font-bold">最新评论（{{ comments?.data.totalCount }}）</p>
      <CommentItem
        :class="[index + 1 === comments?.length ? 'border-none' : 'border-b', 'dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]']"
        v-for="(c, index) in comments?.data.comments" :comment="c" />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  id?: number | string,
  type?: number | string
}>()

const hotComments = shallowRef<Awaited<ReturnType<typeof comment_new>>>()
const comments = shallowRef<Awaited<ReturnType<typeof comment_new>>>()

async function initialize() {
  if (props.id) {
    hotComments.value = await comment_new({
      id: props.id,
      type: 0,
      sortType: 2,
    })
    comments.value = await comment_new({
      id: props.id,
      type: 0,
      sortType: 3,
    })
  }
}

onMounted(async () => {
  await initialize()
})

</script>