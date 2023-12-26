import { createApp } from 'vue';
import axios from 'axios';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import store from './components/store';
import App from './App.vue';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';

axios.defaults.baseURL = 'https://6588e84f324d4171525843de.mockapi.io/todo';
const app = createApp(App);
app.use(ToastService);
app.use(PrimeVue);
app.use(store);
app.mount('#app');
