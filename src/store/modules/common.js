
const common = {
	state: {		
		leftNavList:[],
		rightContent:'',
		searchMessage:''
	},
	mutations: {	
		SET_LEFTNAVLIST:(state,leftNavList) => {
			state.leftNavList = leftNavList
		},
		SET_RIGHTCONTENT:(state,rightContent) => {
			state.rightContent = rightContent
		},
		SET_SEARCHMESSAGE:(state,searchMessage) => {
			state.searchMessage = searchMessage
		}
	},
	actions: {
		GetLeftNavList({ commit },leftNavList) {
			commit('SET_LEFTNAVLIST',leftNavList)
		},
		GetRightContent({ commit },rightContent) {
			commit('SET_RIGHTCONTENT',rightContent)
		},
		GetSearchMessage({ commit },searchMessage) {
			commit('SET_SEARCHMESSAGE',searchMessage)
		}
	}
};

export default common;