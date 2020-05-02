<template>
  <div class="indexSearchContainer">
      <!-- 左侧icon 开始 -->
      <div class="leftIcon">
          <i class="iconfont iconnew"></i>
      </div>
      <!-- 左侧icon 结束 -->
      <!-- 中间搜索ks -->
      <div class="searchbox">
          <i class="iconfont iconsearch"></i>
          <span>搜索新闻</span>
      </div>
      <!-- 中间搜索js -->
      <!-- 右侧开始 -->
      <div class="rightIcon">
          <i class="iconfont iconwode"></i>
      </div>
      <!-- 右侧js -->

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.indexSearchContainer{
    display: flex;
   padding:0px 0;
    background: red;
    align-items: center;
    color: white;
    .leftIcon{
        .iconnew{
            font-size: 50px;
            padding:0 20px;
        }
    }
    .searchbox{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        background: rgba(255,255,255,0.4);
        height: 32px;
        border-radius: 16px;

    }
    .rightIcon{
        .iconwode{
            font-size: 26px;
            padding:0 20px;
        }
    }
}
</style>
