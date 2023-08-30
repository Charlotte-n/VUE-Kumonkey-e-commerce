<script setup>
import {getDetailApi} from "@/apis/detail";
import {useRoute} from "vue-router";
import {ref,onMounted} from "vue";
import DetailHot from "@/views/Detail/Components/DetailHot.vue";
import {useCartStore} from "@/stores/addCart";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'


const DetailList = ref({})
const route = useRoute()
const getDetail =async () =>{
  const res = await getDetailApi(route.params.id)
  DetailList.value = res.data.result
  // console.log(res)
}
onMounted(()=>getDetail())

let skuObj = {}
// sku被操作时
function skuChange(sku){
  // console.log(sku)
  skuObj = sku
}
//购物车操作
const count = ref(1)
const useCart = useCartStore()
function changCount(){

}
function addcart(){
  //当数量一发生改变，并且规格也选择的话，把商品信息弄成个对象传递给管理数据的pinia的添加购物车数量的方法
  if(skuObj.skuId){
    useCart.addCart({
      id:DetailList.value.id,
      name:DetailList.value.name,
      picture:DetailList.value.mainPictures[0],
      price:DetailList.value.price,
      count:count.value,
      skuId:skuObj.skuId,
      attrsText:skuObj.specsText,
      selected:true
    })

  }else{
    ElMessage.warning("请选择规格")
  }
}
</script>

<template>
  <div class="detail">
    <div class="container"  v-if="DetailList.details">
