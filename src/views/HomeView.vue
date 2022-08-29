<template>
  <div class="home">
    <div class="topNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
      <div class="topRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
<!--    轮播图-->
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red" lazy-render>
        <van-swipe-item v-for="(item,i) in images" :key="i">
          <img :src="item.pic">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getBanner } from '@/api/index'

export default {
  name: 'HomeView',
  data() {
    return {
      images: []
    }
  },
  components: {
  },
  created() {
    getBanner(2).then((res) => {
      this.images = res.data.banners
    })
  },
  mounted() {
  },
  methods: {
    // async getBanner() {
    //   const { data: res } = await axios.get('http://localhost:3000/banner?type=2')
    //   this.images = res.banners
    // }
  }

}
</script>
<style lang="scss" scoped>
.home{
  padding: 0 0.4rem;
}
.topNav{
  margin-bottom: 0.3rem;
  font-size: 0.45rem;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  .topCenter{
    width: 6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .active{
      font-weight: 800;
      font-size: 0.6rem;
    }
  }
}
.my-swipe .van-swipe-item {
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
  border-radius: 0.3rem;
  height: 3.6rem;
  color: #fff;
  //font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
