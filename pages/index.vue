<template>
  <div class="px-4 py-4">
    <div ref="container">
      <carousel-3d style="margin: 0;" :perspective="0" :autoplay="true" :inverseScaling="inverseScaling" :width="width"
        :height="height" :border="0" :loop="true" :space="space" :display="3">
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <div class=" object-fill w-full h-full" alt="">{{ i }}</div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"

const container = ref<HTMLDivElement>()
const slides = Array.from({ length: 5 })

const width = ref(600)
const height = ref(250)
const inverseScaling = ref(150)
const space = ref(200)

//TODO: resize change the width and height 
const { createResizeObserver } = useObserver()
onMounted(() => {
  createResizeObserver(container.value!, async ([entry]) => {
    const [size] = entry.borderBoxSize || []
    console.log(size)
    width.value = size.inlineSize / 10 * 5
    height.value = width.value / 4
    inverseScaling.value = width.value / height.value * 1.5
    space.value = width.value / 2
  })
})
</script>