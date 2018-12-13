<template>
    <div>
        <Banner :imgSrc='imgSrc'></Banner>
        <div class="main">
            <div class="N_left">
                <Left  v-on:listenToCid="changeClickId" :imgUrl='imgUrl'></Left>
                <!-- <Activity></Activity> -->
            </div>
            <div class="N_right">              
                <router-view :key="key" ></router-view>
            </div>
            <div class="clear"></div>
        </div> 
    </div>   
</template>
<script>
import Banner from '../../components/banner'
import Left from '../../components/left'
import Activity from '../../components/activity'

export default {
    components:{
        Banner,
        Left,
        Activity,
        
    },
    computed: {
        key() {
            return this.$route.fullPath
        }
    },
    data() {
        return {
            content:'',
            imgSrc:'',
            leftNavList:[],
            datatype:"1",
            total:'',
            pid:this.$route.params.pid,
            clickId:this.$route.params.clickId,
            categoryId:this.$route.params.cid,
            imgUrl:'',

        }
    },
    mounted(){
        this.getImgSrc()
    },
    methods:{
        changeClickId(data) {
            this.clickId = data
        },
        getImgSrc() {
            let self = this
            self.$http.get(self.api.queryAdvListByCategoryId,{
                params:{
                    categoryId:self.$route.params.pid
                }
            },function(res){					
                self.imgSrc = 'nwzxt/Public/upload/adv/'+res[0].img
                self.imgUrl = 'nwzxt/Public/upload/adv/'+res[1].img
            },function(res){

            })
        },
        getTotal() {
			let self = this
			if(this.datatype == '2'){
				self.$http.get(self.api.getTotal,{
					params:{
						cid:this.cid,
						start:'',
						end:''
					}
				},function(res){					
					self.total = res                       
				},function(res){

				})
			}
			
		}
    }
}
</script>
