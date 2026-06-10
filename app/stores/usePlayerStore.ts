import { type SongDetail, SoundQualityType } from '~/composables/NeteaseCloudMusic.ts';
import { PlayModeType } from '~/types/player';
import { shuffleArray } from '~/utils';

export const usePlayerStore = defineStore('player', () => {
  const audio = ref<HTMLAudioElement>();

  // UI: full player overlay vs mini player
  const [isFullPlayer, toggleFullPlayer] = useToggle();
  // UI: currently-playing sidebar
  const isCurrentlyPlayingOpen = ref(false);

  // Playback state
  const [isPlaying, togglePlay] = useToggle();
  const [isLiked, toggleLike] = useToggle();

  // Play mode
  const playMode = ref<PlayModeType>(PlayModeType.Order);
  const playModeIcon = computed(() => {
    switch (playMode.value) {
      case PlayModeType.Order: return 'ic:outline-repeat';
      case PlayModeType.Random: return 'ic:outline-shuffle';
      case PlayModeType.Single: return 'ic:outline-repeat-one';
    }
  });

  // Current song
  const currentSongId = ref<number>();
  const currentSongUrl = shallowRef();
  const currentSongDetail = shallowRef<SongDetail>();
  const currentTime = ref(0);

  // Queue
  const queue = ref<number[]>([
    2_018_096_932, 1_330_348_068, 1_817_235_475, 1_393_138_949,
    2_069_006_728, 1_445_556_953, 1_456_890_009, 1_841_002_409,
  ]);
  const shuffledQueue = ref<number[]>([]);

  // Lyrics
  const currentLyric = shallowRef<{ time: number; content: string }[]>();
  const currentActiveLyricIndex = computed(
    () =>
      currentLyric.value?.findIndex((l, index) => {
        const next = currentLyric.value?.at(index + 1);
        return currentTime.value >= l.time && (next ? currentTime.value < next.time : true);
      }) ?? -1
  );

  // Similar content
  const simiPlaylists = shallowRef<Playlist[]>();
  const simiSongs = shallowRef<SiMiSongs>();

  async function fetchSong(id: number) {
    const [url, detail, lrc] = await Promise.all([
      songUrlV1({ id, level: SoundQualityType.exhigh, realIP: '116.25.146.177' }),
      song_detail({ ids: id.toString(), realIP: '116.25.146.177' }),
      lyric({ id }),
    ]);
    return { lrc: lrc.lrc, songDetail: detail.songs[0], songUrl: url.data[0] };
  }

  function adjacentSongId(dir: 'next' | 'prev') {
    const list = playMode.value === PlayModeType.Random
      ? [...shuffledQueue.value]
      : [...queue.value];
    if (!list.length) throw new Error('队列为空');
    const idx = list.indexOf(currentSongId.value!);
    if (dir === 'next') return list[idx !== -1 && idx === list.length - 1 ? 0 : idx + 1]!;
    return list[idx !== -1 && idx === 0 ? list.length - 1 : idx - 1]!;
  }

  async function skip(dir: 'next' | 'prev', options: { autoplay?: boolean } = { autoplay: true }) {
    currentSongId.value = adjacentSongId(dir);
    if (options.autoplay) {
      isPlaying.value ? await audio.value?.play() : (isPlaying.value = true);
    }
  }

  function addToQueue(songIds: number[]) {
    queue.value.push(...songIds);
  }

  async function setQueue(songIds: number[]) {
    queue.value = songIds;
    [currentSongId.value] = queue.value;
    isPlaying.value = true;
  }

  function clearQueue() {
    queue.value = [];
    shuffledQueue.value = [];
  }

  async function playSong(songId: number) {
    isPlaying.value = true;
    if (songId === currentSongId.value) {
      await audio.value?.play();
    } else {
      const list = playMode.value === PlayModeType.Random ? shuffledQueue.value : queue.value;
      list.splice(list.indexOf(currentSongId.value!) + 1, 0, songId);
      currentSongId.value = songId;
    }
  }

  watch(playMode, () => {
    if (playMode.value === PlayModeType.Random) {
      shuffledQueue.value = shuffleArray([...queue.value]);
    }
  }, { immediate: true });

  watch(isPlaying, async (val) => {
    val ? await audio.value?.play() : audio.value?.pause();
  });

  watch(currentSongId, async (id) => {
    if (!id) return;
    const { songUrl, songDetail, lrc } = await fetchSong(id);
    currentSongUrl.value = songUrl;
    currentSongDetail.value = songDetail;
    currentLyric.value = parseLyric(lrc.lyric);

    const [simiRes, simiSongRes] = await Promise.all([
      simi_playlist({ id }),
      simi_song({ id }),
    ]);
    simiPlaylists.value = simiRes.playlists;
    simiSongs.value = simiSongRes.songs;
  });

  onMounted(async () => {
    await skip('next', { autoplay: false });
  });

  return {
    addToQueue,
    audio,
    clearQueue,
    currentActiveLyricIndex,
    currentLyric,
    currentSongDetail,
    currentSongId,
    currentSongUrl,
    currentTime,
    isCurrentlyPlayingOpen,
    isFullPlayer,
    isLiked,
    isPlaying,
    playMode,
    playModeIcon,
    playSong,
    queue,
    setQueue,
    shuffledQueue,
    simiPlaylists,
    simiSongs,
    skip,
    toggleFullPlayer,
    toggleLike,
    togglePlay,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot));
}
