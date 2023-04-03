export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().$pb.authStore.isValid;
  if (!useNuxtApp().$pb.authStore.isValid && to.path !== '/login') {
    return navigateTo("/login");
  }
});
