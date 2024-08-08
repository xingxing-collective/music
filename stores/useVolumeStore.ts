export const useVolumeStore = defineStore('volume', () => {
  const volume = ref(0.5);
  const lastVolume = ref(0);
  const [volumeState, volumeToggle] = useToggle(true);

  function $volumeReset() {
    volume.value =
      volumeState.value && lastVolume.value !== 0 ? lastVolume.value : 0.5;
  }

  watch(volume, (newVal) => {
    if (newVal > 0.05) {
      lastVolume.value = volume.value;
      volumeState.value = true;
    } else {
      volume.value = 0;
      volumeState.value = false;
    }
  });

  return {
    volume,
    volumeState,
    volumeToggle,
    $volumeReset,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVolumeStore, import.meta.hot))
}