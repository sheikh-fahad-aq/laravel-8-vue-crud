const Welcome = () => import ('./components/Welcome.vue')
const TaskList = () => import ('./components/task/List.vue')
const TaskCreate = () => import ('./components/task/List.vue')
const TaskEdit = () => import ('./components/task/List.vue')


export const routes = [
    {
        name:'home',
        path:'/',
        component: Welcome
    },
    {
        name:'taskList',
        path:'/task',
        component: TaskList
    },
    {
        name:'taskEdit',
        path:'/task/:id/edit',
        component: TaskEdit
    },
    {
        name:'taskAdd',
        path:'/task/add',
        component: TaskCreate
    },

]