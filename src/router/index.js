import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = ()=>import("../views/home/Home")
const Profile = ()=>import("../views/profile/Profile")
const CateGory = ()=>import("../views/category/Category")
const ShoppingCart = ()=>import("../views/shoppingCart/ShoppingCate")
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        component:Home,
    },
    {
        path: '/category',
        component:CateGory,
    },
    {
        path: '/cart',
        component:ShoppingCart,
    },
    {
        path: '/profile',
        component:Profile,
    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
