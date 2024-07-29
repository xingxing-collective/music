<template>
  <div class="h-8 cursor-pointer group">
    <div class=" bg-[rgb(35_35_35)] relative top-[43%] h-[2px] ">
      <div class="absolute h-full bg-red-600"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { percent, alwaysShowBtn, disabled } = withDefaults(defineProps<{
  percent: number,
  alwaysShowBtn: boolean,
  disabled: boolean
}>(), {
  percent: 0,
  alwaysShowBtn: false,
  disabled: false
})
</script>