import cardIndex from './src/components/Card/cardIndex.vue'
 
// 这一步判断 window.Vue 是否存在，因为直接引用 vue.min.js， 它会把 Vue 绑到 Window 上，我们直接引用打包好的 js 才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('card-index', cardIndex)
}
//这样就可以使用Vue.use进行全局安装了。
cardIndex.install = function(Vue) {
  Vue.component(cardIndex.name, cardIndex)
}
export default cardIndex