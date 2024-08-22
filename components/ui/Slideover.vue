<template>
  <Transition name="slideover">
    <div v-if="isOpen" @click="handleClose" class="fixed inset-0 flex z-50">
      <div class="fixed flex justify-end inset-0 bottom-[--player-height] md:left-28 lg:left-40 ">
        <slot name="container">
          <div class="h-full md:w-1/2 lg:w-1/3 flex flex-col bg-background" @click.stop>
            <slot></slot>
          </div>
        </slot>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
const isOpen = defineModel<boolean>({
  default: false
})
function handleEsc(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}
function handleClose() {
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEsc)
})
</script>