// pages/mg2/mg2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jdt: 0,
    jdtwidth: 0,
    jdtinfo: false,
    tm: '',
    xxa: '',
    xxb: '',
    xxc: '',
    xxd: '',
    xxe: '',
    mg2ysxxa: 'black',
    mg2ysxxb: 'black',
    mg2ysxxc: 'black',
    mg2ysxxd: 'black',
    mg2ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //对应题号

    zts: app.globalData.mg2zts, //总题数

    tx: '-', //题型

    dsxs: '-', //打散显示

    th: '0', //当前题号
  },

  //函数 题目选项是否选中
  mg2xxsfxz: function (e) {
    if (e === '0') {
      app.globalData.mg2yscontrol = 'blue'
      app.globalData.mg2ysflagcontrol = '1'
    } else {
      app.globalData.mg2yscontrol = 'black'
      app.globalData.mg2ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  mg2ybccxx: function (b) {
    var that = this;
    var a = b;

    wx.setStorage({
      key: 'mg2dahca[' + a + ']',
      data: that.data.mg2ysxxa
    }),
      wx.setStorage({
        key: 'mg2dahcb[' + a + ']',
        data: that.data.mg2ysxxb
      }),
      wx.setStorage({
        key: 'mg2dahcc[' + a + ']',
        data: that.data.mg2ysxxc
      }),
      wx.setStorage({
        key: 'mg2dahcd[' + a + ']',
        data: that.data.mg2ysxxd
      }),
      wx.setStorage({
        key: 'mg2dahce[' + a + ']',
        data: that.data.mg2ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      mg2ysxxa: 'black',
      mg2ysxxb: 'black',
      mg2ysxxc: 'black',
      mg2ysxxd: 'black',
      mg2ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.mg2ysflagxxa = '0',
      app.globalData.mg2ysflagxxb = '0',
      app.globalData.mg2ysflagxxc = '0',
      app.globalData.mg2ysflagxxd = '0',
      app.globalData.mg2ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  mg2qcxxhc: function (a) {

    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'mg2dahca[' + b + ']',
      success: function (res) {
        that.setData({
          mg2ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg2ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg2ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg2dahcb[' + b + ']',
      success: function (res) {
        that.setData({
          mg2ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg2ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg2ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg2dahcc[' + b + ']',
      success: function (res) {
        that.setData({
          mg2ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg2ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg2ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg2dahcd[' + b + ']',
      success: function (res) {
        that.setData({
          mg2ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg2ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg2ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg2dahce[' + b + ']',
      success: function (res) {
        that.setData({
          mg2ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg2ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg2ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'mg2dahca[' + b + ']',
      fail: function (res) {
        that.setData({
          mg2ysxxa: 'black'
        })
        app.globalData.mg2ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'mg2dahcb[' + b + ']',
      fail: function (res) {
        that.setData({
          mg2ysxxb: 'black'
        })
        app.globalData.mg2ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'mg2dahcc[' + b + ']',
      fail: function (res) {
        that.setData({
          mg2ysxxc: 'black'
        })
        app.globalData.mg2ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'mg2dahcd[' + b + ']',
      fail: function (res) {
        that.setData({
          mg2ysxxd: 'black'
        })
        app.globalData.mg2ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'mg2dahce[' + b + ']',
      fail: function (res) {
        that.setData({
          mg2ysxxe: 'black'
        })
        app.globalData.mg2ysflagxxe = '0'
      },
    })

  },

  //函数 已正确答题个数
  mg2yzqdtgs: function (a) {
    var b = a
    var c = parseInt(b)
    var that = this;
    wx.getStorage({
      key: 'mg2zqdaflag[' + c + ']',
      fail: function (res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'mg2zqdaflag[' + c + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'mg2zqdacount',
          success: function (res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.mg2zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.mg2zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'mg2zqdacount',
              data: app.globalData.mg2zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'mg2zqdacount',
          fail: function (res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'mg2zqdacount',
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
  mg2yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.mg2ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.mg2ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.mg2ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.mg2ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.mg2ysxxe === 'blue') {
      hdda = hdda + 'e'
    }
    wx.getStorage({
      key: 'mg2sjthhc[' + app.globalData.mg2count3 + ']',
      success: function (res) {
        if (app.globalData.mg[res.data].da === hdda) {
          that.setData({
            dapd: '答案正确',
            dapdys: 'green'
          })
          //已正确答题个数
          that.mg2yzqdtgs(res.data);
        } else {
          that.setData({
            dapd: '答案错误',
            dapdys: 'red'
          })
          wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
            key: 'mg2zqdaflag[' + res.data + ']',
            data: '0'
          })
        }
      },
    })


  },

  //函数 题目显示
  mg2tmxs: function (a) {
    var b = a;
    var that = this
    wx.getStorage({
      key: 'mg2sjthhc[' + b + ']',
      success: function (res) {
        var c = parseInt(res.data)
        that.setData({
          tm: app.globalData.mg[c].tm,
          xxa: app.globalData.mg[c].xxa,
          xxb: app.globalData.mg[c].xxb,
          xxc: app.globalData.mg[c].xxc,
          xxd: app.globalData.mg[c].xxd,
          xxe: app.globalData.mg[c].xxe,
          ts: c,
          tx: app.globalData.mg[c].tx,
          th: b
        })
      }
    })


  },

  //函数 存储当前题号
  mg2ccdqth: function () {
    wx.setStorage({
      key: 'mg2thcount',
      data: app.globalData.mg2count3
    })
  },

  //函数 倒计时10S
  mg2djs: function () {
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
  mg2jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.mg2zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.mg2zts * 100)
      })
    }
  },

  //题目选项是否选中
  mg2clickxxa: function (e) {
    this.mg2xxsfxz(app.globalData.mg2ysflagxxa) //调用函数
    this.setData({
      mg2ysxxa: app.globalData.mg2yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.mg2ysflagxxa = app.globalData.mg2ysflagcontrol
  },

  mg2clickxxb: function (e) {
    this.mg2xxsfxz(app.globalData.mg2ysflagxxb)
    this.setData({
      mg2ysxxb: app.globalData.mg2yscontrol,
    })
    app.globalData.mg2ysflagxxb = app.globalData.mg2ysflagcontrol
  },

  mg2clickxxc: function (e) {
    this.mg2xxsfxz(app.globalData.mg2ysflagxxc)
    this.setData({
      mg2ysxxc: app.globalData.mg2yscontrol,
    })
    app.globalData.mg2ysflagxxc = app.globalData.mg2ysflagcontrol
  },

  mg2clickxxd: function (e) {
    this.mg2xxsfxz(app.globalData.mg2ysflagxxd)
    this.setData({
      mg2ysxxd: app.globalData.mg2yscontrol,
    })
    app.globalData.mg2ysflagxxd = app.globalData.mg2ysflagcontrol
  },

  mg2clickxxe: function (e) {
    this.mg2xxsfxz(app.globalData.mg2ysflagxxe)
    this.setData({
      mg2ysxxe: app.globalData.mg2yscontrol,
    })
    app.globalData.mg2ysflagxxe = app.globalData.mg2ysflagcontrol
  },

  //函数 打散
  mg2ds: function () {
    var that = this
    that.setData({
      dsxs: '正在将题目顺序打散，请稍等！'
    })
    var a = []
    for (var i = 1; i <= app.globalData.mg2zts; i = i + 1) {
      var c = Math.floor(Math.random() * app.globalData.mg2zts + 1)
      var d = a.indexOf(String(c))
      if (d < 0) {
        a[i] = String(c)
        wx.setStorage({
          key: 'mg2sjthhc[' + i + ']',
          data: a[i]
        })
      } else {
        i = i - 1
      }
      if (i === app.globalData.mg2zts) {
        break;
      }
    }
    for (var i = 0; i < (app.globalData.mg2zts + 1); i++) {
      wx.removeStorage({
        key: 'mg2dahca[' + i + ']',
      })
      wx.removeStorage({
        key: 'mg2dahcb[' + i + ']',
      })
      wx.removeStorage({
        key: 'mg2dahcc[' + i + ']',
      })
      wx.removeStorage({
        key: 'mg2dahcd[' + i + ']',
      })
      wx.removeStorage({
        key: 'mg2dahce[' + i + ']',
      })
      wx.removeStorage({
        key: 'mg2zqdaflag[' + i + ']',
      })
      that.mg2jdt(i);//进度条
    }

    wx.removeStorage({
      key: 'mg2zqdacount',
    })
    wx.removeStorage({
      key: 'mg2thcount',
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
      mg2ysxxa: 'black',
      mg2ysxxb: 'black',
      mg2ysxxc: 'black',
      mg2ysxxd: 'black',
      mg2ysxxe: 'black',
      dapd: '',
      dapdys: 'white',
      daxs: '',
      ddts: '0',
      ts: "0",
      tx: '-',
      th: '0'
    })
    app.globalData.mg2ysflagxxa = '0',
      app.globalData.mg2ysflagxxb = '0',
      app.globalData.mg2ysflagxxc = '0',
      app.globalData.mg2ysflagxxd = '0',
      app.globalData.mg2ysflagxxe = '0',

      app.globalData.mg2count = 1,
      app.globalData.mg2count2 = 0,
      app.globalData.mg2count3 = 0

    that.mg2djs();//倒计时10秒
  },

  //打散 按钮
  mg2clickButton7: function (e) {
    var that = this
    wx.getStorage({
      key: 'mg2sjthhc[1]',
      fail: function (res) {
        that.mg2ds();
      },
      success: function () {
        wx.showModal({
          title: '提示',
          content: '当前已有打散的记录，是否重新打散？',
          confirmText: '打散',
          cancelText: '取消',
          success: function (res) {
            if (res.confirm) {
              that.mg2ds();
            } else if (res.cancel) {
              wx.showToast({
                title: '已取消打散！',
                icon: 'none',
                duration: 1500
              })
            }
          }
        })
      }
    })

  },

  //下一题 按钮
  mg2clickButton3: function (e) {
    var that = this;
    this.mg2ybccxx(app.globalData.mg2count3); //异步存储选项到缓存当中
    if (app.globalData.mg2count === 1) { //如果题目计数为1，则输出，并累加
      this.mg2tmxs(app.globalData.mg2count); //题目显示
      this.mg2qcxxhc(app.globalData.mg2count); //取出选项的缓存
      app.globalData.mg2count3 = app.globalData.mg2count,
        app.globalData.mg2count2 = app.globalData.mg2count,
        app.globalData.mg2count = app.globalData.mg2count + 1
      this.mg2ccdqth(); //存储当前题号
    } else if (app.globalData.mg2count === app.globalData.mg2zts) { //否则，如果题目计数为max，则输出，并将计数重置
      this.mg2tmxs(app.globalData.mg2count); //题目显示
      this.mg2qcxxhc(app.globalData.mg2count); //取出选项的缓存
      app.globalData.mg2count3 = app.globalData.mg2count,
        app.globalData.mg2count2 = app.globalData.mg2count - 1,
        this.mg2ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为最后一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.mg2count > 1) { //否则,正常输出并累加
      this.mg2tmxs(app.globalData.mg2count); //题目显示
      this.mg2qcxxhc(app.globalData.mg2count); //取出选项的缓存
      app.globalData.mg2count3 = app.globalData.mg2count,
        app.globalData.mg2count2 = app.globalData.mg2count - 1,
        app.globalData.mg2count = app.globalData.mg2count + 1
      this.mg2ccdqth(); //存储当前题号
    } else {

    }

  },

  //上一题按钮
  mg2clickButton1: function (e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.mg2ybccxx(app.globalData.mg2count3); //异步存储选项到缓存当中
    if (app.globalData.mg2count2 === 1) { //如果题目计数为1，则输出，并累加
      this.mg2tmxs(app.globalData.mg2count2); //题目显示
      app.globalData.mg2count3 = app.globalData.mg2count2,
        app.globalData.mg2count = app.globalData.mg2count2 + 1
      this.mg2ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为第一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.mg2count2 === (app.globalData.mg2zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
      this.mg2tmxs(app.globalData.mg2count2); //题目显示
      app.globalData.mg2count3 = app.globalData.mg2count2,
        app.globalData.mg2count = app.globalData.mg2count2 + 1,
        app.globalData.mg2count2 = app.globalData.mg2count2 - 1
      this.mg2ccdqth(); //存储当前题号
    } else if (app.globalData.mg2count2 > 1) { //否则,正常输出并累加
      this.mg2tmxs(app.globalData.mg2count2); //题目显示
      app.globalData.mg2count3 = app.globalData.mg2count2,
        app.globalData.mg2count = app.globalData.mg2count2 + 1,
        app.globalData.mg2count2 = app.globalData.mg2count2 - 1
      this.mg2ccdqth(); //存储当前题号

    } else {

    }

    this.mg2qcxxhc(app.globalData.mg2count3); //取出选项的缓存

  },

  //核对答案按钮
  mg2clickButton2: function (e) {
    var that = this
    if (app.globalData.mg2count3 === 1) {
      //已正确答题个数2
      this.mg2yzqdtgs2();
    } else if (app.globalData.mg2count3 === app.globalData.mg2zts) {
      //已正确答题个数2
      this.mg2yzqdtgs2();
    } else if (app.globalData.mg2count3 > 1) {
      //已正确答题个数2
      this.mg2yzqdtgs2();
    } else {
      console.log('Other!')
    }
    wx.getStorage({
      key: 'mg2sjthhc[' + app.globalData.mg2count3 + ']',
      success: function (res) {
        var c = parseInt(res.data)
        that.setData({
          daxs: '正确答案：' + app.globalData.mg[c].da
        })
      },
    })
  },

  //重置按钮
  mg2clickButton4: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.mg2zts + 1); i++) {
            wx.removeStorage({
              key: 'mg2dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg2dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg2dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg2dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg2dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg2zqdaflag[' + i + ']',
            })
            that.mg2jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'mg2zqdacount',
          })
          wx.removeStorage({
            key: 'mg2thcount',
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
            mg2ysxxa: 'black',
            mg2ysxxb: 'black',
            mg2ysxxc: 'black',
            mg2ysxxd: 'black',
            mg2ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
            th: '0',
          })
          app.globalData.mg2ysflagxxa = '0',
            app.globalData.mg2ysflagxxb = '0',
            app.globalData.mg2ysflagxxc = '0',
            app.globalData.mg2ysflagxxd = '0',
            app.globalData.mg2ysflagxxe = '0',

            app.globalData.mg2count = 1,
            app.globalData.mg2count2 = 0,
            app.globalData.mg2count3 = 0,

            that.mg2djs();//倒计时10秒
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
  mg2clickButton5: function (e) {
    var that = this;
    if (app.globalData.mg2count3 > 0 && app.globalData.mg2count3 < (app.globalData.mg2zts + 1)) {
      wx.getStorage({
        key: 'mg2sjthhc[' + app.globalData.mg2count3 + ']',
        success: function (res) {
          var a = parseInt(res.data)
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
                    data: a
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
                    data: a
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
        }
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
  mg2tzth: function (e) {
    app.globalData.mg2tzthinputx = e.detail.value
  },

  //跳转按钮
  mg2clickButton6: function (e) {

    var c = parseInt(app.globalData.mg2tzthinputx);
    this.mg2ybccxx(app.globalData.mg2count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.mg2zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.mg2count2 = 1
          app.globalData.mg2count = 2
          break;
        case app.globalData.mg2zts:
          app.globalData.mg2count2 = app.globalData.mg2zts - 1
          app.globalData.mg2count = app.globalData.mg2zts
          break;
        case c:
          app.globalData.mg2count2 = c - 1
          app.globalData.mg2count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.mg2count3 = c;
      this.mg2tmxs(c); //题目显示
      this.mg2qcxxhc(app.globalData.mg2count3); //取出选项的缓存
    } else {
      this.mg2qcxxhc(app.globalData.mg2count3); //取出选项的缓存
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
      title: '毛概 随机出题'
    });

    var that = this
    wx.getStorage({
      key: 'mg2zqdacount',
      success: function (res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'mg2thcount',
      success: function (res) {
        if (parseInt(res.data) === 1) {
          app.globalData.mg2count2 = 1,
            app.globalData.mg2count = 2
        } else if (parseInt(res.data) === app.globalData.mg2zts) {
          app.globalData.mg2count2 = app.globalData.mg2zts - 1,
            app.globalData.mg2count = app.globalData.mg2zts
        } else if (res.data > 0 && res.data < (app.globalData.mg2zts + 1)) {
          app.globalData.mg2count2 = parseInt(res.data) - 1,
            app.globalData.mg2count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.mg2count3 = parseInt(res.data);
        that.mg2tmxs(res.data); //题目显示
        that.mg2qcxxhc(res.data); //取出选项的缓存
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
    this.mg2ybccxx(app.globalData.mg2count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.mg2ybccxx(app.globalData.mg2count3); //异步存储选项到缓存当中
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