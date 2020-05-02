<template>
  <div>
    <!-- 顶部搜索ks -->
    <indexSearch />
    <!-- 顶部搜索js -->
    <!-- 标签栏切花ks -->
    <van-tabs v-model="active" animated swipeable sticky>
      <van-tab v-for="(item) in categoryList" :key="item.id" :title="item.name">
        <div class="mainContainer"></div>
      </van-tab>
    </van-tabs>
    <!-- 标签栏切花js -->
  </div>
</template>

<script>
import { indexSearch } from '@/components'
import { getCategoryList } from '@/utils/api.js'
export default {
  data () {
    return {
      active: 0,
      categoryList: []
    }
  },
  components: {
    indexSearch
  },
  mounted () {
    getCategoryList().then(res => {
      this.categoryList = res.data.data
    })
    document.querySelector('.van-sticky').onclick = e => {
      console.log(e.target.className)
      if (e.target.className === 'van-sticky') {

      }
    }
  }
}
</script>

<style lange="less" scoped>
.mainContainer {
  height: 500px;
  background-color: #bfa;
}
/deep/.van-tabs__wrap {
  width: 88vw;
}
/deep/.van-sticky::after {
  content: "+";
  position: absolute;
  right: 0;
  top: 0;
  font-size: 32px;
  color: black;
  line-height: 40px;
  width: 12vw;
  text-align: center;
}
</style>
