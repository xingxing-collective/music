const API_URL = import.meta.dev
  ? 'http://localhost:3001/'
  : 'https://xingxing-music-api.vercel.app/';

export interface RequestBaseConfig {
  cookie?: string;
  realIP?: string; // IPv4/IPv6 filled in X-Real-IP
  proxy?: string; // HTTP proxy
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

export async function registerAnonimous(
  params: RequestBaseConfig = {}
): Promise<{ code: number; cookie: string; createTime: Date; userId: number }> {
  return $fetch('/register/anonimous', { baseURL: API_URL, params });
}

export async function recommendResource(
  params: RequestBaseConfig = {}
): Promise<{
  code: number;
  featureFirst: boolean;
  haveRcmdSongs: boolean;
  recommend: Array<Record<string, any>>;
}> {
  return $fetch('/recommend/resource', { baseURL: API_URL, params });
}

export async function personalizedPrivatecontent(
  params: RequestBaseConfig = {}
): Promise<{ code: number; result: Array<Record<string, any>>; name: string }> {
  return $fetch('/personalized/privatecontent', { baseURL: API_URL, params });
}

export enum BannerType {
  pc = 0,
  android = 1,
  iphone = 2,
  ipad = 3,
}

export async function banner(
  params: { type?: BannerType } & RequestBaseConfig = {}
): Promise<{ code: number; banners: Array<Record<string, any>> }> {
  return $fetch('/banner', { baseURL: API_URL, params });
}