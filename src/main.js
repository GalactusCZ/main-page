import { ViteSSG } from 'vite-ssg'
import { i18n, supportedLocales } from './i18n-config'
import App from './App.vue'
import { routes } from './router'
import './styles/main.scss'

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, head }) => {
        app.use(i18n)
        app.use(head)

        router.beforeEach((to, from, next) => {
            const lang = to.path.startsWith('/en') ? 'en' : 'cs'

            i18n.global.locale.value = lang

            next()
        })
    }
)