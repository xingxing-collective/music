<template>
  <div class="border rounded-full flex cursor-pointer items-center justify-center text-center py-[2px] px-2 dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]">
    <slot name="icon">
      <Icon :name="icon" :size="iconSize" />
    </slot>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  iconSize?: string | number
}>(), {
  iconSize: 20
})
</script>