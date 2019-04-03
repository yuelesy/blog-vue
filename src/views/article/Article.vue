<template>
    <div id="blog">
        <Header></Header>
        <template v-if="token">
            <router-link to="/article_new">
                <button type="button" class="am-btn am-btn-success">新增</button>
            </router-link>
        </template>
        <div v-if="articles.length>0" style="height: 100vh">
            <div data-am-widget="list_news" class="am-list-news am-list-news-default" v-for="(item,index) in articles" >
                <div class="am-list-news-hd am-cf">
                    <a class="">
                        <h2>{{item.Category.name}}</h2>
                    </a>
                </div>

                <div class="am-list-news-bd">
                    <ul class="am-list">
                        <li class="am-g am-list-item-dated">
                            <router-link :to="{name:'article_log',params:{id:item.id}}">
                                <a>{{item.title}}</a>
                            </router-link>
                            <div class="am-list-date">
                                    <span>{{item.createdAt | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-else style="height: 100vh">
            <div data-am-widget="list_news" class="am-list-news am-list-news-default" v-for="category in categories">
                <div class="am-list-news-hd am-cf">
                    <a class="">
                        <h2>{{category.name}}</h2>
                    </a>
                </div>

                <div class="am-list-news-bd" v-for="article in category.Articles">
                    <ul class="am-list">
                        <li class="am-g am-list-item-dated">
                            <router-link :to="{name:'article_log',params:{id:article.id}}">
                                <a>{{article.title}}</a>
                            </router-link>
                            <div class="am-list-date">
                                <template v-if="token">
                                    <button class="edit_article" @click="editArticle(article)">编辑</button>
                                    <button class="delete_article" @click="deleteArticle(article)">删除</button>
                                </template>
                                <template v-else>
                                    <span>{{article.createdAt | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
                                </template>
                            </div>
                        </li>
                    </ul>
                    <transition name="slide-fade">
                        <div class="show_model" v-if="show">
                            <div class="am-modal-dialog">
                                <div class="am-modal-bd">
                                    你，确定要删除这条记录吗？
                                </div>
                                <div class="am-modal-footer">
                                    <span class="am-modal-btn" data-am-modal-cancel @click="cancel">取消</span>
                                    <span class="am-modal-btn" data-am-modal-confirm @click="onDelete">确定</span>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <Footer></Footer>


    </div>
</template>

<style scoped>


    .am-list-news-hd h2 {
        font-weight: bold;
        color: #2F90D2;
    }

    .am-list .am-list-item-dated a {
        color: #2F90D2;
    }

    .am-list-news-default {
        width: 80%;
        margin: 10px auto;
    }
    .am-list-news-default .am-list-date button {
        padding: 0 15px;
        border: none;
        background: none;
    }

    .edit_article {
        color: #2F90D2;
    }

    .delete_article {
        color: red;
    }
    .am-btn-success{
        margin:3rem 0 3rem 12rem;
        border-radius: 5px;
    }
    .show_model{
        left: 30%;
        position: fixed;
        top: 50%;
        width: 30rem;
        z-index: 25;


    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }


</style>

<script>
    import Header from '../../components/Header'
    import Footer from '../../components/Footer'


    export default {
        components: {
            Header,
            Footer
        },


        data() {
            return {
                articles: [],
                categories: [],
                token: '',
                show:false

            }
        },

        created() {
            this.init()
        },
        methods: {
            init() {
                let title = this.$route.params.title

                this.axios.get(`articles?title=${title}`).then(res => {
                    console.log(res)

                    this.articles = res.data.articles
                })
                this.axios.get('categories').then(res => {
                    // console.log(res)
                    this.categories = res.data.categories
                })
                if (localStorage.authorization) {
                    this.token = localStorage.authorization

                }

            },
            deleteArticle(article) {
                this.show=true
                this.id = article.id


            },
            editArticle(article) {
                this.$router.push({path: `/article_edit/${article.id}`})
            },
            cancel(){
                this.show=false
            },
            onDelete(){
                this.show=false
                let id = this.id
                this.axios.delete(`articles/${id}`).then(res => {
                    this.init()
                })

            },


        }
    }

</script>