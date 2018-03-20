import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
    ],
    mode: 'history'
})
