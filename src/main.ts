import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import * as Vivus from 'vivus';

const app = createApp(App)
app.use(router)
app.mount('#app')


window.onload = () => {
    const vivus = new Vivus('logo', {
        type: 'scenario-sync',
        duration: 15, 
        forceRender: false ,
        animTimingFunction:Vivus.EASE
    })
};