<template>
  <div class="py-4 w-full flex flex-col gap-4">
    <div>
      <p class="text-base text-[--text-primary-gray] font-bold">精彩评论</p>
      <CommentItem class="border-b dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]"
        v-for="c in hotComments?.data.comments" :comment="c" />
    </div>
    <div class="flex w-full justify-center">
      <div class="flex gap-1 items-center px-4 py-2 text-sm  rounded-full border dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]">
        <div>更多精彩评论</div>
        <Icon name="ri:arrow-right-s-line" size="20" />
      </div>
    </div>
    <div>
      <p class="text-base text-[--text-primary-gray] font-bold">最新评论（{{ comments?.data.totalCount }}）</p>
      <CommentItem
        :class="[index + 1 === comments?.data.comments?.length ? 'border-none' : 'border-b', 'dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]']"
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
      pageSize: 10
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