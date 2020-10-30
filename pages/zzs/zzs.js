// pages/zzs/zzs.js
const app = getApp()
var id
var ctx;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    disabl_ed: false, //改成false就成了，要不然重启小程序会导致导入题库界面前三个按钮不能用
    //验证码属性
    text: '',
    count: 4,
    width: 90,
    height: 35,
    fontSize: 20,
    fontFamily: "SimHei"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '自定义题库'
    });
    var that = this
    that.crash()
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
      that.crash()
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
      that.crash()
      wx.showToast({
        title: '验证码错误！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
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

  },
  //以下是验证码模块
  crash() {
    this.drawPic(this)
  },
  /**绘制验证码图片**/
  drawPic(that) {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        //清除画布
        ctx.fillStyle = "rgb(242, 235, 235)";
        ctx.fillRect(0, 0, 96, 35)
        /**绘制背景色**/
        ctx.fillStyle = that.randomColor(180, 240); //颜色若太深可能导致看不清
        ctx.fillRect(0, 0, that.data.width, that.data.height)
        /**绘制文字**/
        var arr;
        var text = '';
        var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
        var code_temp = "";
        for (var i = 0; i < that.data.count; i++) {
          var txt = str[that.randomNum(0, str.length)];
          code_temp += txt;
          ctx.fillStyle = that.randomColor(50, 160); //随机生成字体颜色
          ctx.font = that.randomNum(20, 26) + 'px SimHei'; //随机生成字体大小
          var x = 10 + i * 20;
          var y = that.randomNum(25, 30);
          var deg = that.randomNum(-30, 30);
          //修改坐标原点和旋转角度
          ctx.translate(x, y);
          ctx.rotate(deg * Math.PI / 180);
          ctx.fillText(txt, 5, 0);
          text = text + txt;
          //恢复坐标原点和旋转角度
          ctx.rotate(-deg * Math.PI / 180);
          ctx.translate(-x, -y);
        }
        app.globalData.code = code_temp;
        //console.log(app.globalData.code)
        /**绘制干扰线**/
        for (var i = 0; i < 4; i++) {
          ctx.strokeStyle = that.randomColor(40, 180);
          ctx.beginPath();
          ctx.moveTo(that.randomNum(0, that.data.width), that.randomNum(0, that.data.height));
          ctx.lineTo(that.randomNum(0, that.data.width), that.randomNum(0, that.data.height));
          ctx.stroke();
        }
        /**绘制干扰点**/
        for (var i = 0; i < 20; i++) {
          ctx.fillStyle = that.randomColor(0, 255);
          ctx.beginPath();
          ctx.arc(that.randomNum(0, that.data.width), that.randomNum(0, that.data.height), 1, 0, 2 * Math.PI);
          ctx.fill();
        }
      })
  },
  randomNum: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  /**生成一个随机色**/
  randomColor: function (min, max) {
    var that = this
    var r = that.randomNum(min, max);
    var g = that.randomNum(min, max);
    var b = that.randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

})