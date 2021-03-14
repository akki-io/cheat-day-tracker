import Vue from 'vue';
import Amplify from 'aws-amplify';
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader';
import App from '@/App.vue';
import aws_exports from '@/aws-exports';
import '@/assets/index.css';
require('typeface-inter');
require('vue-moment');

Amplify.configure(aws_exports);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

new Vue({
  render: (h) => h(App),
}).$mount('#app');