<!--      面包屑导航-->
      <div class="bread">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
           <!--
            错误原因：goods一开始{}  {}.categories -> undefined  -> undefined[1]
            1. 可选链的语法?.
            2. v-if手动控制渲染时机 保证只有数据存在才渲染
           -->
          <el-breadcrumb-item :to="{ path: `/category/${DetailList.categories[1].id}` }">{{DetailList.categories[1].name}}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/sub/${DetailList.categories[0].id}` }">{{DetailList.categories[0].name}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{DetailList.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
<!--      详情页-->
      <div class="detail-goods">
        <div class="left">
<!--          图片-->
          <ImageView :imageList="DetailList.mainPictures"></ImageView>
<!--          下面的信息-->
          <ul>
            <li>
              <p class="title">销量人气</p>
              <p class="num">{{DetailList.salesCount}}+</p>
              <p class="subtitle"><i class="iconfont icon-renqiredu"></i>销量人气</p>
            </li>
            <li>
              <p class="title">商品评价</p>
              <p class="num">{{DetailList.commentCount}}+</p>
              <p class="subtitle"><i class="iconfont icon-footer01"></i>查看评价</p>
            </li>
            <li>
              <p class="title">收藏人气</p>
              <p class="num">{{DetailList.collectCount}}+</p>
              <p class="subtitle"><i class="iconfont icon-shoucang"></i>收藏商品</p>
            </li>
            <li>
              <p class="title">品牌信息</p>
              <p class="num">{{DetailList.brand.name}}</p>
              <p class="subtitle"><i class="iconfont icon-pinpaitemai-tianchong"></i>品牌主页</p>
            </li>

          </ul>
        </div>
        <div class="right">
          <p class="e-title">{{DetailList.name}}</p>
          <p class="sub-title">{{DetailList.desc}}</p>
          <div class="price">
            <span>{{DetailList.price}}</span>
            <span>{{DetailList.oldPrice}}</span>
          </div>
          <div class="serve">
            <dl>
              <dt>促销</dt>
              <dd>12月好物放送，App领券购买直降120元</dd>
            </dl>
            <dl>
              <dt>服务</dt>
              <dd>
                <span>无忧退货</span>
                <span>快速退款</span>
                <span>免费包邮</span>
                <a href="javascript:;">查看更多</a>
              </dd>
            </dl>
          </div>
          <!-- sku组件 -->
          <div class="sku">
            <XtxSku :goods="DetailList" @change="skuChange"></XtxSku>
          </div>

          <!-- 数据组件 -->
          <el-input-number v-model="count" :min="1" @change="changCount" />
          <!-- 按钮组件 -->
          <div class="button">
            <el-button color="#FF7518" style="color:#fff " class="button-1" @click="addcart">加入购物车</el-button>
          </div>
        </div>
      </div>
<!--      商品详情-->
      <div class="goods-footer">
        <div class="article">
          <div class="goods-tab">
            <nav>
              <a>商品详情</a>
            </nav>
            <div class="goods-details">
<!--              属性-->
              <div class="attr">
                <ul>
                  <li v-for="item in DetailList.details.properties.slice(0,3)" :key="item.value">
                    <span>{{item.name}}</span>
                    <span>{{item.value}}</span>
                  </li>
                </ul>
<!--                图片-->
                <img :src="img" alt="" v-for="img in DetailList.details.pictures" :key="img">
              </div>
            </div>

          </div>
        </div>
<!--        热销榜-->
        <div class="hot">
          <DetailHot class="hot1" :hotType="1"></DetailHot>
          <DetailHot :hotType="2"></DetailHot>
        </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  margin-top: 15px;

  .container {
    .bread {
      margin-bottom: 15px;
    }

    .detail-goods {
      background-color: #fff;
      display: flex;
      //justify-content: space-between;
      border-radius: 5px;

      .left {
        margin-top: 15px;
        margin-right: 50px;

        ul {
          margin-bottom: 15px;
          padding-left: 15px;
          display: flex;

          li {
            text-align: center;
            margin-right: 20px;

            p {
              font-size: 15px;
              padding-bottom: 5px;

              i {
                color: #F28C28;
                font-size: 15px;
              }
            }

            .title {
              font-size: 14px;
              color: #999999;
            }

            .num {
              color: $priceColor;
              font-size: 17px;
            }
          }
        }
      }

      .right {
        padding-top: 15px;

        p {
          padding-bottom: 15px;
        }

        .e-title {
          font-size: 18px;
        }

        .sub-title {
          font-size: 14px;
          color: #999999;
        }

        .price {
          span {
            &::before {
              content: "￥";
            }

            &:first-child {
              color: $priceColor;
              font-size: 17px;
              padding-right: 5px;
            }

            &:last-child {
              color: #999999;
              font-size: 14px;
              text-decoration: line-through;
            }
          }
        }

        .serve {
          margin-top: 15px;
          margin-bottom: 15px;
          background-color: #f5f5f5;
          width: 500px;
          padding: 20px 0 10px 10px;
          margin-right: 25px;
          border-radius: 5px;

          dl {
            display: flex;

            dt {
              padding-right: 12px;
              margin-bottom: 15px;
              color: #999999;
              font-size: 14px;
            }

            dd {
              font-size: 14px;

              span {
                padding-right: 15px;

                &::before {
                  content: "";
                  display: inline-block;
                  background-color: #F28C28;
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  margin-right: 4px;
                  line-height: 18.5px;

                }
              }

              a {
                color: #F28C28;
              }
            }
          }
        }
        .sku{
          width: 500px;
        }
        .button {
          margin-top: 20px;
          padding-bottom: 15px;

          .button-1 {
            padding: 17px 12px;
          }
        }
      }
    }

    .goods-footer{
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .article{
        background-color: #fff;
        padding: 15px;
        width: 940px;
        border-radius: 5px;
        .goods-tab{
          nav{
            a{
              font-size: 18px;
              font-weight: 800;
            }
          }
          .goods-details{
            .attr{
              ul{
                //padding-top: 15px;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 20px;
                li{
                  width: 400px;
                  margin-top: 15px;
                  span{
                    margin-right: 15px;

                  }
                }
              }
              img{
                width: 100%;
                border-radius: 5px;
              }
            }
          }
        }
      }
      .hot{
        width: 280px;
        //background-color: #fff;
        border-radius: 5px;

      }
    }

  }
}

</style>