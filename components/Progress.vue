<template>
    <div class="hidden lg:block h-8 cursor-pointer group">
      <div class="flex items-center bg-[rgb(35_35_35)] relative top-[43%] h-[2px] ">
        <div class="w-6 h-full bg-red-600"></div>
        <div class="relative box-border w-3 h-3 rounded-[50%] bg-red-600"></div>
      </div>
    </div>
</template>
<script setup lang="ts">
const { percent, alwaysShowBtn, disabled } = withDefaults(defineProps<{
  percent?: number,
  alwaysShowBtn?: boolean,
  disabled?: boolean
}>(), {
  percent: 0,
  alwaysShowBtn: false,
  disabled: false
})
</script>