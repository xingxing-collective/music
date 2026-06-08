<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const config = {
  wrapper: 'flex-1 flex flex-col overflow-y-auto',
};

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  class: {
    default: undefined,
    type: [String, Object, Array] as PropType<any>,
  },
  ui: {
    default: () => ({}),
    type: Object as PropType<Partial<typeof config>>,
  },
});

const { ui, attrs } = useUI(
  'music.panel.content',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
);
</script>
