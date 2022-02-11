<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>表单组件演示 Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item lines="full">
                    <ion-label position="floating">name(floating):</ion-label>
                    <ion-input
                        placeholder="please input your name"
                        v-model="userinfo.username"
                    ></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-label position="floating">age:</ion-label>
                    <ion-input
                        placeholder="please input your age"
                        v-model="userinfo.age"
                    ></ion-input>
                </ion-item>
                
                <ion-item-divider>
                    <ion-label>Label</ion-label>
                </ion-item-divider>
                <ion-item>
                    <ion-label>是否是单身狗</ion-label>
                    <ion-toggle 
                    slot="end" 
                    color="success"
                    v-model="userinfo.flag"
                    ></ion-toggle>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-radio-group name="auto" v-model="userinfo.payType">
                    <ion-list-header>
                        <ion-label>支付方式</ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-label>支付宝</ion-label>
                        <ion-radio value="1"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>微信</ion-label>
                        <ion-radio value="2"></ion-radio>
                    </ion-item>
                </ion-radio-group>
            </ion-list>

            <br />
            用户信息：{{ userinfo }}
            <br />
            <ion-item-divider>
                    <ion-label>Label</ion-label>
                </ion-item-divider>
            <ion-list>
                <ion-item lines="full">
                    <ion-label position="fixed">name(fixed):</ion-label>
                    <ion-input placeholder="please input your name"></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-label position="fixed">age:</ion-label>
                    <ion-input placeholder="please input your age"></ion-input>
                </ion-item>
            </ion-list>
            <br />
            <ion-item-divider>
                    <ion-label>Label</ion-label>
                </ion-item-divider>
            <ion-list>
                <ion-item lines="full">
                    <ion-label position="stacked">name(stacked):</ion-label>
                    <ion-input placeholder="please input your name"></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-label position="stacked">age:</ion-label>
                    <ion-input placeholder="please input your age"></ion-input>
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
    IonBackButton,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonToggle,
    IonRadioGroup,
} from "@ionic/vue";

export default {
    name: "FromPage",
    data() {
        return {
            userinfo: {
                username: "",
                age: "",
                flag: true,
                payType: "1",
                hobbyList: [
                    { title: "吃饭", isChecked: true },
                    { title: "睡觉", isChecked: false },
                    { title: "敲打吗", isChecked: false },
                ],
                cityList: ["北京", "上海", "深圳"],
                city: "深圳",
                info: "",
            },
        };
    },
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonButtons,
        IonBackButton,
        IonList,
        IonItem,
        IonInput,
        IonLabel,
        IonToggle,
        IonRadioGroup,
    },
};
</script>