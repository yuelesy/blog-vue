<template>
    <div>
        <Header></Header>
        <div>
        </div>

        <form action="" class="am-form" id="ue-form">

            <div class="blog_article">
                <legend>文章内容</legend>
                <div class="am-form-group">
                    <label for="doc-vld-name-2">标题</label>
                    <input type="text" id="doc-vld-name-2" placeholder="" v-model="articles.title"/>
                </div>
                <div>
                    <label for="doc-vld-name-2">分类</label>

                    <select data-am-selected v-model="articles.categoryId">
                        <option value="a" v-for="item in categorise"
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
                            v-model="articles.image"
                            action="//up-z2.qiniup.com/"
                            :img-src="articles.image"
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
    .save {
        float: right;
        margin: 10px 20px;
    }

    .uploader-example {
        width: 880px;
        padding: 15px;
        margin: 20px 0;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }

    .uploader-example .uploader-btn {
        /*margin-right: 4px;*/
    }

    .uploader-example .uploader-list {
        /*max-height: 440px;*/
        /*overflow: auto;*/
        /*overflow-x: hidden;*/
        /*overflow-y: auto;*/
    }

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
                articles: {},
                hasImage: true,
                file: '',
                formData: {
                    token: '',
                    key: ''
                },
                categorise:[]
            }


        },

        created() {
          this.init()
        },
        methods: {
            init(){
                let id = this.$route.params.id
                this.axios.get(`articles/${id}`).then(res => {
                    this.articles = res.data.articles


                })
                this.axios.get(`photos/uploadToken`).then(res => {
                    this.formData.token = res.data.data.token
                })
                this.axios.get('categories').then(res => {
                    this.categorise = res.data.categories

                })

            },
            save() {
                this.axios.put(`articles/${this.articles.id}`, this.articles).then(res => {
                })
                this.$router.push({name:'home'})

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
                    // console.log(res)
                this.articles.image=res.key

            },
            onError(res, file) {
                alert(res, file)
            },



        },


    }


</script>