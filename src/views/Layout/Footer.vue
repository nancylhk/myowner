<template>
	<div>
		<!--友情链接模块-->
		<div class="Link">
			<p class="linkBox">
				<span class="left">友情链接：</span>
				<span class="right">
					<template v-for="item in linkList">
						&nbsp;<a :href="item.url" target="_blank">{{item.name}}</a>&nbsp; |
					</template>
				</span>
				
								
			</p>
		</div>

		<!--咨询电话模块-->
		<div class="Phone">
			<div class="Phone_Text">			
				<div class="PT_Left">
					<p class="cantactus">联系方式</p>
					<p><span>电话：</span><span>0516-83291111</span></p>
					<p><span>传真：</span><span>0516-83295019</span></p>
					<p><span>邮政编码：</span><span>221111</span></p>
				</div>
				<div class="PT_Middle">
					<p>网站地图</p>
					<ul>
						<template v-for="item in mapList">
							<li>
								<router-link :to="item.url">{{item.name}}</router-link>
							</li>
						</template>
						
					</ul>
				</div>
				<div class="PT_Right">
					<ul>
						<li>微信公众号</br><img src="../../assets/images/weixin.png" width="128" height="128" /></li>
						<!-- <li>手机App</br><img src="../../assets/images/T_weixin03.jpg" width="128" height="128" /></li> -->
						<!-- <li>手机APP</br><img src="/Public/images/T_weixin02.jpg" /></li>-->
					</ul>
				</div>
			</div>
		</div>

		<!--footer-->
		<div class="footer">
			<p>&copy; 2017 江苏连徐高速公路有限公司 版权所有 | 网站首页 | 联系我们 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术支持：江苏高速公路信息工程有限公司</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			linkList:[],
			mapList:[]
		}
	},
	mounted() {
		this.getFriendLinkList()
		this.getSiteMapList()
	},
	methods:{
		getFriendLinkList() {
			let self = this
			self.$http.get(self.api.getFriendLinkList,{
				params:{
					start:1,
					end:20
				}
			},function(res){					
				self.linkList = res
							
			},function(res){

			})
		},
		getSiteMapList() {
			let self = this
			self.$http.get(self.api.getSiteMapList,{},function(res){					
				self.mapList = res
							
			},function(res){

			})
		},
	}
}
</script>
<style scoped>
.PT_Left p{
	margin-bottom: 10px;
}
.PT_Left .cantactus{
	margin: 30px 0 15px 0px;
    color: #333;
	font-size: 14px
}
.PT_Left p span:first-of-type{
	color:#666
}
.linkBox{
	padding: 8px 0;
}
.Link{
	height: auto;
	line-height: 30px;
	margin-top: 10px
}
.left{
	width: 70px;
	display: inline-block;
	vertical-align: top
}
.right{
	width: 920px;
	display: inline-block;
	text-align: left;

}
.right a{
	font-size: 12px
}
.PT_Left p span:nth-of-type(2){
	color:#636363;
	/* font-style: oblique */
}
</style>
