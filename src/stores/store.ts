import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const storeItems = ref([
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Banana",
    },
    {
      id: 3,
      name: "Blueberry",
    },
    {
      id: 4,
      name: "Cherry",
    },
    {
      id: 5,
      name: "Grapes",
    },
    {
      id: 6,
      name: "Melon",
    },
    {
      id: 7,
      name: "Orange",
    },
  ]);

  return { storeItems };
});
