import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import './assets/sass/_main.scss';

// var Browser = require('./components/Browser.vue');
// var Browsers = require('./components/BrowserR.vue');
// var allPosts  = require('./components/all-posts.vue');
// var firstFivePosts = require('./components/first-five-posts.vue');
var mainHeader = require('./components/main-header.vue');

var Main = require('./views/Main.vue')
var Post = require('./views/Post.vue')
var Author = require('./views/Author.vue')
var Create = require('./views/Create.vue')

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/post/:id', name: 'post', component: Post },
    { path: '/by/:by', name: 'by', component: Author },
    { path: '/create', name: 'create', component: Create }
  ]
})

new Vue({
  el: '#app',
  components: {
    mainHeader
  },
  router: router
});
