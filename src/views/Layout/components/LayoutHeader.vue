<template>
<header class="top-header">
        <div class="container">
            <!-- logo部分 -->
            <h1>
                <a href="javascript:;"></a>
            </h1>

            <!-- 导航部分 -->
            <ul class="top-header-nav">
                <li><a href="javascript:;" class="active">首页</a></li>
                <li v-for="item in CategoryStore.items" :key="item.id"><router-link to="/">{{item.name}}</router-link></li>
                
            </ul>

            <!-- 搜索区域 -->
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜一搜">
            </div>

            <!-- 购物车 -->
            <div class="car">
                <i class="iconfont icon-gouwuche1"></i>
                <span>0</span>
                

            </div>
        </div>
    </header>
  
</template>

<script setup>

import { useCategoryStore } from '@/stores/Category.js'

//使用pinia中的数据
const CategoryStore = useCategoryStore()

</script>
<style lang="scss" scoped>
.top-header{
    background-color: #fff;
    .container{
        display: flex;
        align-items: center;
        position: relative;
        //log部分
        h1{
            a{
                display: block;
                height: 100px;
                width: 100px;
                background: url('@/assets/images/kuhou.png') no-repeat center 18px / contain;
            }
        }
        //导航部分
        .top-header-nav{
            width: 820px;
            display: flex;
            align-items: center;
            padding-left: 40px;
            li{
                margin-right: 40px;
                text-align: center;
                width: 38px;
                a{
                    padding-bottom: 5px;
                    &:hover{
                        border-bottom: 2px solid #F28C28;
                        color: #F28C28;
                    }
                }
                .active{
                    border-bottom: 2px solid #F28C28;
                    color: #F28C28;
                }
            }
        }
        //搜索部分
        .search{
            width: 170px;
            height: 32px;
            position: relative;
            border-bottom:1px solid #e7e7e7 ;
            .iconfont{
                display: inline-block;
                font-size: 17px;
                position: absolute;
                top: 5px;
                left: 0;
                // width: 30px;
                // height: 32px;
            }
            input{
                position: absolute;
                right: 0;
                top: 10px;
                display: block;
                 width: 140px;
                 padding-left: 5px;
                 color: #666
            }
        }

        //购物车部分
        .car{
            width: 50px;
            margin-left: 120px;
            position: relative;
            .icon-gouwuche1{
                font-size: 30px;
                font-family: Arial, Helvetica, sans-serif;
            }
            span{
                   position: absolute;
                   font-size: 10px;
                   top: 1px;
                   left: 20px;
                   background-color: #FF7518;
                   border-radius: 10px; 
                   color: #fff;
                   padding: 1px 2px;
                }
            
                
                
            }
    }
}

</style>