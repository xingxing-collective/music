export const useLyricStore = defineStore('lyric', () => {
  const playerStore = usePlayerStore();
  const { currentLyric, currentTime } = storeToRefs(playerStore);

  const currentActiveLyricIndex = computed(() => {
    return (
      currentLyric.value?.findIndex((l, index) => {
        const nextLyric = currentLyric.value?.at(index + 1);
        return (
          currentTime.value >= l.time &&
          (nextLyric ? currentTime.value < nextLyric.time : true)
        );
      }) || -1
    );
  });

  return {
    currentActiveLyricIndex,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLyricStore, import.meta.hot))
}