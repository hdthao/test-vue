<template>
  <div>
    <Toast />
    <div class="content" v-if="!isEdit">
      <span>{{ props.data.title }}</span>
      <div class="content-btn">
        <button class="pi pi-pencil" @click="isEdit = true"></button>
        <button class="pi pi-times" @click="removeTodo(props.data)"></button>
      </div>
    </div>
    <div class="content-edit" v-else>
      <InputText type="text" v-model="props.data.title"/>
      <Button @click="saveTodo(props.data)" label="SAVE" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { ref } from 'vue';

const isEdit = ref(false);
const toast = useToast();
const store = useStore();
const props = defineProps(['data']);
const removeTodo = async (data) => {
  await store.dispatch('deleteTodo', data.id);
  toast.add({
    severity: 'info', summary: 'Deleted', detail: 'Message Content', life: 3000,
  });
};

const saveTodo = async (data) => {
  isEdit.value = false;
  await store.dispatch('editTodo', data);
};
</script>

<style scroped>
.content {
  color: #000000ab;
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  align-items: center;
  background: #ffffff;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.content-edit {
  margin: 10px 0;
}
.content-btn > button {
  margin: 0 5px;
  cursor: pointer;
  padding: 3px;
  border-radius: 2px;
  border: none;
}
button.pi-pencil {
  background: #ffbe00;
}
button.pi-times {
  background: #ff0000c7;
  color: #ffff;
}
</style>
