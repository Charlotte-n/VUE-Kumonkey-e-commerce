<script setup>
import {checkorderApi,createOrder} from "@/apis/checkorder";
import {onMounted,ref} from "vue";
import {useRouter} from "vue-router";
import {useCartStore} from "@/stores/addCart";

const router = useRouter()
const checkorderAddress = ref({})
const checkData = ref({})
const cart = useCartStore()
//结算页的接口
const getcheckOderApi =async ()=>{
  const res = await checkorderApi()
  // console.log(res)
  //找默认地址为0的
  checkorderAddress.value = res.data.result.userAddresses.find(item=>item.isDefault === 0)
  checkData.value = res.data.result
  // console.log(checkData.value)
}
onMounted(()=>getcheckOderApi())
//对话框的显示和隐藏
const showChange = ref(false)
//地址框的激活
const activeId = ref({})
function show(i){
  // console.log(i)
  activeId.value = i
}
function confirm(){
  //点击确定把获得的对象赋值给checkorderAddress
  checkorderAddress.value = activeId.value
  showChange.value = false

}
function cancle(){
  showChange.value = false
}

//创建订单接口
const createorder = async ()=>{
  const res = await createOrder({
    deliveryTimeType:1,
    payType:1,
    payChannel:1,
    buyerMessage:'',
    goods:checkData.value.goods.map(item=>{
      return {
        skuId:item.skuId,
        count:item.count
      }
    }),
    addressId:checkorderAddress.value.id
  })
  const orderId = res.data.result.id
  //路由跳转,携带着参数
  router.push(
      {
        path:'/pay',
        query:{
          id:orderId
        }
      }
  )
  //更新购物车
  cart.updateCart()
}
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
        <ul  class="detail">
          <li><span>收<i />货<i />人：</span>{{ checkorderAddress.receiver }}</li>
          <li><span>联系方式：</span>{{ checkorderAddress.contact }}</li>
          <li><span>收货地址：</span>{{ checkorderAddress.fullLocation }} {{ checkorderAddress.address }}</li>
        </ul>
      </div>
      <div class="right">
        <a href="javascript:;">
          <button class="btn" style="margin-right: 10px">添加地址</button>
          <button class="btn" @click="showChange = !showChange">切换地址</button>

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
          <th class="line2">数量</th>
          <th class="line2">小计</th>
          <th class="line2">实付</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in checkData.goods" :key="i.id">
          <td>
            <img :src="i.picture" alt="">
            <div class="info">
              <p class="title">{{i.name}}</p>
              <p class="spec">{{i.attrsText}}</p>
            </div>
          </td>
          <td>{{i.price}}</td>
          <td>{{i.count}}</td>
          <td>{{i.payPrice}}</td>
          <td>{{i.totalPayPrice}}</td>

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
        <dd>{{checkData.summary?.goodsCount}}件</dd>
      </dl>
      <dl>
        <dt>商品总价</dt>
        <dd>￥{{checkData.summary?.totalPrice}}</dd>
      </dl>
      <dl>
        <dt>运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费</dt>
        <dd>{{checkData.summary?.postFee}}元</dd>
      </dl>
      <dl>
        <dt>应付总额</dt>
        <dd class="price">￥{{checkData.summary?.totalPayPrice}}</dd>
      </dl>
    </div>
<!--    按钮-->
    <div  class="btn">
      <a @click="createorder">
        <el-button class="btn2" color="#F28C28"  size="large">提交订单</el-button>
      </a>
    </div>

  </div>
</div>
<!--  添加地址-->
<!--  切换地址-->
  <el-dialog
      v-model="showChange"
      title="切换收货地址"
      width="30%"
      center
  >
    <div class="addressWrapper">
      <div class="item">
        <ul v-for="i in checkData.userAddresses" :key="i.id" @click="show(i)" :class="{active:activeId.id === i.id}">
          <li><span>收货人：</span>{{i.receiver}}</li>
          <li><span>联系方式：</span>{{i.contact}}</li>
          <li><span>收货地址：</span>{{i.fullLocation+i.address}}</li>

        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancle">取消</el-button>
        <el-button type="primary" @click="confirm">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
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
      height: 120px;
      margin-top: 20px;
      border: 1px solid rgba(245,245,245);
      border-radius: 5px;
      .left{
        padding-left: 15px;
        color: #F28C28;
        .detail{
          li{
            margin-top: 5px;
            &:first-child{
              margin-top: 0;
            }
          }
        }

      }
      .right{
        padding-right: 25px;
        a{
          display: inline-block;

          .btn{
            color: white;
            border:1px solid #F28C28 ;
            border-radius: 5px;
            padding: 5px 10px;
            background-color: #F28C28;
            cursor: pointer;

          }
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
      display: flex;
      flex-direction: column;

      dl{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        text-align: center;
        dt{
          width: 100px;
          margin-right: 100px;
          color: #999999;
        }
        dd{
          width: 50px;
        }
        .price{
          color: $priceColor;
          font-size: 17px;
        }

      }

    }
    >.btn{
      margin-top: 20px;
      text-align: right;
      .btn2{
        color: white;
      }
    }


  }
}
.addressWrapper{
  .item{
    height: 300px;
    overflow: hidden;
    ul {
      margin-bottom: 10px;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      background: rgb(153, 153, 153,0.3);
      li {
        margin-bottom: 5px;
      }
    }
  }
}
.active{

      background: rgb(251, 206, 177,0.3) !important;

}
</style>