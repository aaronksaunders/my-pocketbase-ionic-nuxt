<template>
  <ion-page>
    <ion-header>
      <IonToolbar>
        <ion-title>TEST</ion-title>
      </IonToolbar>
    </ion-header>
    <IonContent class="ion-padding">
      <form ref="loginForm">
        <IonItem lines="none">
          <IonInput
            style="
              border: 1px solid lightblue;
              border-radius: 8px;
              background-color: white;
              --padding-start: 10px;
              margin-bottom: 8px;
            "
            type="text"
            name="user"
            placeholder="Email Address"
          ></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonInput
            style="
              border: 1px solid lightblue;
              border-radius: 8px;
              background-color: white;
              --padding-start: 10px;
            "
            type="password"
            name="password"
            placeholder="Password"
          ></IonInput>
        </IonItem>
        <IonButton style="margin: 16px;" type="button" @click="doLogin">SUBMIT</IonButton>
      </form>
    </IonContent>
  </ion-page>
</template>
<script setup lang="ts">
import { alertController } from "@ionic/core";

const loginForm = ref();

const doAlert = async (header: string, message: string) => {
  const a = await alertController.create({
    header,
    message,
    buttons: ["OK"],
  });
  a.present();
};

const doLogin = async () => {
  const user = loginForm.value.elements.user.value;
  const password = loginForm.value.elements.password.value;
  try {
    const authData = await useNuxtApp()
      .$pb.collection("users")
      .authWithPassword(user, password);
    debugger;
    console.log(authData);
    navigateTo("/home");
  } catch (error) {
    console.log(error);
    doAlert("Error Logging In", (error as any)?.message);
  }
};
</script>
<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 40px white inset !important;
  margin: 2px;
}

ion-input.has-focus {
  border-color: rgb(51, 174, 227) !important;
}
ion-button {
  --background: rgb(51, 174, 227) !important;
}
ion-button:hover {
  --background :  rgb(20, 132, 180) !important;
}
</style>
