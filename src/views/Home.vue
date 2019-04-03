<template>
    <div id="blog">

        <Header></Header>

        <!-- banner start -->

        <div class="am-g am-g-fixed blog-fixed am-u-sm-centered blog-article-margin">
            <div>
                <swiper :options="swiperOption" class="swiper">
                    <swiper-slide class="slide-1"><img src="http://ppbcg7xu9.bkt.clouddn.com/gqe5sfm0bl60.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="slide-2"><img src="http://ppbcg7xu9.bkt.clouddn.com/kbt231ea33s42.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="slide-3"><img src="http://ppbcg7xu9.bkt.clouddn.com/r70kawyyg8p40.jpg" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <!-- banner end -->

        <!-- content srart -->
        <div class="am-g am-g-fixed blog-fixed">
            <div class="am-u-md-8 am-u-sm-12">
                <article class="am-g blog-entry-article" v-for="article in articles">
                    <router-link :to="{name:'article_log',params:{id:article.id}}">


                        <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">
                            <img :src="article.image=='http://ppbcg7xu9.bkt.clouddn.com/'? 'http://ppbcg7xu9.bkt.clouddn.com/5zi2rg70hvs43.jpg' :article.image "
                                 alt=""
                                 class="am-u-sm-12">
                        </div>
                        <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">
                            <span><a href="" class="blog-color">{{article.Category.name}} &nbsp;</a></span>
                            <span>{{article.createdAt | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
                            <h1>
                                <a href="">{{article.title}}</a>
                            </h1>
                            <div v-html="article.body" class="article_body">{{article.body}}
                            </div>
                        </div>
                    </router-link>
                </article>
                <ul class="am-pagination">
                    <li class="am-pagination-prev" @click="onChange('prev')"><a>&laquo; Prev</a></li>
                    <li class="am-pagination-next" @click="onChange('next')"><a>Next &raquo;</a></li>
                </ul>

            </div>

            <div class="am-u-md-4 am-u-sm-12 blog-sidebar" style="height: 100vh">
                <div class="blog-sidebar-widget blog-bor">
                    <h2 class="blog-text-center blog-title"><span>About ME</span></h2>
                    <img src="http://ppbcg7xu9.bkt.clouddn.com/ogfnoft96318.jpg" alt="about me" class="blog-entry-img">
                    <p>妹纸</p>
                    <p>今天天气很好，好的让你觉得，比霓虹灯盛开的夜色还要美，好的让你觉得，世界轻的像鹅毛，好的让你觉得，就算没有那么多钱，也能活得不错！</p>

                </div>

                <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
                    <h2 class="blog-title"><span>TAG cloud</span></h2>
                    <div class="am-u-sm-12 blog-clear-padding">
                        <a href="" class="blog-tag">海贼王</a>
                        <a href="" class="blog-tag">旅游</a>
                        <a href="" class="blog-tag">美食</a>
                        <a href="" class="blog-tag">电影</a>
                        <a href="" class="blog-tag">前端</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style lang="scss" scoped>

    .swiper img {
        width: 100%;

    }

    .article_body {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        height: 7rem;


    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
    }


</style>

<script>
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        components: {
            Header,
            Footer,
            swiper,
            swiperSlide
        },
        data() {
            return {
                articles: [],
                currentPage: 1,
                maxSize: 0,
                swiperOption: {
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.axios.get(`articles?currentPage=${this.currentPage}`).then(res => {
                    // console.log(res)
                    this.articles = res.data.articles
                    this.maxSize = Math.floor(res.data.pagination.total / res.data.pagination.pageSize)

                })
            },
            onChange(type) {
                // console.log(this.currentPage)
                if (this.currentPage == 1 && type == 'prev') return;
                if (this.currentPage == this.maxSize && type == 'next') return
                type == 'next' ? this.currentPage++ : this.currentPage--
                this.init()


            },


        }


    }


</script>
