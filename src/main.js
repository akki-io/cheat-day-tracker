import { createApp } from 'vue';
import Amplify from 'aws-amplify';
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader';
import App from './App.vue';
// eslint-disable-next-line camelcase
import aws_exports from './aws-exports';
import './assets/index.css';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

createApp(App).mount('#app');
