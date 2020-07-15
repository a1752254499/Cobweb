<template>
    <div class="service">
        <div class="container">
            <h1 class="title">我们的服务</h1>
            <ul>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'laptop-code']"></font-awesome-icon>
                    </div>
                    <p class="tit">网站设计</p>
                    <p class="desc">品牌网站建设、响应式网站定制开发、营销型网站定制开发、功能型网站建设。</p>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'network-wired']"></font-awesome-icon>
                    </div>
                    <p class="tit">网络搭建</p>
                    <p class="desc">网络管理、网络安全、网络规划、网络优化、服务部署、行为监控。</p>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'server']"></font-awesome-icon>
                    </div>
                    <p class="tit">机房建设</p>
                    <p class="desc">服务器、备份、路由器/交换机、监控、阵列、固话模块、智能模块、门禁、监控、网络、广播线路综合布线。</p>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'desktop']"></font-awesome-icon>
                    </div>
                    <p class="tit">电脑维修</p>
                    <p class="desc">各大品牌设备：台式机、笔记本、服务器、主板、硬盘、显示屏、等。</p>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'print']"></font-awesome-icon>
                    </div>
                    <p class="tit">设备采购</p>
                    <p class="desc">服务器、台式机、笔记本、打印机、路由器/交换机、网关、电话模块 品牌\联想、DELL、惠普。</p>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'tools']"></font-awesome-icon>
                    </div>
                    <p class="tit">数据修复</p>
                    <p class="desc">服务器硬盘、固态硬盘、手机卡、U盘等数据恢复。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>
.service{
    padding:8rem 0;
}
.service .container{
    width:1200px;
    margin:0 auto;
}
.service .container .title{
    text-align: center;
}
.service .container ul{
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
.service .container ul li{
    width:30%;
    padding:2rem;
    box-shadow: 7px 7px 10px 0 rgba(76, 110, 245, .1);
    margin-top:2rem;
    text-align: center;
}
.service .container ul li .icon{
    font-size:3rem;
}
.service .container ul li:nth-child(1) .icon{
    color:#ff3e3e;
}
.service .container ul li:nth-child(2) .icon{
    color:#00aeff;
}
.service .container ul li:nth-child(3) .icon{
    color:#fe5000;
}
.service .container ul li:nth-child(4) .icon{
    color:#2dde98;
}
.service .container ul li:nth-child(5) .icon{
    color:#673ab7;
}
.service .container ul li:nth-child(6) .icon{
    color:#607d8b;
}
.service .container ul li .tit{
    font-size:1.6rem;
    margin:1.4rem 0;
}
.service .container ul li .desc{
    color:#999;
    font-size:0.9rem;
    line-height:1.6;
}
</style>