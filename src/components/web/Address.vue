<template>
    <div class="address">
        <div class="container">
            <h1 class="title">联系我们</h1>
            <div class="box">
                <div class="content">
                    <p><span>电话:</span>13355555555</p>
                    <p><span>地址:</span>湖北省咸宁市咸宁职业技术学院</p>
                    <p><span>邮箱:</span>123456@qq.com</p>
                </div>
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon>
                </div>
                <img src="../../assets/images/address.png" alt>
            </div>
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
.address{
    padding:8rem 0;
}
.address .container{
    width:1200px;
    margin:0 auto;
}
.address .container .title{
    text-align: center;
}
.address .container .box{
    margin-top:4rem;
    position: relative;
    text-align: center;
}
.address .container .box .content{
    background:rgba(0, 0, 0, 0.7);
    line-height:1.6;
    color:#fff;
    padding:1rem;
    border-radius:1rem;
    position: absolute;
    top:40%;
    left:50%;
    margin-left:-160px;
}
.address .container .box .icon{
    color:red;
    font-size:2.8rem;
    position: absolute;
    left:50%;
    top:71%;
    margin-left:-149px;
}
</style>