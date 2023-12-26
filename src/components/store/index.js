import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    FETCH_DATA(state, data) {
      state.data = data;
    },
    ADD_TODO(state, todo) {
      state.data.push(todo);
    },
    REMOVE_TODO(state, id) {
      state.data = state.data.filter((todo) => todo.id !== id);
    },
    EDIT_TODO(state, data) {
      const editDataIndex = state.data.findIndex((elm) => elm.id === data.id);
      if (editDataIndex !== -1) {
        state.data[editDataIndex].title = data.title;
      }
    },
  },
  actions: {
    async editTodo({ commit }, data) {
      await axios.put(`/data/${data.id}`, data);
      commit('EDIT_TODO', data);
    },
    async fetchData({ commit }) {
      const res = await axios.get('/data');
      commit('FETCH_DATA', res.data);
    },
    async addTodo({ commit }, data) {
      const res = await axios.post('/data', data);
      commit('ADD_TODO', res.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`/data/${id}`);
      commit('REMOVE_TODO', id);
    },

  },
});

export default store;
