<template>
	<div class="N_Lbot">
		<div class="N_LbotTitle">
			<span><a @click="more">更多 >></a></span>
			<h3><img src="../assets/images/T_icon13.jpg" /> 优惠活动</h3>
		</div>
		<ul>
			<template v-for="item in promotionList">
				<li @click="toDetail(item.id)">
					<img src="../assets/images/T_icon14.jpg" />
					<a>{{item.title}}</a>
				</li>
			</template>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			promotionList:[],
			pid:''
		}
	},
	mounted() {
		this.getPromotionList()
	},
	methods:{
		getPromotionList() {
			let self = this
			self.$http.get(self.api.getPromotionList,{},function(res){					
				self.promotionList = res
							
			},function(res){

			})
		},
		more() {
			let self = this
			self.$http.get(self.api.findMorePromotion,{},function(res){
				self.pid = res.cid
			},function(res){

			})
			let cid = this.$route.params.cid
			let pid = 4
			this.$router.push({
				path:`/page/content/${pid}/${cid}`
				// content/:pid/:clickId/:cid
			})
		},
		toDetail(articleId){
			let cid = this.$route.params.cid
			let pid = 4
			this.$router.push({
				path:`/page/detail/${articleId}/${pid}/${cid}`
				// detail/:id/:pid/:clickId/:cid
			})
		}
	}
}
</script>
<style scoped>
.N_Lbot li{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	
}
.N_Lbot a{
	cursor: pointer;
}
</style>
