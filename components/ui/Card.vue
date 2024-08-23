<template>
  <div :class="[ui.wrapper, direction === 'horizontal' ? 'flex-col' : '']" v-bind="attrs">
    <div :class="ui.container">
      <slot>
        <NuxtImg :placeholder="(image?.src) ? false : $config.public.image.placeholder" :src="image?.src" :alt="image?.alt" :class="ui.image" />
      </slot>

        <slot name="hover">
          
        </slot>
    </div>
    <div :class="ui.title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'

const config = {
  wrapper: 'flex  w-full cursor-pointer select-none',
  container: 'group relative dark:border-[0.5px] dark:border-gray-800 flex justify-center items-center',
  image: 'aspect-square w-full object-cover rounded-md',
  title: 'text-sm md:text-xs lg:text-xs pt-1 text-[text-color] max-w-full overflow-hidden line-clamp-2'
}

const props = defineProps({
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  title: {
    type: String,
    required: false
  },
  image: {
    type: [Object] as PropType<{
      src: string
      alt: string
    }>,
    required: false
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