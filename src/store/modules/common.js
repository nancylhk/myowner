
const common = {
	state: {		
		leaveMsgRefresh:true
	},
	mutations: {	
		SET_LEAVEMSGREFRESH:(state,leaveMsgRefresh) => {
			state.leaveMsgRefresh = leaveMsgRefresh
		},
		
	},
	actions: {
		updateLeaveMsgRefresh({ commit },leaveMsgRefresh) {
			commit('SET_LEAVEMSGREFRESH',leaveMsgRefresh)
		},
	}
};

export default common;