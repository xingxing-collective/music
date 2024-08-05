export const useLyricStore = defineStore('lyric', () => {
  const playerStore = usePlayerStore();
  const { currentSongId, currentTime } = storeToRefs(playerStore);
  const currentLyric = shallowRef();
  const lyricData =
    shallowRef<
      Array<{
        time: number;
        content: string;
      }>
    >();
  const tlyricData =
    shallowRef<
      Array<{
        time: number;
        content: string;
      }>
    >();

  watch(currentSongId, async (newVal) => {
    if (newVal) {
      currentLyric.value = await lyric({ id: newVal });
      const { lyric: lyricParserData, tlyric: tlyricParserData } = lyricParser(
        currentLyric.value
      );
      lyricData.value = lyricParserData;
      tlyricData.value = tlyricParserData;
    }
  });

  const lyricWithTranslation = computed(() => {
    let ret: Array<{
      time: number;
      content: string;
      contents: string[];
    }> = [];
    // 空内容的去除
    const lyricFiltered = lyricData.value?.filter(({ content }) =>
      Boolean(content)
    );
    // content统一转换数组形式
    if (lyricFiltered?.length) {
      for (const l of lyricFiltered) {
        const { time, content } = l;
        const lyricItem = { time, content, contents: [content] };
        const sameTimeTLyric = tlyricData.value?.find(
          ({ time: tLyricTime }) => tLyricTime === time
        );
        if (sameTimeTLyric) {
          const { content: tLyricContent } = sameTimeTLyric;
          if (content) {
            lyricItem.contents.push(tLyricContent);
          }
        }
        ret.push(lyricItem);
      }
    } else {
      ret =
        lyricFiltered?.map(({ time, content }) => ({
          time,
          content,
          contents: [content],
        })) || [];
    }
    return ret;
  });

  const activeLyricIndex = computed(() => {
    return lyricWithTranslation.value
      ? lyricWithTranslation.value.findIndex((l, index) => {
          const nextLyric = lyricWithTranslation.value[index + 1];
          return (
            currentTime.value >= l.time &&
            (nextLyric ? currentTime.value < nextLyric.time : true)
          );
        })
      : -1;
  });

  return {
    currentLyric,
    lyricData,
    tlyricData,
    lyricWithTranslation,
    activeLyricIndex,
  };
});
