import defu from 'defu';
import { LRUCache } from 'lru-cache';
import { hash as ohash } from 'ohash';

const API_URL = import.meta.dev
  ? 'http://localhost:3001/'
  : 'https://xingxing-music-api.vercel.app/';

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
});

type FetchParameters = Parameters<typeof $fetch>;
export type NitroFetchRequest = FetchParameters[0];
export type NitroFetchOptions = FetchParameters[1];

async function _fetchNeteaseClouldMusic(
  request: NitroFetchRequest,
  opts: NitroFetchOptions = {}
) {
  const defaultOptions: NitroFetchOptions = {
    baseURL: API_URL,
    credentials: 'include',
  };
  const options = defu(opts, defaultOptions);
  return await $fetch(request, options);
}

async function fetchNeteaseClouldMusic<T = unknown>(
  request: NitroFetchRequest,
  opts: NitroFetchOptions = {}
): Promise<T> {
  const hash = ohash([request, opts]);
  const state = useState<any>(hash, () => null);
  if (state.value) return state.value;
  if (!promiseCache.has(hash)) {
    promiseCache.set(
      hash,
      _fetchNeteaseClouldMusic(request, opts)
        .then((res) => {
          state.value = res;
          return res;
        })
        .catch((error_) => {
          promiseCache.delete(hash);
          throw error_;
        })
    );
  }
  return promiseCache.get(hash)!;
}

export interface RequestBaseConfig {
  cookie?: string;
  realIP?: string; // IPv4/IPv6 filled in X-Real-IP
  proxy?: string; // HTTP proxy
}
export interface MultiPageConfig {
  limit?: string | number;
  offset?: string | number;
}
export interface APIBaseResponse {
  code: number;
  cookie: string;
  [index: string]: unknown;
}

export type Response<T = unknown> = {
  [P in keyof T]: T[P];
} & APIBaseResponse;

export enum BannerType {
  pc = 0,
  android = 1,
  iphone = 2,
  ipad = 3,
}

export enum SoundQualityType {
  standard = 'standard',
  exhigh = 'exhigh',
  lossless = 'lossless',
  hires = 'hires',
}

export type SongDetail = {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: SongDetailArtist[];
  alia: string[];
  pop: number;
  st: number;
  rt: string | null;
  fee: SongDetailFee;
  v: number;
  crbt: string | null;
  cf: string;
  al: SongDetailAlbum;
  dt: number;
  h: SongDetailQuality | null;
  m: SongDetailQuality | null;
  l: SongDetailQuality | null;
  sq: SongDetailQuality | null;
  hr: SongDetailQuality | null;
  a: unknown | null;
  cd: string;
  no: number;
  rtUrl: unknown | null;
  ftype: number;
  rtUrls: unknown[];
  djId: number;
  copyright: SongDetailCopyright;
  s_id: number;
  mark: number;
  originCoverType: SongDetailOriginCoverType;
  originSongSimpleData: unknown | null;
  tagPicList: unknown | null;
  resourceState: boolean;
  version: number;
  songJumpInfo: unknown | null;
  entertainmentTags: unknown | null;
  awardTags: unknown | null;
  single: number;
  noCopyrightRcmd: unknown | null;
  mv: number;
  rtype: number;
  rurl: unknown | null;
  mst: number;
  cp: number;
  publishTime: number;
};

export type SongDetailArtist = {
  id: number;
  name: string;
  tns: unknown[];
  alias: unknown[];
};

export type SongDetailFee = 0 | 1 | 4 | 8;

export type SongDetailAlbum = {
  id: number;
  name: string;
  picUrl: string;
  tns: unknown[];
  pic: number;
};

export type SongDetailQuality = {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
};

export type SongDetailCopyright = 0 | 1 | 2;

export type SongDetailOriginCoverType = 0 | 1 | 2;

export type Lrc = {
  version: number;
  lyric: string;
};

export type CommentReplied = {
  beRepliedCommentId: number;
  content: string;
  expressionUrl: string;
  ipLocation: Record<string, any>;
  richContent: string;
  status: number;
  user: CommentUser;
};

