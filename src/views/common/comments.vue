<template>
    <div>
        <div class="N_title">
			<span>
				<img src="../../assets/images/T_icon11.jpg" />
				<a href="/">首页</a> >
				<a>留言详情</a> 
			</span>
			<h3>留言详情</h3>
		</div>
        <div>
            <h4 class="ftitle"><span>详情信息</span></h4>
            <table class="msgTable" border="1">
                <tr>
                    <td>留言标题</td>
                    <td>{{leaveMsg.title}}</td>
                </tr>
                <tr>
                    <td>留言人</td>
                    <td v-if="leaveMsg.contact">{{leaveMsg.contact.substr(1,1)}}**</td>
                </tr>
                <tr>
                    <td>留言时间</td>
                    <td>{{leaveMsg.createTime}}</td>
                </tr>
                <tr>
                    <td>留言内容</td>
                    <td>{{leaveMsg.content}}</td>
                </tr>             
            </table>
        </div> 
        <div>
            <h4 class="ftitle"><span>回复内容</span></h4>
            <div v-html='leaveMsg.reply' class="result"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {        
            leaveMsg:''
        }
    },
    mounted() {
        this.getCommentMessage()
    },
    methods:{
        getCommentMessage() {
            let self = this				
            self.$http.get(self.api.getCommentMessage,{
                params:{
                    messageId:self.$route.params.id
                }
            },function(res){					
                self.leaveMsg = res                       
            },function(res){

            })								
        },
    }
}
</script>

<style scoped>
.ftitle,.result{
    margin: 10px
}
.ftitle span{
    color: #404b83
}
.msgTable{
    margin: 10px;
    width: 97%;
    border: 1px solid #ccc
}
.msgTable tr td{
    line-height: 22px;
    padding: 5px 10px;
    color: #666
}
.msgTable tr td:nth-of-type(1){
    width: 20%;
    padding-left: 20px;
    /* text-align: center; */
}
.result{
    border: 1px solid #ccc;
    padding: 10px;
}
</style>
