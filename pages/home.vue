<template>
  <ion-page>
    <ion-header>
      <IonToolbar>
        <ion-title>TEST</ion-title>
      </IonToolbar>
    </ion-header>
    <IonContent class="ion-padding">
      <h1>DATA</h1>
      {{ $pb.authStore?.isValid }}
      <ion-button @click="doLogout">LOGOUT</ion-button>
    </IonContent>
  </ion-page>
</template>
<script setup lang="ts">
definePageMeta({
  alias: ["/"],
  middleware: ["auth"],
});

const doLogout = () => {
  useNuxtApp().$pb.authStore.clear();
};
</script>
