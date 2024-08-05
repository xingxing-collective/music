<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.container">
      <slot>
        <NuxtImg :src="content?.src" :alt="content?.alt" :class="ui.image" />
      </slot>
    </div>
    <div :class="ui.content">
      <slot name="content">
        {{ title }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'

const config = {
  wrapper: 'flex flex-col w-full cursor-pointer',
  container: 'w-full aspect-square border-[0.5px] border-gray-500 dark:border-gray-800 flex justify-center items-center',
  image: 'aspect-square w-full object-cover',
  content: 'text-sm md:text-xs lg:text-xs pt-1 dark:text-gray-200 max-w-full overflow-hidden line-clamp-2'
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: [Object] as PropType<{
      src:string
      alt:string
    }>,
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
  'music.card',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>