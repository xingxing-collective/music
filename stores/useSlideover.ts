export const useSlideoverStore = defineStore('slideover', () => {
  const isOpen = ref(false);
  return {
    isOpen,
  };
});
