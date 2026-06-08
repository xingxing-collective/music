<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const config = {
  wrapper: 'fixed inset-0 flex overflow-hidden',
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
  'music.layout',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
);
</script>
