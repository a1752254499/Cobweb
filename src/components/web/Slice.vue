<template>
    <div class="slice">
        <div class="container">
            <p class="desc">我们的优势</p>
            <ul>
                <li>
                    <p>专业的技术团队</p>
                </li>
                <li>
                    <img src="../../assets/images/s1.jpg" alt>
                </li>
                <li>
                    <img src="../../assets/images/s2.jpg" alt>
                </li>
                <li>
                    <p>贴心的售后服务</p>
                </li>
                <li>
                    <p>完美的解决方案</p>
                </li>
                <li>
                    <img src="../../assets/images/s3.jpg" alt>
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
.slice{
    width:100%;
    background:#0e0b2b;
    position: relative;
}
.slice::before{
    content:"";
    display: block;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: url('../../assets/images/testimonial-bg.jpg') no-repeat fixed center center;
    background-size:cover;
    opacity:0.21;
}
.slice .container{
    width:1200px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.slice .container .desc{
    color:#fff;
    width:40%;
    font-size:3rem;
    margin-bottom:3rem;
}
.slice .container ul{
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    width:60%;
}
.slice .container ul li{
    width:50%;
    color:#fff;
    font-size:1.2rem;
    font-weight: bold;
    text-align:center;
    max-height:200px;
    overflow: hidden;
    letter-spacing:0.3rem;
    line-height:2;
}
.slice .container ul li p{
    line-height:155px;
}
.slice .container ul li img{
    display: block;
    width:100%;
    opacity:1;
}
</style>