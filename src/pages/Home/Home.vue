<template>
  <div class="home">
    <TabBar headerTitle="野兽派" searchBol="true" che="true" favor="false"/>
    <div class="main">
      <!-- 导航按钮 -->
      <div class="nav-wrap">
        <router-link tag="div" to="/freshStore/6/0" class="nav-item">新鲜上架</router-link>
        <router-link tag="div" to="/week-main" class="nav-item">本周主打</router-link>
        <router-link tag="div" to="/mine" class="nav-item">我的账户</router-link>
      </div>
      <!-- 轮播图 -->
      <div class="bannars">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/bannar1.jpg">
            </div>
            <div class="swiper-slide">
              <img src="./images/bannar2.jpg">
            </div>
            <div class="swiper-slide">
              <img src="./images/bannar3.jpg">
            </div>
            <div class="swiper-slide">
              <img src="./images/bannar4.jpg">
            </div>
          </div>
        <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <!-- 每日更新 -->
      <div class="daily">
        <!-- 每日更新头部 -->
        <div class="daily-title">
          <div class="daily-text">BEAST DAILY</div>
          <div class="time">
            <div class="time-wrap">
              <div class="month">{{this.month}}</div>
              <div class="year">{{this.year}}</div>
            </div>
            <div class="date">{{this.day}}</div>
          </div>
        </div>
        <!-- 每日更新内容 -->
        <div class="daily-item" v-if="(item.id < 8)" v-for="item in categories[0].categorie" :key="item.id">
          <img :src="item.img">
          <div class="title">
            <div class="tag">{{item.name}}</div>
            <div class="text">{{item.title}}</div>
          </div>
          <div class="desc">{{item.text}}</div>
        </div>
      </div>
      <!-- 编辑推荐 -->
      <div class="products">
        <div class="title">
          <div class="text">EDTOR'S PICKS</div>
          <div class="hint">编辑推荐</div>
        </div>
        <div class="product-wrap">
          <div class="product-item" v-if="item.id < 7" v-for="item in edit" :key="item.id">
            <div class="product-img">
              <img :src="item.img">
            </div>
            <div class="line">_</div>
            <div class="brand-name">{{item.brand}}</div>
            <div class="brand-name">{{item.name}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom-icon">
        <img src="./images/bttom-icon.png">
      </div>
    </div>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/TabBar'
window.onload = function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 1500,
    loop:false,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
}
export default {
  components: {
    TabBar
  },
  mounted () {
    this.year = new Date().getFullYear()
    this.day = new Date().getDate()
    this.month = new Date().getMonth() + 1
    let monthList = ["","January","February","March","April","May","June","July","August","September","October","November","December"]
    for(let i = 1; i <= monthList.length; i++){
      if (this.month == i) {
        this.month = monthList[i]
      }
    }
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
    //编辑数据
    edit () {
      return this.$store.state.edit
    }
  },
  data () {
    return {
      year:'',
      day: '',
      month: ''
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../styles/index.less');
.home {
  padding-top: 0.9333rem;
  width: 100%;
}
.nav-wrap {
  position: fixed;
  top: 1.2rem;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  border-bottom: 1px solid #bababa;
  border-top: 1px solid #bababa;
  background-color: #fff;
 .nav-item {
   float: left;
   width: 33.3%;
   box-sizing: border-box;
   text-align: center;
   font-size: .293333rem;
   padding: 0.2rem 0;
   border-right: 1px solid #bababa;
 }
 .nav-item:nth-child(3) {
   border-right: 0;
 }
}
.bannars{
  position: relative;
  overflow: hidden;
  width: 10rem;
  .swiper-container {
    position: relative;
    overflow: visible;
    width: 7.8933rem;
    height: 9.3333rem;
    margin:2rem auto 1.2rem auto;
    text-align: center; 
  }
}
.swiper-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-slide{
    img{
      width: 6.9333rem;
      height: 9.3333rem;
    }
  }
}
.swiper-button-prev {
  position: absolute;
  top: 0;
  left: -1rem;
  width: 0.56rem;
  height: 100%;
  opacity: 0;
}
.swiper-button-next {
  position: absolute;
  top: 0;
  right: -1rem;
  width: 0.56rem;
  height: 100%;
  opacity: 0;
}

/* 每日更新 */
.daily {
  width: 8.6666rem;
  margin: 0 auto;
  border-top: .08rem solid #d8d8d8;
  .daily-title {
    padding: .42666rem 0;
    overflow: hidden;
    .daily-text {
      float: left;
      font-size: 0.72666rem;
      padding: .10666rem 0;
    }
    .time {
      float: right;
      overflow: hidden;
      width: 3.6rem;
      box-sizing: border-box;
      border-left: 2px solid #d8d8d8;
      padding: .18666rem .32rem;
      .time-wrap {
        float: left;
      }
      .date {
        float: right;
        font-size: 0.72666rem;
        line-height: 0.72rem;
      }
    }
  }
}
.daily-item {
  padding-bottom: 1.3333rem;
  img {
    width:100%;
    height:5.6rem;
  }
  .title {
    margin: 0.8rem 0 0.37333rem;
    border-left: 0.053333rem solid #d8d8d8;
    padding-left: 0.32rem;
    .tag {
      font-size: 0.35333rem;
      color:#004c46;
    }
    .text{
      font-size: 0.53333rem;
    }
  }
  .desc {
    font-size: .2566rem;
    padding: 0 .1333rem 0 .373333rem;
  }
}
// 编辑推荐
.products {
  border-top: 0.08rem solid #d8d8d8;
  width: 8.6666rem;
  margin: 0 auto;
  .title {
    overflow: hidden;
    .text {
      float: left;
      font-size: 0.72666rem;
      padding: .42666rem 0;
    }
    .hint {
      float: left;
      font-size: 0.4rem;
      width: 1.8666rem;
      line-height: 0.4rem;
      border-left: 0.053333rem solid #000;
      margin-left: 0.21333rem;
      padding-left:0.21333rem;
      position: relative;
      top:.73rem;
    }
  }
}
.product-wrap {
  overflow: hidden;
  .product-item {
    width: 3.89333rem;
    height: 6.45333rem;
    font-size: 0.34666;
    margin-bottom: .74666rem;
    text-align: center;
    font-weight: 400;
    color: #000;
    .product-img {
      width: 100%;
      height: 4.05333rem;
      background:url('../../styles/images/p.png');
      background-size: contain;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .line {
      width: 100%;
      font-weight: 700;
      font-size: .373333rem;
      margin: .13333rem 0;
      .no-wrap();
    }
    .brand-name{
      .no-wrap();
      width: 100%;
      line-height: .453333rem;
    }
    .price {
      color: #004c46;
      padding-top: .16rem;
    }
  }
  .product-item:nth-child(2n+1) {
    float: left;
  }
  .product-item:nth-child(2n) {
    float: right;
  }
}

//底部
.bottom-icon {
  padding: .32rem 0 ,8rem;
  img {
    width: 1.2rem;
    height: 0.37333rem;
    display: block;
    margin: 0 auto;
  }
}
</style>




