<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button>返回</ion-back-button>
                </ion-buttons>
                <ion-title>Button Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Button Page</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-button color="primary"> 普通按钮 </ion-button>
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
    IonButton,
    IonBackButton,
} from "@ionic/vue";

export default {
    name: "ButtonPage",
    components: {
        IonButton,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonButtons,
        IonBackButton,
    },
};
</script>