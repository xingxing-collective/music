type FetchParameters = Parameters<typeof $fetch>;
export type NitroFetchRequest = FetchParameters[0];
export type NitroFetchOptions = FetchParameters[1];

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
  tracks: Array<Record<string, any>>;
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
