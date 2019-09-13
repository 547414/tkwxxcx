//index.js
//获取应用实例
const app = getApp()
Page({
  data: {

  },

  //删除所有本地缓存
  indexclickButton1: function() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除所有缓存吗(数据无价，删除需谨慎！)？',
      success: function(res) {
        if (res.confirm) { //用户点击确定     
          wx.clearStorage();
          app.globalData.jds1count3 = 0,
            app.globalData.jds1count2 = 0,
            app.globalData.jds1count = 1,
            app.globalData.jds4count3 = 0,
            app.globalData.jds4count2 = 0,
            app.globalData.jds4count = 1
          wx.showToast({
            title: '删除成功！',
            icon: 'success',
            duration: 1500 //持续的时间
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '已取消！',
            icon: 'none',
            duration: 1500 //持续的时间
          })
        }
      }
    })
  },
  //详细说明
  indexclickButton3:function(){
    wx.navigateTo({
      url: '/pages/index3/index3'
    })
  },
  //技术文档
  indexclickButton4: function () {
    wx.navigateTo({
      url: '/pages/index4/index4'
    })
  },
  //分享和转发
  indexclickButton5: function () {
    wx.navigateTo({
      url: '/pages/index5/index5'
    })
  },
  //赞助开发者
  indexclickButton6: function () {
    wx.navigateTo({
      url: '/pages/index6/index6'
    })
  },
  //授权情况
  indexclickButton7: function () {
    wx.openSetting({
      success: (res) => { }
    })
  },
  //反馈/客服
  indexclickButton8: function () {
   
  },

  //查看缓存占用空间大小
  indexclickButton2:function(res){
    wx.getStorageInfo({
      success: function (res) {
        wx.showToast({
          title: '缓存已占用' + res.currentSize + 'KB的空间',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      }
    })
  },

  onShareAppMessage: function (res) {
    return {
      title: '浙海大东科题库',
      path: '/pages/index/index',
      imageUrl: '/images/zhddktk.png',
      success: function (shareTickets) {
        console.info(shareTickets + '成功');
        // 转发成功
      },
      fail: function (res) {
        console.log(res + '失败');
        // 转发失败
      },
      complete: function (res) {
        // 不管成功失败都会执行
      }
    }
  },

  onLoad: function() {
    this.onShareAppMessage();
  },

})