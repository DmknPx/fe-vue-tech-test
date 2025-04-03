<template>
  <Card>
    <template #title>{{ item.name }}</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique. Blanditiis
        dignissimos beatae itaque sunt? Laudantium esse labore velit molestias voluptatum quisquam,
        architecto eum dicta vero, aut optio minima quod?
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";

defineProps<{
  item: {
    id: number;
    name: string;
  };
}>();
</script>
