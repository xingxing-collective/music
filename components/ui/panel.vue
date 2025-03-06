<template>
  <div ref="el" v-bind="{ ...attrs, ...$attrs }"
  :class="[ui.wrapper, grow ? ui.grow : ui.border, collapsible ? 'hidden lg:flex' : 'flex']"
  :style="{ '--width': width && !grow ? `${width}px` : undefined }">
    <slot />
  </div>
</template>
<script setup lang="ts">
const config = {
  wrapper: 'flex-col items-stretch relative w-full',
  border:
    'border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-[--width] flex-shrink-0',
  grow: 'flex-1',
}
defineOptions({
  inheritAttrs: false,
})
const props = defineProps({
  grow: {
    type: Boolean,
    default: false,
  },
  collapsible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: undefined,
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
  'music.panel',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>