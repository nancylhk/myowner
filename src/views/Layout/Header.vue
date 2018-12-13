<template>
	<div class="Theader">
		<div class="headerTop">
			<div class="Ttop">				
				<!-- <div class="Tlogo"> -->
					<div id="fr_logo_main">
						<div id="fr_compname">
							<p style="font-family: '微软雅黑'; font-size: 26px; text-align: center; font-weight: bolder; color: #1d2088;">江苏连徐高速公路有限公司</p>
							<p style="text-align: center; font-family: Impact, Haettenschweiler, 'Franklin Gothic Bold', 'Arial Black', sans-serif; color: #4a4097; font-size: 19px; font-weight: normal;">JIANGSU
						LIANXU<span style="text-align: center"></span> EXPRESSWAY CO.,LTD</p></div> 
						</div>
				<!-- </div> -->
				<div class="Tsearch">
					<div class="Tae1">
						<input type="text"  v-model="message" name="title" placeholder="请输入关键字" class="Ttext" />
						<input  type="button" class="Tbut" @click="search">
					</div>
					<div class="Tae2">
						<p style="margin-left : 60px">客服热线：<span>0516-83291111</span>&nbsp;&nbsp;&nbsp;&nbsp;

						</p>
					</div>
				</div>				
			</div>
			<div class="Tnav">          
				<ul>				
					<template v-for="item in menuList" >
						<li  @click="toDetail(item.id,item.datatype)"><span>{{item.name}}</span></li>
					</template>
				</ul>
					
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				menuList:[],
				leftNavList:[],
				datatype:'1',
				cid:'',
				pid: this.$route.params.pid,
				message:'',
				currentPage:1,
				pageSize:10,
			}
		},
		mounted() {
			this.getMenuList()
		},
		methods: {
			search() {
				let self = this
				let message = self.message
				// self.$store.dispatch('GetSearchMessage',message)
				let leftNavList = []
				// this.$store.dispatch('GetLeftNavList', leftNavList)
				this.$router.push({
					path:`/page/search/${message}/99999`
				})
				
			},
			toDetail(pid,datatype) {
				if(datatype == '0') {
					this.$router.push({
						path:`/index`
					})
				}else{
					let self = this
					self.$http.get(self.api.getLeftNavList,{
						params:{
							pid:pid
						}
					},function(res){
						// self.$store.dispatch('GetLeftNavList', res)					
						self.$router.push({
							path:`/page/content/${pid}/${res[0].id}`
						})
					},function(res){

					})
				}			
				
			},
			getMenuList() {
				let self = this
				self.$http.get(self.api.getMenuList,{},function(res){
					self.menuList = res		
				},function(res){

				})
			},
		}
	}
</script>
<style>
	.Ttext,
	.Tbut {
		outline: none
	}
</style>
<style scoped>

	.el-menu {
		background: #404b83
	}
	.Tnav ul li{
		color:#fff;
		cursor: pointer;
	}
	.el-menu--horizontal>.el-menu-item.is-active {
		border-bottom: 2px solid #ff6c02;
		padding-bottom: 11px;
		background: transparent;
	}

	.el-menu--horizontal>.el-menu-item:focus {
		color: #fff
	}

	.el-menu--horizontal>.el-menu-item {
		color: #fff;
		font-size: 18px
	}

	.el-menu--horizontal>.el-menu-item {
		height: 50px;
		margin: 0 40px;
		padding: 0;
		line-height: 50px;
	}

	.el-menu--horizontal>.el-menu-item:hover {
		background: #404b83;
		color: #fff;
		border-bottom: 2px solid #ff6c02;
	}

	.el-menu.el-menu--horizontal {
		border-bottom: none;
	}
	.Tae1 .Tbut{
		margin-top:5px
	}
	.Tnav ul{
		display: flex;
	}
	.Tnav ul li{
		flex:1;
		text-align:center;
		margin:0;
		min-width: 125px;
	}
	.Tnav ul li.active span{
		border-bottom:2px solid #ff6c02;
		padding-bottom:11px
	}

	#fr_compname {
		float: left;
		height: 59px;
		width: 379px;
		font-family: "微软雅黑";
		font-size: 26px;
		font-weight: bold;
		letter-spacing: 0.1em;
		margin-left: 48px;
	}

</style>
