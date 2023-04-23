import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import Vivus from 'vivus';
// import breadcrumbs from 'vue-3-breadcrumbs'

const app = createApp(App)
app.use(router)
app.mount('#app')

// app.use(breadcrumbs, {
//     includeComponent: false // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
// })

window.onload = () => {
    const vivus = new Vivus('logo', {
        type: 'scenario-sync',
        duration: 15, 
        forceRender: false ,
        animTimingFunction:Vivus.EASE
    })
};