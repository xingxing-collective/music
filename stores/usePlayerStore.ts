import {
  type SongDetail,
  SoundQualityType,
} from '~/composables/NeteaseCloudMusic.ts';
import { PlayModeType } from '~/types/player';
import { shuffleArray } from '~/utils';

export const usePlayerStore = defineStore('player', () => {
  const audio = ref<HTMLAudioElement>();

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

  // 歌词
  const currentLyric = shallowRef<Array<{ time: number; content: string }>>();
  const nextLyric = shallowRef<Array<{ time: number; content: string }>>();
  const prevLyric = shallowRef<Array<{ time: number; content: string }>>();

  /**
   * get the song information
   * @param id song id
   */
  async function getSong(id: number) {
    const [url, detail, lrc] = await Promise.all([
      songUrlV1({
        id: id,
        level: SoundQualityType.exhigh,
        realIP: '116.25.146.177',
      }),
      song_detail({
        ids: id.toString(),
        realIP: '116.25.146.177',
      }),
      lyric({ id: id }),
    ]);
    return {
      songUrl: url.data[0],
      songDetail: detail.songs[0],
      lrc: lrc.lrc,
    };
  }

  /**
   * 获取下一首或者上一首歌曲
   * @param m 上一首或者下一首
   * @returns song id
   */
  function getNextSongId(m: 'next' | 'prev') {
    let nextIndex = 0;
    const currentPlaylist =
      playmode.value === PlayModeType.Random
        ? [...randomPlaylist.value]
        : [...playlist.value];
    if (currentPlaylist.length === 0) {
      throw new Error('暂无歌曲');
    }
    const index = currentPlaylist.indexOf(currentSongId.value!);
    if (m === 'next') {
      nextIndex =
        index !== -1 && index === currentPlaylist.length - 1 ? 0 : index + 1;
    } else {
      nextIndex =
        index !== -1 && index === 0 ? currentPlaylist.length - 1 : index - 1;
    }
    return currentPlaylist[nextIndex];
  }

  /**
   * 切换歌曲
   * @param m  上一首或者下一首
   * @param options
   */
  async function control(
    m: 'next' | 'prev',
    options: {
      autoplay?: boolean;
    } = { autoplay: true }
  ) {
    // 第一次加载时并没有获取上一首或者下一首歌曲信息
    if (m === 'next' && nextSongId.value) {
      currentSongId.value = nextSongId.value;
    } else if (m === 'prev' && prevSongId.value) {
      currentSongId.value = prevSongId.value;
    } else {
      currentSongId.value = getNextSongId(m);
    }

    if (options.autoplay) {
      if (playState.value) {
        await audio.value?.play();
      } else {
        playState.value = true;
      }
    }
  }

  /**
   *
   * @param songIds
   */
  function addSongs(songIds: number[]) {
    playlist.value.push(...songIds);
  }
  /**
   *
   * @param songIds
   */
  async function replacePlaylist(songIds: number[]) {
    playlist.value = songIds;
    currentSongId.value = playlist.value[0];
    playState.value = true;
  }

  function clearPlaylist() {
    playlist.value = [];
    randomPlaylist.value = [];
  }

  async function removeSong(songId: number) {}

  /**
   * 播放歌曲
   * @param songId 播放的歌曲Id
   */
  async function playSong(songId: number) {
    playState.value = true;
    if (songId === currentSongId.value) {
      await audio.value?.play();
    } else {
      if (playmode.value === PlayModeType.Random) {
        randomPlaylist.value.splice(
          randomPlaylist.value.indexOf(currentSongId.value!),
          0,
          songId
        );
      } else {
        playlist.value.splice(
          playlist.value.indexOf(currentSongId.value!),
          0,
          songId
        );
      }
      currentSongId.value = songId;
    }
  }

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

  watch(playState, async (newVal) => {
    if (newVal) {
      await audio.value?.play();
    } else {
      audio.value?.pause();
    }
  });

  watch(currentSongId, async (newVal) => {
    if (!newVal) {
      return;
    }
    if (newVal === nextSongId.value) {
      currentSongUrl.value = nextSongUrl.value;
      currentSongDetail.value = nextSongDetail.value;
      currentLyric.value = nextLyric.value;
    } else if (newVal === prevSongId.value) {
      currentSongUrl.value = prevSongUrl.value;
      currentSongDetail.value = prevSongDetail.value;
      currentLyric.value = prevLyric.value;
    } else {
      const { songUrl, songDetail, lrc } = await getSong(newVal);
      currentSongUrl.value = songUrl;
      currentSongDetail.value = songDetail;
      currentLyric.value = parseLyric(lrc.lyric);
    }

    // 预加载下一首要播放的歌曲
    nextSongId.value = getNextSongId('next');
    const {
      songUrl: nextSongUrlData,
      songDetail: nextSongDetailData,
      lrc: nextLrc,
    } = await getSong(nextSongId.value);
    nextSongDetail.value = nextSongDetailData;
    nextSongUrl.value = nextSongUrlData;
    nextLyric.value = parseLyric(nextLrc.lyric);

    prevSongId.value = getNextSongId('prev');
    const {
      songUrl: prevSongUrlData,
      songDetail: prevSongDetailData,
      lrc: prevLrc,
    } = await getSong(prevSongId.value);
    prevSongDetail.value = prevSongDetailData;
    prevSongUrl.value = prevSongUrlData;
    prevLyric.value = parseLyric(prevLrc.lyric);
  });

  //首次渲染
  onMounted(async () => {
    await control('next', { autoplay: false });
  });

  return {
    audio,
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
    currentLyric,
    nextLyric,
    prevLyric,
    playlist,
    randomPlaylist,
    intelligencePlaylist,
    playStateToggle,
    playerModeStateToggle,
    likeStateToggle,
    control,
    getNextSongId,
    getSong,
    addSongs,
    replacePlaylist,
    playSong,
    clearPlaylist,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot));
}
