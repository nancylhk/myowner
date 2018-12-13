<template>
    <div>
        <div class="N_title">
            <span>
                <img src="../../assets/images/T_icon11.jpg" />
                <a href="/">首页</a> >
                <a>搜索结果</a>
            </span>
            <!-- <h3>{{parentCategory.categoryName}}</h3> -->
        </div>
        <div class="N_news">
            <div v-for="item in searchList">
                <router-link :to="'/page/searchDetail'+'/'+ item.id +'/99999'">
                    <dl>
                        <dd>
                            <span>{{item.update_time}}</span>
                            <h5><a href="#">{{item.title}}</a></h5>
                            <p><a href="#">{{item.message}}</a></p>
                        </dd>
                        <div class="clear"></div>
                    </dl>
                </router-link>
            </div>
        </div>
        <div class="clear"></div>
        <div class="page">
            <el-pagination layout="total,prev, pager, next" :total="parseInt(total)" :page-size="pageSize" :current-page="currentPage"
                @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchList:[],
            currentPage:1,
            pageSize:10,
            total:0
        }
    },
    mounted() {
        this.getSearchList()
        this.getTotal()
    },
    methods:{
        getSearchList() {
            let self = this
            let start = self.pageSize * (self.currentPage - 1) + 1;
            let end = self.currentPage * self.pageSize;
            let message = self.$route.params.message
            self.$http.get(self.api.queryArticleByTitle,{
                params:{
                    articleTitle:message,
                    start:start,
                    end:end
                }
            },function(res){
                self.searchList = res
            },function(res){

            })
        },
        getTotal() {
            let self = this
            let start = self.pageSize * (self.currentPage - 1) + 1;
            let end = self.currentPage * self.pageSize;
            let message = self.$route.params.message
            self.$http.get(self.api.queryArticleCountByTitle,{
                params:{
                    articleTitle:message,
                }
            },function(res){
                self.total = res
            },function(res){

            })
        },
        handleCurrentChange(val){
            this.currentPage = val
            this.getSearchList()
        }
    }
}
</script>
