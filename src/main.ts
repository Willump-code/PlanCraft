// script
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import components from './components/ui/index'

// styles
import 'normalize.css'
import '~styles/style.scss'


const app = createApp(App)


components.forEach(e=>{
        app.component(e.name, e.component)
})
app
        .use(createPinia())
        .use(router)
        .mount('#app')










