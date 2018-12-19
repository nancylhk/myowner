<template>
    <div>
        <div class="N_Ltop">
			<p><img :src="imgUrl" width="244" height="107" style="border-radius:15px 15px 0 0"/></p>
			<ul>
				<template v-for="item in leftNavList">
					<li>
						<a @click="link(item.pid,item.id)"  :class="cid==item.id?'On':''">{{item.name}}</a>
					</li>				
				</template>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
	props:['imgUrl'],
	data() {
		return {
			leftNavList:[]
		}
	},
	computed:{
		cid() {
			return this.$route.params.cid
		}
	},
	mounted() {
		this.getLeftNavList()
	},
	
	methods: {
		link(pid,cid) {
			this.$store.dispatch('updateLeaveMsgRefresh',true)
			// console.log(this.$store.state.common.leaveMsgRefresh)
			this.$router.push({
				path:`/page/content/${pid}/${cid}`
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
                }
            },function(res){

            })
        },
	}
}
</script>
<style>
.N_Ltop a{
	cursor: pointer;
}
</style>
