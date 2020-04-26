//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cwts: '',
    jdt: 0,
    dis_play: "flex",
    message: "",
  },

  //删除所有本地缓存
  indexclickButton1: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除所有缓存吗(数据无价，删除需谨慎！)？',
      success: function (res) {
        if (res.confirm) { //用户点击确定     
          var temp_d_jds = wx.getStorageSync('d_jds')
          var temp_d_sx = wx.getStorageSync('d_sx')
          var temp_d_my = wx.getStorageSync('d_my')
          var temp_d_mg = wx.getStorageSync('d_mg')
          var temp_sz_dyh_btn = wx.getStorageSync('sz_dyh_btn')
          var temp_sz_sec_btn = wx.getStorageSync('sz_sec_btn')
          var temp_sz_cdl_btn = wx.getStorageSync('sz_cdl_btn')
          var temp_sz_rl_btn = wx.getStorageSync('sz_rl_btn')
          var temp_version=wx.getStorageSync('version')//版本号，用来检测是否需要升级
          var temp_up_data
          wx.getStorage({
            key:"up_data",
            success:function(res){
              temp_up_data=res.data
            }
          })
          wx.getStorage({
            key: 'd_zdy',
            success: function (res2) {
              wx.clearStorage();
              wx.setStorageSync('d_jds', temp_d_jds)
              wx.setStorageSync('d_sx', temp_d_sx)
              wx.setStorageSync('d_my', temp_d_my)
              wx.setStorageSync('d_mg', temp_d_mg)
              wx.setStorageSync('sz_dyh_btn', temp_sz_dyh_btn)
              wx.setStorageSync('sz_sec_btn', temp_sz_sec_btn)
              wx.setStorageSync('sz_cdl_btn', temp_sz_cdl_btn)
              wx.setStorageSync('sz_rl_btn', temp_sz_rl_btn)
              wx.setStorageSync('d_zdy', res2.data)
              wx.setStorageSync('version', temp_version)
              wx.setStorage({
                data: temp_up_data,
                key: 'up_data',
              })
            },
            fail: function () {
              wx.clearStorage();
              wx.setStorageSync('d_jds', temp_d_jds)
              wx.setStorageSync('d_sx', temp_d_sx)
              wx.setStorageSync('d_my', temp_d_my)
              wx.setStorageSync('d_mg', temp_d_mg)
              wx.setStorageSync('sz_dyh_btn', temp_sz_dyh_btn)
              wx.setStorageSync('sz_sec_btn', temp_sz_sec_btn)
              wx.setStorageSync('sz_cdl_btn', temp_sz_cdl_btn)
              wx.setStorageSync('sz_rl_btn', temp_sz_rl_btn)
              wx.setStorageSync('version', temp_version)
              wx.setStorage({
                data: temp_up_data,
                key: 'up_data',
              })
            }
          })
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
  //功能设置
  indexclickButton3: function () {
    wx.navigateTo({
      url: '/pages/jmsz/jmsz'
    })
  },

  //关于/帮助
  indexclickButton6: function () {
    //wx.clearStorage();
    wx.navigateTo({
      url: '/pages/index6/index6'
    })
  },
  //授权情况
  indexclickButton7: function () {
    wx.openSetting({
      success: (res) => {}
    })
  },
  //反馈/客服
  indexclickButton8: function () {

  },

  //查看缓存占用空间大小
  indexclickButton2: function (res) {
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

  onLoad: function () {
    this.onShareAppMessage();
    var temp=wx.getStorageSync('message')
    this.setData({
      message: temp
    })
  }

})