export default {
    data() {
        return {
            allowOnloadGetList: true, // 是否允许页面onload生命周期进入后立马执行getlist
            minixPagingListsApi: '', // 接口地址
            pageingListApiMethod: 'post', // 接口请求方法
            pagingListPage: 1, // 分页
            pagingListAllowLoadMore: true, // 允许加载更多
            pagingListLoadedAll: false, // 已加载全部数据
            pagingListNoListData: false, // 没有列表数据,
            isOrder: false, // 订单页面
            listData: [],
            isLoadInit: false, // 初始化数据之后，若无数据再显示无数据图标
        }
    },

    computed: {
        listDataLength() {
            return this.listData.length
        }
    },

    // 下拉刷新
    onPullDownRefresh() {
        uni.stopPullDownRefresh();
        if (this.allowOnloadGetList) {
            this.pagingListToggle(() => {
                // uni.stopPullDownRefresh();
            });
        } else {
            // uni.stopPullDownRefresh();
        }
    },


    onLoad() {
        if (this.allowOnloadGetList) this.pagingListGetLists();
    },

    //上拉加载更多
    onReachBottom() {
        this.pagingListGetLists();
    },

    methods: {
        // 列表切换
        pagingListToggle(fn) {
            this.pagingListPage = 1
            this.pagingListAllowLoadMore = true
            this.pagingListLoadedAll = false
            this.pagingListNoListData = false
            this.listData = []
            if (fn) this.pagingListGetLists(fn);
            else this.pagingListGetLists();
        },

        // 获取列表数据
        pagingListGetLists(fn) {
            console.log(this.pagingListLoadedAll)
            if (!this.pagingListAllowLoadMore || this.pagingListLoadedAll || this.pagingListNoListData) return;
            this.pagingListAllowLoadMore = false;
            let postData = {
                page: this.pagingListPage,
                list_rows: global.PAGE_SIZE
            }
            if (this.pagingListPostData) {
                postData = Object.assign({}, postData, this.pagingListPostData());
            }
            this.isShowLoading = true
            this.$api[this.pageingListApiMethod](this.minixPagingListsApi, postData).then(res => {
                this.isShowLoading = false
                if (res.data.code == 1) {
                    if (this.pagingListBeforeResponseData) res.data.data = this.pagingListBeforeResponseData(res);
                    let tempLists = res.data.data.data || res.data.data.list,
                        totalPage = res.data.data.last_page || 1,
                        listData = this.listData;
                    if (this.pagingListResponseData) tempLists = this.pagingListResponseData(tempLists);
                    this.listData.push(...tempLists);
                    this.pagingListAllowLoadMore = true;
                    if (this.pagingListPage >= totalPage) this.pagingListLoadedAll = true;
                    if (this.pagingListPage == 1 && this.listData.length == 0) this.pagingListNoListData = true;
                    this.pagingListPage = this.pagingListPage + 1;
                } else {
                    this.pagingListAllowLoadMore = true;
                    this.pagingListLoadedAll = true;
                    if (this.pagingListPage == 1 && this.listData.length == 0) this.pagingListNoListData = true;
                }
                this.isLoadInit = true;
                if (fn) fn();
            }).catch(err => {
                console.log(err);
                this.isShowLoading = false
                this.pagingListAllowLoadMore = true;
                this.isLoadInit = true;
            })
        }
    }
}