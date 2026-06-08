<template>
  <div :class="[ui.wrapper, direction === 'horizontal' ? 'flex-col' : '']" v-bind="attrs">
    <div :class="ui.container">
      <slot>
        <NuxtImg :src="image?.src" :alt="image?.alt" :class="ui.image" />
      </slot>

      <slot name="hover"> </slot>
    </div>
    <div :class="ui.title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

const config = {
  container:
    'group relative dark:border-[0.5px] dark:border-gray-800 flex justify-center items-center',
  image: 'aspect-square w-full object-cover rounded-md',
  title:
    'text-sm md:text-xs lg:text-xs pt-1 text-[text-color] max-w-full overflow-hidden line-clamp-2',
  wrapper: 'flex  w-full cursor-pointer select-none',
};

const props = defineProps({
  class: {
    default: undefined,
    type: [String, Object, Array] as PropType<any>,
  },
  direction: {
    default: 'horizontal',
    type: String as PropType<'horizontal' | 'vertical'>,
  },
  image: {
    required: false,
    type: [Object] as PropType<{
      src: string;
      alt: string;
    }>,
  },
  title: {
    required: false,
    type: String,
  },
  ui: {
    default: () => ({}),
    type: Object as PropType<Partial<typeof config>>,
  },
});

const { ui, attrs } = useUI('music.card', toRef(props, 'ui'), config, toRef(props, 'class'), true);
</script>
