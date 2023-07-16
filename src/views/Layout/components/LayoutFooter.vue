<template>
  <footer class="app-footer">
        <!-- 联系我们 -->
        <div class="contact">
            <div class="container">
                <!-- 客户服务 -->
                <dl>
                    <dt>客户服务</dt>
                    <dd><i class="iconfont icon-footer01"></i>在线客服</dd>
                    <dd><i class="iconfont icon-footer02"></i>问题反馈</dd>
                </dl>
                <!-- 关注我们 -->
                <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-footer03"></i>公众号</dd>
                    <dd><i class="iconfont icon-footer04"></i>微博</dd>
                </dl>
                <!-- 下载app -->
                <dl>
                    <dt>下载App</dt>
                    <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" alt=""></dd>
                    <dd class="download">
                        <span>扫描二维码</span>
                        <span>立马下载App</span>
                        <a href="javascript:;">下载App</a>
                    </dd>
                </dl>
                <!-- 服务热线 -->
                <dl>
                    <dt>服务热线</dt>
                    <dd class="hoseline">400-1111-555 <small>周一至周日 8:00-18:00</small></dd>
                </dl>
                
            </div>
        </div>
       <div class="copyright">
          <div class="container">
             <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 库猴电商</p>
          </div>
    </div>
           
          
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-footer{
    background-color: #f5f5f5;
    padding-top: 20px;
    .contact{
        background-color: #fff;
        padding: 60px 0 40px 0px;
        .container{
            
            display: flex;
            // border-bottom:1px solid #666 ;
            dl{
                height: 190px;
                padding: 0 72px;
                border-right:1px solid #F28C28;
                color: #FF7518;
                text-align: center;
                &:first-child{
                    padding-left: 0;
                }
                &:last-child{
                    padding-right: 0;
                    border-right: none;
                }
                dt{
                    line-height: 1;
                    font-size: 18px;
                }
                dd{
                    margin: 36px 12px 0 0;
                    float: left;
                    width: 92px;
                    height: 92px;
                    padding-top: 10px;
                    border: 1px solid #ededed;
                    color: #000;
                    .iconfont{
                        font-size: 36px;
                        display: block;
                        color: #F28C28;
                    }

                }
                .qrcode{
                    width: 92px;
                    height: 92px;
                    padding: 7px;
                    border: 1px solid #ededed;
                }
                .download{
                    border: none;
                    font-size: 14px;
                    span{
                        display: block;
                        color: #FF7518;
                    }
                    a{
                        display: block;
                         line-height: 1;
                         padding: 9px 4px;
                         margin-top: 5px;
                        color: #fff;
                        border-radius: 2px;
                        background-color: #FF7518;
                    }
                }
                .hoseline{
                    border: none;
                    width: auto;
                    font-size: 22px;
                    color: #666;
                    small{
                        display: block;
                        margin-top: 10px;
                        font-size: 16px;
                        color: #999;
                    }
                }
            }
            

        }
    }

    .copyright{
                .container{
                    border-top: 1px solid #999;
                    padding-top: 5px;
                }
                
                background-color: #fff;
                text-align: center;
                font-size: 14px;

                a{
                    color: #999;
                    // border-right: 1px solid #F28C28;
                    padding:0 10px;
                    &:hover{
                        color: #F28C28;
                    }
                }
                p{
                    padding: 5px 0;
                    color: #999;
                    font-size: 14px;
                }
            }
}
</style>