<template>
  <div class="flex  lg:grid lg:grid-cols-4 h-full items-center gap-2">
    <Icon class="col-span-1 cursor-pointer peer" :name="volumeState ? 'ri:volume-up-line' : 'ri:volume-mute-line'"
      size="24" @click="volumeToggle()" />
    <KeepAlive>
      <Progress v-if="volume" :percent="volume" :always-show-button="true" class="col-span-3 w-full hidden"
        @percent-change="onPercentChange" />
    </KeepAlive>
  </div>
</template>
<script setup lang="ts">
const volumeStore = useVolumeStore()
const { volumeToggle, $volumeReset } = volumeStore
const { volume, volumeState } = storeToRefs(volumeStore)

function onPercentChange(percent: number) {
  volume.value = percent
}

watch(volumeState, (newVal) => {
  if (newVal)
    $volumeReset()
  else
    volume.value = 0
})

</script>