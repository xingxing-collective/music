import { PlayModeType } from '~/types/player';

export const usePlayerStore = defineStore('player', () => {
  //mini player or player
  const [playerModeState, playerModeStateToggle] = useToggle();
  // pause or play
  const [playState, playStateToggle] = useToggle();
  // like or dislike
  const [likeState, likeStateToggle] = useToggle();

  // play mode
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

  const currentSong = ref();
  const currentTime = ref(0);
  const playlist = shallowRef();

  return {
    playState,
    playmode,
    playmodeIcon,
    playerModeState,
    likeState,
    currentSong,
    currentTime,
    playlist,
    playStateToggle,
    playerModeStateToggle,
    likeStateToggle,
  };
});
