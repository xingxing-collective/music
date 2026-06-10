export function generateRandom(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]!;
    array[i] = array[j]!;
    array[j] = temp;
  }
  return array;
}

export function parseLyric(lrc: string) {
  const lyrics = lrc.split('\n');
  const lrcObj = [];
  for (const lyric_ of lyrics) {
    const lyric = decodeURIComponent(lyric_);
    const timeReg = /\[\d*:\d*(([.:])\d*)*]/g;
    const timeRegExpArr = lyric.match(timeReg);
    if (!timeRegExpArr) continue;
    const content = lyric.replace(timeReg, '');
    for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
      const t = timeRegExpArr[k]!;
      const min = Number(String(t.match(/\[\d*/i))?.slice(1));
      const sec = Number(String(t.match(/:\d*/i))?.slice(1));
      const time = min * 60 + sec;
      if (content !== '') lrcObj.push({ content, time });
    }
  }
  return lrcObj;
}

export function formatNumber(number: string | number | undefined | null) {
  number = Number(number) || 0;
  if (number > 100_000_000) return `${Math.round(number / 100_000_000)}亿`;
  if (number > 100_000) return `${Math.round(number / 10_000)}万`;
  return number;
}
