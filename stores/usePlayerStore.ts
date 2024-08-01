import type { SongDetail } from '~/composables/NeteaseCloudMusic';
import { PlayModeType } from '~/types/player';
import { shuffleArray } from '~/utils';

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

  //当前播放歌曲
  const currentSongId = ref<number>();
  const currentSongUrl = shallowRef();
  const currentSongDetail = shallowRef<SongDetail>();
  const currentTime = ref(0);
  // 原始歌单
  const playlist = ref<Array<number>>([
    2_018_096_932, 1_330_348_068, 1_817_235_475, 1_393_138_949, 2_069_006_728,
    1_445_556_953, 1_456_890_009, 1_841_002_409,
  ]);
  // 随机歌单
  const randomPlaylist = ref<Array<number>>([]);
  // 心动歌单
  const intelligencePlaylist = ref<Array<number>>([]);

  //下一首播放的歌曲
  const nextSongId = ref<number>();
  const nextSongUrl = shallowRef();
  const nextSongDetail = shallowRef<SongDetail>();

  //上一首播放的歌曲
  const prevSongId = ref<number>();
  const prevSongUrl = shallowRef();
  const prevSongDetail = shallowRef<SongDetail>();

  watch(
    playmode,
    () => {
      if (playmode.value === PlayModeType.Random) {
        randomPlaylist.value = shuffleArray([...playlist.value]);
      }
    },
    {
      immediate: true,
    }
  );

  return {
    playState,
    playmode,
    playmodeIcon,
    playerModeState,
    likeState,
    currentSongId,
    currentSongUrl,
    currentSongDetail,
    currentTime,
    nextSongId,
    nextSongUrl,
    nextSongDetail,
    prevSongId,
    prevSongUrl,
    prevSongDetail,
    playlist,
    randomPlaylist,
    intelligencePlaylist,
    playStateToggle,
    playerModeStateToggle,
    likeStateToggle,
  };
});
