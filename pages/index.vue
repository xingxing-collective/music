<template>
  <div class="px-4 py-4">
    <ClientOnly>
      <carousel-3d style="margin: 0;" :perspective="0" :autoplay="true" :inverseScaling="150" :height="250" :width="700" :border="0" :loop="true" :space="400"
        :display="3">
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <div  class=" object-fill w-full h-full" alt="">{{ i }}</div>
        </slide>
      </carousel-3d>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"

const slides = Array.from({ length: 5 })
</script>