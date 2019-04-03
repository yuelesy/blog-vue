<template>
    <div>
        <Header></Header>
        <div>
        </div>

        <form action="" class="am-form" id="ue-form" :model="articles">

            <div class="blog_article">
                <legend>文章内容</legend>
                <div class="am-form-group">
                    <label for="doc-vld-name-2">标题</label>
                    <input type="text" id="doc-vld-name-2" placeholder="" v-model="articles.title"/>
                </div>
                <div>
                    <label>分类</label>
                    <select data-am-selected v-model="articles.categoryId" >
                        <option  v-for="item in categorise"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </option>
                    </select>
                </div>
                <div class="am-form-group">
                    <label>主要内容</label>
                    <vue-editor v-model="articles.body"></vue-editor>

                </div>
                <div>
                    <img-inputer
                            action="//up-z2.qiniup.com/"
                            :extra-data="formData"
                            theme="light"
                            :auto-upload="true"
                            :on-success="onSuccess"
                            :on-error="onError"
                            :on-start="onStart"
                            :on-progress="onProgress"
                            size="large" style="width: 100%"/>

                </div>

                <button class="am-btn am-btn-secondary" type="submit" @click.prevent="save">提交</button>
            </div>
        </form>

    </div>
</template>


<style>
    .blog_article {
        width: 80%;
        margin: 0 auto;
    }
</style>

<script>
    import Header from '../../components/Header'
    import Footer from '../../components/Footer'
    import {VueEditor, Quill} from "vue2-editor";
    import ImgInputer from 'vue-img-inputer'
    import 'vue-img-inputer/dist/index.css'


    export default {
        components: {
            Header,
            Footer,
            VueEditor,
            ImgInputer
        },

        data() {
            return {
                articles: {
                    title: '',
                    body: '',
                    image: ''

                },
                hasImage: true,
                file: '',
                formData: {
                    token: '',
                    key: ''
                },
                categorise: []

            }


        },

        created() {

            this.init()

        },
        methods: {
            init() {
                this.axios.get('categories').then(res => {
                    this.categorise = res.data.categories

                })
                this.axios.get(`photos/uploadToken`).then(res => {
                    this.formData.token = res.data.data.token
                })

            },
            save() {
                this.axios.post(`articles`, this.articles).then(res => {
                    console.log(res)

                })
                // this.$router.push({name: 'home'})

            },
            onStart(file) {
                console.log(file)
                let filetype = ''
                if (file.type === 'image/png') {
                    filetype = 'png'
                } else {
                    filetype = 'jpg'
                }
                this.formData.key = Math.random().toString(36).substr(2) +
                    Math.floor(Math.random() * 100) + '.' + filetype

            },
            onProgress(event, file) {
                // this.progress = event.percent
            },
            onSuccess(res, file) {
                console.log(29, res, file)
                this.articles.image = res.key
            },
            onError(res, file) {
                alert(res, file)
            },



        },


    }


</script>