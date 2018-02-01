<template>
  <div class="freshStore">
    <TabBar :headerTitle="headTitle" searchBol="true" che="true" favor="false"/>
    <div class="main">
      <!-- 排序方式 -->
      <div class="nar-bar">
        <div class="nav-item time" @click="timeBtn">上架时间 
          <span class="icon-sort"><i :class="{'top': timeBol1, 'bottom': timeBol2}"></i></span>
        </div>
        <div class="nav-item price" @click="priceBtn">商品价格 
          <span class="icon-sort"><i :class="{'top': priceBol1, 'bottom': priceBol2}"></i></span></div>
        <div class="nav-item filter" @click="filterBtn">筛选 
          <span class="icon-sort"><i :class="{'active': filterBol}"></i></span></div>
      </div>
      <!-- 商品列表 -->
      <div class="product-wrap">
        <div class="product-item" v-for="item in sortProduct" :key="item.id" @click="toDetail(item.id)">
          <div class="product-img">
            <img :src="item.img">
          </div>
          <div class="line">{{item.describe}}</div>
          <div class="brand-name">{{item.brand}}</div>
          <div class="brand-name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/TabBar'
import api from '@/api'
export default {
  components: {
    TabBar
  },
  data () {
    return {
      //时间向上、向下状态
      timeBol1: false,
      timeBol2: true,
      //价格向上、向下状态
      priceBol1: false,
      priceBol2: false,
      //筛选
      filterBol: false,
      //小分类的所有商品
      productStore: [],
      //头部标题
      headTitle: '',
      categoriesInfo: [],
      productsInfo: []
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    //刷新时重新获取
    if (!this.productStore.length > 0) {
      //重新获取 
      let that = this
      async function getData() {
        let res = await that.$http.get(api.host + '/categories')
        let result = await that.$http.get(api.host + '/products')
        that.categoriesInfo = res.data
        that.productsInfo = result.data
        that.listPage()
      }
      getData()  
      
    } else {
      this.categoriesInfo = this.categories
      this.products = this.products
      this.listPage()
    }
  },
  //监听事件
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "listPage"
  },
  computed: {
    //拿到大分类的数据
    categories () {
      return this.$store.state.categories
    },
    //拿到商品的分类
    products () {
      return this.$store.state.products
    },
    //按照排序方式排序后的商品
    sortProduct () {
      //按照价格排序
      if (this.priceBol1 == false && this.priceBol2 == false) {
        if (this.timeBol1) {
          return this.productStore.slice(0).sort((a,b) => {
            return a.time - b.time
          })
        } else {
          return this.productStore.slice(0).sort((a,b) => {
            return b.time - a.time
          })
        }
      }

      if (this.priceBol1) {
        return this.productStore.slice(0).sort((a,b) => {
          return a.price - b.price
        })
      } else{
        return this.productStore.slice(0).sort((a,b) => {
          return b.price - a.price
        })
      }
    }
  },
  methods: {
    //跳转到商品的详情页
    toDetail (id) {
      this.$router.push('/detail/' + id)
    },
    //获取传递过来的两个id
    listPage () {
      //console.log(this.$route.params)
      //拿到传过来的两个id
      let ID = this.$route.params.ID
      let id = this.$route.params.id
      //console.log(ID,id)
      //判断 四个店铺中的分类下的分类商品
      //循环大分类
      //没有小分类时,直接展示大分类的商品数据
      if (id == 0) {
        for (let i = 0; i < this.categoriesInfo.length; i++) {
          for (let j = 0; j < this.productsInfo.length; j++) {
            if (ID == this.categoriesInfo[i].id && ID == this.productsInfo[j].categoriesId) {
              this.productStore.push(this.productsInfo[j])
              //循环小分类的name，并展示在页面
              this.headTitle = this.categoriesInfo[i].name
            }
          }
        }
      } else {
          //一上来就先初始化
          this.productStore = []
          for (let i = 0; i < this.categoriesInfo.length; i++) {
            let categorie = this.categoriesInfo[i].categorie
            for (let j = 0; j < this.productsInfo.length; j++) {
              if (ID == this.categoriesInfo[i].id && ID == this.productsInfo[j].categoriesId) {
                if (id == this.productsInfo[j].categorieId) {
                  this.productStore.push(this.productsInfo[j])
                }
                //遍历小分类的，展示name值
                for (let z = 0; z < this.categoriesInfo[i].categorie.length; z++) {
                  if (id == this.categoriesInfo[i].categorie[z].id) {
                    this.headTitle = this.categoriesInfo[i].categorie[z].name
                  }
                }
              }
          } 
        }
      }
      this.$store.commit('SAVE_PRODUCT_STORE',this.productStore)
    },
    //上架时间按钮切换状态
    timeBtn () {
      this.priceBol2 = false
      this.priceBol1 = false
      this.filterBol = false
      if (!this.timeBol1) {
        this.timeBol1 = true
        this.timeBol2 = false
      }else {
        this.timeBol1 = false
        this.timeBol2 = true
      }
    },
    //商品价格按钮切换状态
    priceBtn () {
      this.timeBol1 = false
      this.timeBol2 = false
      this.filterBol = false
      if (!this.priceBol1) {
        this.priceBol1 = true
        this.priceBol2 = false
      }else {
        this.priceBol1 = false
        this.priceBol2 = true
      }
    },
    //筛选按钮切换状态
    filterBtn () {
      this.timeBol1 = false
      this.timeBol2 = false
      this.priceBol1 = false
      this.priceBol2 = false
      this.filterBol = !this.filterBol
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/index.less');

.nar-bar {
  display: flex;
  width: 10rem;
  height: 1.17333rem;
  line-height: 1.17333rem;
  background-color: #fafafa;
  border-top: 1px solid #e6e7e8;
  position: fixed;
  z-index: 1;
}
.nav-item {
  flex: 1;
  border-bottom: 1px solid #e6e7e8;
  border-left: 1px solid #e6e7e8;
  text-align: center;
  color: #4d4d4d;
  font-size: .373333rem;
  .icon-sort {
    display: inline-block;
    width: .13333rem;
    height: .266666rem;
  }
}
.icon-sort i{
  font-style: normal;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.nav-item.time .icon-sort i{
  background: url('./images/icon-bg.png') 0 0 no-repeat;
  background-size: 100%;
  &.top {
    background-image: url('./images/icon2.png');
  }
  &.bottom {
    background-image: url('./images/icon1.png');
  }
}
.nav-item.price .icon-sort i{
  background: url('./images/icon-bg.png') 0 0 no-repeat;
  background-size: 100%;
  &.top {
    background-image: url('./images/icon2.png');
  }
  &.bottom {
    background-image: url('./images/icon1.png');
  }
}
.nav-item.filter .icon-sort i{
  width: .24rem;
  background: url('./images/filter-bg.png') 0 0 no-repeat;
  background-size: 100% 100%;
  &.active {
    background-image: url('./images/filter1.png');
  }
}

//商品列表
.product-wrap {
  overflow: hidden;
  padding-top: 1.8666rem;
  padding-left: .4rem;
  .product-item {
    float: left;
    width: 4.4rem;
    height: 6.96rem;
    font-size: 0.34666rem;
    margin-right: .4rem;
    text-align: left;
    font-weight: 400;
    color: #000;
    .product-img {
      width: 100%;
      height: 4.58666rem;
      background:url('../../styles/images/p.png');
      background-size: contain;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .line {
      width: 100%;
      height: .34666rem;
      line-height: .34666rem;
      font-size: .373333rem;
      margin-top: .186666rem;
      padding: .133333rem 0 .053333rem 0;
      color: #9a9a9a;
      .no-wrap();
    }
    .brand-name{
      .no-wrap();
      width: 100%;
      line-height: .453333rem;
      font-size: .34rem;
    }
    .price {
      color: #004c46;
      padding-top: .16rem;
      font-size: .4rem;
      position: relative;
      left: -.133333rem;
    }
  }
}
</style>


