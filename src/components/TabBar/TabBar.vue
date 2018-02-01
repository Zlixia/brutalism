<template>
  <div class="header-wrap">
    <div class="header">
      <!-- 头部左边icon -->
      <div class="header-left">
        <div class="icon" @click="showIcon"></div>
        <!-- 左边icon点击出来的页面 -->
        <div class="beast-menu-wrap" v-show="showBol">
          <div class="menu-wrap">
            <!-- 头部 -->
            <div class="menu-member">
              <div class="member-logo">
                <img src="./images/logo-bg.png" alt="">
              </div>
              <div class="member-logoIn">
                <a href="###">登录/快速注册</a>
                <span></span>
              </div>
              <span class="close" @click="closeBtn"></span>
            </div>
            <!-- 商品店铺主要列表 -->
            <div class="menu-lists">
              <!-- 首页 -->
              <div class="menu-group">
                <div class="menu-item">
                  <h2 @click="toHome">首页</h2>
                </div>
              </div>
              <!-- 商品店铺 -->
              <div class="menu-group">
                <div class="menu-item" v-if="item.id > 1 && item.id < 6" 
                v-for="item in categories" :key="item.id">
                  <h2 @click="changeMenuItem(item.id)">{{item.name}}
                    <span :class="{'active':item.menuItemBol}"></span></h2>
                  <ul class="menu-item-child" v-show="item.menuItemBol">
                    <li class="menu-child" v-for="list in item.categorie" 
                    :key="list.id" @click="toProduct(item.id,list.id)">{{list.name}}</li>
                    <li class="menu-child" @click="goIn(item.id)">进入店铺</li>
                  </ul>
                </div>
              </div>
              <!-- 导航 -->
              <div class="menu-group">
                <div class="menu-item">
                  <h2 @click="toFreshStore">新鲜上架</h2>
                </div>
                <div class="menu-item">
                  <h2 @click="toOverseas">海外直购</h2>
                </div>
                <div class="menu-item">
                  <h2>折扣优惠</h2>
                </div>
                <div class="menu-item">
                  <h2>实体店</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-title">{{headerTitle}}</div>
      <div class="header-right">
        <!-- 搜索 -->
        <div class="search-icon-wrap">
          <div class="search-icon" v-if="searchBol == 'true'">
            <img src="./images/search.png">
          </div>
          <div class="search-wrap"></div>
        </div>
        <!-- 购物车 -->
        <div class="search-icon-wrap" v-if="che == 'true'">
          <div class="che"></div>
        </div>
      </div>
      <!-- 收藏 -->
      <div class="favor-wrap" v-if="favor == 'true'">
        <div class="icon-favor"></div>
      </div>
    </div>
    <div class="placeholder"></div>
  </div>
</template>
<script>
import api from '@/api'
export default {
  props: ['headerTitle','searchBol','che','favor'],
  data () {
    return {
      //大侧边栏显示隐藏
      showBol: false
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
    }
  },
  methods: {
    //跳转到海外直邮页
    toOverseas () {
      this.$router.push(`/overseas/7`)
      this.showBol = false
    },
    //四个店铺下的分类的点击 跳转到相应的页面
    toProduct (ID,id) {
      this.$router.push(`/freshStore/${ID}/${id}`)
      this.showBol = false
    },
    //进入店铺页面
    goIn (id) {
      this.$router.push('/shop/' + id)
    },
    //跳转到新鲜上架
    toFreshStore () {
      this.$router.push(`/freshStore/6/0`)
      this.showBol = false
    },
    //icon的点击
    showIcon () {
      this.showBol = true
    },
    //关闭按钮
    closeBtn () {
      this.showBol = false
    },
    //跳转到首页
    toHome () {
      this.$router.push('/')
      this.showBol = false
    },
    //点击改变列表状态
    changeMenuItem (id) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id == id) {
          this.categories[i].menuItemBol = !this.categories[i].menuItemBol
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../styles/index.less');
.placeholder {
  height: 1.28rem;
}
.header-wrap .header {
  z-index: 100;
  position: fixed;
  top:0 ;
  left: 0;
  height: 1.28rem;
  line-height: 1.28rem;
  text-align: center;
  width:100%;
  color:@color-text;
  font-size: .453333rem;
  background-color: #fff;
}
.header-left {
  position: fixed;
  top: 0.4rem;
  left: 0.4rem;
  z-index: 100;
  .icon {
    width: .586667rem;
    height: .586667rem;
    background: url('./images/header-left.png') 0 0 no-repeat;
    background-size: 100%;
  }
}
.header-title {
  padding: 0 1.6rem;
}
.header-right {
  position: absolute;
  top:0.4rem;
  right: 0.4rem;
  overflow: hidden;
}
.search-icon-wrap {
  float: left;
  margin-left: 0.4rem;
  .search-icon {
    width: .586667rem;
    height: .586667rem;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left:0;
    }
  }
  .che {
    width: .586667rem;
    height: .586667rem;
    background: url('./images/che.png') 0 0 no-repeat;
    background-size: 100%;
  }
}
.beast-menu-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.menu-wrap {
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 8.6667rem;
  text-align: left;
  letter-spacing: 0.02222rem;
  font-size: @font-14;  
  background-color: #3c3c3c;
  color:#fff;
  overflow-y: scroll;
}
.menu-member {
  padding: 0.93333rem 0 0.93333rem 0.8rem;
  overflow: hidden;
  border-bottom: 2px solid @color-blackLine;
  .member-logo{
    float: left;
    width: 1.49333rem;
    height: 1.49333rem;
    margin-right: .4rem;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
  }
  .member-logoIn {
    float: left;
    position: relative;
    top: 0.12rem;
    a {
      color: #cccccc;
    }
    span {
      display: inline-block;
      width: .266667rem;
      height: .266667rem;
      background: url('./images/more-bg.png') 0 50% no-repeat;
      background-size: 100%;
      transform: rotate(-90deg)
    }
  }
  .close {
    position: absolute;
    top: .533333rem;
    right: .533333rem;
    width: 0.32rem;
    height: 0.32rem;
    background: url('./images/close-bg.png') 0 0 no-repeat;
    background-size: 100%;
    
  }
}
.menu-group {
  
  h2 {
    position: relative;
    padding: 0 0.4rem;
    font-size: .4rem;
    border-top: 2px solid @color-blackLine;
    border-bottom: 2px solid @color-blackLine;
    box-sizing: border-box;
    span {
      position: absolute;
      right: 0.4rem;
      top: 40%;
      width: .18666rem;
      height: .373333rem;
      background: url('./images/more-bg.png') 0 50% no-repeat;
      background-size: 100%;
      transform: rotate(0deg);
    }
    span.active{
      transform: rotate(180deg);
    }
  }
  .menu-item-child {
    padding: 0.26666rem 0;
    background-color: #323232;
    .menu-child {
      padding-left: 0.9866rem;
      height: 1.06666rem;
      line-height: 1.06666rem;
      overflow: hidden;
      color: #d7d7d7;
      font-size:.374rem;
    }
  }
}

//收藏
.favor-wrap {
  position: absolute;
  top: 0;
  right: 0rem;
  .icon-favor {
    margin-right: .4333rem;
    width: .5866rem;
    height: 1.28rem;
    background: url('./images/favor-bg.png') 0 50% no-repeat;
    background-size: contain;  
  }
}
</style>

