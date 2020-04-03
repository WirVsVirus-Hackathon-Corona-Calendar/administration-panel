import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import { AxiosInstaller } from '@/plugins/axios';

Vue.config.productionTip = false;

let token = '';

if (localStorage.getItem('AUTH_TOKEN')) {
  token = <string>localStorage.getItem('AUTH_TOKEN');
} else if (window.location.hash) {
  // Extract token from URL
  // Id_token=....
  [, token] = window.location.hash
    .split('&')
    .filter((el) => el.includes('id_token'))[0]
    // [id_token, <value>]
    .split('=');

  localStorage.setItem('AUTH_TOKEN', token);
} else {
  window.location.href = 'https://corona-cal.auth.eu-west-1.amazoncognito.com/login?response_type=token&client_id=osupm9rc8kv7jpnhjdtsqu7vj&redirect_uri=https://d30c8b2026z1gr.cloudfront.net';
}

if (!token) {
  alert('No token');
  window.location.href = 'https://corona-cal.auth.eu-west-1.amazoncognito.com/login?response_type=token&client_id=osupm9rc8kv7jpnhjdtsqu7vj&redirect_uri=https://d30c8b2026z1gr.cloudfront.net';
} else {
  AxiosInstaller(
    'https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1',
    token,
    'https://corona-cal.auth.eu-west-1.amazoncognito.com/login?response_type=token&client_id=osupm9rc8kv7jpnhjdtsqu7vj&redirect_uri=https://d30c8b2026z1gr.cloudfront.net',
  );
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
