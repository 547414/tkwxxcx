// pages/zzs/zzs.js
const app=getApp()
var id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabl_ed: false//改成false就成了，要不然重启小程序会导致导入题库界面前三个按钮不能用
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'd_zdy',
      fail:function(){
        that.setData({
          disabl_ed: true
        })
      }
    })
  },
  btn_zdy_sx:function(){//自定义-顺序
    app.globalData.name="zdy"
    app.globalData.name_type="sx"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_zdy_sj:function(){//自定义-随机
    app.globalData.name="zdy"
    app.globalData.name_type="sj"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_zdy_ctk:function(){//自定义-错题库
    app.globalData.name="zdy"
    app.globalData.name_type="ctk"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  dr: function (e) {
    id = e.detail.value
  },
  btn_zdy_dr: function (e) {
    var that=this
    wx.getSavedFileList({
      success: savedFileInfo => { //清空之前的下载文件
        let list = savedFileInfo.fileList
        for (let i = 0; i < list.length; i++) {
          wx.removeSavedFile({
            filePath: list[i].filePath,
          })
        }
      }
    })
    wx.downloadFile({
      url: "https://crysu.com/zhddktk/upload/" + id + ".txt",
      success: function (res) {
        wx.getFileSystemManager().readFile({ //读文件
          filePath: res.tempFilePath,
          encoding: 'utf8',
          success(res2) {
            var test = res2.data
            var temp = test.split("\n")
            if (temp[1] === "<!--") {//如果导入ID不正确，会返回404页面的代码
              wx.showToast({
                title: '导入失败，请检查导入ID是否正确！',
                icon: 'none',
                duration: 3000 //持续的时间
              })
            } else {
              wx.getStorage({
                key: 'd_zdy',
                success: function () {
                  wx.showModal({
                    title: '提示',
                    content: '检测到已有导入数据，是否覆盖？',
                    confirmText: '覆盖',
                    cancelText: '取消',
                    success: function (res) {
                      if (res.confirm) {
                        wx.setStorageSync('d_zdy', test)
                        that.setData({
                          disabl_ed: false
                        })
                        wx.showToast({
                          title: '导入成功！',
                          icon: 'success',
                          duration: 1500 //持续的时间
                        })
                      } else if (res.cancel) {
                        wx.showToast({
                          title: '已取消导入！',
                          icon: 'none',
                          duration: 1500
                        })
                      }
                    }
                  })
                },
                fail: function () {
                  wx.setStorageSync('d_zdy', test)
                  that.setData({
                    disabl_ed: false
                  })
                  wx.showToast({
                    title: '导入成功！',
                    icon: 'success',
                    duration: 1500 //持续的时间
                  })
                }
              })
            }
          },
        })
      },
      fail: function (err) {
        wx.showToast({
          title: '导入失败，请检查导入ID是否正确！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      },
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
    this.onLoad()
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