<template>
    <div>
        <Header></Header>
        <div class="am-g about_me">
            <div class="am-u-sm-3">
                <img src="http://ppbcg7xu9.bkt.clouddn.com/ogfnoft96318.jpg" alt="about me" width="250">
            </div>
            <div class="am-u-md-9 entry-content">
                <h1>About ME</h1>
                <table class="wp-block-table">
                    <tbody>
                    <tr>
                        <td>产地</td>
                        <td>中国</td>
                    </tr>
                    <tr>
                        <td>生产日期</td>
                        <td>90年代</td>
                    </tr>
                    <tr>
                        <td>个人网站</td>
                        <td>https://www.ohoohh.com</td>
                    </tr>
                    <tr>
                        <td>关于博客</td>
                        <td>不定时更新</td>
                    </tr>
                    <tr>
                        <td>关于我</td>
                        <td>以上皆是</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g " style="height: 20vh">
            <div class="">
                <h2 class="blog-title"><span>梦想</span></h2>
                <p>人生就是要平平淡淡，一间草屋，一亩良田，一杯清茶，一亿存款</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
    .entry-content{
        border-color: #d1d1d1;
        margin:50px 0;
    }
    .wp-block-table {
        border-collapse: separate;
        border-spacing: 0;
        border-width: 1px 0 0 1px;
        margin: 0 0 1.75em;
        table-layout: fixed;
        width: 80%;
        text-align: center;
    }
   .wp-block-table, .wp-block-table th, .wp-block-table td {
        border: 1px solid #d1d1d1;
        min-width: 300px
    }
    .blog-bor{
        border: none;
    }

    .about_me{
        width: 90%;
        margin: 0 auto;
    }
    .blog-bor{
        border-bottom: 1px solid #d1d1d1;
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
    }
</script>