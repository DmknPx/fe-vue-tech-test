<template>
  <Form
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="resolver"
    @submit="sendClicked"
    class="flex flex-column gap-4 w-full"
  >
    <div class="flex flex-column gap-1">
      <label for="name">Name</label>
      <InputText id="name" name="name" type="text" />
      <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">{{
        $form.name.error?.message
      }}</Message>
    </div>
    <div class="flex flex-column gap-1">
      <label for="email">Email</label>
      <InputText id="email" name="email" type="email" />
      <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
        $form.email.error?.message
      }}</Message>
    </div>
    <div class="flex flex-column gap-1">
      <label for="phone">Phone</label>
      <InputText id="phone" name="phone" type="phone" />
      <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">{{
        $form.phone.error?.message
      }}</Message>
    </div>
    <div class="flex flex-column gap-1">
      <label for="notes">Notes</label>
      <Textarea id="notes" name="notes" type="text" rows="5" cols="30" />
      <Message v-if="$form.notes?.invalid" severity="error" size="small" variant="simple">{{
        $form.notes.error?.message
      }}</Message>
    </div>
    <div class="flex gap-1">
      <Button icon="pi pi-envelope" label="Send" type="submit" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { z } from "zod";

import Button from "primevue/button";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Textarea from "primevue/textarea";

const emit = defineEmits(["send"]);

const initialValues = reactive({
  name: "",
  email: "",
  phone: "",
  notes: "",
});

const resolver = ref(
  zodResolver(
    z.object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),
      phone: z.string().min(1, { message: "Phone number is required" }),
      notes: z.string().min(1, { message: "Notes is required" }),
    }),
  ),
);

const sendClicked = (resolver) => {
  const validationResult = resolver.valid;

  if (!validationResult) {
    return;
  }

  emit("send", resolver.values);
};
</script>
