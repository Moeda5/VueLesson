<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button>返回</ion-back-button>
        </ion-buttons>
        <ion-title>Icon Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Icon Page</ion-title>
        </ion-toolbar>
      </ion-header>
      图标<ion-icon class="red" :icon="airplane"></ion-icon>
      <br>
      <ion-icon class="dark" :icon="hammer"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon
} from "@ionic/vue";

import { 
  airplane,
  hammer
 } from "ionicons/icons";

export default {
  name: "IconPage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonBackButton,
    IonIcon
  },
  setup() {
    return{
      airplane,
      hammer
    }
  }
};
</script>

<style scoped>
  .red{
    font-size: 64px;
    color: brown;
  }
  .dark{
    font-size: 64px;
    color: gray;
  }
</style>