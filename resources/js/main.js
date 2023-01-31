import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'
import "../css/main.css";

createInertiaApp({
    id: "app",
    resolve: name => {
        const pages = import.meta.glob('../inertia/**/*.vue', {eager: true})
        return pages[`../inertia/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el)
    },
})
