<template>
  <div>
    <Toast />
    <InputText type="text" v-model="value" @keypress.enter="addTodo"/>
    <Button label="ADD" @click="addTodo" />
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { useStore } from 'vuex';

const toast = useToast();
const store = useStore();
const value = ref('');

const addTodo = async () => {
  const data = {
    title: value.value,
    status: false,
    isEdit: false,
  };
  if (!value.value) {
    toast.add({
      severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000,
    });
    return;
  }
  await store.dispatch('addTodo', data);
  toast.add({
    severity: 'success', summary: 'Added', detail: 'Message Content', life: 3000,
  });
  value.value = '';
};
</script>

<style scoped>

</style>