export type CommentUser = {
  anonym: number;
  authStatus: number;
  avatarDetail: unknown;
  avatarUrl: string;
  commonIdentity: unknown;
  expertTags: unknown;
  experts: unknown;
  followed: boolean;
  liveInfo: unknown;
  locationInfo: unknown;
  mutual: boolean;
  nickname: string;
  remarkName: unknown;
  socialUserId: unknown;
  target: unknown;
  userId: number;
  userType: number;
  vipRights: unknown;
  vipType: number;
};

export type Comment = {
  beReplied: Array<CommentReplied>;
  commentId: number;
  commentLocationType: number;
  content: string;
  liked: boolean;
  likedCount: number;
  owner: false;
  parentCommentId: number;
  pendantData: Record<string, any>;
  richContent: string;
  showFloorComment: unknown;
  status: number;
  time: Date;
  timeStr: string;
  user: CommentUser;
  userBizLevels: unknown;
};

export type Playlist = {
  id: number;
  name: string;
  coverImgId: bigint;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: Date;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: any[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: string;
  titleImage: number;
  titleImageUrl: string;
  detailPageTitle: string;
  englishTitle: string;
  officialPlaylistType: string;
  copied: boolean;
  relateResType: string;
  coverStatus: number;
  subscribers: Array<Record<string, any>>;
  subscribed: boolean;
  creator: Record<string, any>;
  tracks: Array<SongDetail>;
  videoIds: any;
  videos: any;
  trackIds: Array<Record<string, any>>;
  bannedTrackIds: any;
  mvResourceInfos: any;
  shareCount: number;
  commentCount: number;
  remixVideo: any;
  newDetailPageRemixVideo: any;
  sharedUsers: any;
  historySharedUsers: any;
  gradeStatus: string;
  score: any;
  algTags: any;
  distributeTags: Array<Record<string, any>>;
  trialMode: number;
  displayTags: any;
  playlistType: string;
};

export type SiMiSongs = Array<{
  artists: Array<{
    name: string;
  }>;
  name: string;
  album: Record<string, any>;
}>;

export function register_anonimous(params: RequestBaseConfig = {}): Promise<{
  code: number;
  cookie: string;
  createTime: Date;
  userId: number;
}> {
  return fetchNeteaseClouldMusic('/register/anonimous', {
    params,
  });
}

export interface Personalized<T = unknown> {
  category: string;
  result: Array<T>;
}

export type NewSong = {
  alg: string;
  canDislike: boolean;
  copywriter: unknown;
  id: number;
  name: string;
  picUrl: string;
  song: {
    name: string;
    id: number;
    album: {
      picUrl: string;
    };
    artists: [
      {
        name: string;
      },
    ];
    alias: Array<string>;
    transName: string;
  };
  trackNumberUpdateTime: unknown;
  type: number;
};
export type MV = {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: unknown;
  duration: number;
  playCount: number;
  subed: boolean;
  artists: Array<{
    id: number;
    name: string;
  }>;
  artistName: string;
  artistId: number;
  alg: string;
};

export function personalized(
  params: { limit?: string | number } & RequestBaseConfig = {}
): Promise<{
  hasTaste: boolean;
  code: number;
  category: number;
  result: Array<Record<string, any>>;
}> {
  return fetchNeteaseClouldMusic('/personalized', {
    params,
  });
}

export function personalized_djprogram(
  params: RequestBaseConfig
): Promise<Response> {
  return fetchNeteaseClouldMusic('/personalized/djprogram', {
    params,
  });
}
export function personalized_mv(
  params: RequestBaseConfig = {}
): Promise<Response<Personalized<MV>>> {
  return fetchNeteaseClouldMusic('/personalized/mv', {
    params,
  });
}

export function personalized_newsong(
  params: {
    area?: string | number;
    limit?: string | number;
  } & RequestBaseConfig = {}
): Promise<Response<Personalized<NewSong>>> {
  return fetchNeteaseClouldMusic('/personalized/newsong', {
    params,
  });
}

export function personalized_privatecontent(
  params: RequestBaseConfig = {}
): Promise<{ code: number; result: Array<Record<string, any>>; name: string }> {
  return fetchNeteaseClouldMusic('/personalized/privatecontent', {
    params,
  });
}
export function program_recommend(
  params: { type?: string } & MultiPageConfig & RequestBaseConfig
): Promise<Response> {
  return fetchNeteaseClouldMusic('/program/recommend', {
    params,
  });
}
export function recommend_resource(params: RequestBaseConfig = {}): Promise<{
  code: number;
  featureFirst: boolean;
  haveRcmdSongs: boolean;
  recommend: Array<Record<string, any>>;
  msg: string;
}> {
  return fetchNeteaseClouldMusic('/recommend/resource', {
    params,
  });
}

export function recommend_songs(
  params: RequestBaseConfig = {}
): Promise<Response> {
  return fetchNeteaseClouldMusic('/recommend/songs', {
    params,
  });
}

export function banner(
  params: { type?: BannerType } & RequestBaseConfig = {}
): Promise<{ code: number; banners: Array<Record<string, any>> }> {
  return fetchNeteaseClouldMusic('/banner', {
    params,
  });
}

export function songUrl(
  params: { id: string | number; br?: string | number } & RequestBaseConfig
): Promise<{ code: number; data: Array<Record<string, any>> }> {
  return fetchNeteaseClouldMusic('/song/url', {
    params,
  });
}

export function songUrlV1(
  params: { id: string | number; level: SoundQualityType } & RequestBaseConfig
): Promise<{ code: number; data: Array<Record<string, any>> }> {
  return fetchNeteaseClouldMusic('/song/url/v1', {
    params,
  });
}

export function song_detail(
  params: { ids: string } & RequestBaseConfig
): Promise<
  Response<{
    songs: SongDetail[];
    privileges: unknown[];
    code: number;
  }>
> {
  return fetchNeteaseClouldMusic('/song/detail', {
    params,
  });
}

export function lyric(
  params: { id: string | number } & RequestBaseConfig
): Promise<
  Response<{
    lrc: Lrc;
    sgc: boolean;
    sfy: boolean;
    qfy: boolean;
    klyric: Lrc;
    romalrc: Lrc;
    code: number;
  }>
> {
  return fetchNeteaseClouldMusic('/lyric', {
    params,
  });
}

export function comment_music(
  params: {
    id: string | number;
    before?: string | number;
  } & MultiPageConfig &
    RequestBaseConfig
): Promise<
  Response<{
    cnum: number;
    code: number;
    commentBanner: unknown;
    comments: Array<Comment>;
    hotComments: Array<Comment>;
    isMusician: boolean;
    more: boolean;
    moreHot: boolean;
    topComments: [];
    userId: number;
    total: number;
  }>
> {
  return fetchNeteaseClouldMusic('/comment/music', {
    params,
  });
}
export function comment_new(
  params: {
    type?: number | string;
    id: number | string;
    pageNo?: number | string;
    pageSize?: number | string;
    sortType?: number | string;
  } & RequestBaseConfig
): Promise<
  Response<{
    code: number;
    data: {
      comments: Array<any>;
      [key: string]: any;
    };
    message: string;
  }>
> {
  return fetchNeteaseClouldMusic('/comment/new', {
    params,
  });
}

export function playlist_detail(
  params: { id: string | number; s?: string | number } & RequestBaseConfig
): Promise<
  Response<{
    code: number;
    playlist: Playlist;
  }>
> {
  return fetchNeteaseClouldMusic('/playlist/detail', {
    params,
  });
}

export function simi_playlist(
  params: { id: string | number } & MultiPageConfig & RequestBaseConfig
): Promise<
  Response<{
    code: number;
    playlists: Array<Playlist>;
  }>
> {
  return fetchNeteaseClouldMusic('/simi/playlist', {
    params,
  });
}

export function simi_song(
  params: { id: string | number } & MultiPageConfig & RequestBaseConfig
): Promise<
  Response<{
    songs: SiMiSongs;
  }>
> {
  return fetchNeteaseClouldMusic('/simi/song', { params });
}
