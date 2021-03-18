import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue';
import { BuilderallVueUi } from 'builderall-vue-ui';
import '../scss/app.scss';
import 'builderall-vue-ui/dist/builderall-vue-ui.css';
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Layouts/Layout.vue'
import VueMoment from 'vue-moment'

Vue.use(BootstrapVue);
Vue.use(BuilderallVueUi);
Vue.use(plugin)
Vue.use(VueMoment)

const el = document.getElementById('app')

Vue.prototype.$route = route
Vue.mixin({ methods: { route } })
new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`)
                .then(({ default: page }) => {
                    if (page.layout === undefined) {
                        page.layout = Layout
                    }
                    return page
                }),
        },
    }),
}).$mount(el)

InertiaProgress.init()
