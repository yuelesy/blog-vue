<template>
    <div style="height: 100%">
        <Header></Header>

        <div class="log">
            <div class="am-g">
                <div class="am-u-lg-3 am-u-md-6 am-u-sm-8 am-u-sm-centered log-content">
                    <h1 class="log-title am-animation-slide-top">blog主登录</h1>
                    <br>
                    <form class="am-form" id="log-form">
                        <div class="am-input-group am-radius am-animation-slide-left">
                            <input type="text" id="doc-vld-email-2-1" class="am-radius"
                                   placeholder="请输入用户名" data-validation-message="请输入正确用户名" v-model="form.username"
                                   required/>
                            <span class="am-input-group-label log-icon am-radius"><i
                                    class="am-icon-user am-icon-sm am-icon-fw"></i></span>
                        </div>
                        <br>
                        <div class="am-input-group am-animation-slide-left log-animation-delay">
                            <input class="am-form-field am-radius log-input" placeholder="密码" type="password"
                                   data-validation-message="请输入正确密码"
                                   v-model="form.password"
                                   required>
                            <span class="am-input-group-label log-icon am-radius"><i
                                    class="am-icon-lock am-icon-sm am-icon-fw"></i></span>
                        </div>
                        <br>
                        <button type="submit" @click.prevent="onSubmit"
                                class="am-btn am-btn-primary am-btn-block am-btn-lg am-radius am-animation-slide-bottom log-animation-delay">
                            登 录
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!--<Footer></Footer>-->
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

    .log{
        background-image:url("http://ppbcg7xu9.bkt.clouddn.com/fs0qdq2lv584.jpg");
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
                token: '',
                maxSize: 0,
                form: {
                    username: '',
                    password: ''
                },
                show:false,
                id:''
            }

        },
        created() {
            this.init()
        },
        methods: {
            init() {
                if(localStorage.authorization){
                    this.token=localStorage.authorization

                }
            },
            onSubmit() {
                this.axios.post(`users/login`, this.form).then(res => {

                    this.token = res.data.token
                    console.log(this.token)
                    if (!res.data.success) {
                        return
                    } else {
                        localStorage.authorization =  'Bearer '+res.data.token;
                        this.$router.push({path: '/'})


                    }


                })
            },



        }

    }
</script>