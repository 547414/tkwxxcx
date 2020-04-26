// pages/jmsz/jmsz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first_btn: true,
    sec_btn: true,
    cdl_btn: true,
    rl_btn: true,
    text_first_btn: "已开启",
    text_sec_btn: "已开启",
    text_cdl_btn: "已开启",
    text_rl_btn: "已开启",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (wx.getStorageSync('sz_dyh_btn') === "0") {
      that.setData({
        first_btn: false,
        text_first_btn: "已关闭",
      })
    }
    if (wx.getStorageSync('sz_sec_btn') === "0") {
      that.setData({
        sec_btn: false,
        text_sec_btn: "已关闭",
      })
    }
    if (wx.getStorageSync('sz_cdl_btn') === "0") {
      that.setData({
        cdl_btn: false,
        text_cdl_btn: "已关闭",
      })
    }
    if (wx.getStorageSync('sz_rl_btn') === "0") {
      that.setData({
        rl_btn: false,
        text_rl_btn: "已关闭",
      })
    }
  },
  switch_first_btn: function (e) {
    var that = this
    if (e.detail.value === true) {
      that.setData({
        text_first_btn: "已开启",
      })
      wx.setStorageSync('sz_dyh_btn', "1")
    } else {
      that.setData({
        text_first_btn: "已关闭",
      })
      wx.setStorageSync('sz_dyh_btn', "0")
    }
  },
  switch_sec_btn: function (e) {
    var that = this
    if (e.detail.value === true) {
      that.setData({
        text_sec_btn: "已开启",
      })
      wx.setStorageSync('sz_sec_btn', "1")
    } else {
      that.setData({
        text_sec_btn: "已关闭",
      })
      wx.setStorageSync('sz_sec_btn', "0")
    }
  },
  switch_cdl_btn: function (e) {
    var that = this
    if (e.detail.value === true) {
      that.setData({
        text_cdl_btn: "已开启",
      })
      wx.setStorageSync('sz_cdl_btn', "1")
    } else {
      that.setData({
        text_cdl_btn: "已关闭",
      })
      wx.setStorageSync('sz_cdl_btn', "0")
    }
  },
  switch_rl_btn: function (e) {
    var that = this
    if (e.detail.value === true) {
      that.setData({
        text_rl_btn: "已开启",
      })
      wx.setStorageSync('sz_rl_btn', "1")
    } else {
      that.setData({
        text_rl_btn: "已关闭",
      })
      wx.setStorageSync('sz_rl_btn', "0")
    }
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