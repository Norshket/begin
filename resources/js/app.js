import './bootstrap';

import { createApp } from 'vue';
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import router from './router'
import store from './store'
import { $api } from './api'


import App from './components/App.vue';

import './plugins'

const app = createApp({ ...App });

app.config.globalProperties.$api = $api

app
  .use(vuetify)
  .use(i18n)
  .use(store)
  .use(router).mount('#app');
