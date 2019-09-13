// pages/mg1/mg1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jdt: 0,
    jdtwidth: 0,
    jdtinfo: false,
    dsxs: '',
    tm: '',
    xxa: '',
    xxb: '',
    xxc: '',
    xxd: '',
    xxe: '',
   mg1ysxxa: 'black',
   mg1ysxxb: 'black',
   mg1ysxxc: 'black',
   mg1ysxxd: 'black',
   mg1ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //当前题数

    zts: app.globalData.mg1zts, //总题数

    tx: '-', //题型

  },

  //函数 题目选项是否选中
 mg1xxsfxz: function (e) {
    if (e === '0') {
      app.globalData.mg1yscontrol = 'blue'
      app.globalData.mg1ysflagcontrol = '1'
    } else {
      app.globalData.mg1yscontrol = 'black'
      app.globalData.mg1ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
 mg1ybccxx: function (b) {
    var that = this;
    var a = b;

    wx.setStorage({
      key: 'mg1dahca[' + a + ']',
      data: that.data.mg1ysxxa
    }),
      wx.setStorage({
        key: 'mg1dahcb[' + a + ']',
        data: that.data.mg1ysxxb
      }),
      wx.setStorage({
        key: 'mg1dahcc[' + a + ']',
        data: that.data.mg1ysxxc
      }),
      wx.setStorage({
        key: 'mg1dahcd[' + a + ']',
        data: that.data.mg1ysxxd
      }),
      wx.setStorage({
        key: 'mg1dahce[' + a + ']',
        data: that.data.mg1ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
     mg1ysxxa: 'black',
     mg1ysxxb: 'black',
     mg1ysxxc: 'black',
     mg1ysxxd: 'black',
     mg1ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.mg1ysflagxxa = '0',
      app.globalData.mg1ysflagxxb = '0',
      app.globalData.mg1ysflagxxc = '0',
      app.globalData.mg1ysflagxxd = '0',
      app.globalData.mg1ysflagxxe = '0'

  },

  //函数 取出选项的缓存
 mg1qcxxhc: function (a) {

    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'mg1dahca[' + b + ']',
      success: function (res) {
        that.setData({
         mg1ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg1ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg1ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg1dahcb[' + b + ']',
      success: function (res) {
        that.setData({
         mg1ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg1ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg1ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg1dahcc[' + b + ']',
      success: function (res) {
        that.setData({
         mg1ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg1ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg1ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg1dahcd[' + b + ']',
      success: function (res) {
        that.setData({
         mg1ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg1ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg1ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg1dahce[' + b + ']',
      success: function (res) {
        that.setData({
         mg1ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg1ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg1ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'mg1dahca[' + b + ']',
      fail: function (res) {
        that.setData({
         mg1ysxxa: 'black'
        })
        app.globalData.mg1ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'mg1dahcb[' + b + ']',
      fail: function (res) {
        that.setData({
         mg1ysxxb: 'black'
        })
        app.globalData.mg1ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'mg1dahcc[' + b + ']',
      fail: function (res) {
        that.setData({
         mg1ysxxc: 'black'
        })
        app.globalData.mg1ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'mg1dahcd[' + b + ']',
      fail: function (res) {
        that.setData({
         mg1ysxxd: 'black'
        })
        app.globalData.mg1ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'mg1dahce[' + b + ']',
      fail: function (res) {
        that.setData({
         mg1ysxxe: 'black'
        })
        app.globalData.mg1ysflagxxe = '0'
      },
    })


  },

  //函数 已正确答题个数
 mg1yzqdtgs: function () {
    var that = this;
    wx.getStorage({
      key: 'mg1zqdaflag[' + app.globalData.mg1count3 + ']',
      fail: function (res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'mg1zqdaflag[' + app.globalData.mg1count3 + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'mg1zqdacount',
          success: function (res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.mg1zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.mg1zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'mg1zqdacount',
              data: app.globalData.mg1zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'mg1zqdacount',
          fail: function (res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'mg1zqdacount',
              data: '1'
            })
            that.setData({
              ddts: '1'
            })
          }
        })
      }
    })

  },

  //函数 已正确答题个数2
 mg1yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.mg1ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.mg1ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.mg1ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.mg1ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.mg1ysxxe === 'blue') {
      hdda = hdda + 'e'
    }

    if (app.globalData.mg[app.globalData.mg1count3].da === hdda) {
      this.setData({
        dapd: '答案正确',
        dapdys: 'green'
      })
      //已正确答题个数
      this.mg1yzqdtgs();
    } else {
      this.setData({
        dapd: '答案错误',
        dapdys: 'red'
      })
      wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
        key: 'mg1zqdaflag[' + app.globalData.mg1count3 + ']',
        data: '0'
      })
    }

  },

  //函数 题目显示
 mg1tmxs: function (a) {
    var b = a;
    this.setData({
      tm: app.globalData.mg[b].tm,
      xxa: app.globalData.mg[b].xxa,
      xxb: app.globalData.mg[b].xxb,
      xxc: app.globalData.mg[b].xxc,
      xxd: app.globalData.mg[b].xxd,
      xxe: app.globalData.mg[b].xxe,
      ts: b,
      tx: app.globalData.mg[b].tx,
    })
  },

  //函数 存储当前题号
 mg1ccdqth: function () {
    wx.setStorage({
      key: 'mg1thcount',
      data: app.globalData.mg1count3
    })
  },
  //函数 倒计时10S
 mg1djs: function () {
    //倒计时10秒
    var that = this;
    var index = 11;
    var index2 = 89;
    var timer = setInterval(function () {
      index = index - 1;
      index2 = index2 + 1;
      that.setData({
        dsxs: '正在执行最后的操作，请稍等：' + index,
        jdt: parseInt(index2)
      })
      if (index === 0) {
        that.setData({
          jdtwidth: 0,
          jdtinfo: false,
          dsxs: ''
        })
        wx.showToast({
          title: '完成！',
          icon: 'success',
          duration: 1500 //持续的时间
        })
        clearInterval(timer)
      }
    }, 1000);
  },

  //函数 进度条
 mg1jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.mg1zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.mg1zts * 100)
      })
    }
  },

  //题目选项是否选中
 mg1clickxxa: function (e) {
    this.mg1xxsfxz(app.globalData.mg1ysflagxxa) //调用函数
    this.setData({
     mg1ysxxa: app.globalData.mg1yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.mg1ysflagxxa = app.globalData.mg1ysflagcontrol
  },

 mg1clickxxb: function (e) {
    this.mg1xxsfxz(app.globalData.mg1ysflagxxb)
    this.setData({
     mg1ysxxb: app.globalData.mg1yscontrol,
    })
    app.globalData.mg1ysflagxxb = app.globalData.mg1ysflagcontrol
  },

 mg1clickxxc: function (e) {
    this.mg1xxsfxz(app.globalData.mg1ysflagxxc)
    this.setData({
     mg1ysxxc: app.globalData.mg1yscontrol,
    })
    app.globalData.mg1ysflagxxc = app.globalData.mg1ysflagcontrol
  },

 mg1clickxxd: function (e) {
    this.mg1xxsfxz(app.globalData.mg1ysflagxxd)
    this.setData({
     mg1ysxxd: app.globalData.mg1yscontrol,
    })
    app.globalData.mg1ysflagxxd = app.globalData.mg1ysflagcontrol
  },

 mg1clickxxe: function (e) {
    this.mg1xxsfxz(app.globalData.mg1ysflagxxe)
    this.setData({
     mg1ysxxe: app.globalData.mg1yscontrol,
    })
    app.globalData.mg1ysflagxxe = app.globalData.mg1ysflagcontrol
  },

  //下一题 按钮
 mg1clickButton3: function (e) {
    var that = this;
    this.mg1ybccxx(app.globalData.mg1count3); //异步存储选项到缓存当中
    if (app.globalData.mg1count === 1) { //如果题目计数为1，则输出，并累加
      this.mg1tmxs(app.globalData.mg1count); //题目显示
      this.mg1qcxxhc(app.globalData.mg1count); //取出选项的缓存
      app.globalData.mg1count3 = app.globalData.mg1count,
        app.globalData.mg1count2 = app.globalData.mg1count,
        app.globalData.mg1count = app.globalData.mg1count + 1
      this.mg1ccdqth(); //存储当前题号
    } else if (app.globalData.mg1count === app.globalData.mg1zts) { //否则，如果题目计数为max，则输出，并将计数重置
      this.mg1tmxs(app.globalData.mg1count); //题目显示
      this.mg1qcxxhc(app.globalData.mg1count); //取出选项的缓存
      app.globalData.mg1count3 = app.globalData.mg1count,
        app.globalData.mg1count2 = app.globalData.mg1count - 1,
        this.mg1ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为最后一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.mg1count > 1) { //否则,正常输出并累加
      this.mg1tmxs(app.globalData.mg1count); //题目显示
      this.mg1qcxxhc(app.globalData.mg1count); //取出选项的缓存
      app.globalData.mg1count3 = app.globalData.mg1count,
        app.globalData.mg1count2 = app.globalData.mg1count - 1,
        app.globalData.mg1count = app.globalData.mg1count + 1
      this.mg1ccdqth(); //存储当前题号
    } else {

    }

  },

  //上一题按钮
 mg1clickButton1: function (e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.mg1ybccxx(app.globalData.mg1count3); //异步存储选项到缓存当中
    if (app.globalData.mg1count2 === 1) { //如果题目计数为1，则输出，并累加
      this.mg1tmxs(app.globalData.mg1count2); //题目显示
      app.globalData.mg1count3 = app.globalData.mg1count2,
        app.globalData.mg1count = app.globalData.mg1count2 + 1
      this.mg1ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为第一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.mg1count2 === (app.globalData.mg1zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
      this.mg1tmxs(app.globalData.mg1count2); //题目显示
      app.globalData.mg1count3 = app.globalData.mg1count2,
        app.globalData.mg1count = app.globalData.mg1count2 + 1,
        app.globalData.mg1count2 = app.globalData.mg1count2 - 1
      this.mg1ccdqth(); //存储当前题号
    } else if (app.globalData.mg1count2 > 1) { //否则,正常输出并累加
      this.mg1tmxs(app.globalData.mg1count2); //题目显示
      app.globalData.mg1count3 = app.globalData.mg1count2,
        app.globalData.mg1count = app.globalData.mg1count2 + 1,
        app.globalData.mg1count2 = app.globalData.mg1count2 - 1
      this.mg1ccdqth(); //存储当前题号

    } else {

    }

    this.mg1qcxxhc(app.globalData.mg1count3); //取出选项的缓存

  },

  //核对答案按钮
 mg1clickButton2: function (e) {

    if (app.globalData.mg1count3 === 1) {
      //已正确答题个数2
      this.mg1yzqdtgs2();
    } else if (app.globalData.mg1count3 === app.globalData.mg1zts) {
      //已正确答题个数2
      this.mg1yzqdtgs2();
    } else if (app.globalData.mg1count3 > 1) {
      //已正确答题个数2
      this.mg1yzqdtgs2();
    } else {
      console.log('Other!')
    }
    this.setData({
      daxs: '正确答案：' + app.globalData.mg[app.globalData.mg1count3].da
    })

  },

  //重置按钮
 mg1clickButton4: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.mg1zts + 1); i++) {
            wx.removeStorage({
              key: 'mg1dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg1dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg1dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg1dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg1dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg1zqdaflag[' + i + ']',
            })
            that.mg1jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'mg1zqdacount',
          })
          wx.removeStorage({
            key: 'mg1thcount',
          })
          wx.removeStorage({
            key: 'logs',
          })

          that.setData({
            tm: '',
            xxa: '',
            xxb: '',
            xxc: '',
            xxd: '',
            xxe: '',
            ts: '',
           mg1ysxxa: 'black',
           mg1ysxxb: 'black',
           mg1ysxxc: 'black',
           mg1ysxxd: 'black',
           mg1ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
          })
          app.globalData.mg1ysflagxxa = '0',
            app.globalData.mg1ysflagxxb = '0',
            app.globalData.mg1ysflagxxc = '0',
            app.globalData.mg1ysflagxxd = '0',
            app.globalData.mg1ysflagxxe = '0',

            app.globalData.mg1count = 1,
            app.globalData.mg1count2 = 0,
            app.globalData.mg1count3 = 0,
            that.mg1djs();//倒计时10秒
          that.setData({
            dsxs: ''
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '取消重置！',
            icon: 'none',
            duration: 1500 //持续的时间
          })
        }
      }
    })

  },

  //加入错题库按钮
 mg1clickButton5: function (e) {
    var that = this;
    if (app.globalData.mg1count3 > 0 && app.globalData.mg1count3 < (app.globalData.mg1zts + 1)) {
      var a = app.globalData.mg1count3;
      wx.getStorage({
        key: 'mgctkhccountflag[' + a + ']',
        success: function (res) {
          wx.showToast({
            title: '请勿重复添加！',
            icon: 'none',
            duration: 1500 //持续的时间
          })
        },
      })

      wx.getStorage({
        key: 'mgctkhccountflag[' + a + ']',
        fail: function (res) {

          wx.getStorage({
            key: 'mgctkhccount',
            success: function (res) {
              var k = parseInt(res.data) + 1;
              wx.setStorage({
                key: 'mgctkhccount',
                data: k
              })
              wx.setStorage({
                key: 'mgctkhccountflag[' + a + ']',
                data: 1
              })
              wx.setStorage({
                key: 'mgctkhc[' + k + ']',
                data: app.globalData.mg1count3
              })
              wx.showToast({
                title: '成功增加！',
                icon: 'success',
                duration: 1500 //持续的时间
              })
            },

            fail: function (res) {
              wx.setStorage({
                key: 'mgctkhccount',
                data: 1
              })
              wx.setStorage({
                key: 'mgctkhccountflag[' + a + ']',
                data: 1
              })
              wx.setStorage({
                key: 'mgctkhc[1]',
                data: app.globalData.mg1count3
              })
              wx.showToast({
                title: '成功增加！',
                icon: 'success',
                duration: 1500 //持续的时间
              })
            }

          })
        },
      })
    } else {
      wx.showToast({
        title: '题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }
  },

  //跳转题号 输入框
 mg1tzth: function (e) {
    app.globalData.mg1tzthinputx = e.detail.value
  },

  //跳转按钮
 mg1clickButton6: function (e) {

    var c = parseInt(app.globalData.mg1tzthinputx);
    this.mg1ybccxx(app.globalData.mg1count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.mg1zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.mg1count2 = 1
          app.globalData.mg1count = 2
          break;
        case app.globalData.mg1zts:
          app.globalData.mg1count2 = app.globalData.mg1zts - 1
          app.globalData.mg1count = app.globalData.mg1zts
          break;
        case c:
          app.globalData.mg1count2 = c - 1
          app.globalData.mg1count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.mg1count3 = c;
      this.mg1tmxs(c); //题目显示
      this.mg1qcxxhc(app.globalData.mg1count3); //取出选项的缓存
    } else {
      this.mg1qcxxhc(app.globalData.mg1count3); //取出选项的缓存
      wx.showToast({
        title: '题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '毛概 按顺序出题'
    });
    var that = this
    wx.getStorage({
      key: 'mg1zqdacount',
      success: function (res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'mg1thcount',
      success: function (res) {
        if (parseInt(res.data) === 1) {
          app.globalData.mg1count2 = 1,
            app.globalData.mg1count = 2
        } else if (parseInt(res.data) === app.globalData.mg1zts) {
          app.globalData.mg1count2 = app.globalData.mg1zts - 1,
            app.globalData.mg1count = app.globalData.mg1zts
        } else if (res.data > 0 && res.data < (app.globalData.mg1zts + 1)) {
          app.globalData.mg1count2 = parseInt(res.data) - 1,
            app.globalData.mg1count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.mg1count3 = parseInt(res.data);
        that.mg1tmxs(res.data); //题目显示
        that.mg1qcxxhc(res.data); //取出选项的缓存
      }
    })

  },

  // 获取到焦点
  focus: function (e) {
    var that = this;
    console.log(e.detail.height)
    this.setData({
      focus: true,
      input_bottom: e.detail.height
    })
  },

  // 失去焦点
  no_focus: function (e) {
    this.setData({
      focus: false
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
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.mg1ybccxx(app.globalData.mg1count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.mg1ybccxx(app.globalData.mg1count3); //异步存储选项到缓存当中
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