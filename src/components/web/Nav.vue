<template>
    <div class="nav" :class="navBarFixed == true ? 'navBarWrap' : ''">
        <div class="container">
            <div class="logo">
                <a href="">蛛网科技</a>
            </div>
            <ul>
                <li>
                    <a href="">网站首页</a>
                </li>
                <li>
                    <a href="">公司简介</a>
                </li>
                <li>
                    <a href="">产品服务</a>
                </li>
                <li>
                    <a href="">新闻资讯</a>
                </li>
                <li>
                    <a href="">联系我们</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navBarFixed:false
        }
    },
    methods:{
        watchScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop > 30){
                this.navBarFixed = true
            }else{
                this.navBarFixed = false
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.watchScroll);
    }
}
</script>

<style>
.nav{
    width:100%;
    position:fixed;
    top:0;
    z-index:10;
    background: linear-gradient(to bottom, rgba(54, 66, 77, 0.6) 0%, transparent 100%);
}
.navBarWrap{
    background:#fff;
    z-index:999;
    box-shadow:0 0 1px 2px #eee;
}
.navBarWrap .container .logo a{
    color:#333!important;
}
.navBarWrap .container ul li a{
    color:#333!important;
}
.nav .container{
    width:1200px;
    padding:0.6rem 0;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
}
.nav .container .logo a{
    display:block;
    color:#fff;
    font-weight:600;
    font-size:2rem;
}
.nav .container ul{
    display: flex;
    align-items: center;
}
.nav .container ul li{
    margin-left:2rem;
}
.nav .container ul li a{
    display: block;
    color:#fff;
    font-size:1.0rem;
    transition:color 0.3s ease;
}
.nav .container ul li a:hover{
    color:#333;
}
</style>