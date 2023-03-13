import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComplexRouteView from '../views/ComplexRouteView.vue'
import ParentView from '../views/ParentView.vue'
import FirstChild from '../views/FirstChild.vue'
import SecondChild from '../views/SecondChild.vue'
import GrandChild from '../views/GrandChild.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/path-of-my-choosing/:id',
    name: 'my-named-route-with-params',
    component: ComplexRouteView
  },
  {
    path: '/nested-route-parent',
    name: 'parent',
    component: ParentView,
    children: [
      {
        path: 'child-one',
        name: 'first child',
        component: FirstChild,
        children: [
          {
            path: 'grand-child',
            name: 'first grand child',
            component: GrandChild,
          }
        ]
      },
      {
        path: 'child-two',
        name: 'second child',
        component: SecondChild,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
