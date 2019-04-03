<template>
    <div>
        <footer data-am-widget="footer"
                class="am-footer am-footer-default"
                data-am-footer="{  }" style="">
            <div class="am-footer-miscs ">

                <p>由 <a href="http://www.yunshipei.com/" title="诺亚方舟"
                        target="_blank" class="">世界和平</a>
                    提供技术支持</p>
                <p>©2019 AllMobilize Inc.</p>
            </div>
        </footer>

    <div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default"
         id="" >
        <ul class="am-navbar-nav am-cf am-avg-sm-4" style="background-color: #EEEEEE;height: 83vh" >
            <router-link to="/">
                <li>
                    <a href="">
                        <img src="http://ppbcg7xu9.bkt.clouddn.com/9isb2xl6r1n90.png"><span>首页</span>
                    </a>
                </li>
            </router-link>
            <router-link to="/article">
                <li>
                    <a href="">
                        <img src="http://ppbcg7xu9.bkt.clouddn.com/5dhe45idjuw41.png" alt=""/>
                        <span class="am-navbar-label">文章分类</span>
                    </a>
                </li>
            </router-link>
            <router-link to="/photos">
                <li>
                    <a href="">
                        <img src="http://ppbcg7xu9.bkt.clouddn.com/5a19ugxds1.png" alt=""/>
                        <span class="am-navbar-label">图片库</span>
                    </a>
                </li>
            </router-link>
            <router-link to="/about">
                <li>
                    <a href="" class="">
                        <img src="http://ppbcg7xu9.bkt.clouddn.com/4jr6kl1up114.png" alt=""/>
                        <span class="am-navbar-label">关于我</span>
                    </a>
                </li>
            </router-link>
        </ul>
    </div>
    </div>


</template>

<style>
    .am-navbar-nav  li a{
        color: #1a1a1a;
    }

</style>