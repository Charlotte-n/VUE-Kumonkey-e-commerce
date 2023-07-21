<script setup>



</script>

<template>
  <div class="container">
    <!--    面包屑导航-->
    <div class="bread">
      <div class="cart-bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/cartlist'}">购物车</el-breadcrumb-item>
          <el-breadcrumb-item>结算页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
<div class="check-box">
  <div class="container">

<!--    收货地址-->
    <h3 class="check-title">收货地址</h3>
    <div class="address">
      <div class="left">
        需要添加地址才能修改订单
      </div>
      <div class="right">
        <a href="javascript:;">
          <el-button color="#F28C28" class="btn">添加地址</el-button>
        </a>
      </div>
    </div>
<!--    商品信息-->
    <h3 class="check-title">商品信息</h3>
    <div class="goods-detail">
      <table>
        <thead>
        <tr>
          <th class="line1">商品信息</th>
          <th class="line2">单价</th>
          <th class="line2">单价</th>
          <th class="line2">单价</th>
          <th class="line2">单价</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in 3" :key="i">
          <td>
            <img src="" alt="">
            <div class="info">
              <p class="title">你似乎发放红包</p>
              <p class="spec">凤求凰若非群昵称</p>
            </div>
          </td>
          <td>89</td>
          <td>1</td>
          <td>89</td>
          <td>89</td>

        </tr>
        </tbody>
      </table>
    </div>
<!--    配送选择-->
    <h3 class="check-title">配送选择</h3>
    <div class="send">
      <el-button class="btn">工作日配送</el-button>
      <el-button class="btn">周末配送</el-button>

    </div>
<!--    支付方式-->
    <h3 class="check-title">支付方式</h3>
    <div class="pay">
      <el-button class="btn">在线支付</el-button>
      <el-button class="btn">货到付款</el-button>
    </div>
<!--    全部明细-->
    <h3 class="check-title">全部明细</h3>
    <div class="all">
      <dl>
        <dt>商品件数</dt>
        <dd>1件</dd>
      </dl>
      <dl>
        <dt>商品总价</dt>
        <dd>￥97</dd>
      </dl>
      <dl>
        <dt>运   费</dt>
        <dd>8元</dd>
      </dl>
      <dl>
        <dt>应付总额</dt>
        <dd class="price">￥97</dd>
      </dl>
    </div>
<!--    按钮-->
    <div  class="btn">
      <el-button class="btn2" color="#F28C28" disabled size="large">提交订单</el-button>
    </div>

  </div>
</div>
</template>

<style scoped lang="scss">
.bread{
  margin-top: 15px;
}
.check-box{
  margin-top: 15px;
  .container{
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    .check-title{
      margin-top: 30px;
      &:first-child{
        margin-top: 0;
      }
      font-size: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgb(245, 245, 245);
    }
    .address{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 65px;
      margin-top: 20px;
      border: 1px solid rgba(245,245,245);
      border-radius: 5px;
      .left{
        padding-left: 5px;
        color: #F28C28;
      }
      .right{
        padding-right: 25px;
        .btn{
          color: white;
        }
      }
    }
    .goods-detail{
      margin-top: 15px;
        table{
          border-collapse: collapse;
          border-spacing: 0;
          border-radius: 5px;

          thead{
            height: 60px;
            background-color: rgba(245,245,245);
            tr{
              font-size: 15px;

                .line1{
                  font-weight: normal;
                  width: 580px
                }
                .line2{
                  font-weight: normal;
                  width: 150px;
                }
            }
          }
          tbody{
            tr{

              td{
                text-align: center;
                margin-top: 15px;
                &:first-child{
                  display: flex;
                  text-align: left;
                  img{
                    margin-right: 20px;
                    width: 80px;
                    height: 80px;
                    border-radius: 15px;
                  }
                  .info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                  }
                  p{
                    color: #999;
                  }

                }
              }
            }
          }
        }
    }
    .send{
      .btn{
        margin-top: 15px;
        &:first-child{
          border: 1px solid #F28C28;
          color: #F28C28;
        }

      }
      margin-bottom: 15px;
    }
    .pay{
      margin-bottom: 15px;
      .btn{
        margin-top: 15px;
        &:first-child{
          border: 1px solid #F28C28;
          color: #F28C28;
        }
      }
    }
    .all{
      margin-top: 20px;
      dl{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        dt{
          margin-right: 100px;
          color: #999999;
        }
        .price{
          color: $priceColor;
          font-size: 17px;
        }
        dd{

        }
      }

    }
    .btn{
      margin-top: 20px;
      text-align: right;
    }

  }
}
</style>