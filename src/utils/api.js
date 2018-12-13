const BASE_URL = ''
export default {
    "getMenuList":BASE_URL+'/webNavigation/queryMainNavigationList',//首页菜单
    "getImgList": BASE_URL+'/webNavigation/querySlideNavigationList', //轮播图列表
    "getMenuNavList":BASE_URL+'/webNavigation/queryNavigationList',//首页小导航菜单
    "getArticleList":BASE_URL+'/webArticleController/queryNewsInformation',//首页新闻资讯
    "getFriendLinkList":BASE_URL+'/webFriendLinkController/queryFriendLinkList',//友情链接
    "getNoticeList":BASE_URL+'/webArticleController/queryAnnouncement',//首页通知公告
    "getBusinessGuideList":'/webArticleController/getBusinessGuideList',//业务指南
    "getSmartTransportationList":'/webArticleController/getSmartTransportationList',//首页智慧交通
    "getPromotionList":BASE_URL+'/webArticleController/getSixPromotionList',//优惠活动列表(6个)
    "getFirstPromotionList":BASE_URL+"/webArticleController/getPromotionList",//首页的优惠活动
    "getLeftNavList":BASE_URL+'/webCategoryController/getChildByPid',//左侧菜单栏
    "getRightContent":BASE_URL+'/webInformationController/getInformationByCid',//右侧内容(文章)
    "getRightList":BASE_URL+'/webArticleController/queryArticleList',//右侧内容(列表)
    "getTotal":BASE_URL+'webArticleController/queryArticleListCount',//获取列表总条数
    "getArticleImgById":BASE_URL+'/webArticleController/queryArticleImgById',//列表内容详情
    "getParentCategory":BASE_URL+'/webCategoryController/getParentCategory',//父级栏目
    "queryArticleByTitle":BASE_URL+'/webArticleController/queryArticleByTitle',//搜索
    "queryArticleCountByTitle":BASE_URL+"/webArticleController/queryArticleCountByTitle",//搜索数量
    "findMorePromotion":BASE_URL+'/webArticleController/findMorePromotion',//优惠活动中更多按钮
    "queryPointCityList":BASE_URL+"/webPointController/queryPointCityList",//网点所在区域
    "queryPointTypeList":BASE_URL+'/webPointController/queryPointTypeList',//网点类型
    "queryPointListById":BASE_URL+"/webPointController/queryPointListById",//网点分布列表
    "queryAdvListByCategoryId":BASE_URL+"/webNavigation/queryAdvListByCategoryId",//各个模块广告图片
    "getSiteMapList":BASE_URL+'/webSiteMapController/getSiteMapList',//网站底部链接
    "queryMessageBoardList":"/webMessageBoardController/queryMessageBoardList",//留言板列表
    "queryMessageBoardCount":'/webMessageBoardController/queryMessageBoardCount',//留言总数
    "insertMessageBoard":'/webMessageBoardController/insertMessageBoard',//新增留言
    "getCommentMessage":'/webMessageBoardController/queryMessageBoardById',//留言详情
    "indexList":'webArticleController/indexList'
}