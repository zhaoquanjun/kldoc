import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import App from './App.vue'
import { router } from '@/router'
import VMdEditor from './markdown'
import directives from './directives'

const app = createApp(App)

for (let direct in directives) {
  app.directive(direct, directives[direct])
}

app.use(ElementPlus)
app.use(router)
app.use(VMdEditor)
app.mount('#app')
