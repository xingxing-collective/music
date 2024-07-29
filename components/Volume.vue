<template>
  <div class="flex  h-full items-center gap-4">
    <Icon class="cursor-pointer" :name="!volumeState ? 'ri:volume-up-line' : 'ri:volume-mute-line'" size="24"
      @click="volumeToggle()" />
    <div class="flex-1">
      <Progress @percentChange="onProgressChange" />
    </div>
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