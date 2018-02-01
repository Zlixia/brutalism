export default {
  //存储大分类数据
  SAVE_CATEGORIES (state, data) {
    state.categories = data
  },
  //存储所有商品数据
  SAVE_PRODUCTS (state, data) {
    state.products = data
  },
  //编辑商品数据
  SAVE_EDIT (state, data) {
    state.edit = data
  },
  //小分类商品数据
  SAVE_PRODUCT_STORE (state, data) {
    state.productStore = data
  }
}