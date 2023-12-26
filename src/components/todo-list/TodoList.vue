<template>
  <div class="list-data">
    <todo-item v-for="item in data" :key="item.id" :data="item" />
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

defineProps(['data']);
</script>

<style scoped>
.list-data {
  list-style: none;
  padding-left: 0px;
  max-height: 350px;
  overflow: auto;
  width: 100%;
}

.line-throught {
  text-decoration: line-through;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.list-data_item {
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
}

.item-action {
  display: flex;
  gap: 5px;
}

.btn-edit {
  border: none;
  background: #f18f0cbd;
  border-radius: 4px;
  cursor: pointer;
}

.btn-remove {
  border: none;
  background: #ff0000c7;
  border-radius: 4px;
  cursor: pointer;
}
</style>
