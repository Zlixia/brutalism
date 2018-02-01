import Vue from 'vue'
import Router from 'vue-router'

// 页面，按需动态加载
//首页
const Home = resolve => require(['../pages/Home/Home.vue'], resolve)
//新鲜上架
const FreshStore = resolve => require(['../pages/FreshStore/FreshStore.vue'], resolve)
//本周主打
const WeekMain = resolve => require(['../pages/Week-main/Week-main.vue'], resolve)
//我的页
const Mine = resolve => require(['../pages/Mine/Mine.vue'], resolve)
//登录页
const Login = resolve => require(['../pages/Login/Login.vue'], resolve)
//店铺
const Shop = resolve => require(['../pages/Shop/Shop.vue'], resolve)
//商品详情页
const Detail = resolve =>require(['../pages/Detail/Detail.vue'], resolve)
//海外直邮页
const Overseas = resolve =>require(['../pages/Overseas/Overseas.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/freshStore/:ID/:id',
      component: FreshStore
    },
    {
      path: '/Week-main',
      component: WeekMain
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop/:id',
      component: Shop
    },
    {
      path:'/detail/:id',
      component: Detail
    }, 
    {
      path: '/overseas/:id',
      component:Overseas
    }
  ]
})
