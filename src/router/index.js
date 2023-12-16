import {createRouter, createWebHashHistory} from 'vue-router'
import MainView from '../views/Home.vue'
import SignupView from '../views/Signup.vue'
import AddPost from "@/views/AddPost.vue";
import AllPosts from "@/views/Home.vue";
import login from "@/views/Login.vue";
import Contact from "@/views/Contact.vue";
import APost from "@/views/APost.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: AllPosts
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupView
    },
    {
        path: '/addpost',
        name: 'addpost',
        component: AddPost
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: "/apost/:id",
        name: "APost",
        component: APost,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
