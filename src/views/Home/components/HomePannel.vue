<script setup>
defineProps({
  title:{
    type:String
  },
  subTitle:{
    type:String
  }
})

</script>

<template>
<div class="home-pannel">
  <div class="container">
    <div class="head">
<!-- 标题内容     -->
      <h3>{{title}}<small>{{subTitle}}</small></h3>
    </div>
    <div>
<!--      主要内容-->
      <slot></slot>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.home-pannel{
  margin-top: 30px;
  .container{
    background-color: #fff;
    border-radius: 5px;
    .head{
      padding: 20px 15px;
      h3{
        font-size: 20px;

        small{
          font-size: 14px;
          color: #999;
          margin-left: 20px;
          font-weight: normal;
        }
      }
    }

  }
}

</style>