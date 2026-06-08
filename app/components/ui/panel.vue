<template>
  <div
    ref="el"
    v-bind="{ ...attrs, ...$attrs }"
    :class="[ui.wrapper, grow ? ui.grow : ui.border, collapsible ? 'hidden lg:flex' : 'flex']"
    :style="{ '--width': width && !grow ? `${width}px` : undefined }"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
const config = {
  border:
    'border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-[--width] flex-shrink-0',
  grow: 'flex-1',
  wrapper: 'flex-col items-stretch relative w-full',
};
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  class: {
    default: undefined,
    type: [String, Object, Array] as PropType<any>,
  },
  collapsible: {
    default: false,
    type: Boolean,
  },
  grow: {
    default: false,
    type: Boolean,
  },
  ui: {
    default: () => ({}),
    type: Object as PropType<Partial<typeof config>>,
  },
  width: {
    default: undefined,
    type: Number,
  },
});
const { ui, attrs } = useUI('music.panel', toRef(props, 'ui'), config, toRef(props, 'class'), true);
</script>
