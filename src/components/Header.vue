<template>
    <div id="blog">
    <header class="am-g am-g-fixed blog-fixed blog-text-center blog-header">
        <router-link to="/login">
        <div class="am-u-sm-8 am-u-sm-centered">
            <img width="200" src="http://ppbcg7xu9.bkt.clouddn.com/3eyrc3qf2qw98.jpg" />
        </div>
        </router-link>
    </header>

        <!-- nav start -->
        <nav class="am-g am-g-fixed blog-fixed blog-nav">

    <div class="" id="blog-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav">

            <li class="am-active">
                <router-link to="/"><a href="">首页</a></router-link>
            </li>
            <li class="am-active">
                <router-link to="/article"><a href="">文章分类</a></router-link>
            </li>
            <li class="am-active">
                <router-link to="/photos"><a href="">图片库</a></router-link>
            </li>
            <li> <router-link to="/about"><a href="">关于我</a>
            </router-link>
            </li>
        </ul>
        <form class="am-topbar-form am-topbar-right am-form-inline" role="search"  v-on:submit.prevent="onSubmit">
            <div class="am-form-group">
                <input type="text" class="am-form-field am-input-sm" placeholder="搜索" v-model="find.title" >
            </div>
        </form>
    </div>

        </nav>
    </div>

</template>
<style>
    .search_title {
        color: blue;
        font-weight: bold;
    }
</style>

<script>

    export default {
        data() {
            return {
                find: {
                    title: ''
                }
            }
        },
        created(){
        },
        methods: {
            onSubmit() {

                //       let id = res.data.articles[0].id
                    this.$router.push({name:'article',params:{title:this.find.title}})
            }
        }
    }
</script>