export const useSlideoverStore = defineStore('slideover', () => {
  const isPlaylistOpen = ref(false);
  return {
    isPlaylistOpen,
  };
});
