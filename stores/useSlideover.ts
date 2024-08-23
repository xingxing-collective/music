export const useSlideoverStore = defineStore('slideover', () => {
  const isCurrentlyPlayingOpen = ref(false);
  return {
    isCurrentlyPlayingOpen,
  };
});
