import { PlayModeType } from '~/types/player';

export const usePlayerStore = defineStore('player', () => {
  //mini player or player
  const [playerMode, playerModeToggle] = useToggle();
  // pause or play
  const [pause, pauseToggle] = useToggle();
  // like or dislike
  const [like, likeToggle] = useToggle();

  const playmode = ref<PlayModeType>(PlayModeType.Order);
  const playmodeIcon = computed(() => {
    switch (playmode.value) {
      case PlayModeType.Order: {
        return 'ic:outline-repeat';
      }
      case PlayModeType.Random: {
        return 'ic:outline-shuffle';
      }
      case PlayModeType.Single: {
        return 'ic:outline-repeat-one';
      }
    }
  });

  // volume
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
    playerMode,
    playmode,
    playmodeIcon,
    pause,
    like,
    volume,
    volumeState,
    playerModeToggle,
    pauseToggle,
    likeToggle,
    volumeToggle,
    $volumeReset,
  };
});
