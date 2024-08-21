export default defineNuxtPlugin(async () => {
  //游客登录
  const { cookie } = await register_anonimous();
  const token = useCookie('token');
  token.value = cookie;
});
