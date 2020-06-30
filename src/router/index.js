import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:{
      sections: [
        { name: "因数分解", rink: "1"},
        { name: "方程式", rink: "2" },
        { name: "連立方程×", rink: "3" },
        { name: "図形×", rink: "4" },
        { name: "三角関数×", rink: "5" },
        { name: "対数関数×", rink: "6" },
        { name: "ベクトル×", rink: "7" },
        { name: "微分方程式×", rink: "8" },
        { name: "因数分解", rink: "1" },
        { name: "因数分解", rink: "1" },
        { name: "因数分解", rink: "1" }
        ],
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page1',
    name: 'page1',
    component:() => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"因数分解",
      members: [
        { name: "No.001", rink: "1-1"},
        { name: "No.002", rink: "1-2" },
        { name: "No.003", rink: "1-3" },
        { name: "No.004", rink: "1-4" },
        { name: "No.005", rink: "1-5" },
        { name: "No.006", rink: "1-6" },
        { name: "No.007", rink: "1-7" },
        { name: "No.008", rink: "1-8" },
        { name: "No.009", rink: "1-9" },
        { name: "No.010", rink: "1-10" },
        { name: "No.011", rink: "1-11" }
        ],
    }
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"方程式"
    }
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"連立方程式"
    }
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"図形"
    }
  },
  {
    path: '/page5',
    name: 'page5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"三角関数"
    }
  },
  {
    path: '/page6',
    name: 'page6',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"対数関数"
    }
  },
  {
    path: '/page7',
    name: 'page7',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"ベクトル"
    }
  },
  {
    path: '/page8',
    name: 'page8',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue'),
    props:{
      title:"微分方程式"
    }
  },
  
  
  
  {
    path: '/question/1-1',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue'),
    props:{
      title: "$Q1.$",
      question: "$\\ 次の式を因数分解せよ.\\ y-5x-y+5$",
      example: "$答え方の例:「x^2+2x-3」のときは「x+3 \\ x-1」または「x-1 \\ x+3」(間にスペースあり)と入力すればよい.\\ $",
      answer: "x-1 y-4",
    }
  },{
    path: '/question/1-2',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue'),
    props:{
      title: "$Q2.$",
      question: "$\\ 次の式を因数分解せよ.\\ y-5x-y+5$",
      example: "$答え方の例:「x^2+2x-3」のときは「x+3 \\ x-1」または「x-1 \\ x+3」(間にスペースあり)と入力すればよい.\\ $",
      answer: "3",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '"VueMathPage/"',
  scrollBehavior,
  routes
  linkActiveClass: 'active'
})

export default router
