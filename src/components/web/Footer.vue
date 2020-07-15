<template>
    <div class="footer-main">
        <div class="footer">
            <div class="shape">
                <svg width="2560px" height="100px">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div class="container">
                <div class="top">
                    <div class="left">
                        <a href="#" class="logo">蛛网科技</a>
                        <p class="add">Webpixels试图通过提供在大多数Web项目中快速而可靠地启动所需的工具，将最佳的开发体验带给设计人员和开发人员。</p>
                    </div>
                    <div class="mid"></div>
                    <div class="item">
                        <h3 class="title">关于我们</h3>
                        <ul>
                            <li>
                                <a href="">西域加速器</a>
                            </li>
                            <li>
                                <a href="">微信公众号</a>
                            </li>
                        </ul>
                    </div>
                    <div class="item">
                        <h3 class="title">联系我们</h3>
                        <ul>
                            <li>
                                <a href="">客户服务</a>
                            </li>
                            <li>
                                <a href="">合作洽谈</a>
                            </li>
                            <li>
                                <a href="">帮助中心</a>
                            </li>
                            <li>
                                <a href="">招贤纳士</a>
                            </li>
                        </ul>
                    </div>
                    <div class="item">
                        <h3 class="title">法律信息</h3>
                        <ul>
                            <li>
                                <a href="">服务协议</a>
                            </li>
                            <li>
                                <a href="">隐私政策</a>
                            </li>
                            <li>
                                <a href="">知识产权</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="bottom">
                    <div class="left">
                        <p>Copyright © 2020.Company name All rights reserved.蛛网科技</p>
                    </div>
                    <div class="right">
                        <ul>
                            <li>
                                <a href="">法律声明</a>
                            </li>
                            <li>
                                <a href="">行为准则</a>
                            </li>
                            <li>
                                <a href="">公司地址</a>
                            </li>
                            <li>
                                <a href="">备案号XXXXXXXXX</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style>
hr{
    width:1200px;
    margin:1.6rem auto;
    border-color: rgba(216, 203, 187, .1)!important;
}
.footer-main{
    width:100%;
    position: relative;
}
.footer-main .footer{
    padding-top:100px;
    background:#171347;
}
.footer-main .footer .shape{
    min-height:19px;
    transform:rotate(180deg);
    position: absolute;
    width:100%;
    top:0;
    left:0;
    margin-top:-1px;
}
.footer-main .footer .shape svg{
    display:block;
    vertical-align:baseline;
    pointer-events:none;
    fill:#fff;
    overflow: hidden;
}
.footer-main .footer .container{
    width:100%;
}
.footer-main .footer .container .top{
    width:1200px;
    margin:0 auto;
    display: flex;
}
.footer-main .footer .container .top .left{
    width:30%;
}
.footer-main .footer .container .top .left .logo{
    color:#fff;
    font-size:1.8rem;
}
.footer-main .footer .container .top .left p{
    color:rgba(255, 255, 255, 0.8);
    padding:0 2rem 0 0;
    font-size:0.9rem;
    line-height:1.5;
    margin-top:2rem;
}
.footer-main .footer .container .top .mid{
    flex:1;
}
.footer-main .footer .container .top .item{
    width:16%;
    text-align:right;
}
.footer-main .footer .container .top .item .title{
    font-size:1.2rem;
    color:#fff;
    font-weight:500;
    margin-bottom:1.4rem;
}
.footer-main .footer .container .top .item ul li a{
    color:#a0aec0;
    display: block;
    margin-bottom:0.5rem;
    font-size:0.9rem;
    transition:color 0.3s ease;
}
.footer-main .footer .container .top .item ul li a:hover{
    color:#fff;
}
.footer-main .footer .container .bottom{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    font-size:0.8rem;
    padding-bottom:1.6rem;
}
.footer-main .footer .container .bottom .left{
    color:#a0aec0;
    
}
.footer-main .footer .container .bottom .right ul{
    display: flex;
}
.footer-main .footer .container .bottom .right ul li{
    margin-left:2rem;
}
.footer-main .footer .container .bottom .right ul li a{
    color:#a0aec0;
    transition:color 0.3s ease;
}
.footer-main .footer .container .bottom .right ul li a:hover{
    color:#fff;
}
</style>