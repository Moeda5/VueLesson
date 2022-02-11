<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>List Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">List Page</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item detail="ture">
          <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item color="dark">
          <ion-label>Super Mario World</ion-label>
        </ion-item>
      </ion-list>
      <!-- 循环数组 -->
      <ion-list>
        <ion-item v-for="(item,index) in list" :key="index">
          <ion-label>{{ item }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-item-divider>
          <ion-label>A</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>a1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>a2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>a3</ion-label>
        </ion-item>
        
        <ion-item-divider>
          <ion-label>B</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>b1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>b2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>b3</ion-label>
        </ion-item>
      </ion-list>

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
  IonList,
  IonItem,
  IonLabel,
  IonBackButton,
} from "@ionic/vue";
import { toRefs } from "@vue/reactivity";
import { reactive } from "vue";
interface ListData {
  list: any[];
}

export default {
  name: "ListPage",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonBackButton,
  },
  setup() {
    const newsList: ListData = reactive({
      list: [],
    });

    for (let i = 0; i < 10; i++) {
      newsList.list.push("我是第" + i + "数据");
    }

    return {
      ...toRefs(newsList),
    };
  },
};
</script>