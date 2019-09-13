// pages/sx4/sx4.js
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
    sx4ysxxa: 'black',
    sx4ysxxb: 'black',
    sx4ysxxc: 'black',
    sx4ysxxd: 'black',
    sx4ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //当前题数

    zts: app.globalData.sx4zts, //总题数

    ctkth: '0', //错题库顺序的题号

    tx: '-', //题型


  },

  //函数 题目选项是否选中
  sx4xxsfxz: function (e) {
    if (e === '0') {
      app.globalData.sx4yscontrol = 'blue'
      app.globalData.sx4ysflagcontrol = '1'
    } else {
      app.globalData.sx4yscontrol = 'black'
      app.globalData.sx4ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  sx4ybccxx: function (b) {
    var that = this;
    var a = b;

    wx.setStorage({
      key: 'sx4dahca[' + a + ']',
      data: that.data.sx4ysxxa
    }),
      wx.setStorage({
        key: 'sx4dahcb[' + a + ']',
        data: that.data.sx4ysxxb
      }),
      wx.setStorage({
        key: 'sx4dahcc[' + a + ']',
        data: that.data.sx4ysxxc
      }),
      wx.setStorage({
        key: 'sx4dahcd[' + a + ']',
        data: that.data.sx4ysxxd
      }),
      wx.setStorage({
        key: 'sx4dahce[' + a + ']',
        data: that.data.sx4ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      sx4ysxxa: 'black',
      sx4ysxxb: 'black',
      sx4ysxxc: 'black',
      sx4ysxxd: 'black',
      sx4ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.sx4ysflagxxa = '0',
      app.globalData.sx4ysflagxxb = '0',
      app.globalData.sx4ysflagxxc = '0',
      app.globalData.sx4ysflagxxd = '0',
      app.globalData.sx4ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  sx4qcxxhc: function (a) {
    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'sx4dahca[' + b + ']',
      success: function (res) {
        that.setData({
          sx4ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.sx4ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.sx4ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'sx4dahcb[' + b + ']',
      success: function (res) {
        that.setData({
          sx4ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.sx4ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.sx4ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'sx4dahcc[' + b + ']',
      success: function (res) {
        that.setData({
          sx4ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.sx4ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.sx4ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'sx4dahcd[' + b + ']',
      success: function (res) {
        that.setData({
          sx4ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.sx4ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.sx4ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'sx4dahce[' + b + ']',
      success: function (res) {
        that.setData({
          sx4ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.sx4ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.sx4ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'sx4dahca[' + b + ']',
      fail: function (res) {
        that.setData({
          sx4ysxxa: 'black'
        })
        app.globalData.sx4ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'sx4dahcb[' + b + ']',
      fail: function (res) {
        that.setData({
          sx4ysxxb: 'black'
        })
        app.globalData.sx4ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'sx4dahcc[' + b + ']',
      fail: function (res) {
        that.setData({
          sx4ysxxc: 'black'
        })
        app.globalData.sx4ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'sx4dahcd[' + b + ']',
      fail: function (res) {
        that.setData({
          sx4ysxxd: 'black'
        })
        app.globalData.sx4ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'sx4dahce[' + b + ']',
      fail: function (res) {
        that.setData({
          sx4ysxxe: 'black'
        })
        app.globalData.sx4ysflagxxe = '0'
      },
    })

  },

  //函数 已正确答题个数
  sx4yzqdtgs: function (a) {
    var b = a
    var c = parseInt(b)
    var that = this;
    wx.getStorage({
      key: 'sx4zqdaflag[' + c + ']',
      fail: function (res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'sx4zqdaflag[' + c + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'sx4zqdacount',
          success: function (res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.sx4zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.sx4zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'sx4zqdacount',
              data: app.globalData.sx4zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'sx4zqdacount',
          fail: function (res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'sx4zqdacount',
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
  sx4yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.sx4ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.sx4ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.sx4ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.sx4ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.sx4ysxxe === 'blue') {
      hdda = hdda + 'e'
    }
    wx.getStorage({
      key: 'sxctkhc[' + app.globalData.sx4count3 + ']',
      success: function (res) {
        if (app.globalData.sx[res.data].da === hdda) {
          that.setData({
            dapd: '答案正确',
            dapdys: 'green'
          })
          //已正确答题个数
          that.sx4yzqdtgs(res.data);
        } else {
          that.setData({
            dapd: '答案错误',
            dapdys: 'red'
          })
          wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
            key: 'sx4zqdaflag[' + res.data + ']',
            data: '0'
          })
        }
      },
    })


  },

  //函数 题目显示
  sx4tmxs: function (a) {
    var b = a;
    var that = this;
    that.setData({
      ctkth: b
    })
    wx.getStorage({
      key: 'sxctkhc[' + b + ']',
      success: function (res) {
        that.setData({
          tm: app.globalData.sx[res.data].tm,
          xxa: app.globalData.sx[res.data].xxa,
          xxb: app.globalData.sx[res.data].xxb,
          xxc: app.globalData.sx[res.data].xxc,
          xxd: app.globalData.sx[res.data].xxd,
          xxe: app.globalData.sx[res.data].xxe,
          ts: res.data,
          tx: app.globalData.sx[res.data].tx,
        })
      },
    })

  },

  //函数 存储当前题号
  sx4ccdqth: function () {
    wx.setStorage({
      key: 'sx4thcount',
      data: app.globalData.sx4count3
    })
  },

  //函数 倒计时10S
  sx4djs: function () {
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
  sx4jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.sx4zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.sx4zts * 100)
      })
    }
  },

  //函数 挪动缓存
  sxctkndhc: function () {
    var that = this;
    that.setData({
      dsxs: '正在交换缓存位置，请稍等'
    })
    for (var i = app.globalData.sx4count3 + 1; i < (app.globalData.sx4zts + 1); i++) { //循环挪动缓存
      (function (i) {
        var j = i - 1
        wx.getStorage({
          key: 'sxctkhc[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'sxctkhc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'sx4dahca[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'sx4dahca[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'sx4dahcb[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'sx4dahcb[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'sx4dahcc[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'sx4dahcc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'sx4dahcd[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'sx4dahcd[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'sx4dahce[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'sx4dahce[' + j + ']',
              data: res.data
            })
          }
        })
      })(i)
      if (i === parseInt(app.globalData.sx4count3 + 1)) {
        that.setData({
          jdtwidth: 12,
          jdtinfo: true
        })
      }
      if (i <= app.globalData.sx4zts) {
        that.setData({
          jdt: parseInt(i / app.globalData.sx4zts * 100)
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
  sxctkxssx: function () {
    var that = this
    that.sx4tmxs(app.globalData.sx4count3); //题目显示
    that.sx4qcxxhc(app.globalData.sx4count3); //取出选项的缓存
    wx.getStorage({
      key: 'sx4zqdacount',
      success: function (res) {
        that.setData({
          ddts: res.data
        })
      }
    })
  },

  //题目选项是否选中
  sx4clickxxa: function (e) {
    this.sx4xxsfxz(app.globalData.sx4ysflagxxa) //调用函数
    this.setData({
      sx4ysxxa: app.globalData.sx4yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.sx4ysflagxxa = app.globalData.sx4ysflagcontrol
  },

  sx4clickxxb: function (e) {
    this.sx4xxsfxz(app.globalData.sx4ysflagxxb)
    this.setData({
      sx4ysxxb: app.globalData.sx4yscontrol,
    })
    app.globalData.sx4ysflagxxb = app.globalData.sx4ysflagcontrol
  },

  sx4clickxxc: function (e) {
    this.sx4xxsfxz(app.globalData.sx4ysflagxxc)
    this.setData({
      sx4ysxxc: app.globalData.sx4yscontrol,
    })
    app.globalData.sx4ysflagxxc = app.globalData.sx4ysflagcontrol
  },

  sx4clickxxd: function (e) {
    this.sx4xxsfxz(app.globalData.sx4ysflagxxd)
    this.setData({
      sx4ysxxd: app.globalData.sx4yscontrol,
    })
    app.globalData.sx4ysflagxxd = app.globalData.sx4ysflagcontrol
  },

  sx4clickxxe: function (e) {
    this.sx4xxsfxz(app.globalData.sx4ysflagxxe)
    this.setData({
      sx4ysxxe: app.globalData.sx4yscontrol,
    })
    app.globalData.sx4ysflagxxe = app.globalData.sx4ysflagcontrol
  },

  //下一题 按钮
  sx4clickButton3: function (e) {
    var that = this;
    this.sx4ybccxx(app.globalData.sx4count3); //异步存储选项到缓存当中
    if (app.globalData.sx4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.sx4zts === 1) {
      this.sx4tmxs(app.globalData.sx4zts); //题目显示
      this.sx4qcxxhc(app.globalData.sx4zts); //取出选项的缓存
      app.globalData.sx4count3 = app.globalData.sx4zts,
        app.globalData.sx4count2 = app.globalData.sx4zts,
        app.globalData.sx4count = app.globalData.sx4zts
      this.sx4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.sx4count === 1) { //如果题目计数为1，则输出，并累加
        this.sx4tmxs(app.globalData.sx4count); //题目显示
        this.sx4qcxxhc(app.globalData.sx4count); //取出选项的缓存
        app.globalData.sx4count3 = app.globalData.sx4count,
          app.globalData.sx4count2 = app.globalData.sx4count,
          app.globalData.sx4count = app.globalData.sx4count + 1
        this.sx4ccdqth(); //存储当前题号
      } else if (app.globalData.sx4count === app.globalData.sx4zts) { //否则，如果题目计数为max，则输出，并将计数重置
        this.sx4tmxs(app.globalData.sx4count); //题目显示
        this.sx4qcxxhc(app.globalData.sx4count); //取出选项的缓存
        app.globalData.sx4count3 = app.globalData.sx4count,
          app.globalData.sx4count2 = app.globalData.sx4count - 1,
          this.sx4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为最后一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.sx4count > 1) { //否则,正常输出并累加
        this.sx4tmxs(app.globalData.sx4count); //题目显示
        this.sx4qcxxhc(app.globalData.sx4count); //取出选项的缓存
        app.globalData.sx4count3 = app.globalData.sx4count,
          app.globalData.sx4count2 = app.globalData.sx4count - 1,
          app.globalData.sx4count = app.globalData.sx4count + 1
        this.sx4ccdqth(); //存储当前题号
      } else {

      }

    }

  },

  //上一题按钮
  sx4clickButton1: function (e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.sx4ybccxx(app.globalData.sx4count3); //异步存储选项到缓存当中
    if (app.globalData.sx4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.sx4zts === 1) {
      this.sx4tmxs(app.globalData.sx4zts); //题目显示
      this.sx4qcxxhc(app.globalData.sx4zts); //取出选项的缓存
      app.globalData.sx4count3 = app.globalData.sx4zts,
        app.globalData.sx4count2 = app.globalData.sx4zts,
        app.globalData.sx4count = app.globalData.sx4zts
      this.sx4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.sx4count2 === 1) { //如果题目计数为1，则输出，并累加
        this.sx4tmxs(app.globalData.sx4count2); //题目显示
        app.globalData.sx4count3 = app.globalData.sx4count2,
          app.globalData.sx4count = app.globalData.sx4count2 + 1
        this.sx4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为第一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.sx4count2 === (app.globalData.sx4zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
        this.sx4tmxs(app.globalData.sx4count2); //题目显示
        app.globalData.sx4count3 = app.globalData.sx4count2,
          app.globalData.sx4count = app.globalData.sx4count2 + 1,
          app.globalData.sx4count2 = app.globalData.sx4count2 - 1
        this.sx4ccdqth(); //存储当前题号
      } else if (app.globalData.sx4count2 > 1) { //否则,正常输出并累加
        this.sx4tmxs(app.globalData.sx4count2); //题目显示
        app.globalData.sx4count3 = app.globalData.sx4count2,
          app.globalData.sx4count = app.globalData.sx4count2 + 1,
          app.globalData.sx4count2 = app.globalData.sx4count2 - 1
        this.sx4ccdqth(); //存储当前题号

      } else {

      }
    }
    this.sx4qcxxhc(app.globalData.sx4count3); //取出选项的缓存

  },

  //核对答案按钮
  sx4clickButton2: function (e) {
    var that = this
    if (app.globalData.sx4count3 === 1) {
      //已正确答题个数2
      this.sx4yzqdtgs2();
    } else if (app.globalData.sx4count3 === app.globalData.sx4zts) {
      //已正确答题个数2
      this.sx4yzqdtgs2();
    } else if (app.globalData.sx4count3 > 1) {
      //已正确答题个数2
      this.sx4yzqdtgs2();
    } else {
      console.log('Other!')
    }
    wx.getStorage({
      key: 'sxctkhc[' + app.globalData.sx4count3 + ']',
      success: function (res) {
        that.setData({
          daxs: '正确答案：' + app.globalData.sx[res.data].da
        })
      },
    })
  },

  //重置按钮
  sx4clickButton4: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.sx4zts + 1); i++) {
            wx.removeStorage({
              key: 'sx4dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'sx4dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'sx4dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'sx4dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'sx4dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'sx4zqdaflag[' + i + ']',
            })
            that.sx4jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'sx4zqdacount',
          })
          wx.removeStorage({
            key: 'sx4thcount',
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
            sx4ysxxa: 'black',
            sx4ysxxb: 'black',
            sx4ysxxc: 'black',
            sx4ysxxd: 'black',
            sx4ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
            ctkth: '0',
          })
          app.globalData.sx4ysflagxxa = '0',
            app.globalData.sx4ysflagxxb = '0',
            app.globalData.sx4ysflagxxc = '0',
            app.globalData.sx4ysflagxxd = '0',
            app.globalData.sx4ysflagxxe = '0',

            app.globalData.sx4count = 1,
            app.globalData.sx4count2 = 0,
            app.globalData.sx4count3 = 0,
            that.sx4djs();//倒计时10秒
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
  sx4clickButton5: function (e) {
    var that = this

    if (app.globalData.sx4zts > 0 && app.globalData.sx4count3 > 0) {
      //调整正确答案个数
      wx.getStorage({
        key: 'sxctkhc[' + app.globalData.sx4count3 + ']',
        success: function (res) {
          var temp = parseInt(res.data)
          wx.getStorage({
            key: 'sx4zqdaflag[' + temp + ']',
            success: function (res) {
              if (res.data === '1') {
                wx.getStorage({
                  key: 'sx4zqdacount',
                  success: function (res) {
                    wx.setStorage({
                      key: 'sx4zqdacount',
                      data: parseInt(res.data) - 1
                    })
                  }
                })
              }
            }
          })
          wx.removeStorage({
            key: 'sx4zqdaflag[' + temp + ']',
          })
        },
      })
      wx.getStorage({
        key: 'sx4zqdacount',
        success: function (res) {
          that.setData({
            ddts: res.data
          })
        }
      })
      if (app.globalData.sx4count3 === 1) {
        wx.getStorage({
          key: 'sxctkhc[' + app.globalData.sx4count3 + ']',
          success: function (res) {
            wx.removeStorage({
              key: 'sxctkhccountflag[' + res.data + ']',
            })
          }
        })
        that.sxctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'sxctkhc[' + app.globalData.sx4zts + ']',
        })
        app.globalData.sx4count3 = 1
        app.globalData.sx4count2 = 1
        app.globalData.sx4count = 2
      } else if (app.globalData.sx4count3 === app.globalData.sx4zts) {
        wx.getStorage({
          key: 'sxctkhc[' + app.globalData.sx4zts + ']',
          success: function (res) {
            app.globalData.sxctksc2 = res.data
            wx.removeStorage({
              key: 'sxctkhccountflag[' + app.globalData.sxctksc2 + ']',
            })
          }
        })
        wx.removeStorage({
          key: 'sxctkhc[' + app.globalData.sx4zts + ']',
        })
        app.globalData.sx4count3 = app.globalData.sx4zts - 1
        app.globalData.sx4count2 = app.globalData.sx4zts - 2
        app.globalData.sx4count = app.globalData.sx4zts - 1
      } else if (app.globalData.sx4count3 > 1 && app.globalData.sx4count3 < app.globalData.sx4zts) {
        wx.getStorage({
          key: 'sxctkhc[' + app.globalData.sx4count3 + ']',
          success: function (res) {
            app.globalData.sxctksc2 = res.data
            wx.removeStorage({
              key: 'sxctkhccountflag[' + app.globalData.sxctksc2 + ']',
            })
          }
        })
        that.sxctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'sxctkhc[' + app.globalData.sx4zts + ']',
        })
        app.globalData.sx4count2 = app.globalData.sx4count3 - 1
        app.globalData.sx4count = app.globalData.sx4count3 + 1
      } else {

      }
      wx.removeStorage({
        key: 'sx4dahca[' + app.globalData.sx4zts + ']',
      })
      wx.removeStorage({
        key: 'sx4dahcb[' + app.globalData.sx4zts + ']',
      })
      wx.removeStorage({
        key: 'sx4dahcc[' + app.globalData.sx4zts + ']',
      })
      wx.removeStorage({
        key: 'sx4dahcd[' + app.globalData.sx4zts + ']',
      })
      wx.removeStorage({
        key: 'sx4dahce[' + app.globalData.sx4zts + ']',
      })
      wx.getStorage({ //错题总数减1
        key: 'sxctkhccount',
        success: function (res) {
          if (res.data === 1) {
            that.sx4clickButton4();
          }
          var a = res.data - 1
          wx.setStorage({
            key: 'sxctkhccount',
            data: a
          })
        }
      })
      app.globalData.sx4zts = app.globalData.sx4zts - 1
      that.setData({
        zts: app.globalData.sx4zts
      })
      wx.showModal({
        title: '提示',
        content: '此题已从错题库中删除！',
        showCancel: false, //不显示 否 的选项
        confirmText: '朕知道了',
        success: function (res) {
          if (res.confirm) {
            that.sxctkxssx(); //错题库显示刷新
          } else if (res.cancel) {
            that.sxctkxssx(); //错题库显示刷新
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
  sx4tzth: function (e) {
    app.globalData.sx4tzthinputx = e.detail.value
  },

  //跳转按钮
  sx4clickButton6: function (e) {

    var c = parseInt(app.globalData.sx4tzthinputx);
    this.sx4ybccxx(app.globalData.sx4count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.sx4zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.sx4count2 = 1
          app.globalData.sx4count = 2
          break;
        case app.globalData.sx4zts:
          app.globalData.sx4count2 = app.globalData.sx4zts - 1
          app.globalData.sx4count = app.globalData.sx4zts
          break;
        case c:
          app.globalData.sx4count2 = c - 1
          app.globalData.sx4count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.sx4count3 = c;
      this.sx4tmxs(c); //题目显示
      this.sx4qcxxhc(app.globalData.sx4count3); //取出选项的缓存
    } else {
      this.sx4qcxxhc(app.globalData.sx4count3); //取出选项的缓存
      wx.showToast({
        title: '题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }

  },

  //清空
  sx4clickButton7: function () {
    var that = this;

    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'sxctkhccount',
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
              for (var i = 0; i < (app.globalData.sx4zts + 1); i++) {
                wx.removeStorage({
                  key: 'sx4dahca[' + i + ']',
                })
                wx.removeStorage({
                  key: 'sx4dahcb[' + i + ']',
                })
                wx.removeStorage({
                  key: 'sx4dahcc[' + i + ']',
                })
                wx.removeStorage({
                  key: 'sx4dahcd[' + i + ']',
                })
                wx.removeStorage({
                  key: 'sx4dahce[' + i + ']',
                })
                wx.removeStorage({
                  key: 'sx4zqdaflag[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.sx4zts) {
                  that.setData({
                    jdt: parseInt(i / app.globalData.sx4zts * 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'sx4zqdacount',
              })
              wx.removeStorage({
                key: 'sx4thcount',
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
                sx4ysxxa: 'black',
                sx4ysxxb: 'black',
                sx4ysxxc: 'black',
                sx4ysxxd: 'black',
                sx4ysxxe: 'black',
                dapd: '',
                dapdys: 'white',
                daxs: '',
                ddts: '0',
                ts: "0",
                tx: '-',
                ctkth: '0',
                zts: '0',
              })
              app.globalData.sx4ysflagxxa = '0',
                app.globalData.sx4ysflagxxb = '0',
                app.globalData.sx4ysflagxxc = '0',
                app.globalData.sx4ysflagxxd = '0',
                app.globalData.sx4ysflagxxe = '0',

                app.globalData.sx4count = 1,
                app.globalData.sx4count2 = 0,
                app.globalData.sx4count3 = 0
              for (var i = 0; i < (b + 1); i++) {
                wx.getStorage({
                  key: 'sxctkhc[' + i + ']',
                  success: function (res) {
                    wx.removeStorage({
                      key: 'sxctkhccountflag[' + res.data + ']',
                    })
                  }
                })
                wx.removeStorage({
                  key: 'sxctkhc[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.sx4zts) {
                  that.setData({
                    jdt: parseInt(i / b * 50 + 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'sxctkhccount',
              })
              app.globalData.sx4zts = 0
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
      title: '思修 错题库'
    });
    var that = this
    wx.getStorage({
      key: 'sxctkhccount',
      success: function (res) { //如果取得 错题个数统计 的数据
        app.globalData.sx4zts = parseInt(res.data)
        that.setData({
          zts: app.globalData.sx4zts
        })
      },
      fail: function (res) {
        app.globalData.sx4zts = 0;
        that.setData({
          zts: app.globalData.sx4zts
        })
      }
    })

    wx.getStorage({
      key: 'sx4zqdacount',
      success: function (res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'sx4thcount',
      success: function (res) {
        if (parseInt(res.data) === 1) {
          app.globalData.sx4count2 = 1,
            app.globalData.sx4count = 2
        } else if (parseInt(res.data) === app.globalData.sx4zts) {
          app.globalData.sx4count2 = app.globalData.sx4zts - 1,
            app.globalData.sx4count = app.globalData.sx4zts
        } else if (res.data > 0 && res.data < (app.globalData.sx4zts + 1)) {
          app.globalData.sx4count2 = parseInt(res.data) - 1,
            app.globalData.sx4count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.sx4count3 = parseInt(res.data);
        that.sx4tmxs(res.data); //题目显示
        that.sx4qcxxhc(res.data); //取出选项的缓存
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
    this.sx4ybccxx(app.globalData.sx4count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.sx4ybccxx(app.globalData.sx4count3); //异步存储选项到缓存当中
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