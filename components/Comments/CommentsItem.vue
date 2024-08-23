<template>
  <div class="flex py-4 w-full">
    <div class="flex gap-4 w-full">
      <slot name="avatar">
        <NuxtImg :placeholder="(comment.user.avatarUrl) ? false : $config.public.image.placeholder" :src="`${comment.user.avatarUrl}?param=40y40`" class="rounded-[50%] w-10 aspect-square h-10 object-cover"
          :alt="`${comment.user.avatarUrl}?param=40y40`" />
      </slot>
      <div class="text-xs font-bold flex flex-col gap-2 justify-between w-full">
        <slot>
          <div class=" inline-flex">
            <p>
              <span class="inline-flex gap-1">
                <span class="text-[rgb(81,126,175)] whitespace-nowrap ">{{ comment.user.nickname }}</span>
                <NuxtImg :placeholder="(vipBadge) ? false : $config.public.image.placeholder"  v-if="vipBadge" class="h-4 object-fill"
                  :src="vipBadge" :alt="vipBadge" />
                <span class="text-[rgb(81,126,175)]">:</span>
              </span>
              <span class="pl-1">{{ comment.content }}</span>
            </p>
          </div>
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
const props = defineProps<{
  comment: Record<string, any>
}>()
const vipBadge = computed(() => {
  return props.comment.user?.vipRights?.redplus ? props.comment.user?.vipRights?.redplus?.iconUrl : props.comment.user?.vipRights?.associator?.iconUrl
})
</script>