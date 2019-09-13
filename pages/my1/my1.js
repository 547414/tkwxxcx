// pages/my1/my1.js
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
    my1ysxxa: 'black',
    my1ysxxb: 'black',
    my1ysxxc: 'black',
    my1ysxxd: 'black',
    my1ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //当前题数

    zts: app.globalData.my1zts, //总题数

    tx: '-', //题型

  },

  //函数 题目选项是否选中
  my1xxsfxz: function (e) {
    if (e === '0') {
      app.globalData.my1yscontrol = 'blue'
      app.globalData.my1ysflagcontrol = '1'
    } else {
      app.globalData.my1yscontrol = 'black'
      app.globalData.my1ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  my1ybccxx: function (b) {
    var that = this;
    var a = b;

    wx.setStorage({
      key: 'my1dahca[' + a + ']',
      data: that.data.my1ysxxa
    }),
      wx.setStorage({
        key: 'my1dahcb[' + a + ']',
        data: that.data.my1ysxxb
      }),
      wx.setStorage({
        key: 'my1dahcc[' + a + ']',
        data: that.data.my1ysxxc
      }),
      wx.setStorage({
        key: 'my1dahcd[' + a + ']',
        data: that.data.my1ysxxd
      }),
      wx.setStorage({
        key: 'my1dahce[' + a + ']',
        data: that.data.my1ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      my1ysxxa: 'black',
      my1ysxxb: 'black',
      my1ysxxc: 'black',
      my1ysxxd: 'black',
      my1ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.my1ysflagxxa = '0',
      app.globalData.my1ysflagxxb = '0',
      app.globalData.my1ysflagxxc = '0',
      app.globalData.my1ysflagxxd = '0',
      app.globalData.my1ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  my1qcxxhc: function (a) {

    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'my1dahca[' + b + ']',
      success: function (res) {
        that.setData({
          my1ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.my1ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my1ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my1dahcb[' + b + ']',
      success: function (res) {
        that.setData({
          my1ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.my1ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my1ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my1dahcc[' + b + ']',
      success: function (res) {
        that.setData({
          my1ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.my1ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my1ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my1dahcd[' + b + ']',
      success: function (res) {
        that.setData({
          my1ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.my1ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my1ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my1dahce[' + b + ']',
      success: function (res) {
        that.setData({
          my1ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.my1ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my1ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'my1dahca[' + b + ']',
      fail: function (res) {
        that.setData({
          my1ysxxa: 'black'
        })
        app.globalData.my1ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'my1dahcb[' + b + ']',
      fail: function (res) {
        that.setData({
          my1ysxxb: 'black'
        })
        app.globalData.my1ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'my1dahcc[' + b + ']',
      fail: function (res) {
        that.setData({
          my1ysxxc: 'black'
        })
        app.globalData.my1ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'my1dahcd[' + b + ']',
      fail: function (res) {
        that.setData({
          my1ysxxd: 'black'
        })
        app.globalData.my1ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'my1dahce[' + b + ']',
      fail: function (res) {
        that.setData({
          my1ysxxe: 'black'
        })
        app.globalData.my1ysflagxxe = '0'
      },
    })


  },

  //函数 已正确答题个数
  my1yzqdtgs: function () {
    var that = this;
    wx.getStorage({
      key: 'my1zqdaflag[' + app.globalData.my1count3 + ']',
      fail: function (res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'my1zqdaflag[' + app.globalData.my1count3 + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'my1zqdacount',
          success: function (res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.my1zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.my1zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'my1zqdacount',
              data: app.globalData.my1zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'my1zqdacount',
          fail: function (res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'my1zqdacount',
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
  my1yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.my1ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.my1ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.my1ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.my1ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.my1ysxxe === 'blue') {
      hdda = hdda + 'e'
    }

    if (app.globalData.my[app.globalData.my1count3].da === hdda) {
      this.setData({
        dapd: '答案正确',
        dapdys: 'green'
      })
      //已正确答题个数
      this.my1yzqdtgs();
    } else {
      this.setData({
        dapd: '答案错误',
        dapdys: 'red'
      })
      wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
        key: 'my1zqdaflag[' + app.globalData.my1count3 + ']',
        data: '0'
      })
    }

  },

  //函数 题目显示
  my1tmxs: function (a) {
    var b = a;
    this.setData({
      tm: app.globalData.my[b].tm,
      xxa: app.globalData.my[b].xxa,
      xxb: app.globalData.my[b].xxb,
      xxc: app.globalData.my[b].xxc,
      xxd: app.globalData.my[b].xxd,
      xxe: app.globalData.my[b].xxe,
      ts: b,
      tx: app.globalData.my[b].tx,
    })
  },

  //函数 存储当前题号
  my1ccdqth: function () {
    wx.setStorage({
      key: 'my1thcount',
      data: app.globalData.my1count3
    })
  },
  //函数 倒计时10S
  my1djs: function () {
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
  my1jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.my1zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.my1zts * 100)
      })
    }
  },

  //题目选项是否选中
  my1clickxxa: function (e) {
    this.my1xxsfxz(app.globalData.my1ysflagxxa) //调用函数
    this.setData({
      my1ysxxa: app.globalData.my1yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.my1ysflagxxa = app.globalData.my1ysflagcontrol
  },

  my1clickxxb: function (e) {
    this.my1xxsfxz(app.globalData.my1ysflagxxb)
    this.setData({
      my1ysxxb: app.globalData.my1yscontrol,
    })
    app.globalData.my1ysflagxxb = app.globalData.my1ysflagcontrol
  },

  my1clickxxc: function (e) {
    this.my1xxsfxz(app.globalData.my1ysflagxxc)
    this.setData({
      my1ysxxc: app.globalData.my1yscontrol,
    })
    app.globalData.my1ysflagxxc = app.globalData.my1ysflagcontrol
  },

  my1clickxxd: function (e) {
    this.my1xxsfxz(app.globalData.my1ysflagxxd)
    this.setData({
      my1ysxxd: app.globalData.my1yscontrol,
    })
    app.globalData.my1ysflagxxd = app.globalData.my1ysflagcontrol
  },

  my1clickxxe: function (e) {
    this.my1xxsfxz(app.globalData.my1ysflagxxe)
    this.setData({
      my1ysxxe: app.globalData.my1yscontrol,
    })
    app.globalData.my1ysflagxxe = app.globalData.my1ysflagcontrol
  },

  //下一题 按钮
  my1clickButton3: function (e) {
    var that = this;
    this.my1ybccxx(app.globalData.my1count3); //异步存储选项到缓存当中
    if (app.globalData.my1count === 1) { //如果题目计数为1，则输出，并累加
      this.my1tmxs(app.globalData.my1count); //题目显示
      this.my1qcxxhc(app.globalData.my1count); //取出选项的缓存
      app.globalData.my1count3 = app.globalData.my1count,
        app.globalData.my1count2 = app.globalData.my1count,
        app.globalData.my1count = app.globalData.my1count + 1
      this.my1ccdqth(); //存储当前题号
    } else if (app.globalData.my1count === app.globalData.my1zts) { //否则，如果题目计数为max，则输出，并将计数重置
      this.my1tmxs(app.globalData.my1count); //题目显示
      this.my1qcxxhc(app.globalData.my1count); //取出选项的缓存
      app.globalData.my1count3 = app.globalData.my1count,
        app.globalData.my1count2 = app.globalData.my1count - 1,
        this.my1ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为最后一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.my1count > 1) { //否则,正常输出并累加
      this.my1tmxs(app.globalData.my1count); //题目显示
      this.my1qcxxhc(app.globalData.my1count); //取出选项的缓存
      app.globalData.my1count3 = app.globalData.my1count,
        app.globalData.my1count2 = app.globalData.my1count - 1,
        app.globalData.my1count = app.globalData.my1count + 1
      this.my1ccdqth(); //存储当前题号
    } else {

    }

  },

  //上一题按钮
  my1clickButton1: function (e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.my1ybccxx(app.globalData.my1count3); //异步存储选项到缓存当中
    if (app.globalData.my1count2 === 1) { //如果题目计数为1，则输出，并累加
      this.my1tmxs(app.globalData.my1count2); //题目显示
      app.globalData.my1count3 = app.globalData.my1count2,
        app.globalData.my1count = app.globalData.my1count2 + 1
      this.my1ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为第一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.my1count2 === (app.globalData.my1zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
      this.my1tmxs(app.globalData.my1count2); //题目显示
      app.globalData.my1count3 = app.globalData.my1count2,
        app.globalData.my1count = app.globalData.my1count2 + 1,
        app.globalData.my1count2 = app.globalData.my1count2 - 1
      this.my1ccdqth(); //存储当前题号
    } else if (app.globalData.my1count2 > 1) { //否则,正常输出并累加
      this.my1tmxs(app.globalData.my1count2); //题目显示
      app.globalData.my1count3 = app.globalData.my1count2,
        app.globalData.my1count = app.globalData.my1count2 + 1,
        app.globalData.my1count2 = app.globalData.my1count2 - 1
      this.my1ccdqth(); //存储当前题号

    } else {

    }

    this.my1qcxxhc(app.globalData.my1count3); //取出选项的缓存

  },

  //核对答案按钮
  my1clickButton2: function (e) {

    if (app.globalData.my1count3 === 1) {
      //已正确答题个数2
      this.my1yzqdtgs2();
    } else if (app.globalData.my1count3 === app.globalData.my1zts) {
      //已正确答题个数2
      this.my1yzqdtgs2();
    } else if (app.globalData.my1count3 > 1) {
      //已正确答题个数2
      this.my1yzqdtgs2();
    } else {
      console.log('Other!')
    }
    this.setData({
      daxs: '正确答案：' + app.globalData.my[app.globalData.my1count3].da
    })

  },

  //重置按钮
  my1clickButton4: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.my1zts + 1); i++) {
            wx.removeStorage({
              key: 'my1dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'my1dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'my1dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'my1dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'my1dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'my1zqdaflag[' + i + ']',
            })
            that.my1jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'my1zqdacount',
          })
          wx.removeStorage({
            key: 'my1thcount',
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
            my1ysxxa: 'black',
            my1ysxxb: 'black',
            my1ysxxc: 'black',
            my1ysxxd: 'black',
            my1ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
          })
          app.globalData.my1ysflagxxa = '0',
            app.globalData.my1ysflagxxb = '0',
            app.globalData.my1ysflagxxc = '0',
            app.globalData.my1ysflagxxd = '0',
            app.globalData.my1ysflagxxe = '0',

            app.globalData.my1count = 1,
            app.globalData.my1count2 = 0,
            app.globalData.my1count3 = 0,
            that.my1djs();//倒计时10秒
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
  my1clickButton5: function (e) {
    var that = this;
    if (app.globalData.my1count3 > 0 && app.globalData.my1count3 < (app.globalData.my1zts + 1)) {
      var a = app.globalData.my1count3;
      wx.getStorage({
        key: 'myctkhccountflag[' + a + ']',
        success: function (res) {
          wx.showToast({
            title: '请勿重复添加！',
            icon: 'none',
            duration: 1500 //持续的时间
          })
        },
      })

      wx.getStorage({
        key: 'myctkhccountflag[' + a + ']',
        fail: function (res) {

          wx.getStorage({
            key: 'myctkhccount',
            success: function (res) {
              var k = parseInt(res.data) + 1;
              wx.setStorage({
                key: 'myctkhccount',
                data: k
              })
              wx.setStorage({
                key: 'myctkhccountflag[' + a + ']',
                data: 1
              })
              wx.setStorage({
                key: 'myctkhc[' + k + ']',
                data: app.globalData.my1count3
              })
              wx.showToast({
                title: '成功增加！',
                icon: 'success',
                duration: 1500 //持续的时间
              })
            },

            fail: function (res) {
              wx.setStorage({
                key: 'myctkhccount',
                data: 1
              })
              wx.setStorage({
                key: 'myctkhccountflag[' + a + ']',
                data: 1
              })
              wx.setStorage({
                key: 'myctkhc[1]',
                data: app.globalData.my1count3
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
  my1tzth: function (e) {
    app.globalData.my1tzthinputx = e.detail.value
  },

  //跳转按钮
  my1clickButton6: function (e) {

    var c = parseInt(app.globalData.my1tzthinputx);
    this.my1ybccxx(app.globalData.my1count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.my1zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.my1count2 = 1
          app.globalData.my1count = 2
          break;
        case app.globalData.my1zts:
          app.globalData.my1count2 = app.globalData.my1zts - 1
          app.globalData.my1count = app.globalData.my1zts
          break;
        case c:
          app.globalData.my1count2 = c - 1
          app.globalData.my1count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.my1count3 = c;
      this.my1tmxs(c); //题目显示
      this.my1qcxxhc(app.globalData.my1count3); //取出选项的缓存
    } else {
      this.my1qcxxhc(app.globalData.my1count3); //取出选项的缓存
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
      title: '马列 按顺序出题'
    });
    var that = this
    wx.getStorage({
      key: 'my1zqdacount',
      success: function (res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'my1thcount',
      success: function (res) {
        if (parseInt(res.data) === 1) {
          app.globalData.my1count2 = 1,
            app.globalData.my1count = 2
        } else if (parseInt(res.data) === app.globalData.my1zts) {
          app.globalData.my1count2 = app.globalData.my1zts - 1,
            app.globalData.my1count = app.globalData.my1zts
        } else if (res.data > 0 && res.data < (app.globalData.my1zts + 1)) {
          app.globalData.my1count2 = parseInt(res.data) - 1,
            app.globalData.my1count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.my1count3 = parseInt(res.data);
        that.my1tmxs(res.data); //题目显示
        that.my1qcxxhc(res.data); //取出选项的缓存
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
    this.my1ybccxx(app.globalData.my1count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.my1ybccxx(app.globalData.my1count3); //异步存储选项到缓存当中
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