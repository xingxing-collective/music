<template>
  <div class="grid grid-cols-4 h-full items-center gap-2">
    <Icon class=" col-span-1 cursor-pointer" :name="!volumeState ? 'ri:volume-up-line' : 'ri:volume-mute-line'" size="24"
      @click="volumeToggle()" />
    <Progress class="col-span-3 w-full" @percentChange="onProgressChange" />
  </div>
</template>
<script setup lang="ts">
const { volume } = withDefaults(defineProps<{
  volume: number
}>(), {
  volume: 1
})
const emit = defineEmits<{
  volumeChange: [percent: number]
}>()

const volumePercent = toRef(volume)

const [volumeState, volumeToggle] = useToggle()

function onProgressChange(percent: number) {
  if (percent < 0.05) {
    percent = 0
  }
  volumePercent.value = percent
  emit('volumeChange', percent)
}


</script>