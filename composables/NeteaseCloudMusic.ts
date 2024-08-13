import defu from 'defu';
import { LRUCache } from 'lru-cache';
import { hash as ohash } from 'ohash';
import type {
  BannerType,
  Comment,
  Lrc,
  MultiPageConfig,
  NitroFetchOptions,
  NitroFetchRequest,
  Playlist,
  RequestBaseConfig,
  Response,
  SongDetail,
  SoundQualityType,
} from '~/types';

const API_URL = import.meta.dev
  ? 'http://localhost:3001/'
  : 'https://xingxing-music-api.vercel.app/';

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
});

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
export function personalizedMv(params: RequestBaseConfig): Promise<Response> {
  return fetchNeteaseClouldMusic('/personalized/mv', {
    params,
  });
}

export function personalized_newsong(
  params: {
    area?: string | number;
    limit?: string | number;
  } & RequestBaseConfig
): Promise<Response> {
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
): Promise<Response> {
  return fetchNeteaseClouldMusic('/simi/song', { params });
}
