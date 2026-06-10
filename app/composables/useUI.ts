import { extendTailwindMerge } from 'tailwind-merge';
import type { Ref } from 'vue';

const twMerge = extendTailwindMerge<string, string>({
  extend: {
    classGroups: {
      icons: [(classPart: string) => classPart.startsWith('i-')],
    },
  },
});

export const useUI = <T extends Record<string, string>>(
  _key: string,
  $ui?: Ref<(Partial<T> & { strategy?: string }) | undefined>,
  $config?: Ref<T> | T,
  $wrapperClass?: Ref<string>,
  _withAppConfig = false
) => {
  const $attrs = useAttrs();

  const ui = computed(() => {
    const override = toValue($ui) as Partial<T> | undefined;
    const config = { ...(toValue($config) as T) };
    const wrapperClass = toValue($wrapperClass);

    if (wrapperClass) {
      (config as any).wrapper = twMerge((config as any).wrapper, wrapperClass);
    }
    if (override) {
      for (const key of Object.keys(override) as (keyof T)[]) {
        if (key === 'strategy') continue;
        const val = override[key];
        (config as any)[key] =
          typeof (config as any)[key] === 'string' && typeof val === 'string'
            ? twMerge((config as any)[key], val as string)
            : val;
      }
    }
    return config;
  });

  const attrs = computed(() => {
    const { class: _, ...rest } = $attrs;
    return rest;
  });

  return { attrs, ui };
};
