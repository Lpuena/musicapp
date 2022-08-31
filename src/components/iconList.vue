<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-calendar"></use>
      </svg>
      <span>
        每日推荐
      </span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-diantai"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iconList'
}
</script>
<style lang="scss" scoped>
.iconList{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconItem{
    display: flex;
    flex-flow: column;
    //width: 1.3rem;
    align-items: center;
    //justify-content: center;
    font-size: 0.3rem;
    .icon{
      width: 1rem;
      height: 1rem;
    }
  }

}
</style>
