<template>
  <div class="article">
    <TabBar headerTitle = '海外直邮' searchBol='false' che='true' favor='false'/>
    <div class="main-wrap">
      <div class="outer-box">
        <div class="box-img">
          <img src="https://img.thebeastshop.com/apppictures/2017-10-12/9dbe3e4e063f42573c14bb436b699ba5.png@0o_0l_750w_90q.png">
        </div>
      </div>
      <div class="nav-wrap" ref="move" :class="{'active':searchBarFixed}">
        <div class="nav-box">
          <div class="nav-item" v-for="item in categorie" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <!-- 个人护理大图 -->
      <div class="outer-box">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-22/b6d1ec6361a4a4c1c5608b072f82c5bd.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!-- 个人护理商品数据 -->
      <div class="product-wrap">
        <div class="product-item" v-if="personalOneComputed.length > 10" v-for="item in personalOneComputed" :key="item.id">
          <div class="product-img">
            <img :src="item.img">
          </div>
          <div class="line">{{item.describe}}</div>
          <div class="brand-name">{{item.brand}}</div>
          <div class="brand-name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </div>
      <!-- 面部护理大图 -->
      <div class="outer-box">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-22/d2fb38ea9ad927293a7d97933e4578f9.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!-- 面部护理商品数据 -->
      <div class="product-wrap">
        <div class="product-item">
          <div class="product-img">
            <img src="../../styles/images/p.png">
          </div>
          <div class="line">描述</div>
          <div class="brand-name">英文</div>
          <div class="brand-name">中文</div>
          <div class="price">￥价格</div>
        </div>
      </div>
      <!-- 口服美容护理大图 -->
      <div class="outer-box">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-04/f07569c846b66b521dcfd594f2f22453.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!--口服美容的商品数据 -->
      <div class="product-wrap">
        <div class="product-item">
          <div class="product-img">
            <img src="../../styles/images/p.png">
          </div>
          <div class="line">描述</div>
          <div class="brand-name">英文</div>
          <div class="brand-name">中文</div>
          <div class="price">￥价格</div>
        </div>
      </div>
      <!-- 母婴大图 -->
      <div class="outer-box">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-04/a777993c119c4e607c6835f556f3c23f.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!--母婴的商品数据 -->
      <div class="product-wrap">
        <div class="product-item">
          <div class="product-img">
            <img src="../../styles/images/p.png">
          </div>
          <div class="line">描述</div>
          <div class="brand-name">英文</div>
          <div class="brand-name">中文</div>
          <div class="price">￥价格</div>
        </div>
      </div>
      <!-- footer -->
      <div class="footer">
        <img src="./images/footer-icon.png">
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
  //在mounted钩子中给window添加一个滚动滚动监听事件
  mounted () {
    window.addEventListener('scroll',this.handleScroll)
  },
  data () {
    return {
      //控制导航栏是否固定
      searchBarFixed: false,
      //大分类的ID
      ID: '',
      //小分类的id
      id: '',
      //个人洗护类
      personalOne: [],
      //个人护理
      personalTwo: [],
      //面部护理
      faceThree: [],
      //口服美容
      mouseFour: [],
      //母婴用品
      motherFive: []
    }
  },
  created () {
    let ID = this.$route.params.id
    this.ID = ID
    console.log(this.categorie)
  },
  computed: {
    //拿到大分类的数据
    categories () {
      return this.$store.state.categories
    },
    //拿到所有商品的分类
    products () {
      return this.$store.state.products
    },
    //海外购中小分类
    categorie () {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.ID == this.categories[i].id) {
          return this.categories[i].categorie
        }
      }
    },
    //个人洗护
    personalOneComputed () {
      return this.getProduct(this.personalOne,1)
    }
  },
  methods: {
    //获取海外购中小分类的商品数据的方法
    getProduct(item,id) {
      for (let i = 0; i < this.products.length; i++) {
        if (id == this.products[i].categorieId) {
          item.push(this.products[i])
        }
      }
      return item
    },
    //置于顶部的方法
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop 
      || document.body.scrollTop
      //监听元素到顶部的距离
      //判断滚动的距离如果大于了元素到顶部的距离
      var move = this.$refs.move
      var offsetTop = move.offsetTop
      //console.log(scrollTop)
      if (scrollTop > 420) {
      this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/index.less');
.outer-box{
  width: 100%;
  .box-img{
    margin-bottom: .4rem;
  }
}
.nav-wrap.active{
  position:fixed;
  top: 1.28rem;
}
 /* for Chrome */
//  隐藏滚动条
.nav-wrap::-webkit-scrollbar {
    display: none;
}
.nav-wrap{
  width: 100%;
  border-top: 1px solid @border-color;
  border-bottom: 1px solid @border-color;
  height: 1.2rem;
  line-height: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 100;
  color:@color-minText;
  margin-bottom: .4rem;
  background-color: #fafafa;
  overflow-x: scroll;
  .nav-box{
    touch-action: plan-x;
    width: 13.0667rem;
    height: 1.2rem;
    position: relative;
    white-space: nowrap;
    display: flex;
    .nav-item{
      flex: 1;
      padding:0 .26667rem ;
      text-align: center;
      font-size: .4rem;
      font-weight: 700;
    }
  }
}
.img-box{
  margin-bottom: .4rem;
  width: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
}
//商品列表
.product-wrap {
  overflow: hidden;
  padding: 0 0 0.4rem 0.4rem;
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


.footer{
  padding: .32rem 0 .8rem;
  img{
    width: 1.2rem;
    height: .37333rem;
    display: block;
    margin:0 auto;
  }
}
</style>

