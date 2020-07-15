import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faLaptopCode,
    faNetworkWired,
    faServer,
    faDesktop,
    faPrint,
    faTools,
    faBolt,
    faLightbulb,
    faChartBar,
    faPencilRuler,
    faFileCode,
    faCheckCircle,
    faEdit,
    faClock,
    faRedoAlt,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faLaptopCode,
    faNetworkWired,
    faServer,
    faDesktop,
    faPrint,
    faTools,
    faBolt,
    faLightbulb,
    faChartBar,
    faPencilRuler,
    faFileCode,
    faCheckCircle,
    faEdit,
    faClock,
    faRedoAlt,
    faMapMarkerAlt,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);


import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
