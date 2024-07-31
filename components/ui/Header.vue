<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const config = computed(() => ({
  wrapper:
    'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-10',
  container: 'flex items-center justify-between gap-3 h-[--header-height]'
}))

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({}),
  },
})

const { ui, attrs } = useUI(
  'music.header',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
