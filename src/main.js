import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//global
import ComponenteGlobal from './components/global/ComponenteGlobal.vue';

Vue.component("ComponenteGlobal", ComponenteGlobal)



Vue.config.productionTip = false

// Isso
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// É o mesmo que isso
/*

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

*/

// No primeiro caso, você tem mais controle sobre quando quer que o aplicativo seja montado na #app

//Como seria essa instância totalmente não-abstraída:
/*

new Vue({
  router: router,
  store: store,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')

*/