<template>
  <div class="addCategory">
    <back :pageName="'栏目管理'" />
    <!-- 删除ks -->
    <div class="mainContainer">
      <div class="smallText">点击删除以下频道{{current.length%4}}</div>
      <div v-if="current" class="cateList">
        <div v-for="(item,index) in current" :key="item.id"  class="ItemContainer">
          <div class="cateItem" @click="delcate(index)">{{item.name}}</div>
        </div>
         <div class="ItemContainer" v-for="indexa in ((4-current.length%4)===4?[]:4-current.length%4)" :key="indexa+'a'"></div>
      </div>
    </div>
    <!-- 删除js -->
    <!-- 增加开始 -->
    <div class="mainContainer">
      <div class="smallText">点击增加以下频道</div>
      <div  v-if="del" class="cateList">
        <div v-for="(item,index) in del" :key="item.id"  class="ItemContainer">
          <div class="cateItem" @click="addcate(index)">{{item.name}}</div>
        </div>
         <div class="ItemContainer" v-for="indexa in ((4-del.length%4)===4?[]:4-del.length%4)" :key="indexa+'a'"></div>
      </div>
    </div>
    <!-- 增加结束 -->

  </div>
</template>

<script>
import { back } from '@/components'
export default {
  data () {
    return {
      current: [], // 当前已有的
      del: [] // 已经被删除的
    }
  },
  components: {
    back
  },
  mounted () {
    this.current = JSON.parse(window.localStorage.getItem('categoryList'))
    this.del = JSON.parse(window.localStorage.getItem('delcategoryList')) || []

    // window.localStorage.setItem('categoryList', JSON.stringify(res.data.data))
  },

  methods: {
    delcate (index) {
      this.del.push(this.current[index])
      this.current.splice(index, 1)
      window.localStorage.setItem('categoryList', JSON.stringify(this.current))
      window.localStorage.setItem('delcategoryList', JSON.stringify(this.del))
    },
    addcate (index) {
      this.current.push(this.del[index])
      this.del.splice(index, 1)
      window.localStorage.setItem('categoryList', JSON.stringify(this.current))
      window.localStorage.setItem('delcategoryList', JSON.stringify(this.del))
    }
  }
}
</script>

<style lang="less" scoped>
.addCategory {
  padding: 0 10px;
}
.mainContainer {
  padding-top: 20px;
  .smallText {
    font-size: 14px;
  }
  .cateList {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
    // width: 100vw;
    .ItemContainer {
      width: 25%;
      .cateItem {
        width: 80%;
        margin: 10px auto 0;
        padding: 10px 0 ;
        border: 1px solid #ccc;
        text-align: center;
      }
    }
  }
}
</style>
