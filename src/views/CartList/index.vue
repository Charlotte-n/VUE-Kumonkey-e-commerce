<script setup>
import {useCartStore} from "@/stores/addCart";
const cart = useCartStore()

function singleCheck(i,selected){
  // console.log(selected)传入的是这个复选框有没有选中
  //更改pinia里的选中商品中的selected状态，但是不知道是修改哪一个商品的，所以得把skuId来作为商品的标识
  //所以需要一个skuId通过模板来传入
  cart.single(selected,i.skuId)
}
function AllCheck(selected){
  cart.AllChecked(selected)
}
function remove(i){
  console.log(i)
  cart.removeCart(i.skuId)
}
</script>

<template>
  <div class="cart-container">
    <div class="container">
<!--      面包屑导航-->
      <div class="cart-bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>购物车</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
<!--      主题内容-->
      <div class="cart-main">
        <table>
          <thead>
            <tr class="top">
              <th style="width: 100px">
                <el-checkbox @change="AllCheck" :model-value="cart.isAll"></el-checkbox>
              </th>
              <th style="width: 300px">商品信息</th>
              <th style="width: 200px">单价</th>
              <th style="width: 200px">数量</th>
              <th style="width: 200px">小计</th>
              <th style="width: 200px">操作</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="i in cart.cartList" :key="i">
              <td>
                <el-checkbox :model-value="i.selected" @change="(selected)=>singleCheck(i,selected)"></el-checkbox>
              </td>
              <td>
                <div class="goods">
                  <img :src="i.picture" alt="">
                  <p class="detail">{{i.name}}</p>
                </div>
              </td>
              <td>
                <p class="price">￥{{i.price}}</p>
              </td>
              <td class="num">
                <el-input-number v-model="i.count" :min="1"></el-input-number>
              </td>
              <td>
                <p class="smallprice">￥{{i.price*i.count.toFixed(2)}}</p>
              </td>
              <td>
                <p>
                  <el-popconfirm
                      title="确认删除吗?"
                      confirm-button-text="确认"
                      cancel-button-text="取消"
                      @confirm="remove(i)"
                  >
                    <template #reference>
                      <a href="javascript:;" >删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
           <tr v-if="!cart.cartList.length">
            <td class="no" colspan="6">
              <el-empty description="购物车列表为空">
                <el-button class="btn" @click="$router.push('/')">随便逛逛</el-button>
              </el-empty>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
<!--      结算的内容-->
      <div class="bottom">
        <p>共{{cart.allCount}}件商品，已选择{{cart.selectCount}}件，商品合计：￥<span>{{cart.selectPrice.toFixed(2)}}</span></p>
        <div class="total">
          <el-button size="large" class="btn" @click="$router.push(`/checkorder`)">下单结算</el-button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.cart-container{
  .container{
    .cart-bread{
      margin:15px 0 ;
    }
    .cart-main{
      background-color: #ffffff;
      border-radius: 5px;
      padding: 20px;
      table{
        thead{
          font-size: 15px;
          font-weight: normal;
          color: #F28C28;
          .top{


          }

        }
        tbody{
          tr{
            .no{
              text-align: center;
              margin: auto;
              .btn{
                background-color: #F28C28;
                color: #fff;
              }
            }
            td{
              text-align: center;
              .goods{
                display: flex;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                img{
                  width: 80px;
                  height: 80px;
                  align-items: center;
                  margin-right: 10px;
                  border-radius: 10px;
                }
                .detail{
                  align-items: center;
                  line-height: 80px;
                }
              }
            }
          }
        }
      }
    }
    .bottom{
      margin: 20px 0;
      padding: 20px 20px;
      display: flex;
      justify-content: space-between;
      background-color: white;
      border-radius: 5px;
      align-items: center;
      .total{

        .btn{
          background-color: #F28C28;
          color: #ffffff;
        }
      }
    }
  }
}

</style>