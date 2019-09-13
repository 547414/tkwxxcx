// pages/index6/index6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  baocunwx: function (e) {
    wx.showModal({
      title: '提示',
      content: '确定要保存这张微信支付二维码吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          wx.getImageInfo({
            src: '/images/wx.png',
            success: function (res) {
              console.log(res);
              var path = res.path;
              wx.saveImageToPhotosAlbum({
                filePath: path,
                success: function (res) {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 1500
                  })
                },
                fail: function (res) {
                  wx.showModal({
                    title: '提示',
                    content: '您没有授权使用 保存到相册 权限，请点击 前往设置！',
                    confirmText: '前往设置',
                    cancelText: '狠心拒绝',
                    success: function (res) {
                      if (res.confirm) {
                        wx.openSetting({
                          success: (res) => { }
                        })
                      } else if (res.cancel) {
                        wx.showToast({
                          title: '保存失败，请重试！',
                          icon: 'none',
                          duration: 1500
                        })
                      }
                    }
                  })
                }
              })
            }
          });
        } else if (res.cancel) { //用户点击取消
          wx.showToast({
            title: '已取消！',
            icon: 'none',
            duration: 1500
          })
        }
      }
    })
  },

  baocunzfb: function (e) {
    wx.showModal({
      title: '提示',
      content: '确定要保存这张支付宝二维码吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          wx.getImageInfo({
            src: '/images/zfb.png',
            success: function (res) {
              console.log(res);
              var path = res.path;
              wx.saveImageToPhotosAlbum({
                filePath: path,
                success: function (res) {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 1500
                  })
                },
                fail: function (res) {
                  wx.showModal({
                    title: '提示',
                    content: '您没有授权使用 保存到相册 权限，请点击 前往设置！',
                    confirmText: '前往设置',
                    cancelText: '狠心拒绝',
                    success: function (res) {
                      if (res.confirm) {
                        wx.openSetting({
                          success: (res) => { }
                        })
                      } else if (res.cancel) {
                        wx.showToast({
                          title: '保存失败，请重试！',
                          icon: 'none',
                          duration: 1500
                        })
                      }
                    }
                  })
                }
              })
            }
          });
        } else if (res.cancel) { //用户点击取消
          wx.showToast({
            title: '已取消！',
            icon: 'none',
            duration: 1500
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '关于开发者'
    });
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