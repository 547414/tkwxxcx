// pages/zzs/zzs.js
const app = getApp()
var id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    disabl_ed: false //改成false就成了，要不然重启小程序会导致导入题库界面前三个按钮不能用
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '自定义题库'
    });
    this.createCode()
    var that = this
    wx.getStorage({
      key: 'd_zdy',
      fail: function () {
        that.setData({
          disabl_ed: true
        })
      }
    })
  },
  btn_zdy_sx: function () { //自定义-顺序
    app.globalData.name = "zdy"
    app.globalData.name_type = "sx"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_zdy_sj: function () { //自定义-随机
    app.globalData.name = "zdy"
    app.globalData.name_type = "sj"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  btn_zdy_ctk: function () { //自定义-错题库
    app.globalData.name = "zdy"
    app.globalData.name_type = "ctk"
    wx.navigateTo({
      url: '/pages/xqy/xqy'
    })
  },
  dr: function (e) {
    id = e.detail.value
  },
  dr2: function (e) {
    app.globalData.code_num = e.detail.value
  },
  btn_zdy_dr: function (e) {
    var that = this
    if (app.globalData.code.toLowerCase() === app.globalData.code_num.toLowerCase()) {
      this.createCode()
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
      wx.showLoading({
        title: '数据加载中···',
        mask: true,
        icon: 'loading',
        duration: 10000
      });
      wx.downloadFile({//这里的upload，可以改成随机的，例如dafh4karakkjf之类的，配合服务器网页端，进一步提高文件的安全
        url: "https://crysu.com/zhddktk/upload/" + id + ".txt",
        success: function (res) {
          wx.getFileSystemManager().readFile({ //读文件
            filePath: res.tempFilePath,
            encoding: 'utf8',
            success(res2) {
              complete: () => {
                wx.hideLoading()
              }
              var test = res2.data
              var temp = test.split("\n")
              if (temp[1] === "<!--") { //如果导入ID不正确，会返回404页面的代码
                wx.showToast({
                  title: '数据获取失败，请检查导入ID是否正确！',
                  icon: 'none',
                  duration: 3000 //持续的时间
                })
              } else {
                wx.getStorage({
                  key: 'd_zdy',
                  success: function () {
                    wx.showToast({
                      title: '数据获取成功！',
                      icon: 'none',
                      duration: 500
                    })
                    wx.showModal({
                      title: '提示',
                      content: '检测到已有导入数据，是否覆盖？',
                      confirmText: '覆盖',
                      cancelText: '取消',
                      success: function (res) {
                        if (res.confirm) {
                          wx.setStorageSync('d_zdy', test)
                          wx.setStorageSync('flag_zdy_sx', "true")
                          wx.setStorageSync('flag_zdy_sj', "true")
                          wx.setStorageSync('flag_zdy_ctk', "true")
                          wx.removeStorage({
                            key: "zdy_sj_point",
                            success: function () {

                            },
                            fail: function () {

                            }
                          })
                          wx.removeStorage({
                            key: "zdy_ctk_point",
                            success: function () {

                            },
                            fail: function () {

                            }
                          })
                          that.setData({
                            disabl_ed: false
                          })
                          wx.showToast({
                            title: '数据获取成功！',
                            icon: 'none',
                            duration: 500
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
            fail: function () {
              complete: () => {
                wx.hideLoading()
              }
            }
          })
        },
        fail: function (err) {
          complete: () => {
            wx.hideLoading()
          }
          wx.showToast({
            title: '服务器错误，请联系开发者！',
            icon: 'none',
            duration: 1500 //持续的时间
          })
        },
      });
    } else {
      this.createCode()
      wx.showToast({
        title: '验证码错误！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }
  },
  //验证码模块
  huanyizhang() {
    this.createCode()
  },
  createCode() {
    var code;
    //首先默认code为空字符串
    code = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 4;
    //设置随机字符
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    //循环codeLength 我设置的4就是循环4次
    for (var i = 0; i < codeLength; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var index = Math.floor(Math.random() * 36);
      //字符串拼接 将每次随机的字符 进行拼接
      code += random[index];
    }
    //将拼接好的字符串赋值给展示的code
    app.globalData.code = code
    this.setData({
      code: code
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