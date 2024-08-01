const API_URL = import.meta.dev
  ? 'http://localhost:3001/'
  : 'https://xingxing-music-api.vercel.app/';

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

export type Response<T = null> = {
  [P in keyof T]: T[P];
} & APIBaseResponse;

export function register_anonimous(params: RequestBaseConfig = {}): Promise<{
  code: number;
  cookie: string;
  createTime: Date;
  userId: number;
}> {
  return $fetch('/register/anonimous', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}

export function personalized(
  params: { limit?: string | number } & RequestBaseConfig = {}
): Promise<{
  hasTaste: boolean;
  code: number;
  category: number;
  result: Array<Record<string, any>>;
}> {
  return $fetch('/personalized', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}

export function personalized_djprogram(
  params: RequestBaseConfig
): Promise<Response> {
  return $fetch('/personalized/djprogram', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}
export function personalizedMv(params: RequestBaseConfig): Promise<Response> {
  return $fetch('/personalized/mv', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}

export function personalized_newsong(
  params: {
    area?: string | number;
    limit?: string | number;
  } & RequestBaseConfig
): Promise<Response> {
  return $fetch('/personalized/newsong', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}

export function personalized_privatecontent(
  params: RequestBaseConfig = {}
): Promise<{ code: number; result: Array<Record<string, any>>; name: string }> {
  return $fetch('/personalized/privatecontent', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}
export function program_recommend(
  params: { type?: string } & MultiPageConfig & RequestBaseConfig
): Promise<Response> {
  return $fetch('/program/recommend', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}
export function recommend_resource(params: RequestBaseConfig = {}): Promise<{
  code: number;
  featureFirst: boolean;
  haveRcmdSongs: boolean;
  recommend: Array<Record<string, any>>;
  msg: string;
}> {
  return $fetch('/recommend/resource', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}
export enum BannerType {
  pc = 0,
  android = 1,
  iphone = 2,
  ipad = 3,
}

export function banner(
  params: { type?: BannerType } & RequestBaseConfig = {}
): Promise<{ code: number; banners: Array<Record<string, any>> }> {
  return $fetch('/banner', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}

export function songUrl(
  params: { id: string | number; br?: string | number } & RequestBaseConfig
): Promise<{ code: number; data: Array<Record<string, any>> }> {
  return $fetch('/song/url', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}
export enum SoundQualityType {
  standard = 'standard',
  exhigh = 'exhigh',
  lossless = 'lossless',
  hires = 'hires',
}

export function songUrlV1(
  params: { id: string | number; level: SoundQualityType } & RequestBaseConfig
): Promise<{ code: number; data: Array<Record<string, any>> }> {
  return $fetch('/song/url/v1', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
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

export function song_detail(
  params: { ids: string } & RequestBaseConfig
): Promise<
  Response<{
    songs: SongDetail[];
    privileges: unknown[];
    code: number;
  }>
> {
  return $fetch('/song/detail', {
    baseURL: API_URL,
    params,
    credentials: 'include',
  });
}
