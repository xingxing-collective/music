export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const config = useRuntimeConfig();
  console.log(config);
  if (!config.neteaseCloudMusic.apiUrl)
    throw new Error('NeteaseCloudMusic API Url is not set');
  try {
    return await $fetch(event.context.params!.path, {
      baseURL: config.neteaseCloudMusic.apiUrl,
      params: {
        ...query,
      },
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (error_: any) {
    const status = error_?.response?.status || 500;
    setResponseStatus(event, status);
    return {
      error: String(error_),
    };
  }
});
