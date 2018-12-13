<template>
	<div>
		<div  id="box" v-if="showMoveBox">
			<p class="classMoveBox"><span @click='closeMoveBox'>关闭</span></p>
			<img :src="movePicSrc" v-if="movePicSrc" class="movePic">
		</div>	
		<!-- <img :src="duilian1" class="duilian1" v-if="duilian.length>0"/>
		<img :src="duilian2"  class="duilian2" v-if="duilian.length>0"/> -->
		<div class="banner">
			<el-carousel class="carouselBox" :interval='10000'>
				<el-carousel-item v-for="item in imgList" :key="item.id"  >
					<a :href="item.url=='http://'?'javascript:;':item.url">
						<img :src="item.imgUrl" class="banner-img">
					</a>
					<!-- <div :style="{backgroundImage:'url('+item.imgUrl+')'}"  class="banner-img1"></div> -->
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="xj_wrap">
			<!-- <div class="xj_nav">
				<ul style='display:flex'>
					<template v-for="item in menuNavList">
						<li >
							<div v-if="item.url">
								<a :href="item.url" target="_blank">
									<div align="center"><img :src="item.imgUrl"></div>
									<h3>{{item.name}}</h3>
								</a>
							</div>
							<div v-else>							
								<div  @click="toDetail(item.pid,item.categoryId)">
									<div align="center"><img :src="item.imgUrl"></div>
									<h3>{{item.name}}</h3>
								</div>							
							</div>
						</li>
					</template>
				</ul>
			</div> -->
			<!-- <div class="xj_hot">
				<ul>
					<li class="xj_hot1" v-if="promotionList.length>0">
						<a @click="toDtail(promotionList[0].id,promotionList[0].cid,promotionList[0].pid)">
							<h2>{{promotionList[0].title}}</h2>
							<p>{{promotionList[0].message}}</p>
						</a>
					</li>
					<li class="xj_hot2" v-if="promotionList.length>0">
						<a @click="toDtail(promotionList[1].id,promotionList[1].cid,promotionList[1].pid)">{{promotionList[1].title}}</a> 
					</li>
					<li class="xj_hot3" v-if="promotionList.length>0">
						<a @click="toDtail(promotionList[2].id,promotionList[2].cid,promotionList[2].pid)">{{promotionList[2].title}}</a> 
					</li>
					<li class="xj_hot4" v-if="promotionList.length>0"> 
						<a @click="toDtail(promotionList[3].id,promotionList[3].cid,promotionList[3].pid)">
							<h2>{{promotionList[3].title}}</h2>
							<p>{{promotionList[3].message}}</p>
						</a>
					</li>
					<li class="xj_hot5" v-if="promotionList.length>0">
						<a style="font-size:18px;" @click="toDtail(promotionList[4].id,promotionList[4].cid,promotionList[4].pid)">{{promotionList[4].title}}</a> 
					</li>
				</ul>
			</div> -->
			<div class="xj_fw">
				<div class="xj_fwl">
					<div class="xj_fwltit">
						<!-- <ul v-if="businessGuideList.length>0">
							<li class="hover" id="xj_fwt1">{{businessGuideList[0].name}}</li>
						</ul>
						<h3><a  @click="businessGuideMore(businessGuideList[0].pid,businessGuideList[0].cid)">更多>></a></h3> -->
					</div>
					<div class="xj_fwlnr">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<template v-for="item in businessGuideList">
									<div class="swiper-slide" @click="businessGuide(item.pid,item.id,item.cid)">
										<div align="center">
											<img :src="item.imgUrl" class="swiperPic">
										</div>
										<div class="swiperBg"><h3><a>{{item.title}}</a></h3>	</div>									
									</div>
								</template>							
							</div>
							<div class="swiper-pagination"></div>
						</div>						
					</div>				
				</div>
				<div>
					<div class="gonggao">
						<div class="xj_newss1"></div>
						<div class="xj_fwltit">
							<ul>
								<li id="xj_fwt1" :class="tabIndex==0?'focus':''" @mouseover="changeIndex(0)" v-if="articleList1.length>0">{{articleList1[0].name}}</li>
								<li id="xj_fwt1" :class="tabIndex==1?'focus':''" @mouseover="changeIndex(1)" v-if="articleList2.length>0">{{articleList2[0].name}}</li>
								<li id="xj_fwt1" :class="tabIndex==2?'focus':''" @mouseover="changeIndex(2)" v-if="articleList3.length>0">{{articleList3[0].name}}</li>
							</ul> 							
							<h3>
								<a @click="newsMore(articleList1[0].pid,articleList1[0].cid)" v-if="tabIndex==0">更多 ></a>
								<a @click="newsMore(articleList2[0].pid,articleList2[0].cid)" v-if="tabIndex==1">更多 ></a>
								<a @click="newsMore(articleList3[0].pid,articleList3[0].cid)" v-if="tabIndex==2">更多 ></a>
							</h3>
						</div>
					
						<div class="xj_newslnr">
							<ul>
								<template v-for="(item,index) in articleList1.slice(0,3)" v-if="tabIndex==0">
									<li @click="newsDetail(item.id,item.pid,item.cid)">	
										<div class="time">
											<span class="date">{{item.update_time.split('-')[2]}}</span>
											<span class="year_month">{{item.update_time.substr(0,7)}}</span>
										</div>							
										<h3>{{item.title}}</h3>
										<p>{{item.message}}</p>
										<!-- <span>{{item.update_time}}</span>							 -->
									</li>
								</template>
								<template v-for="(item,index) in articleList2.slice(0,3)" v-if="tabIndex==1">
									<li @click="newsDetail(item.id,item.pid,item.cid)">	
										<div class="time">
											<span class="date">{{item.update_time.split('-')[2]}}</span>
											<span class="year_month">{{item.update_time.substr(0,7)}}</span>
										</div>							
										<h3>{{item.title}}</h3>
										<p>{{item.message}}</p>
										<!-- <span>{{item.update_time}}</span>							 -->
									</li>
								</template>
								<template v-for="(item,index) in articleList3.slice(0,3)" v-if="tabIndex==2">
									<li @click="newsDetail(item.id,item.pid,item.cid)">	
										<div class="time">
											<span class="date">{{item.update_time.split('-')[2]}}</span>
											<span class="year_month">{{item.update_time.substr(0,7)}}</span>
										</div>							
										<h3>{{item.title}}</h3>
										<p>{{item.message}}</p>
										<!-- <span>{{item.update_time}}</span>							 -->
									</li>
								</template>
							</ul>
						</div>
					</div>
				</div>
				<!-- <div class="xj_fwr">
					<div class="xj_fwrtop" id="quickLogin1">
						<img src="../../assets/images/tempIMG.png">
					</div>

					<div align="center"><img src="../../assets/images/xj_img14.png"></div>
				</div> -->
			</div>
		
			<!-- <div class="xj_jy">
				<ul>
					<template v-for="(item,index) in smartTransportationList">
						<li @click="smartTransportation(item.id,item.pid,item.cid)">
							<h2>{{item.title}} ></h2>
							<p>{{item.message}}</p>
						</li>
					</template>
				</ul>
			</div> -->
			<div class="xj_news">
				
				<div class="xj_newsl">
					<div class="xj_newss1"></div>
					<div class="xj_newsltit">
						<div class="clearfix borderbottom" >
							<h2 v-if="noticeList.length>0" class="borderblue">{{noticeList[0].name}}</h2>
							<h3><a @click="noticeMore(noticeList[0].pid,noticeList[0].cid)">更多 ></a></h3>
						</div>
					</div>
					<div class="xj_newsrnr">
						<ul>
							<template v-for="(item,index) in noticeList">
								<li @click="noticeDetail(item.id,item.pid,item.cid)">
									<h3><span class="noticeTitle nnotice">{{item.title}}</span><span class="updateTime">{{item.update_time}}</span></h3>
									<p>{{item.message}}</p>
								</li>
							</template>
						</ul>
					</div>
				</div>
				<div class="xj_newsr">
					<div class="xj_newss1"></div>
					<div class="xj_newsltit">
						<div class="clearfix borderbottom" >
							<h2 v-if="lastlist.length>0" class="borderblue">{{lastlist[0].name}}</h2>
							<h3><a @click="noticeMore(lastlist[0].pid,lastlist[0].cid)">更多 ></a></h3>
						</div>
					</div>
					<div class="xj_newsrnr">
						<ul>
							<template v-for="(item,index) in lastlist">
								<li @click="noticeDetail(item.id,item.pid,item.cid)">
									<h3><span class="noticeTitle">{{item.title}}</span><span class="updateTime">{{item.update_time}}</span></h3>
									<p>{{item.message}}</p>
								</li>
							</template>
						</ul>
					</div>
				</div>
			</div>
			<div class="xj_gg1">
				<a v-if="commonImg.length>0"><img :src="commonImg[0].img" style="width:998px;height:255px"></a> 
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	export default {
		data() {
			return {
				imgList: [],
				menuNavList:[],
				articleList1:[],
				articleList2:[],
				articleList3:[],
				noticeList:[],
				promotionList:[],
				businessGuideList:[],
				smartTransportationList:[],
				lastlist:[],
				businessGuideCid:'',
				imgSrc:'',
				categoryId:0,
				duilian:[],
				duilian1:'',
				duilian2:'',
				commonImg:[],
				movePicSrc:'',			
				movePicInfo:[],
				showMoveBox:true,
				tabIndex:0
			}
		},
		mounted() {
			this.getImgSrc()
			this.getImgList()
			this.getMenuNavList()
			this.getArticleList1()
			this.getArticleList2()
			this.getArticleList3()
			this.getNoticeList()
			this.getlastlist()
			this.getPromotionList()
			this.getBusinessGuideList()
			this.getSmartTransportationList()						  
		},
		methods: {	
			changeIndex(index){
				this.tabIndex = index
			},				
			getImgList() {
				let self = this
				self.$http.get(self.api.getImgList,{},function(res){					
					self.imgList = res
					self.imgList.forEach((e)=>{
						let imgUrl = e.img
						imgUrl = 'nwzxt/Public/upload/slide/'+imgUrl
						e.imgUrl = imgUrl
					})					
				},function(res){

				})
			},
			getMenuNavList() {
				let self = this
				self.$http.get(self.api.getMenuNavList,{},function(res){					
					self.menuNavList = res
					self.menuNavList.forEach((e)=>{
						let imgUrl = e.picLink
						imgUrl = 'nwzxt/Public/upload/navigation/'+imgUrl
						e.imgUrl = imgUrl
					})				
				},function(res){

				})
			},
			closeMoveBox(){
				this.showMoveBox = false
			},
			getArticleList1() {
				let self = this
				self.$http.get(self.api.indexList,{
					params:{					
						item:0
					}
				},function(res){					
					self.articleList1 = res
								
				},function(res){

				})
			},
			
			getArticleList2() {
				let self = this
				self.$http.get(self.api.indexList,{
					params:{					
						item:1
					}
				},function(res){					
					self.articleList2 = res
								
				},function(res){

				})
			},
			getArticleList3() {
				let self = this
				self.$http.get(self.api.indexList,{
					params:{					
						item:2
					}
				},function(res){					
					self.articleList3 = res
								
				},function(res){

				})
			},
			getNoticeList() {
				let self = this
				self.$http.get(self.api.indexList,{
					params:{
						item:3
					}
				},function(res){					
					self.noticeList = res
								
				},function(res){

				})
			},
			getlastlist() {
				let self = this
				self.$http.get(self.api.indexList,{
					params:{					
						item:4
					}
				},function(res){					
					self.lastlist = res
								
				},function(res){

				})
			},
			getPromotionList() {
				let self = this
				self.$http.get(self.api.getFirstPromotionList,{},function(res){					
					self.promotionList = res							
				},function(res){

				})
			},
			toDtail(id,cid,pid) {
				this.$router.push({
					path:`/page/detail/${id}/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',1)
			},
			newsDetail(id,pid,cid){
				this.$router.push({
					path:`/page/detail/${id}/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',1)			
			},
			toDetail(pid,cid) {							
				this.$router.push({
					path:`/page/content/${pid}/${cid}`
				})
			},
			noticeDetail(id,pid,cid) {
				this.$router.push({
					path:`/page/detail/${id}/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',1)
			},
			newsMore(pid,cid) {
				this.$router.push({
					path:`/page/content/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',2)
			},
			noticeMore(pid,cid) {
				this.$router.push({
					path:`/page/content/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',2)
			},
			smartTransportation(id,pid,cid) {
				this.$router.push({
					path:`/page/content/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',2)
			},
			businessGuide(pid,id,cid){
				this.$router.push({
					path:`/page/detail/${id}/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',2)
			},
			businessGuideMore(pid,cid) {
				this.$router.push({
					path:`/page/content/${pid}/${cid}`
				})
				// this.$store.dispatch('SaveDataType',2)
			},
			move(){
				let box = document.getElementById('box');
				let speedX = 1,speedY = 1;
				//水平方向运动最大值
				let maxL = document.documentElement.clientWidth - box.offsetWidth;
				let	maxT = document.documentElement.clientHeight - box.offsetHeight;
				
				let timer = null;

				box.onmouseenter = function () {
					clearInterval(timer);
				};
				box.onmouseleave = function () {
					autoMove();
				};
				autoMove();    
				function autoMove(){
					timer = setInterval(() => {
						let nextX = box.offsetLeft + speedX;
						let nextY = box.offsetTop + speedY;
						//左侧边界
						if(nextX <= 0) {
							nextX = 0;
							speedX *= -1;
						}
						//上侧边界
						if(nextY <= 0) {
							nextY = 0;
							speedY *= -1;
						}
						//右侧边界
						if(nextX >= maxL) {
							nextX = maxL;
							speedX *= -1;
						}
						//底侧边界
						if(nextY >= maxT) {
							nextY = maxT;
							speedY *= -1;
						}
						box.style.left = nextX + 'px';
						box.style.top = nextY + 'px';
						
					},20);
				}
			},
			getImgSrc() {
				let self = this
				self.$http.get(self.api.queryAdvListByCategoryId,{
					params:{
						categoryId:self.categoryId
					}
				},function(res){					
					self.imgSrc = res
					self.imgSrc.forEach((e)=>{
						e.img = 'nwzxt/Public/upload/adv/'+ e.img
					})
					self.duilian = self.imgSrc.filter(function(item){
						return item.advtype=='1'
					})
					self.commonImg = self.imgSrc.filter(function(item){
						return item.advtype=='0'
					})
					self.duilian1 = self.duilian[0].img
					self.duilian2 = self.duilian[1].img
					self.movePicInfo = self.imgSrc.filter(function(item){
						return item.advtype=='2'
					})								
					self.movePicSrc = self.movePicInfo[0].img
					setTimeout(function(){				
						self.move()
					},1500)
				},function(res){

				})
			},
			getBusinessGuideList() {
				let self = this
				self.$http.get(self.api.getBusinessGuideList,{},function(res){					
					self.businessGuideList = res
					self.businessGuideList.forEach((e)=>{
						let imgUrl = e.img
						imgUrl = 'nwzxt/Public/upload/article/'+imgUrl
						e.imgUrl = imgUrl
					})
					self.$nextTick(function () {
						new Swiper('.swiper-container', {
							// slidesPerView: 4,
							loop : true,
							autoplay:3000,
							spaceBetween: 30,
							pagination : '.swiper-pagination',
							paginationClickable :true,                   
						});	
					}) 	
							
				},function(res){

				})
			},
			getSmartTransportationList() {
				let self = this
				self.$http.get(self.api.getSmartTransportationList,{},function(res){					
					self.smartTransportationList = res
								
				},function(res){

				})
			},
		}
	}
</script>
<style scoped>
	.swiper-container {
      width: 100%;
      height: 308px;
	}
	.xj_fwltit ul li{
		font-size: 16px;
		width: 92px
	}
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
	}
	.swiperBg{
		margin-top: -30px;
		background: rgba(0,0,0,0.7);
		position: absolute;
		bottom: 0;
		width: 100%;
		line-height: 40px;
		height: 40px;
	}
	.xj_fwltit ul li{
		margin-right: 0
	}
	.xj_newslnr ul li p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #666;
		font-size: 13px;
		line-height: 24px;
		overflow: hidden;
		padding-bottom: 3px;
		height: 28px;
		/* height: 60px; */
		border-bottom: 1px dotted #ccc;
	}
	.swiper-slide h3{
		width: 245px;
		font-size: 14px;
		color: #fff;
		line-height: 40px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 20px
	}
	.banner{
		width: 1000px;
		margin: 0 auto;
		margin-top: 10px
	}
	.swiper-pagination{
		text-align: right;
		padding-right: 20px;
	}
	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
		bottom: 0px;
		height: 40px;
		line-height: 40px;
	}
	.swiper-pagination-bullet{
		background: #fff
	}
	.swiper-slide{
		cursor: pointer;
		position: relative;
	}
	.movePic{
		width: 200px;
		height: 180px;
	}
	.xj_fwltit ul li.focus{
		border-bottom: 3px solid #2c1fe6;
	}
	 #box {
		width: 200px;
		height: 200px;
		left: 0;
		top: 0;
		/* border: 1px solid #f00; */
		/* box-shadow: 0 0 5px #ccc; */
		position: absolute;
		z-index: 100000
	}
	.swiper-slide p{
		font-size: 13px;
		color: #045fb9;
		line-height: 26px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	.xj_fw{
		margin-bottom: 0;
	}
	.xj_fwl{
		width: 525px
	}
	.updateTime{
		position: relative;
		top: 8px
	}
	.xj_fw{
		border: none
	}
	.xj_gg1{
		padding-bottom: 12px
	}
	.Tae1 .Ttext{
		position: relative;
		top: -3px
	}
	.xj_nav ul li{
		flex:1;
		cursor: pointer;
	}
	.classMoveBox{
		text-align: right
	}
	.classMoveBox span{
		cursor: pointer;
	}
	.duilian1{
		width: 100px;
		height: 20px;
		border: 1px solid red;
		position: fixed;
		top: 300px;
		z-index: 1000
	}
	.noticeTitle{
		display: inline-block;
		width:265px;
		overflow: hidden;
		float: none;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 14px;
		color: #2e90d8;
		line-height: 26px;
	}
	.nnotice{
		width: 325px;
	}
	.xj_newsrnr ul li h3{
		line-height: 13px
	}
	.duilian2{		
		position: fixed;
		top: 300px;
		right: 0;
		width: 100px;
		height: 20px;
		z-index: 1000;
		border: 1px solid red;
	}

	
	.banner-img {
		height: 100%;
		width: 100%;
	}
	
	.xj_hot1 h2,.xj_hot2 h2,.xj_hot3 h2,.xj_hot4 h2,.xj_hot4 h2{
		margin-left: 60px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.xj_hot2,.xj_hot3,.xj_hot4,.xj_hot1 ,.xj_newsrnr ul li p{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.xj_fwltit h3 a,.xj_fwlnr ul li,.xj_newslnr ul li{
		cursor: pointer;
	}
	.xj_fwl{
		padding:0;
	}
	.xj_newslnr ul li h3{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 0px !important;
		color: #000;
		font-size: 15px;
		line-height: 32px
	}
	.xj_hot ul li,.xj_jy ul li h2,.xj_jy ul li p,.xj_newsrnr ul li,.xj_newsltit h3 a{
		cursor: pointer;
	}
	.time{
		position: absolute;
		left: 0px;
		top: 6px;
		width: 71px;
		color: rgb(182, 182, 182);
		background-color: rgb(247, 247, 247);
		text-align: center;
		font-family: "思源黑体 CN";
		line-height: 25px;
		font-weight: bold;
		border-radius: 3px;
	}
	.date{
		    display: block;
			font-size: 36px;
			height: 40px;
			line-height: 40px;
			border-bottom: 1px solid #e5e5e5;
			max-width: 53px;
			margin: auto;
			border-radius: 5px 5px 0 0;
	}
	.xj_newslnr ul li{
		padding:10px 0 10px 80px!important;
		position: relative;
		
	}
	.xj_fwlnr{
		padding-bottom: 10px;
		padding-top: 10px
	}
	.xj_jy ul li p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	.gonggao{
		width: 456px;
		height: 308px;
		float: left;
		margin-left: 18px;
		padding:5px 15px 10px;	
		margin-top: 10px;	
		border: 1px solid #ccc;
	}
	.swiperPic{
		width: 100%;
		height: 308px;
	}
</style>
