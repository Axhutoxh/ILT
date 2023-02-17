const routes = [
    {
        path:'',
        name:'main',
        component:()=>import('@/layouts/MainLayout.vue'),
        children:[
            {
                path:'/section-a',
                name:'section-a',
                component:()=>import('@/pages/sectiona/file.vue')
            },      {
                path:'/section-b',
                name:'section-b',
                component:()=>import('@/pages/sectionb/file.vue')
            },    {
                path:'/section-c',
                name:'section-c',
                component:()=>import('@/pages/sectionc/file.vue')
            },
        ]
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('@/pages/ErrorNotFound.vue')
      }
]


export default routes