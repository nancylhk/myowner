<template>
    <div>
        <div class="N_title">
            <span>
                <img src="../../assets/images/T_icon11.jpg" />
                <a href="/">首页</a> >
                <a>{{parentCategory.parentCategoryName}}</a> >
                <a>{{parentCategory.categoryName}}</a>
            </span>
            <h3>{{parentCategory.categoryName}}</h3>
        </div> 
        <p style="padding-top:20px;"></p>
        <div style="border-bottom: 1px dashed #cccccc;padding-bottom:10px">						
            <h3 style="text-align:center">{{articleContent.title}}</h3>						
            <p style="text-align:right">发布日期： {{articleContent.time}}</p>
        </div>
        <p style="padding-top:20px;"></p>
        <div v-html="articleContent.content"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articleContent:'',
            parentCategory:'',
        }
    },
    mounted() {
        this.getArticleContent()
        this.getParentCategory()
    },
    methods: {
        getParentCategory() {
            let self = this
            self.$http.get(self.api.getParentCategory,{
                params:{
                    categoryId:self.$route.params.cid
                }
            },function(res){					
                self.parentCategory = res
            },function(res){

            })
        },
        getArticleContent() {
            let self = this
            self.$http.get(self.api.getArticleImgById, {
                params: {
                    articleId: self.$route.params.id
                }
            }, function(res) {
                self.articleContent = res					 
                let date = new Date(parseInt(self.articleContent.update_time*1000));
                let Y = date.getFullYear() + '-'
                let  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
                let D = (date.getDate()<10?'0'+date.getDate() : date.getDate()) + ' '
                self.articleContent.time = Y+M+D
            }, function(res) {
                // self.content = '未知错误'
            })
        }

    }
}
</script>
