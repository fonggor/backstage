import Vue from 'vue'
import Router from 'vue-router'
import CreateComment from './views/CreateComment.vue';
import ListsComment from './views/ListsComment.vue';
import EditComment from './views/EditComment.vue';

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/comments/lists'
        },
        {
            path: '/comments/lists',
            component: ListsComment
        },
        {
            path: '/comments/create',
            component: CreateComment
        },
        {
            path: '/comments/edit/:id',
            component: EditComment
        }
    ]
})
