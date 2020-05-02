<template>
  <div class="backContainer">
      <i class="iconfont iconjiantou2"></i>
      <div>
          {{pageName}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.backContainer{
    position: relative;
    text-align: center;
    height: 20px;
    padding: 10px 0;
    .iconjiantou2{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0,-50%)
}
}

</style>
