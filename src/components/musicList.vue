<template>
  <div class="musicList">
    <van-row class="listTop">
      <van-col span="18">
        <span>发现好歌单</span>
      </van-col>
      <van-col span="6">
        <button class="btnTop">查看更多</button>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="mlist">
        <van-swipe :loop="false" :width="200" class="swipeWidth" indicator="none">
          <van-swipe-item class="swipeStyle" v-for="item in musicList" :key="item.id" ref="swipeItem">
            <img :src="item.picUrl" :alt="item.name">
            <span>{{ item.name }}</span>
            <p>{{ item.playCount }}</p>
          </van-swipe-item>
        </van-swipe>
      </van-col>

    </van-row>
  </div>

</template>

<script>
import { getMusicList } from '@/api/index'

export default {
  data() {
    return {
      musicList: []
    }
  },
  created() {
    getMusicList(10).then((res) => {
      console.log(res.data)
      this.musicList = res.data.result
    })
  },
  mounted() {
    // this.$refs.swipeItem.swipeTo()
  }
}
</script>

<style lang="scss" scoped>
.musicList {
  background-color: #0077aa;

  .listTop {
    height: 1rem;

    span {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .btnTop {
      font-size: 0.2rem;
      border: 1px solid #cccccc;
      padding: 0 0.3rem 0.04rem;
      border-radius: 1rem;
    }
  }

  .mlist {
    background-color: red;
    width: 100%;

    .swipeWidth {
      .swipeStyle {
        background-color: orange;
        display: flex;
        flex-flow: column;
        //margin-right: 0.5rem;
        //padding: 0 0.2rem;
        position: relative;

        img {
          width: 80%;
          //margin-right: 0.5rem;

        }

        span {
          font-size: 0.2rem;
          width: 80%;
          //height: ;
        }

        p {
          //position: absolute;
          //right: 0.1rem;
          //top: 0.1rem;
          font-size: 0.2rem;
        }
      }
    }

  }
}
</style>
