<template>
    <div class="banner">
        <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
            <swiper-slide>
                <img src="../../assets/images/1.jpg" alt>
                <div class="box">
                    <p class="title">网站设计</p>
                    <p class="desc">搭建部署一体化</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/images/2.jpg" alt>
                <div class="box">
                    <p class="title">网络搭建</p>
                    <p class="desc">安全的网络环境</p>
                </div>
                
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/images/3.jpg" alt>
                <div class="box">
                    <p class="title">机房建设</p>
                    <p class="desc">完美灵活的方案</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
            swiperOptions:{
                loop: true,
                spaceBetween: 30,
                effect: 'fade',
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                    type: 'progressbar'
                }
            }
        }
    },
}
</script>

<style>
.banner img{
    display: block;
    width:100%;
}
.banner .swiper-container .swiper-wrapper .swiper-slide::before{
    content:"";
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background:rgba(0, 0, 0, .6);
    z-index:11;
    height:auto;
}
.banner .swiper-container .box{
    position: absolute;
    top:40%;
    left:50%;
    z-index:12;
    margin-left:-10rem;
    color:#fff;
    font-size:3rem;
    letter-spacing:0.4rem;
    font-weight:600;
}
</style>