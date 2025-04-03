<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-4" v-for="item of storeItems" :key="item.id">
      <StoreItemComponent :item="item"></StoreItemComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/store";
import StoreItemComponent from "../components/StoreItemComponent.vue";

const { storeItems } = useStore();
</script>
