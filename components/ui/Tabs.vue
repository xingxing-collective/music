<template>
  <div>
    <div class="flex text-base font-semibold gap-8 border-b dark:border-[rgb(63,63,63)] border-[rgb(242,242,242)]">
      <template v-for="pane in panes" :key="pane.key">
        <div :class="[active == pane.key ? 'border-b-2 border-b-red-600 text-red-600' : '', 'cursor-pointer py-1']"
          @click="active = pane.key">{{ pane.label
          }}
        </div>
      </template>
      <div class="flex-1"></div>
      <div>搜索</div>
    </div>
    <template v-for="pane in panes" :key="pane.key">
      <slot :name="pane.key" v-if="pane.key == active" v-bind="pane"></slot>
    </template>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  panes: Array<{
    key: string | number,
    label: string
  }>,
}>()

const active = defineModel<string | number>()
</script>