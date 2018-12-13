import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Layout/Home'
// 首页
import Index from '@/views/index/Index'
// 详情页面
import common from '@/views/common/index'
import detail from '@/views/common/detail'
import comments from '@/views/common/comments'
import content from '@/views/common/content'
import search from '@/views/common/search'
import searchDetail from '@/views/common/searchDetail'
import test from '@/views/common/test'
Vue.use(Router)

export const constantRouterMap = [
	{
		path: '/',
		component: Home,
		redirect: '/index',
		children: [{
				path: 'index',
				component: Index,
				meta: {title: '首页'}
			},
			{
				path: 'page',
				component: common,			
				children:[{
					path: 'content/:pid/:cid',
					component: content,
					meta: {title: '详情'}
				},{
					path: 'detail/:id/:pid/:cid',
					component: detail,
					meta: {title: '内容'}
				},{
					path: 'comments/:id/:pid/:cid',
					component: comments,
					meta: {title: '留言详情'}
				},{
					path: 'search/:message/:pid',
					component: search,
					meta: {title: '搜索'}
				},{
					path: 'searchDetail/:id/:pid',
					component: searchDetail,
					meta: {title: '搜索'}
				}]					
			},
			
		]
	},
	{
		path: '/test',
		component: test,
		meta: {title: '测试'}
	}
]
export default new Router({
	routes: constantRouterMap
})
