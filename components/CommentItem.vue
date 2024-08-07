<template>
  <div class="flex py-4 w-full text-[--text-primary-gray]">
    <div class="flex gap-4 w-full">
      <slot name="avatar">
        <img :src="`${comment.user.avatarUrl}?param=40y40`" class="rounded-[50%] w-10 aspect-square h-10 object-cover"
          alt="">
      </slot>
      <div class="text-xs font-bold flex flex-col gap-2 justify-between w-full">
        <slot>
          <p>
            <span class="text-[rgb(81,126,175)]">{{ comment.user.nickname }}:</span>
            <span class="pl-2">{{ comment.content }}</span>
          </p>
        </slot>
        <div class="flex gap-2 dark:text-[rgb(114,114,114)] text-[rgb(190,190,190)]">
          <slot name="time">
            <span>{{ $dayjs.unix(comment.time / 1000).format('YYYY年MM月DD日 HH:mm') }}</span>
          </slot>
          <div class="flex-1"></div>
          <Icon name="ri:thumb-up-line" class="cursor-pointer" size="16" />
          <div>{{ comment.likedCount }}</div>
        </div>
        <slot name="replied">
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  comment: Record<string, any>
}>()
</script>