<template>
  <header>
    <Menubar class="flex-1" :model="items" />
    <ContactUsComponent />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import Menubar from "primevue/menubar";

import ContactUsComponent from "./ContactUsComponent.vue";

const router = useRouter();

const items = ref([
  {
    label: "Store",
    icon: "pi pi-shop",
    command: () => router.push("/"),
  },
  {
    label: "Group Android",
    icon: "pi pi-android",
    command: () => router.push("/group-android"),
  },
  {
    label: "Group Apple",
    icon: "pi pi-apple",
    command: () => router.push("/group-apple"),
  },
]);
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
}
</style>
