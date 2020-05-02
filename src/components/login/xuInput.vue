<template>
  <div class="xuInputContainer">
      <input
      :class="{error:!status}"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="checkInput"
      @blur="checkBlur">
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: true
    }
  },
  props: {
    placeholder: {
      default: '',
      type: String
    },
    rules: {},
    value: {
      default: ''
    },
    msg: {
      default: '',
      type: String
    }
  },
  mounted () {

  },
  methods: {
    checkInput (e) {
      this.$emit('input', e.target.value)
      // console.log(this.value, this.rules.test(this.value))
      if (!this.rules.test(e.target.value)) {
        this.status = false
      } else {
        this.status = true
      }
    },
    checkBlur () {
      if (!this.status) {
        console.log(this.msg)
        this.$toast(this.msg)
      }
    }
  }
}
</script>

<style lang="less" scoped>
 .xuInputContainer{
     margin-top: 20px;
     input{
         border-bottom: 1px solid #757575;
         font-size: 20px;
         line-height: 36px;
         width: 100%;
     }
     .error{
     border-bottom: 1px solid red;
    }
 }

</style>
