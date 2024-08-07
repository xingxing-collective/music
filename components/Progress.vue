<template>
  <div class="lg:block h-8 cursor-pointer group " ref="progressBar" @click="onProgress">
    <div class="flex items-center dark:bg-[rgb(35_35_35)] bg-[rgb(245,245,245)] relative top-[43%] h-[2px] ">
      <div ref="progress" class="h-full bg-red-600"></div>
      <div ref="progressBtn"
        :class="[alwaysShowButton ? 'block' : 'hidden group-hover:block', 'relative box-border w-3 h-3 rounded-[50%] bg-red-600']">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  percent: number,
  alwaysShowButton?: boolean
}>(), {
  percent: 0,
  alwaysShowButton: false
})

const emit = defineEmits<{
  percentChange: [percent: number]
}>()

const progressBar = ref<HTMLDivElement>()
const progress = ref<HTMLDivElement>()
const progressBtn = ref<HTMLDivElement>()

const onProgress = (e: MouseEvent) => {
  const rect = progressBar.value!.getBoundingClientRect()
  const offsetWidth = Math.max(
    0,
    Math.min(e.pageX - rect.left, progressBar.value!.clientWidth)
  )
  offset(offsetWidth)
  emit('percentChange', getPercent())
}

function setProgressOffset(percent: number) {
  if (percent >= 0) {
    const barWidth = progressBar.value!.clientWidth
    const offsetWidth = percent * barWidth
    offset(offsetWidth)
  }
}
function getPercent() {
  const barWidth = progressBar.value!.clientWidth
  return progress.value!.clientWidth / barWidth
}
const offset = (offsetWidth: number) => {
  progress.value!.style.width = `${offsetWidth}px`
  progressBtn.value!.style.transform = `translate3d(${offsetWidth},0,0)`
}

onMounted(() => {
  setProgressOffset(props.percent)
})

watch(() => props.percent, (newVal) => {
  setProgressOffset(newVal)
})
</script>