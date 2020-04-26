// pages/zds/zds.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  btn_jds_sx:function(e){//近代史-顺序
    app.globalData.name="jds"
    app.globalData.name_type="sx"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_sx_sx:function(e){//思修-顺序
    app.globalData.name="sx"
    app.globalData.name_type="sx"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_my_sx:function(e){//马原-顺序
    app.globalData.name="my"
    app.globalData.name_type="sx"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_mg_sx:function(e){//毛概-顺序
    app.globalData.name="mg"
    app.globalData.name_type="sx"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_jds_sj:function(e){//近代史-随机
    app.globalData.name="jds"
    app.globalData.name_type="sj"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_sx_sj:function(e){//思修-随机
    app.globalData.name="sx"
    app.globalData.name_type="sj"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_my_sj:function(e){//马原-随机
    app.globalData.name="my"
    app.globalData.name_type="sj"
    app.globalData.name="my"
    app.globalData.name_type="sj"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_mg_sj:function(e){//毛概-随机
    app.globalData.name="mg"
    app.globalData.name_type="sj"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_jds_ctk:function(e){//近代史-错题库
    app.globalData.name="jds"
    app.globalData.name_type="ctk"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_sx_ctk:function(e){//思修-错题库
    app.globalData.name="sx"
    app.globalData.name_type="ctk"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_my_ctk:function(e){//马原-错题库
    app.globalData.name="my"
    app.globalData.name_type="ctk"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_mg_ctk:function(e){//毛概-错题库
    app.globalData.name="mg"
    app.globalData.name_type="ctk"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})