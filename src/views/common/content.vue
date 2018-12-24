<template>
	<div>		
		<div v-if="datatype=='1'">
			<div class="N_title">
				<span>
					<img src="../../assets/images/T_icon11.jpg" />
					<a href="/">首页</a> >
					<a>{{parentCategory.parentCategoryName}}</a> >
					<a>{{parentCategory.categoryName}}</a>
				</span>
				<h3>{{parentCategory.categoryName}}</h3>
			</div> 
			<div class="N_about" v-html="content">
			</div>
		</div>
		<div v-if="datatype=='2'">
			<div class="N_title">
				<span>
					<img src="../../assets/images/T_icon11.jpg" />
					<a href="/">首页</a> >
					<a>{{parentCategory.parentCategoryName}}</a> >
					<a>{{parentCategory.categoryName}}</a>
				</span>
				<h3>{{parentCategory.categoryName}}</h3>
			</div> 
			<div class="N_news">
				<div v-for="(item,index) in content" :key="index">
					<router-link :to="'/page/detail'+'/'+ item.id + '/' + pid +'/'+categoryId">
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
		<div v-if="datatype=='3'">
			<div class="N_title">
				<span>
					<img src="../../assets/images/T_icon11.jpg" />
					<a href="/">首页</a> >
					<a>{{parentCategory.parentCategoryName}}</a> >
					<a>{{parentCategory.categoryName}}</a>
				</span>
				<h3>{{parentCategory.categoryName}}</h3>
			</div> 
			<iframe src="./map.html" frameborder="no" class="iframeMap" scrolling="no"></iframe>
		</div>
		<div v-if="datatype=='4'">
			<div class="N_title">
				<span>
					<img src="../../assets/images/T_icon11.jpg" />
					<a href="/">首页</a> >
					<a>{{parentCategory.parentCategoryName}}</a> >
					<a>{{parentCategory.categoryName}}</a>
				</span>
				<h3>{{parentCategory.categoryName}}</h3>
			</div> 
			<div class="Su_Text01">
				<div class="serverPointFrame">
					<div class="areaFrame">
						所在区域：
					</div>
					<div class="inputFrame1">
						<el-select v-model="cityId" value-key='id' class="selectBox">
							<el-option
							v-for="item in cityList"
							:key="item.id"
							:label="item.cityName"
							:value="item">
							</el-option>
						</el-select>
					</div>
					<div class="areaFrame">
						网点类型：
					</div>
					<div class="inputFrame">
						<el-select v-model="typeId" class="selectBox">
							<el-option
							v-for="item in typeList"
							:key="item.id"
							:label="item.pointType"
							:value="item.id">
							</el-option>
						</el-select>
					</div>
					<div class="areaFrame">
						<div class="queryFrame">
							<input type="button" class="searchPoint" value="查询"  @click="searchPoint"/>
						</div>
					</div>
				</div>
				<div class="tableFrame" id="tableFrame">
					<el-table
					:data="tableData"
					stripe
					style="width: 100%">
					<el-table-column
					prop="pointName"
					label="网点名称"
					min-width="120">
					</el-table-column>
					<el-table-column
					prop="address"
					label="地址"
					min-width="180">
					</el-table-column>
					<el-table-column
					prop="telephone"
					min-width="100"
					label="联系电话">
					</el-table-column>
				</el-table>
				<div class="pages">
					<el-pagination 
					layout="total,prev, pager, next" 
					:total="parseInt(totalTab)" 
					:page-size="pageSize" 
					:current-page="currentPage"
					@current-change="handleTableChange">
					</el-pagination>
				</div>
				</div>
				<table border="0" align="center" cellpadding="2" cellspacing="2" style="font-size:13px;font-family:SimSun,Verdana, Geneva, sans-serif; width: 100%;margin-top: 10px;line-height: 20px">
					<tbody>
						<tr>
							<td align="left">
								<font color="#CC0000">【 业 务 说 明 】</font>
							</td>
						</tr>
						<tr>
							<td height="20px" align="left"><b>1.</b>苏通卡客服中心营业时间：周一至周日
								9:00-17:00（法定节假日除外。宜兴客服中心：周一至周五上午8：00-16：20；周六上午8：00-16：00,周日休息。太仓客服中心：周一至周六上午8:30-11:30，下午13:00-16:30，周日休息。溧阳客服中心：周一至周日8:00-17:00。
								更多网点及营业时间详询96777）业务内容包括：苏通卡和电子标签的销售、发行、安装、充值、变更、挂失、解挂等全部业务</td>
						</tr>
						<tr>
							<td height="20px" align="left"><b>2.</b>苏通卡便利点：苏通卡和电子标签(不含银行联名卡业务)的销售、发行、安装、资料变更、设备更换、挂失、解挂、现金及POS银联卡充值业务、运政卡发行及激活业务。不承接过户、销户(包含销户退款)等售后业务、支票转账、网银转账充值业务及网上读卡器销售、更换等业务。</td>
						</tr>
						<tr>
							<td height="20px" align="left"><b>3.</b>苏通卡充值点：营业时间以各服务区公布的时间为准，提供苏通卡储值卡的销售、现金充值业务，不承接苏通卡过户、销户、变更、支票转帐业务、售后服务以及电子标签有关业务。</td>
						</tr>
						<tr>
							<td height="20px" align="left"><b>4.</b>建设银行一站式服务网点：通行宝公司储值卡的充值（现金或POS），建行ETC联名卡配套OBU的发行、激活、安装以及售后等业务。</td>
						</tr>
						<tr>
							<td height="20px" align="left"><b>5.</b>光大银行一站式服务网点：“光大苏通卡”A卡和B卡的发卡、补卡、挂失、解挂、销户、B卡的充值、OBU发行、更换、退还、安装激活、信息查询业务。不受理普通苏通卡和其他银行联名卡的充值、电子标签发行等售前、售后业务。</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="clear"></div>
		</div>
		<div v-if="datatype=='5'">
			<div v-if="leaveMessage">
				<div class="N_title">
					<span>
						<button class="msgButton" @click="wantLeaveMsg">我要留言</button>
					</span>
					<h3>留言列表</h3>
				</div> 			
				<div class="N_news">
					<div v-for="(item,index) in leaveMessageList" :key="index">
						<router-link :to="'/page/comments'+'/'+ item.messageId + '/' + pid +'/'+categoryId">
							<dl class="liuyanbox">
								<dd>
									<span>回复时间：{{item.createTime}}</span>
									<h5><a href="#">{{item.title}}</a></h5>
									<p style="text-align:right"><span style="color:#666;margin-left:10px">留言类型：{{item.type==1?'建议':item.type==2?'意见':'其他'}}</span></p>
								</dd>
								<div class="clear"></div>
							</dl>
						</router-link>
					</div>
				</div>
				<div class="clear"></div>
				<div class="page">
					<el-pagination layout="total,prev, pager, next" :total="parseInt(leaveMsgTotal)" :page-size="pageSize" :current-page="currentPage"
					@current-change="currentChange">
					</el-pagination>
				</div>
			</div>
			<transition name="fade">
			<div v-if="!leaveMessage">
				<div class="N_title">
					<span>
						<button class="msgButton post" @click="postLeaveMsg">提交留言</button>
					</span>
					<h3>留言</h3>
				</div> 
				<div class="formBox">
					<el-form ref="leaveMsgForm" :model="leaveMsgForm" label-width="80px" :rules="rules" label-position='left'>
						<el-form-item label="标题" prop="title">
							<el-input v-model="leaveMsgForm.title" placeholder="请输入留言标题"></el-input>
						</el-form-item>
						<el-form-item label="留言类型" prop="type">
							<el-select v-model="leaveMsgForm.type" placeholder="请选择留言类型">
								<el-option label="建议" value="1"></el-option>
								<el-option label="意见" value="2"></el-option>
								<el-option label="其他" value="3"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="正文" prop="desc">
							<el-input type="textarea" v-model="leaveMsgForm.desc" rows="10" placeholder="请输入留言内容"></el-input>
						</el-form-item>
					<!-- </el-form>
					<el-form :inline="true" ref='formInline' :model="formInline" class="demo-form-inline" :rules='formInlineRules'> -->
						<div class="inlineForm">
							<el-form-item label="评论人" class="formName" prop="user">
								<el-input v-model="leaveMsgForm.user" placeholder="姓名"></el-input>
							</el-form-item>
							<el-form-item label="联系方式" class="formMobile" prop="telephone">
								<el-input v-model="leaveMsgForm.telephone" placeholder="手机号"></el-input>
							</el-form-item>
							<el-form-item label="验证码" class="formCode" prop="code">
								<el-input v-model="leaveMsgForm.code" placeholder="验证码"></el-input>							
							</el-form-item>
							<el-form-item class="identifyBox">
								<div class="code" @click="refreshCode">
									<s-identify :identifyCode="identifyCode"></s-identify>
								</div>
							</el-form-item>
						</div>
					</el-form>
				</div>
			</div>
			</transition>
		</div>
	</div>
