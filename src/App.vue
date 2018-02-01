<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'App',
  created () {
    let that = this
    //异步转到同步，需要依赖babel-polyfill
    async function getData() {
      //获取大分类
      let res = await that.$http.get(api.host + '/categories')
      that.categories = res.data
      that.$store.commit('SAVE_CATEGORIES',that.categories)
      //console.log(res.data)
      //获取所有的商品数据
      let result = await that.$http.get(api.host + '/products')
      that.products = result.data
      that.$store.commit('SAVE_PRODUCTS',that.products)
      //获取所有编辑商品数据
      let edit = await that.$http.get(api.host + '/edit')
      that.$store.commit('SAVE_EDIT', edit.data)
    }
    getData()
  }
}
</script>
