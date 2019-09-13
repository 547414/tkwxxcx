// pages/mg4/mg4.js
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
    mg4ysxxa: 'black',
    mg4ysxxb: 'black',
    mg4ysxxc: 'black',
    mg4ysxxd: 'black',
    mg4ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //当前题数

    zts: app.globalData.mg4zts, //总题数

    ctkth: '0', //错题库顺序的题号

    tx: '-', //题型


  },

  //函数 题目选项是否选中
  mg4xxsfxz: function (e) {
    if (e === '0') {
      app.globalData.mg4yscontrol = 'blue'
      app.globalData.mg4ysflagcontrol = '1'
    } else {
      app.globalData.mg4yscontrol = 'black'
      app.globalData.mg4ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  mg4ybccxx: function (b) {
    var that = this;
    var a = b;

    wx.setStorage({
      key: 'mg4dahca[' + a + ']',
      data: that.data.mg4ysxxa
    }),
      wx.setStorage({
        key: 'mg4dahcb[' + a + ']',
        data: that.data.mg4ysxxb
      }),
      wx.setStorage({
        key: 'mg4dahcc[' + a + ']',
        data: that.data.mg4ysxxc
      }),
      wx.setStorage({
        key: 'mg4dahcd[' + a + ']',
        data: that.data.mg4ysxxd
      }),
      wx.setStorage({
        key: 'mg4dahce[' + a + ']',
        data: that.data.mg4ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      mg4ysxxa: 'black',
      mg4ysxxb: 'black',
      mg4ysxxc: 'black',
      mg4ysxxd: 'black',
      mg4ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.mg4ysflagxxa = '0',
      app.globalData.mg4ysflagxxb = '0',
      app.globalData.mg4ysflagxxc = '0',
      app.globalData.mg4ysflagxxd = '0',
      app.globalData.mg4ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  mg4qcxxhc: function (a) {
    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'mg4dahca[' + b + ']',
      success: function (res) {
        that.setData({
          mg4ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg4ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg4ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg4dahcb[' + b + ']',
      success: function (res) {
        that.setData({
          mg4ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg4ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg4ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg4dahcc[' + b + ']',
      success: function (res) {
        that.setData({
          mg4ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg4ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg4ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg4dahcd[' + b + ']',
      success: function (res) {
        that.setData({
          mg4ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg4ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg4ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'mg4dahce[' + b + ']',
      success: function (res) {
        that.setData({
          mg4ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.mg4ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.mg4ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'mg4dahca[' + b + ']',
      fail: function (res) {
        that.setData({
          mg4ysxxa: 'black'
        })
        app.globalData.mg4ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'mg4dahcb[' + b + ']',
      fail: function (res) {
        that.setData({
          mg4ysxxb: 'black'
        })
        app.globalData.mg4ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'mg4dahcc[' + b + ']',
      fail: function (res) {
        that.setData({
          mg4ysxxc: 'black'
        })
        app.globalData.mg4ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'mg4dahcd[' + b + ']',
      fail: function (res) {
        that.setData({
          mg4ysxxd: 'black'
        })
        app.globalData.mg4ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'mg4dahce[' + b + ']',
      fail: function (res) {
        that.setData({
          mg4ysxxe: 'black'
        })
        app.globalData.mg4ysflagxxe = '0'
      },
    })

  },

  //函数 已正确答题个数
  mg4yzqdtgs: function (a) {
    var b = a
    var c = parseInt(b)
    var that = this;
    wx.getStorage({
      key: 'mg4zqdaflag[' + c + ']',
      fail: function (res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'mg4zqdaflag[' + c + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'mg4zqdacount',
          success: function (res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.mg4zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.mg4zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'mg4zqdacount',
              data: app.globalData.mg4zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'mg4zqdacount',
          fail: function (res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'mg4zqdacount',
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
  mg4yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.mg4ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.mg4ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.mg4ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.mg4ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.mg4ysxxe === 'blue') {
      hdda = hdda + 'e'
    }
    wx.getStorage({
      key: 'mgctkhc[' + app.globalData.mg4count3 + ']',
      success: function (res) {
        if (app.globalData.mg[res.data].da === hdda) {
          that.setData({
            dapd: '答案正确',
            dapdys: 'green'
          })
          //已正确答题个数
          that.mg4yzqdtgs(res.data);
        } else {
          that.setData({
            dapd: '答案错误',
            dapdys: 'red'
          })
          wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
            key: 'mg4zqdaflag[' + res.data + ']',
            data: '0'
          })
        }
      },
    })


  },

  //函数 题目显示
  mg4tmxs: function (a) {
    var b = a;
    var that = this;
    that.setData({
      ctkth: b
    })
    wx.getStorage({
      key: 'mgctkhc[' + b + ']',
      success: function (res) {
        that.setData({
          tm: app.globalData.mg[res.data].tm,
          xxa: app.globalData.mg[res.data].xxa,
          xxb: app.globalData.mg[res.data].xxb,
          xxc: app.globalData.mg[res.data].xxc,
          xxd: app.globalData.mg[res.data].xxd,
          xxe: app.globalData.mg[res.data].xxe,
          ts: res.data,
          tx: app.globalData.mg[res.data].tx,
        })
      },
    })

  },

  //函数 存储当前题号
  mg4ccdqth: function () {
    wx.setStorage({
      key: 'mg4thcount',
      data: app.globalData.mg4count3
    })
  },

  //函数 倒计时10S
  mg4djs: function () {
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
  mg4jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.mg4zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.mg4zts * 100)
      })
    }
  },

  //函数 挪动缓存
  mgctkndhc: function () {
    var that = this;
    that.setData({
      dsxs: '正在交换缓存位置，请稍等'
    })
    for (var i = app.globalData.mg4count3 + 1; i < (app.globalData.mg4zts + 1); i++) { //循环挪动缓存
      (function (i) {
        var j = i - 1
        wx.getStorage({
          key: 'mgctkhc[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'mgctkhc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'mg4dahca[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'mg4dahca[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'mg4dahcb[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'mg4dahcb[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'mg4dahcc[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'mg4dahcc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'mg4dahcd[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'mg4dahcd[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'mg4dahce[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'mg4dahce[' + j + ']',
              data: res.data
            })
          }
        })
      })(i)
      if (i === parseInt(app.globalData.mg4count3 + 1)) {
        that.setData({
          jdtwidth: 12,
          jdtinfo: true
        })
      }
      if (i <= app.globalData.mg4zts) {
        that.setData({
          jdt: parseInt(i / app.globalData.mg4zts * 100)
        })
      }
    }
    that.setData({
      dsxs: '',
      jdtwidth: 0,
      jdtinfo: false,
      dsxs: ''
    })
  },

  //函数 错题库显示刷新
  mgctkxssx: function () {
    var that = this
    that.mg4tmxs(app.globalData.mg4count3); //题目显示
    that.mg4qcxxhc(app.globalData.mg4count3); //取出选项的缓存
    wx.getStorage({
      key: 'mg4zqdacount',
      success: function (res) {
        that.setData({
          ddts: res.data
        })
      }
    })
  },

  //题目选项是否选中
  mg4clickxxa: function (e) {
    this.mg4xxsfxz(app.globalData.mg4ysflagxxa) //调用函数
    this.setData({
      mg4ysxxa: app.globalData.mg4yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.mg4ysflagxxa = app.globalData.mg4ysflagcontrol
  },

  mg4clickxxb: function (e) {
    this.mg4xxsfxz(app.globalData.mg4ysflagxxb)
    this.setData({
      mg4ysxxb: app.globalData.mg4yscontrol,
    })
    app.globalData.mg4ysflagxxb = app.globalData.mg4ysflagcontrol
  },

  mg4clickxxc: function (e) {
    this.mg4xxsfxz(app.globalData.mg4ysflagxxc)
    this.setData({
      mg4ysxxc: app.globalData.mg4yscontrol,
    })
    app.globalData.mg4ysflagxxc = app.globalData.mg4ysflagcontrol
  },

  mg4clickxxd: function (e) {
    this.mg4xxsfxz(app.globalData.mg4ysflagxxd)
    this.setData({
      mg4ysxxd: app.globalData.mg4yscontrol,
    })
    app.globalData.mg4ysflagxxd = app.globalData.mg4ysflagcontrol
  },

  mg4clickxxe: function (e) {
    this.mg4xxsfxz(app.globalData.mg4ysflagxxe)
    this.setData({
      mg4ysxxe: app.globalData.mg4yscontrol,
    })
    app.globalData.mg4ysflagxxe = app.globalData.mg4ysflagcontrol
  },

  //下一题 按钮
  mg4clickButton3: function (e) {
    var that = this;
    this.mg4ybccxx(app.globalData.mg4count3); //异步存储选项到缓存当中
    if (app.globalData.mg4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.mg4zts === 1) {
      this.mg4tmxs(app.globalData.mg4zts); //题目显示
      this.mg4qcxxhc(app.globalData.mg4zts); //取出选项的缓存
      app.globalData.mg4count3 = app.globalData.mg4zts,
        app.globalData.mg4count2 = app.globalData.mg4zts,
        app.globalData.mg4count = app.globalData.mg4zts
      this.mg4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.mg4count === 1) { //如果题目计数为1，则输出，并累加
        this.mg4tmxs(app.globalData.mg4count); //题目显示
        this.mg4qcxxhc(app.globalData.mg4count); //取出选项的缓存
        app.globalData.mg4count3 = app.globalData.mg4count,
          app.globalData.mg4count2 = app.globalData.mg4count,
          app.globalData.mg4count = app.globalData.mg4count + 1
        this.mg4ccdqth(); //存储当前题号
      } else if (app.globalData.mg4count === app.globalData.mg4zts) { //否则，如果题目计数为max，则输出，并将计数重置
        this.mg4tmxs(app.globalData.mg4count); //题目显示
        this.mg4qcxxhc(app.globalData.mg4count); //取出选项的缓存
        app.globalData.mg4count3 = app.globalData.mg4count,
          app.globalData.mg4count2 = app.globalData.mg4count - 1,
          this.mg4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为最后一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.mg4count > 1) { //否则,正常输出并累加
        this.mg4tmxs(app.globalData.mg4count); //题目显示
        this.mg4qcxxhc(app.globalData.mg4count); //取出选项的缓存
        app.globalData.mg4count3 = app.globalData.mg4count,
          app.globalData.mg4count2 = app.globalData.mg4count - 1,
          app.globalData.mg4count = app.globalData.mg4count + 1
        this.mg4ccdqth(); //存储当前题号
      } else {

      }

    }

  },

  //上一题按钮
  mg4clickButton1: function (e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.mg4ybccxx(app.globalData.mg4count3); //异步存储选项到缓存当中
    if (app.globalData.mg4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.mg4zts === 1) {
      this.mg4tmxs(app.globalData.mg4zts); //题目显示
      this.mg4qcxxhc(app.globalData.mg4zts); //取出选项的缓存
      app.globalData.mg4count3 = app.globalData.mg4zts,
        app.globalData.mg4count2 = app.globalData.mg4zts,
        app.globalData.mg4count = app.globalData.mg4zts
      this.mg4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.mg4count2 === 1) { //如果题目计数为1，则输出，并累加
        this.mg4tmxs(app.globalData.mg4count2); //题目显示
        app.globalData.mg4count3 = app.globalData.mg4count2,
          app.globalData.mg4count = app.globalData.mg4count2 + 1
        this.mg4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为第一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.mg4count2 === (app.globalData.mg4zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
        this.mg4tmxs(app.globalData.mg4count2); //题目显示
        app.globalData.mg4count3 = app.globalData.mg4count2,
          app.globalData.mg4count = app.globalData.mg4count2 + 1,
          app.globalData.mg4count2 = app.globalData.mg4count2 - 1
        this.mg4ccdqth(); //存储当前题号
      } else if (app.globalData.mg4count2 > 1) { //否则,正常输出并累加
        this.mg4tmxs(app.globalData.mg4count2); //题目显示
        app.globalData.mg4count3 = app.globalData.mg4count2,
          app.globalData.mg4count = app.globalData.mg4count2 + 1,
          app.globalData.mg4count2 = app.globalData.mg4count2 - 1
        this.mg4ccdqth(); //存储当前题号

      } else {

      }
    }
    this.mg4qcxxhc(app.globalData.mg4count3); //取出选项的缓存

  },

  //核对答案按钮
  mg4clickButton2: function (e) {
    var that = this
    if (app.globalData.mg4count3 === 1) {
      //已正确答题个数2
      this.mg4yzqdtgs2();
    } else if (app.globalData.mg4count3 === app.globalData.mg4zts) {
      //已正确答题个数2
      this.mg4yzqdtgs2();
    } else if (app.globalData.mg4count3 > 1) {
      //已正确答题个数2
      this.mg4yzqdtgs2();
    } else {
      console.log('Other!')
    }
    wx.getStorage({
      key: 'mgctkhc[' + app.globalData.mg4count3 + ']',
      success: function (res) {
        that.setData({
          daxs: '正确答案：' + app.globalData.mg[res.data].da
        })
      },
    })
  },

  //重置按钮
  mg4clickButton4: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.mg4zts + 1); i++) {
            wx.removeStorage({
              key: 'mg4dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg4dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg4dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg4dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg4dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'mg4zqdaflag[' + i + ']',
            })
            that.mg4jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'mg4zqdacount',
          })
          wx.removeStorage({
            key: 'mg4thcount',
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
            mg4ysxxa: 'black',
            mg4ysxxb: 'black',
            mg4ysxxc: 'black',
            mg4ysxxd: 'black',
            mg4ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
            ctkth: '0',
          })
          app.globalData.mg4ysflagxxa = '0',
            app.globalData.mg4ysflagxxb = '0',
            app.globalData.mg4ysflagxxc = '0',
            app.globalData.mg4ysflagxxd = '0',
            app.globalData.mg4ysflagxxe = '0',

            app.globalData.mg4count = 1,
            app.globalData.mg4count2 = 0,
            app.globalData.mg4count3 = 0,
            that.mg4djs();//倒计时10秒
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

  //删除此题
  mg4clickButton5: function (e) {
    var that = this

    if (app.globalData.mg4zts > 0 && app.globalData.mg4count3 > 0) {
      //调整正确答案个数
      wx.getStorage({
        key: 'mgctkhc[' + app.globalData.mg4count3 + ']',
        success: function (res) {
          var temp = parseInt(res.data)
          wx.getStorage({
            key: 'mg4zqdaflag[' + temp + ']',
            success: function (res) {
              if (res.data === '1') {
                wx.getStorage({
                  key: 'mg4zqdacount',
                  success: function (res) {
                    wx.setStorage({
                      key: 'mg4zqdacount',
                      data: parseInt(res.data) - 1
                    })
                  }
                })
              }
            }
          })
          wx.removeStorage({
            key: 'mg4zqdaflag[' + temp + ']',
          })
        },
      })
      wx.getStorage({
        key: 'mg4zqdacount',
        success: function (res) {
          that.setData({
            ddts: res.data
          })
        }
      })
      if (app.globalData.mg4count3 === 1) {
        wx.getStorage({
          key: 'mgctkhc[' + app.globalData.mg4count3 + ']',
          success: function (res) {
            wx.removeStorage({
              key: 'mgctkhccountflag[' + res.data + ']',
            })
          }
        })
        that.mgctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'mgctkhc[' + app.globalData.mg4zts + ']',
        })
        app.globalData.mg4count3 = 1
        app.globalData.mg4count2 = 1
        app.globalData.mg4count = 2
      } else if (app.globalData.mg4count3 === app.globalData.mg4zts) {
        wx.getStorage({
          key: 'mgctkhc[' + app.globalData.mg4zts + ']',
          success: function (res) {
            app.globalData.mgctksc2 = res.data
            wx.removeStorage({
              key: 'mgctkhccountflag[' + app.globalData.mgctksc2 + ']',
            })
          }
        })
        wx.removeStorage({
          key: 'mgctkhc[' + app.globalData.mg4zts + ']',
        })
        app.globalData.mg4count3 = app.globalData.mg4zts - 1
        app.globalData.mg4count2 = app.globalData.mg4zts - 2
        app.globalData.mg4count = app.globalData.mg4zts - 1
      } else if (app.globalData.mg4count3 > 1 && app.globalData.mg4count3 < app.globalData.mg4zts) {
        wx.getStorage({
          key: 'mgctkhc[' + app.globalData.mg4count3 + ']',
          success: function (res) {
            app.globalData.mgctksc2 = res.data
            wx.removeStorage({
              key: 'mgctkhccountflag[' + app.globalData.mgctksc2 + ']',
            })
          }
        })
        that.mgctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'mgctkhc[' + app.globalData.mg4zts + ']',
        })
        app.globalData.mg4count2 = app.globalData.mg4count3 - 1
        app.globalData.mg4count = app.globalData.mg4count3 + 1
      } else {

      }
      wx.removeStorage({
        key: 'mg4dahca[' + app.globalData.mg4zts + ']',
      })
      wx.removeStorage({
        key: 'mg4dahcb[' + app.globalData.mg4zts + ']',
      })
      wx.removeStorage({
        key: 'mg4dahcc[' + app.globalData.mg4zts + ']',
      })
      wx.removeStorage({
        key: 'mg4dahcd[' + app.globalData.mg4zts + ']',
      })
      wx.removeStorage({
        key: 'mg4dahce[' + app.globalData.mg4zts + ']',
      })
      wx.getStorage({ //错题总数减1
        key: 'mgctkhccount',
        success: function (res) {
          if (res.data === 1) {
            that.mg4clickButton4();
          }
          var a = res.data - 1
          wx.setStorage({
            key: 'mgctkhccount',
            data: a
          })
        }
      })
      app.globalData.mg4zts = app.globalData.mg4zts - 1
      that.setData({
        zts: app.globalData.mg4zts
      })
      wx.showModal({
        title: '提示',
        content: '此题已从错题库中删除！',
        showCancel: false, //不显示 否 的选项
        confirmText: '朕知道了',
        success: function (res) {
          if (res.confirm) {
            that.mgctkxssx(); //错题库显示刷新
          } else if (res.cancel) {
            that.mgctkxssx(); //错题库显示刷新
          }
        }
      })
      that.setData({
        dapd: '',
        daxs: ''
      })
    } else {
      wx.showToast({
        title: '没有错题或者当前题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }
  },

  //跳转题号 输入框
  mg4tzth: function (e) {
    app.globalData.mg4tzthinputx = e.detail.value
  },

  //跳转按钮
  mg4clickButton6: function (e) {

    var c = parseInt(app.globalData.mg4tzthinputx);
    this.mg4ybccxx(app.globalData.mg4count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.mg4zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.mg4count2 = 1
          app.globalData.mg4count = 2
          break;
        case app.globalData.mg4zts:
          app.globalData.mg4count2 = app.globalData.mg4zts - 1
          app.globalData.mg4count = app.globalData.mg4zts
          break;
        case c:
          app.globalData.mg4count2 = c - 1
          app.globalData.mg4count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.mg4count3 = c;
      this.mg4tmxs(c); //题目显示
      this.mg4qcxxhc(app.globalData.mg4count3); //取出选项的缓存
    } else {
      this.mg4qcxxhc(app.globalData.mg4count3); //取出选项的缓存
      wx.showToast({
        title: '题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }

  },

  //清空
  mg4clickButton7: function () {
    var that = this;

    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'mgctkhccount',
      success: function (res) {
        var b = parseInt(res.data)
        wx.showModal({
          title: '提示',
          content: '确定要清空错题库吗？',
          success: function (res) {
            if (res.confirm) { //用户点击确定
              that.setData({
                dsxs: '正在清空，请稍等！'
              })
              for (var i = 0; i < (app.globalData.mg4zts + 1); i++) {
                wx.removeStorage({
                  key: 'mg4dahca[' + i + ']',
                })
                wx.removeStorage({
                  key: 'mg4dahcb[' + i + ']',
                })
                wx.removeStorage({
                  key: 'mg4dahcc[' + i + ']',
                })
                wx.removeStorage({
                  key: 'mg4dahcd[' + i + ']',
                })
                wx.removeStorage({
                  key: 'mg4dahce[' + i + ']',
                })
                wx.removeStorage({
                  key: 'mg4zqdaflag[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.mg4zts) {
                  that.setData({
                    jdt: parseInt(i / app.globalData.mg4zts * 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'mg4zqdacount',
              })
              wx.removeStorage({
                key: 'mg4thcount',
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
                mg4ysxxa: 'black',
                mg4ysxxb: 'black',
                mg4ysxxc: 'black',
                mg4ysxxd: 'black',
                mg4ysxxe: 'black',
                dapd: '',
                dapdys: 'white',
                daxs: '',
                ddts: '0',
                ts: "0",
                tx: '-',
                ctkth: '0',
                zts: '0',
              })
              app.globalData.mg4ysflagxxa = '0',
                app.globalData.mg4ysflagxxb = '0',
                app.globalData.mg4ysflagxxc = '0',
                app.globalData.mg4ysflagxxd = '0',
                app.globalData.mg4ysflagxxe = '0',

                app.globalData.mg4count = 1,
                app.globalData.mg4count2 = 0,
                app.globalData.mg4count3 = 0
              for (var i = 0; i < (b + 1); i++) {
                wx.getStorage({
                  key: 'mgctkhc[' + i + ']',
                  success: function (res) {
                    wx.removeStorage({
                      key: 'mgctkhccountflag[' + res.data + ']',
                    })
                  }
                })
                wx.removeStorage({
                  key: 'mgctkhc[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.mg4zts) {
                  that.setData({
                    jdt: parseInt(i / b * 50 + 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'mgctkhccount',
              })
              app.globalData.mg4zts = 0
              that.setData({
                dsxs: '',
                jdtwidth: 0,
                jdtinfo: false,
                dsxs: ''
              })
              wx.showToast({
                title: '已清空错题库！',
                icon: 'none',
                duration: 1500 //持续的时间
              })
            }
            if (res.cancel) {
              wx.showToast({
                title: '已取消！',
                icon: 'none',
                duration: 1500 //持续的时间
              })
            }
          }
        })
      },
      fail: function () {
        wx.showToast({
          title: '已清空错题库！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '毛概 错题库'
    });
    var that = this
    wx.getStorage({
      key: 'mgctkhccount',
      success: function (res) { //如果取得 错题个数统计 的数据
        app.globalData.mg4zts = parseInt(res.data)
        that.setData({
          zts: app.globalData.mg4zts
        })
      },
      fail: function (res) {
        app.globalData.mg4zts = 0;
        that.setData({
          zts: app.globalData.mg4zts
        })
      }
    })

    wx.getStorage({
      key: 'mg4zqdacount',
      success: function (res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'mg4thcount',
      success: function (res) {
        if (parseInt(res.data) === 1) {
          app.globalData.mg4count2 = 1,
            app.globalData.mg4count = 2
        } else if (parseInt(res.data) === app.globalData.mg4zts) {
          app.globalData.mg4count2 = app.globalData.mg4zts - 1,
            app.globalData.mg4count = app.globalData.mg4zts
        } else if (res.data > 0 && res.data < (app.globalData.mg4zts + 1)) {
          app.globalData.mg4count2 = parseInt(res.data) - 1,
            app.globalData.mg4count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.mg4count3 = parseInt(res.data);
        that.mg4tmxs(res.data); //题目显示
        that.mg4qcxxhc(res.data); //取出选项的缓存
      }
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
    this.mg4ybccxx(app.globalData.mg4count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.mg4ybccxx(app.globalData.mg4count3); //异步存储选项到缓存当中
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