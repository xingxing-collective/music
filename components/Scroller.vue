<template>
  <div ref="container" class=" relative overflow-hidden h-full">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import BetterScoll, { type Options } from "@better-scroll/core"
import type { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll"
import MouseWheel from "@better-scroll/mouse-wheel"
import ScrollBar from "@better-scroll/scroll-bar"

BetterScoll.use(ScrollBar)
BetterScoll.use(MouseWheel)

const props = withDefaults(defineProps<{
  data: Array<any>
  options: Options
}>(), {
  data: () => [],
  options: () => ({})
})

const defaultOptions: Options = {
  mouseWheel: true,
  scrollY: true,
  scrollbar: true,
  probeType: 3
}
const dataRef = shallowRef(props.data)

const container = ref<HTMLDivElement>()
const scroller = ref<BScrollConstructor>()

const emit = defineEmits<{
  init: [scroller: BScrollConstructor<Options>]
}>()

function getScroller() {
  return scroller.value
}
function refresh() {
  scroller.value?.refresh()
}

watch(dataRef, () => {
  nextTick(() => {
    if (!scroller.value) {
      scroller.value = new BetterScoll<Options>(
        container.value!,
        Object.assign({}, defaultOptions, props.options)
      )
      emit("init", scroller.value)
    } else {
      scroller.value?.refresh()
    }
  })
}, {
  immediate: true
})

defineExpose({
  scroller,
  refresh,
  getScroller
})
</script>
