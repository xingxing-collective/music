<template>
  <div class="flex py-4 w-full">
    <div class="flex gap-4 w-full">
      <img :src="`${comment.user.avatarUrl}?param=40y40`" class="rounded-[50%] w-10 aspect-square h-10 object-cover"
        alt="">
      <div class="text-xs flex flex-col gap-2 justify-between w-full">
        <p>
          <span class="text-[rgb(81,126,175)]">{{ comment.user.nickname }}:</span>
          <span class="text-gray-200 pl-2">{{ comment.content }}</span>
        </p>
        <div class="flex">
          <div class="dark:text-[rgb(114,114,114)] text-[rgb(190,190,190)]">{{ comment.time }}</div>
          <div class="flex-1"></div>
          <Icon name="ri:thumb-up-line" class=" text-gray-300 cursor-pointer" size="20" />
        </div>
      </div>


    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  comment: Record<string, any>
}>()
</script>