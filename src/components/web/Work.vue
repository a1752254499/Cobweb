<template>
    <div class="work">
        <div class="container">
            <h1 class="title">最近作品</h1>
            <p class="desc">HTML5+CSS3+JS制作完美响应式作品,适配任何机型,完美的动画,让您身心愉悦。在这里，你可以看到不一样的、让你眼前一亮的网站，我们将通过不断的摸索，有望创造与之媲美的精品。</p>
            <div class="box">
                <swiper ref="mySwiper" class="swiper" :options="swiperOption">
                    <swiper-slide>
                        <img src="../../assets/images/work1.jpg" alt>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/images/work2.jpg" alt>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/images/work3.jpg" alt>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    }
}
</script>

<style>
.work{
    padding-top:8rem;
    background:url('../../assets/images/work-bg.jpg') no-repeat;
    background-size:cover;
    position: relative;
}
.work::before{
    content:"";
    position: absolute;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.8);
}
.work .container{
    width:1200px;
    margin:0 auto;
}
.work .container .title{
    text-align: center;
    color:#fff;
    position: relative;
}
.work .container .desc{
    text-align: center;
    color:#fff;
    position: relative;
    width:60%;
    padding:4rem 0;
    line-height:1.6;
    margin:0 auto;
}
.work .container .box{
    background:url('../../assets/images/mac.png') no-repeat;
    background-size:100% 100%;
    width:700px;
    height:350px;
    margin:0 auto;
    position: relative;
    bottom:-13px;
}
.work .container .box .swiper{
    width:516px;
    height:284px;
    position: relative;
    top:23px;
    margin:0 auto;
}
.work .container .box .swiper img{
    display: block;
}
</style>