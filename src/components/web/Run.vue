<template>
    <div class="run">
        <div class="container">
            <h1 class="title">我们如何运作</h1>
            <ul>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'bolt']"></font-awesome-icon>
                    </div>
                    <span>计划</span>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'lightbulb']"></font-awesome-icon>
                    </div>
                    <span>想法</span>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'chart-bar']"></font-awesome-icon>
                    </div>
                    <span>草图</span>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'pencil-ruler']"></font-awesome-icon>
                    </div>
                    <span>设计</span>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'file-code']"></font-awesome-icon>
                    </div>
                    <span>开发</span>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'check-circle']"></font-awesome-icon>
                    </div>
                    <span>完成</span>
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
.run{
    padding:8rem 0;
}
.run .container{
    width:1200px;
    margin:0 auto;
}
.run .container .title{
    text-align: center;
}
.run .container ul{
    margin-top:4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.run .container ul li{
    width:15%;
    border:1px solid #eee;
    padding:2rem;
    color:#333;
    transition:all 0.3s ease;
}
.run .container ul li:hover{
    color:#46bfa9;
    border:1px solid #46bfa9;
}
.run .container ul li .icon{
    font-size:2.4rem;
    margin-bottom:1rem;
}
.run .container ul li span{
    font-size:1.2rem;
}
</style>