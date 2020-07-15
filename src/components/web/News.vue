<template>
    <div class="news">
        <div class="container">
            <h1 class="title">最新动态</h1>
            <ul>
                <li>
                    <a href="">
                        <div class="img">
                            <img src="../../assets/images/new1.jpg" alt>
                        </div>
                        <div class="box">
                            <div class="tit">
                                <div class="icon">
                                    <font-awesome-icon :icon="['fas', 'edit']"></font-awesome-icon>
                                </div>
                                <p>时光与阳光</p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
                                </div>
                                <p>2020年09月01日</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="img">
                            <img src="../../assets/images/new2.jpg" alt>
                        </div>
                        <div class="box">
                            <div class="tit">
                                <div class="icon">
                                    <font-awesome-icon :icon="['fas', 'edit']"></font-awesome-icon>
                                </div>
                                <p>时光与阳光</p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
                                </div>
                                <p>2020年09月01日</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="img">
                            <img src="../../assets/images/new3.jpg" alt>
                        </div>
                        <div class="box">
                            <div class="tit">
                                <div class="icon">
                                    <font-awesome-icon :icon="['fas', 'edit']"></font-awesome-icon>
                                </div>
                                <p>时光与阳光</p>
                            </div>
                            <div class="content">
                                <div class="icon">
                                    <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
                                </div>
                                <p>2020年09月01日</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="more">
                <a href="">
                    <font-awesome-icon :icon="['fas', 'redo-alt']"></font-awesome-icon>
                    加载更多
                </a>
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
.news{
    padding:8rem 0;
    background:#eceef5;
}
.news .container{
    width:1200px;
    margin:0 auto;
}
.news .container .title{
    text-align: center;
}
.news .container ul{
    margin-top:4rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.news .container ul li{
    width:32.6%;
}
.news .container ul li .img{
    width:100%;
    overflow: hidden;
}
.news .container ul li:hover .img img{
    transform:scale(1.5);
}
.news .container ul li .img img{
    width:100%;
    display: block;
    transition:all 0.3s ease;
}
.news .container ul li .box{
    background:#fff;
}
.news .container ul li .box .tit{
    display: flex;
    align-items: center;
    border-bottom:1px solid #eee;
    margin-bottom:-1px;
}
.news .container ul li .box .tit .icon{
    width:50px;
    height:50px;
    text-align: center;
    line-height:50px;
    font-size:1.5rem;
    color:#fff;
    background:#171347;
}
.news .container ul li .box .tit p{
    font-size:1.2rem;
    color:#333;
    padding-left:0.8rem;
}
.news .container ul li .box .content{
    display: flex;
    align-items: center;
}
.news .container ul li .box .content .icon{
    width:50px;
    height:50px;
    text-align: center;
    line-height:50px;
    font-size:1.5rem;
    color:#fff;
    background:#171347;
}
.news .container ul li .box .content p{
    font-size:1rem;
    color:#333;
    padding-left:0.8rem;
}
.news .container .more{
    margin-top:5rem;
    text-align: center;
}
.news .container .more a{
    color:#171347;
    border:1px solid #171347;
    font-size:1.1rem;
    font-weight:600;
    padding:1rem 2rem;
    position: relative;
    z-index:1;
    transition:all 0.5s;
}
.news .container .more a::before{
    content:"";
    display: block;
    width:4px;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    z-index:-1;
    background:#171347;
    transition:all 0.5s;
}
.news .container .more a:hover{
    color:#fff;
}
.news .container .more a:hover::before{
    width:100%;
}
</style>