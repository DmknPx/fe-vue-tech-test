<template>
  <Button
    class="ml-2"
    icon="pi pi-envelope"
    label="Contact Us"
    severity="help"
    @click="showContactUsDialog"
  />

  <DynamicDialog />

  <Toast position="bottom-center" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

import Button from "primevue/button";
import DynamicDialog from "primevue/dynamicdialog";
import Toast from "primevue/toast";
import { useDialog } from "primevue/usedialog";
import { useToast } from "primevue/usetoast";
import type { ContactMessageData } from "../types/contact-us.types";

const contactUsComponent = defineAsyncComponent(() => import("./ContactUsForm.vue"));
const dialog = useDialog();
const toast = useToast();

const sendMessage = async (messageData: ContactMessageData) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

const showSuccessToast = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "Message has been successfully sent",
    life: 3000,
  });
};

const showContactUsDialog = () => {
  const dialogRef = dialog.open(contactUsComponent, {
    props: {
      header: "Contact Us",
      style: {
        width: "25vw",
      },
      breakpoints: {
        "960px": "50vw",
        "640px": "90vw",
      },
      modal: true,
    },
    emits: {
      onSend: async (messageData: ContactMessageData) => {
        try {
          await sendMessage(messageData);
          dialogRef.close();
          showSuccessToast();
        } catch (error) {
          console.error("Failed to send message: ", error);
        }
      },
    },
  });
};
</script>
