import { createDefu, defu } from 'defu';
import { extendTailwindMerge } from 'tailwind-merge';
import type { Strategy } from '~/types';

const customTwMerge = extendTailwindMerge<string, string>({
  extend: {
    classGroups: {
      icons: [(classPart: string) => classPart.startsWith('i-')],
    },
  },
});

const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (namespace === 'default' || namespace.startsWith('default.')) {
    return false;
  }
  if (namespace === 'popper' || namespace.startsWith('popper.')) {
    return false;
  }
  if (namespace.endsWith('avatar') && key === 'size') {
    return false;
  }
  if (namespace.endsWith('chip') && key === 'size') {
    return false;
  }
  if (
    (namespace.endsWith('badge') && key === 'size') ||
    key === 'color' ||
    key === 'variant'
  ) {
    return false;
  }
  if (
    typeof obj[key] === 'string' &&
    typeof value === 'string' &&
    obj[key] &&
    value
  ) {
    // @ts-ignore
    obj[key] = customTwMerge(obj[key], value);
    return true;
  }
});

export function mergeConfig<T>(strategy: Strategy, ...configs: any): T {
  if (strategy === 'override') {
    return defu({}, ...configs) as T;
  }

  return defuTwMerge({}, ...configs) as T;
}

export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysToOmit: K[] | any[]
): Pick<T, Exclude<keyof T, K>> {
  const result = { ...object };

  for (const key of keysToOmit) {
    delete result[key];
  }

  return result;
}

export function get(
  object: Record<string, any>,
  path: (string | number)[] | string,
  defaultValue?: any
): any {
  if (typeof path === 'string') {
    path = path.split('.').map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }

  let result: any = object;

  for (const key of path) {
    if (result === undefined || result === null) {
      return defaultValue;
    }

    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}
