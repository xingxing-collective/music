<template>
  <div class="py-4 w-full flex flex-col gap-4">
    <div class="grid grid-cols-2 lg:grid-cols-3">
      <div v-for="subscriber in data?.subscribers" :key="subscriber.userId">
        <div class="col-span-1 w-full grid grid-cols-12 py-3 gap-4">
          <div class="col-span-3">
            <NuxtImg :placeholder="subscriber.avatarUrl ? false : $config.public.image.placeholder"
              :src="subscriber.avatarUrl" class="rounded-[50%]" :alt="subscriber.nickname" />
          </div>
          <div class="col-span-9 flex flex-col gap-1.5 justify-center">
            <div class="hover:text-gray-200 cursor-pointer"><span>{{ subscriber.nickname }}</span></div>
            <div class="text-xs text-neutral-500"><span>{{ subscriber.signature }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  id?: number
}>()

const { data } = useAsyncData('subscribers', async () => {
  return await playlist_subscribers({ id: props.id })
}, {
  watch: [() => props.id]
})

</script>