</template>
<script>
import SIdentify from '../../components/identify'
	export default {
		props:['leftList'],
		components:{
			SIdentify
		},
		data() {
			var validateTelephone = (rule, value, callback) => {
				const reg = /^\d{11}$/
				
				if(value === '') {
					callback(new Error('请输入手机号'));
					// console.log(value)
				} else if(reg.test(this.leaveMsgForm.telephone)) {
					callback();			
				} else {
					callback(new Error('手机号码格式错误'));
				}
			};
			return {
				identifyCodes: "1234567890",
      			identifyCode: "",
				currentPage: 1,
				pageSize: 10,
				cityList:[],
				typeList:[],
				typeId:{id:1},
				cityId:{id:1},
				tableData:[],
				totalTab:1,
				content:'',
				datatype: '1',
				total:1,
				parentCategory:'',
				categoryId:this.$route.params.cid,
				pid:this.$route.params.pid,
				leaveMessageList:[],
				leaveMessage:true,
				leaveMsgTotal:0,
				leaveMsgForm:{
					title:'',
					type:'',
					desc:'',
					user:'',
					telephone:'',
					code:''
				},
				rules:{
					title: [
						{ required: true, message: '请输入留言标题', trigger: 'blur' },
						{ min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
					],
					type: [
						{ required: true, message: '请选择留言类型', trigger: 'change' }
					],
					desc:[
						{ required: true, message: '请输入留言内容', trigger: 'change' },
						{ min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
					],
					user:[
						{ required: true, message: '请输入姓名', trigger: 'blur' },
						{ min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' }
					],
					telephone:[
						{ required: true, message: '请输入联系方式', trigger: 'blur' },
						{ validator: validateTelephone, trigger: 'blur'	}
					],
					code:[
						{ required: true, message: '请输入验证码', trigger: 'blur' },
						{ min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' }
					]
				},
				formInlineRules:{
					
				}

			}
		},
		computed:{
		},
		mounted() {		
			this.getLeftNavList()
			this.identifyCode = "";
   			// this.makeCode(this.identifyCodes, 4);
		},
		methods: {
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
					this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			},
			wantLeaveMsg() {
				this.leaveMessage = false
			},
			queryPointCityList() {		
				let self = this			
				self.$http.get(self.api.queryPointCityList, {}, function(res) {
					self.cityList = res
					self.cityId = res[0]
				}, function(res) {
					self.cityList = []
				})
				self.$http.get(self.api.queryPointTypeList, {}, function(res) {
					self.typeList = res
					self.typeId = res[0]
				}, function(res) {
				
				})
				
			},
			postLeaveMsg() {
				this.$refs.leaveMsgForm.validate((valid) => {
					if (valid) {
						if(this.leaveMsgForm.code == this.identifyCode){						
							let self = this				
							self.$http.get(self.api.insertMessageBoard,{
								params:{
									title:this.leaveMsgForm.title,
									content:this.leaveMsgForm.desc,
									mobile:this.leaveMsgForm.telephone,
									type:this.leaveMsgForm.type,
									contact:this.leaveMsgForm.user
								}
							},function(res){					
								self.$message({
									message: '提交成功，系统审核通过后将成功发布',
									type: 'success'
								});
								self.leaveMessage = true                     
							},function(res){

							})							
							
						}else{
							console.log(this.leaveMsgForm.code)
							console.log(this.identifyCode)
							this.$message({
								message: '验证码错误',
								type: 'error'
							});
						}								
					}
				})
			},
			getTotal() {
				let self = this				
				self.$http.get(self.api.getTotal,{
					params:{
						cid:this.categoryId,
						start:'',
						end:''
					}
				},function(res){					
					self.total = res                       
				},function(res){

				})								
			},
			getLeaveMsgTotal() {
				let self = this				
				self.$http.get(self.api.queryMessageBoardCount,{
					params:{
						cid:this.categoryId,
						start:'',
						end:'',
						isPublish:1,
					}
				},function(res){					
					self.leaveMsgTotal = res                       
				},function(res){

				})
				
			},
			getParentCategory() {
				let self = this
				self.$http.get(self.api.getParentCategory,{
					params:{
						categoryId:self.categoryId
					}
				},function(res){					
					self.parentCategory = res
				},function(res){

				})
			},
			getLeftNavList() {
				let self = this
				self.$http.get(self.api.getLeftNavList,{
					params:{
						pid:self.$route.params.pid
					}
				},function(res){
					if(res.length>0){					
						self.leftNavList = res
						// self.$store.dispatch('GetLeftNavList',res)
						self.getRightChange()
						self.getParentCategory()
					}
				},function(res){

				})
			},
			getRightChange() {
				let self = this
				let sss = self.leftNavList.filter((item)=>{
					return item.id == self.categoryId
				})
				self.datatype = sss[0].datatype  
				self.cid = sss[0].id
				//请求右侧数据内容          
				if(self.datatype == '1'){
					self.$http.get(self.api.getRightContent,{
						params:{
							cid:self.cid
						}
					},function(res){					
						self.content = res.content 				                      
					},function(res){
						self.content = '未知错误'
					})
				}else if(self.datatype == '2'){
					self.$http.get(self.api.getRightList,{
						params:{
							cid:self.cid,
							start:1,
							end:10
						}
					},function(res){					
						self.content = res  
						self.getTotal()
					},function(res){
						self.content = []
					})
				}else if(self.datatype == '4') {
					this.queryPointCityList()
					this.getPointTable()
				}else if(self.datatype == '5'){
					self.$http.get(self.api.queryMessageBoardList,{
						params:{
							start:1,
							end:10,
							isPublish:1
						}
					},function(res){					
						self.leaveMessageList = res  
						self.getLeaveMsgTotal()
						self.makeCode(self.identifyCodes, 4);
					},function(res){
						self.leaveMessageList = []
					})
				}
			},
			getPointTable() {
				let self = this
				self.currentPage = 1
				let start = self.pageSize * (self.currentPage - 1) + 1;
				let end = self.currentPage * self.pageSize;
				self.$http.get(self.api.queryPointListById, {
					params:{
						cityId:self.cityId.id,
						typeId:self.cityId.id,
						start:start,
						end:end
					}
				}, function(res) {
					self.tableData = res
				}, function(res) {
				
				})				
			},
			searchPoint() {
				this.getPointTable()
			},
			currentChange(val){
				this.currentPage = val
				let self = this
				let start = self.pageSize * (self.currentPage - 1) + 1;
				let end = self.currentPage * self.pageSize;
				self.$http.get(self.api.queryMessageBoardList,{
					params:{
						start:1,
						end:10,
						isPublish:1
					}
				},function(res){					
					self.leaveMessageList = res  
					self.getLeaveMsgTotal()
				},function(res){
					self.leaveMessageList = []
				})
			},
			handleCurrentChange(val) {
				this.currentPage = val
				let self = this
				let start = self.pageSize * (self.currentPage - 1) + 1;
				let end = self.currentPage * self.pageSize;
				self.$http.get(self.api.getRightList, {
					params: {
						cid: self.categoryId,
						start: start,
						end: end
					}
				}, function(res) {
					self.content = res
				}, function(res) {
					
				})
			},
			handleTableChange(val) {
				let self = this
				self.currentPage = val
				let start = self.pageSize * (self.currentPage - 1) + 1;
				let end = self.currentPage * self.pageSize;
				self.$http.get(self.api.queryPointListById, {
					params:{
						cityId:self.cityId.id,
						typeId:self.cityId.id,
						start:start,
						end:end
					}
				}, function(res) {
					self.tableData = res
				}, function(res) {
					
				})	
			}
		}
	}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.code {
  width: 109px;
  height: 40px;
  margin-left: -6px
}

.formBox{
	padding: 30px 30px 100px
}
.el-select .el-input__inner{
	width: 580px
}
.msgButton{
	outline: none;
	width: 80px;
	height: 35px;
	border-radius: 5px;
	background: #4cae4c;
	border: none;
	line-height: 35px;
	color: #fff;
	font-size: 14px;
	cursor: pointer;
}
.post{
	background: #404b83
}
.msgLineBox{
	text-align: right
}
.iframeMap{
	width: 750px;
	height: 900px;
	margin-top: 20px;
}
.searchPoint{
	padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
	border-radius: 3px;
	color: #fff;
    background-color: #5cb85c;
	border-color: #4cae4c;
	display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
	border: 1px solid transparent;
	position: relative;
	top: -9px
}
.pages{
	text-align: center;
	margin: 20px 0 25px
}

</style>
