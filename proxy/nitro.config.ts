import process from 'node:process';
import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  routeRules: {
    '/**': { cors: true },
  },
  runtimeConfig: {
    neteaseCloudMusic: {
      apiUrl: process.env.NETEASECLOULDMUSIC_API_URL || '',
    },
  },
});
