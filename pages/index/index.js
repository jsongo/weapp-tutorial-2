//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    news: [
      {
        id: 1,
        title: '苹果在华首家研发中心成立，能拯救大中华区的业绩吗？',
        author: '卢晓明',
        time: '12分钟前',
        img: 'https://pic.36krcnd.com/avatar/201609/29013641/t87v7fekz7c3najy.jpg!feature',
        category: '明星公司'
      },
      {
        id: 2,
        title: '带着手机基因的正统黑莓走了，转向软件服务的“不正统”黑莓来了',
        author: '宋长乐',
        time: '1小时前',
        img: 'https://pic.36krcnd.com/avatar/201609/29011405/n88t8ve72i5ddaq9.png!feature',
        category: '明星公司'
      },
      {
        id: 3,
        title: '“大树聚”做泛零售行业大数据应用，帮购物中心和品牌商用数据赚钱',
        author: '刘慧姝',
        time: '1小时前',
        img: 'https://pic.36krcnd.com/avatar/201609/28082902/j2hyw8khka0lgoag.jpg!feature',
        category: '早期项目'
      },
      {
        id: 4,
        title: '互联网+资本+广告公司，三蝌优能讲出怎样的故事？',
        author: '土',
        time: '2小时前',
        img: 'https://pic.36krcnd.com/avatar/201609/26095738/bdad9yoqczy6ad89.png!feature',
        category: '早期项目'
      },
      {
        id: 5,
        title: '买不起流量，但你做得起创新',
        author: '李叫兽',
        time: '2小时前',
        img: 'https://pic.36krcnd.com/avatar/201609/28084917/72bspqpvqrriw0hx.png!feature',
        category: '技能GET'
      },
      {
        id: 6,
        title: '【独家】内容起步、转战滑雪品牌，“零夏”获1000万人民币天使融资',
        author: '克里斯唐',
        time: '1小时前',
        img: 'https://pic.36krcnd.com/avatar/201609/28031852/ai759sj58nobr279!feature',
        category: '早期项目'
      },
    ]
  },
  //事件处理函数
  bindItemTap: function(event) {
    var id = event.currentTarget.dataset.id, // 当前id
      article = null;
    // 找出当时点击的那一项的详细信息
    for(var d of this.data.news) {
      if(d.id == id) {
        article = d;
        break;
      }
    }
    console.log(article);
    if(!article) {
      console.log('系统出错');
      return;
    }
    // 设置到全局变量中去，让下个页面可以访问
    app.globalData.curArticle = article; 
    // 切换页面
    wx.navigateTo({
      url: '../article/content'
    });
  },
  onLoad: function () {
    // var that = this;
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   });
    // })
  }
})
