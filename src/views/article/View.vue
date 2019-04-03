<template>
    <div>
<Header></Header>

        <div class="am-g am-g-fixed blog-fixed blog-content" style="height: 100vh">

            <div class="am-u-md-8 am-u-sm-12">
                <article data-am-widget="paragraph"
                         class="am-paragraph am-paragraph-default"

                         data-am-paragraph="{ tableScrollable: true, pureview: true }" :data="articles">
                    <h1 class="am-article-title blog-text-center">{{articles.title}}</h1>

                    <img :src="articles.image">
                    <p v-html="articles.body">
                        {{articles.body}}</p>
                </article>
                <form action="" class="am-form" id="ue-form">
                    <fieldset>
                        <div class="am-form-group">
                            <label>评论：</label>
                            <textarea class="am-validate"></textarea>
                        </div>

                        <button class="am-btn am-btn-secondary" type="submit" style="margin-bottom: 20px">提交</button>
                    </fieldset>
                </form>


            </div>


            <div class="am-u-md-4 am-u-sm-12 blog-sidebar">
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

<style scoped>


</style>

<script>
    import Footer from '../../components/Footer'
    import Header from '../../components/Header'


    export default {
        components: {
            Footer,
            Header
        },
        data(){
            return {
                articles: {},
            }
        },
        created(){
          this.init()
        },
        methods:{
            init(){
                let id = this.$route.params.id
                this.axios.get(`articles/${id}`).then(res => {
                    console.log(res)
                    this.articles = res.data.articles

                })
            }

        },


    }

</script>