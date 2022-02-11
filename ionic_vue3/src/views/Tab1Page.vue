<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button router-link="/button">
        <ion-icon :icon="walk"></ion-icon>
        router-link 跳转 buttonpage
      </ion-button>
      <br />
      <ion-button @click="this.$router.push('/icon')">
        JS方法跳转 跳转 iconpage
      </ion-button>
      <br>
      <ion-button router-link="/list">
         跳转 listpage
      </ion-button>
      <br>
      <ion-button router-link="/from">
         跳转 frompage
      </ion-button>
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
  IonButton,
  IonIcon
} from "@ionic/vue";

import { 
  walk
 } from "ionicons/icons";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon
  },
  setup() {
    return{
      walk
    }
  }
};
</script>