<template>
  <div class="app-topnav">
        <template v-if="false">
          <div class="container">
            <ul>
              <li><a href="javascript:;">xiaotuxian001</a></li>
              <li><a href="javascript:;">退出登录</a></li>
              <li><a href="javascript:;">我的订单</a></li>
              <li><a href="javascript:;">会员中心</a></li>
              <li><a href="javascript:;">帮助中心</a></li>
              <li><a href="javascript:;">在线客服</a></li>
            </ul>
          </div>

        </template>
    <template v-else>
      <ul>
        <li><a href="/login">请先登录</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">在线客服</a></li>
      </ul>

    </template>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-topnav{
    background-color:  	#FF7518;
    ul{
        display: flex;
        justify-content: flex-end;
        height: 53px;
        align-items: center;
        li{
            a{
                padding: 0 15px;
                border-right: 1px solid #fff;
                color: #fff;
                font-size: 14px;
                &:hover{
                    color: #333;
                }
                
            }
            &:last-child{
                a{
                    border: none;
                }
            }
        }
    }
}

</style>