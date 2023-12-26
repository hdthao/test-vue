<template>
  <div class="container">
    <todo-input />
    <todo-list :data="data"/>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import TodoInput from './components/todo-list/TodoInput.vue';
import todoList from './components/todo-list/TodoList.vue';

const store = useStore();
const data = computed(() => store.state.data);
onMounted(() => {
  store.dispatch('fetchData');
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
