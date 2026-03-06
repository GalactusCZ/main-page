import { ViteSSG } from 'vite-ssg'
import { i18n } from './i18n-config'
import App from './App.vue'
import { routes } from './router'
import './styles/main.scss'

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, head }) => {
        app.use(i18n)
        app.use(head)
    }
)