import {createWebHistory,createRouter} from 'vue-router'
import HomePage from './components/tut38 Routing/Home.vue'
import AboutPage from './components/tut38 Routing/about.vue'
import ServicesPage from './components/tut38 Routing/services.vue'
import ContactPage from './components/tut38 Routing/Contact.vue'
import PageNotFound from './components/tut38 Routing/PageNotFound.vue'



const routes =[
    {
        name:'HomePage',
        path:'/',
        component:HomePage
    },
    {
        name:'AboutPage',
        path:'/About',
        component:AboutPage
    },
    {
        name:'ServicesPage',
        path:'/ServicesPage',
        component:ServicesPage
    },
    {
        name:'ContactPage',
        path:'/ContactPage',
        component:ContactPage
    },
    {
        name:'Not Found',
        path:'/:pathMATCH(.*)*',
        component:PageNotFound
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;