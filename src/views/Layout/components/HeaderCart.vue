<script setup>
import {useCartStore} from "@/stores/addCart";
const cart = useCartStore()
function remove(skuId){
  cart.removeCart(skuId)
}
</script>

<template>
  <div class="car">
    <a href="javascript:;">
      <i class="iconfont icon-gouwuche1"></i>
      <span>{{cart.cartList.length}}</span>
    </a>
    <!--              这个是粘贴的文档里的，以后重新自己写-->
    <div class="layer">
      <div class="list">
        <div class="item" v-for="i in cart.cartList" :key="i">
          <RouterLink to="">
            <img :src="i.picture" alt="" />
            <div class="center">
              <p class="name ellipsis-2">
                {{i.name}}
              </p>
              <p class="attr ellipsis"> {{i.attributes}}</p>
            </div>
            <div class="right">
              <p class="price">&yen;{{ i.price }}</p>
              <p class="count">x{{ i.count }}</p>
            </div>
          </RouterLink>
          <i class="iconfont icon-close-new" @click="remove(i.skuId)">x</i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 {{cart.allCount}} 件商品</p>
          <p>&yen;{{cart.allPrice}}</p>
        </div>
        <el-button size="large" class="btn" @click="$router.push('/cartlist')">去购物车结算</el-button>
      </div>
    </div>



  </div>
</template>

<style scoped lang="scss">
.car {
  width: 50px;
  margin-left: 120px;
  position: relative;

  .icon-gouwuche1 {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
  }

  span {
    position: absolute;
    font-size: 10px;
    top: 1px;
    left: 20px;
    background-color: #FF7518;
    border-radius: 10px;
    color: #fff;
    padding: 1px 2px;
  }

  &:hover {
    .layer {
      opacity: 1;
      transform: none;
      z-index: 999;
    }
  }

  .layer {
    opacity: 0;
    transition: all 0.4s 0.2s;
    z-index: 999;
    transform: translateY(-200px) scale(1, 0);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 4px;
    padding-top: 10px;

    &::before {
      content: "";
      position: absolute;
      right: 14px;
      top: -10px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: scale(0.6, 1) rotate(45deg);
      box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    }

    .foot {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 70px;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background: #f8f8f8;
      align-items: center;

      .total {
        padding-left: 10px;
        color: #999;

        p {
          &:last-child {
            font-size: 18px;
            color: $priceColor;
          }
        }
      }
      .btn{
        background-color: #F28C28;
        color: white;
      }
    }


  }
  .list {
    height: 310px;
    overflow: auto;
    padding: 0 10px;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f8f8f8;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #eee;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }

    .item {
      border-bottom: 1px solid #f5f5f5;
      padding: 10px 0;
      position: relative;

      i {
        position: absolute;
        bottom: 38px;
        right: 0;
        opacity: 0;
        color: #666;
        transition: all 0.5s;
      }

      &:hover {
        i {
          opacity: 1;
          cursor: pointer;
        }
      }

      a {
        display: flex;
        align-items: center;

        img {
          height: 80px;
          width: 80px;
        }

        .center {
          padding: 0 10px;
          width: 200px;

          .name {
            font-size: 16px;
          }

          .attr {
            color: #999;
            padding-top: 5px;
          }
        }

        .right {
          width: 100px;
          padding-right: 20px;
          text-align: center;

          .price {
            font-size: 16px;
            color: $priceColor;
          }

          .count {
            color: #999;
            margin-top: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>