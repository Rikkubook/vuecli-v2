import Vue from 'vue';
import VueRouter from 'vue-router';
//官方的元件


import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import Child1 from '@/components/pages/child1';
import Child2 from '@/components/pages/child2';
import Child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';
//自訂的分頁元件

Vue.use(VueRouter);
//啟動

export default new VueRouter({
    routes:[
        {
            name:'首頁', //元件呈現的名稱
            path:'/index', //對應的虛擬路徑
            component:Home,//對應的元件
        },
        {
            //name:'分頁', //元件呈現的名稱--->因事涉關係會直接卡片1
            path:'/page', //對應的虛擬路徑
            // component:Page,  //對應的元件
            components:{ //載入多個元件
                default: Page,  //沒有name的
                menu: Menu, //有name的
            },
            //在app.vue 上面渲染兩塊
            children:[
                {
                    name:'卡片1', //元件呈現的名稱
                    path:'', //沒寫會預設帶入不用寫/
                    component: Child1,//對應的元件  
                },
                {
                    name:'卡片2', //元件呈現的名稱
                    path:'child2', //沒寫會預設帶入不用寫/
                    component: Child2,//對應的元件  
                },
                {
                    name:'卡片3', //元件呈現的名稱
                    path:'child3', //沒寫會預設帶入不用寫/
                    component: Child3,//對應的元件  
                },
            ]
        },
    ]
})