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

export interface Response<Body = APIBaseResponse> {
  status: number; // The Http Response Code
  body: Body; // API Response body
  cookie: string[];
}

export function registerAnonimous(params: RequestBaseConfig = {}): Promise<{
  code: number;
  cookie: string;
  createTime: Date;
  userId: number;
}> {
  return $fetch('/register/anonimous', { baseURL: API_URL, params });
}

export function personalized(
  params: { limit?: string | number } & RequestBaseConfig = {}
): Promise<{
  hasTaste: boolean;
  code: number;
  category: number;
  result: Array<Record<string, any>>;
}> {
  return $fetch('/personalized', { baseURL: API_URL, params });
}

export function personalizedDjprogram(
  params: RequestBaseConfig
): Promise<Response> {
  return $fetch('/personalized/djprogram', { baseURL: API_URL, params });
}
export function personalizedMv(params: RequestBaseConfig): Promise<Response> {
  return $fetch('/personalized/mv', { baseURL: API_URL, params });
}

export function personalizedNewsong(
  params: {
    area?: string | number;
    limit?: string | number;
  } & RequestBaseConfig
): Promise<Response> {
  return $fetch('/personalized/newsong', { baseURL: API_URL, params });
}

export function personalizedPrivatecontent(
  params: RequestBaseConfig = {}
): Promise<{ code: number; result: Array<Record<string, any>>; name: string }> {
  return $fetch('/personalized/privatecontent', { baseURL: API_URL, params });
}
export function programRecommend(
  params: { type?: string } & MultiPageConfig & RequestBaseConfig
): Promise<Response> {
  return $fetch('/program/recommend', { baseURL: API_URL, params });
}
export function recommendResource(params: RequestBaseConfig = {}): Promise<{
  code: number;
  featureFirst: boolean;
  haveRcmdSongs: boolean;
  recommend: Array<Record<string, any>>;
  msg: string;
}> {
  return $fetch('/recommend/resource', { baseURL: API_URL, params });
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
  return $fetch('/banner', { baseURL: API_URL, params });
}

export function songUrl(
  params: { id: string | number; br?: string | number } & RequestBaseConfig
): Promise<{ code: number; data: Array<Record<string, any>> }> {
  return $fetch('/song/url', { baseURL: API_URL, params });
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
  return $fetch('/song/url/v1', { baseURL: API_URL, params });
}
