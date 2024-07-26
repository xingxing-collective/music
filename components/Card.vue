<template>
  <div :class="ui.wrapper">
    <div :class="ui.container">
      <div v-if="(typeof content !== 'object')" :class="ui.box">{{ content }}</div>
      <img v-else :src="(content as Record<string, any>).src" :alt="(content as Record<string, any>).alt"
        :class="ui.image" />
    </div>
    <div :class="ui.content">
      {{ title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'

const config = {
  wrapper: 'flex flex-col w-full cursor-pointer',
  container: 'p-2 w-full aspect-square border-[0.5px] border-gray-500 dark:border-gray-800 flex justify-center items-center',
  box: 'text-[6rem] font-light text-red-600',
  image: 'aspect-square w-full  object-fill',
  content: 'text-sm md:text-xs lg:text-xs pt-1 dark:text-gray-200 max-w-full overflow-hidden line-clamp-2'
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: [String,Number, Object] as PropType<any>,
    required: true
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config>>,
    default: () => ({}),
  },
})

const { ui, attrs } = useUI(
  'card',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>