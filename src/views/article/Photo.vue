<template>
    <div>
        <Header></Header>
        <div class="am-g am-g-fixed blog-fixed blog-content">
            <figure data-am-widget="figure" class="am am-figure am-figure-default "
                    data-am-figure="{  pureview: 'true' }">

                <table id="container">
                    <tr>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/gqe5sfm0bl60.jpg"></td>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/kbt231ea33s42.jpg"></td>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/r70kawyyg8p40.jpg"></td>
                    </tr>
                    <tr>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/l0pc5g3t3q54.jpg"></td>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/4tzr0isymjl24.jpg"></td>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/t2hvkmtmt10.jpg"></td>
                    </tr>
                    <tr>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/4cskcejsvn76.png"></td>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/0lthcjg7fmjp67.jpg"></td>
                        <td><img src="http://ppbcg7xu9.bkt.clouddn.com/njvi6bfdwe93.jpg"></td>
                    </tr>
                </table>
            </figure>

        </div>

        <Footer></Footer>
    </div>
</template>

<style>
    #container {
        overflow-x: scroll
    }

    #container div {
        display: inline-block;
    }

    #container div img {
        border-radius: 20px;
        box-shadow: 10px 10px 10px #6a695f;
    }
    .pic:nth-of-type(even){
        transform: rotate(-20deg);
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