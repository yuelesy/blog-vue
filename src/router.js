import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login/Login.vue'
import Article from './views/article/Article.vue'
import Log from './views/article/View.vue'
import Edit from './views/article/Edit.vue'
import New from './views/article/New.vue'
import Photo from './views/article/Photo.vue'
import About from './views/login/Mine.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/article',
            name: 'article',
            component: Article
        },
        {
            path: '/article_log/:id',
            name: 'article_log',
            component: Log
        },
        {
            path: '/article_edit/:id',
            name: 'edit',
            component: Edit
        },
        {
            path: '/article_new',
            name: 'new',
            component: New
        },
        {
            path: '/photos',
            name: 'photos',
            component: Photo
        },

    ]
})
