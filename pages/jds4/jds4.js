// pages/jds4/jds4.js
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
    jds4ysxxa: 'black',
    jds4ysxxb: 'black',
    jds4ysxxc: 'black',
    jds4ysxxd: 'black',
    jds4ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //当前题数

    zts: app.globalData.jds4zts, //总题数

    ctkth: '0', //错题库顺序的题号

    tx: '-', //题型


  },

  //函数 题目选项是否选中
  jds4xxsfxz: function(e) {
    if (e === '0') {
      app.globalData.jds4yscontrol = 'blue'
      app.globalData.jds4ysflagcontrol = '1'
    } else {
      app.globalData.jds4yscontrol = 'black'
      app.globalData.jds4ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  jds4ybccxx: function(b) {
    var that = this;
    var a = b;

    wx.setStorage({
        key: 'jds4dahca[' + a + ']',
        data: that.data.jds4ysxxa
      }),
      wx.setStorage({
        key: 'jds4dahcb[' + a + ']',
        data: that.data.jds4ysxxb
      }),
      wx.setStorage({
        key: 'jds4dahcc[' + a + ']',
        data: that.data.jds4ysxxc
      }),
      wx.setStorage({
        key: 'jds4dahcd[' + a + ']',
        data: that.data.jds4ysxxd
      }),
      wx.setStorage({
        key: 'jds4dahce[' + a + ']',
        data: that.data.jds4ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      jds4ysxxa: 'black',
      jds4ysxxb: 'black',
      jds4ysxxc: 'black',
      jds4ysxxd: 'black',
      jds4ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.jds4ysflagxxa = '0',
      app.globalData.jds4ysflagxxb = '0',
      app.globalData.jds4ysflagxxc = '0',
      app.globalData.jds4ysflagxxd = '0',
      app.globalData.jds4ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  jds4qcxxhc: function(a) {
    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'jds4dahca[' + b + ']',
      success: function(res) {
        that.setData({
          jds4ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds4ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds4ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds4dahcb[' + b + ']',
      success: function(res) {
        that.setData({
          jds4ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds4ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds4ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds4dahcc[' + b + ']',
      success: function(res) {
        that.setData({
          jds4ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds4ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds4ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds4dahcd[' + b + ']',
      success: function(res) {
        that.setData({
          jds4ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds4ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds4ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds4dahce[' + b + ']',
      success: function(res) {
        that.setData({
          jds4ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds4ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds4ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'jds4dahca[' + b + ']',
      fail: function(res) {
        that.setData({
          jds4ysxxa: 'black'
        })
        app.globalData.jds4ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'jds4dahcb[' + b + ']',
      fail: function(res) {
        that.setData({
          jds4ysxxb: 'black'
        })
        app.globalData.jds4ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'jds4dahcc[' + b + ']',
      fail: function(res) {
        that.setData({
          jds4ysxxc: 'black'
        })
        app.globalData.jds4ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'jds4dahcd[' + b + ']',
      fail: function(res) {
        that.setData({
          jds4ysxxd: 'black'
        })
        app.globalData.jds4ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'jds4dahce[' + b + ']',
      fail: function(res) {
        that.setData({
          jds4ysxxe: 'black'
        })
        app.globalData.jds4ysflagxxe = '0'
      },
    })

  },

  //函数 已正确答题个数
  jds4yzqdtgs: function(a) {
    var b = a
    var c = parseInt(b)
    var that = this;
    wx.getStorage({
      key: 'jds4zqdaflag[' + c + ']',
      fail: function(res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'jds4zqdaflag[' + c + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'jds4zqdacount',
          success: function(res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.jds4zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.jds4zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'jds4zqdacount',
              data: app.globalData.jds4zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'jds4zqdacount',
          fail: function(res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'jds4zqdacount',
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
  jds4yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.jds4ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.jds4ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.jds4ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.jds4ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.jds4ysxxe === 'blue') {
      hdda = hdda + 'e'
    }
    wx.getStorage({
      key: 'jdsctkhc[' + app.globalData.jds4count3 + ']',
      success: function(res) {
        if (app.globalData.jds[res.data].da === hdda) {
          that.setData({
            dapd: '答案正确',
            dapdys: 'green'
          })
          //已正确答题个数
          that.jds4yzqdtgs(res.data);
        } else {
          that.setData({
            dapd: '答案错误',
            dapdys: 'red'
          })
          wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
            key: 'jds4zqdaflag[' + res.data + ']',
            data: '0'
          })
        }
      },
    })


  },

  //函数 题目显示
  jds4tmxs: function(a) {
    var b = a;
    var that = this;
    that.setData({
      ctkth: b
    })
    wx.getStorage({
      key: 'jdsctkhc[' + b + ']',
      success: function(res) {
        that.setData({
          tm: app.globalData.jds[res.data].tm,
          xxa: app.globalData.jds[res.data].xxa,
          xxb: app.globalData.jds[res.data].xxb,
          xxc: app.globalData.jds[res.data].xxc,
          xxd: app.globalData.jds[res.data].xxd,
          xxe: app.globalData.jds[res.data].xxe,
          ts: res.data,
          tx: app.globalData.jds[res.data].tx,
        })
      },
    })

  },

  //函数 存储当前题号
  jds4ccdqth: function() {
    wx.setStorage({
      key: 'jds4thcount',
      data: app.globalData.jds4count3
    })
  },

  //函数 倒计时10S
  jds4djs: function () {
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
  jds4jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.jds4zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.jds4zts * 100)
      })
    }
  },

  //函数 挪动缓存
  jdsctkndhc: function() {
    var that = this;
    that.setData({
      dsxs: '正在交换缓存位置，请稍等'
    })
    for (var i = app.globalData.jds4count3 + 1; i < (app.globalData.jds4zts + 1); i++) { //循环挪动缓存
      (function(i) {
        var j = i - 1
        wx.getStorage({
          key: 'jdsctkhc[' + i + ']',
          success: function(res) {
            wx.setStorage({
              key: 'jdsctkhc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'jds4dahca[' + i + ']',
          success: function(res) {
            wx.setStorage({
              key: 'jds4dahca[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'jds4dahcb[' + i + ']',
          success: function(res) {
            wx.setStorage({
              key: 'jds4dahcb[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'jds4dahcc[' + i + ']',
          success: function(res) {
            wx.setStorage({
              key: 'jds4dahcc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'jds4dahcd[' + i + ']',
          success: function(res) {
            wx.setStorage({
              key: 'jds4dahcd[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'jds4dahce[' + i + ']',
          success: function(res) {
            wx.setStorage({
              key: 'jds4dahce[' + j + ']',
              data: res.data
            })
          }
        })
      })(i)
      if (i === parseInt(app.globalData.jds4count3 + 1)) {
        that.setData({
          jdtwidth: 12,
          jdtinfo: true
        })
      }
      if (i <= app.globalData.jds4zts) {
        that.setData({
          jdt: parseInt(i / app.globalData.jds4zts * 100)
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
  jdsctkxssx: function() {
    var that = this
    that.jds4tmxs(app.globalData.jds4count3); //题目显示
    that.jds4qcxxhc(app.globalData.jds4count3); //取出选项的缓存
    wx.getStorage({
      key: 'jds4zqdacount',
      success: function(res) {
        that.setData({
          ddts: res.data
        })
      }
    })
  },

  //题目选项是否选中
  jds4clickxxa: function(e) {
    this.jds4xxsfxz(app.globalData.jds4ysflagxxa) //调用函数
    this.setData({
      jds4ysxxa: app.globalData.jds4yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.jds4ysflagxxa = app.globalData.jds4ysflagcontrol
  },

  jds4clickxxb: function(e) {
    this.jds4xxsfxz(app.globalData.jds4ysflagxxb)
    this.setData({
      jds4ysxxb: app.globalData.jds4yscontrol,
    })
    app.globalData.jds4ysflagxxb = app.globalData.jds4ysflagcontrol
  },

  jds4clickxxc: function(e) {
    this.jds4xxsfxz(app.globalData.jds4ysflagxxc)
    this.setData({
      jds4ysxxc: app.globalData.jds4yscontrol,
    })
    app.globalData.jds4ysflagxxc = app.globalData.jds4ysflagcontrol
  },

  jds4clickxxd: function(e) {
    this.jds4xxsfxz(app.globalData.jds4ysflagxxd)
    this.setData({
      jds4ysxxd: app.globalData.jds4yscontrol,
    })
    app.globalData.jds4ysflagxxd = app.globalData.jds4ysflagcontrol
  },

  jds4clickxxe: function(e) {
    this.jds4xxsfxz(app.globalData.jds4ysflagxxe)
    this.setData({
      jds4ysxxe: app.globalData.jds4yscontrol,
    })
    app.globalData.jds4ysflagxxe = app.globalData.jds4ysflagcontrol
  },

  //下一题 按钮
  jds4clickButton3: function(e) {
    var that = this;
    this.jds4ybccxx(app.globalData.jds4count3); //异步存储选项到缓存当中
    if (app.globalData.jds4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.jds4zts === 1) {
      this.jds4tmxs(app.globalData.jds4zts); //题目显示
      this.jds4qcxxhc(app.globalData.jds4zts); //取出选项的缓存
      app.globalData.jds4count3 = app.globalData.jds4zts,
        app.globalData.jds4count2 = app.globalData.jds4zts,
        app.globalData.jds4count = app.globalData.jds4zts
      this.jds4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.jds4count === 1) { //如果题目计数为1，则输出，并累加
        this.jds4tmxs(app.globalData.jds4count); //题目显示
        this.jds4qcxxhc(app.globalData.jds4count); //取出选项的缓存
        app.globalData.jds4count3 = app.globalData.jds4count,
          app.globalData.jds4count2 = app.globalData.jds4count,
          app.globalData.jds4count = app.globalData.jds4count + 1
        this.jds4ccdqth(); //存储当前题号
      } else if (app.globalData.jds4count === app.globalData.jds4zts) { //否则，如果题目计数为max，则输出，并将计数重置
        this.jds4tmxs(app.globalData.jds4count); //题目显示
        this.jds4qcxxhc(app.globalData.jds4count); //取出选项的缓存
        app.globalData.jds4count3 = app.globalData.jds4count,
          app.globalData.jds4count2 = app.globalData.jds4count - 1,
          this.jds4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为最后一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.jds4count > 1) { //否则,正常输出并累加
        this.jds4tmxs(app.globalData.jds4count); //题目显示
        this.jds4qcxxhc(app.globalData.jds4count); //取出选项的缓存
        app.globalData.jds4count3 = app.globalData.jds4count,
          app.globalData.jds4count2 = app.globalData.jds4count - 1,
          app.globalData.jds4count = app.globalData.jds4count + 1
        this.jds4ccdqth(); //存储当前题号
      } else {

      }

    }

  },

  //上一题按钮
  jds4clickButton1: function(e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.jds4ybccxx(app.globalData.jds4count3); //异步存储选项到缓存当中
    if (app.globalData.jds4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.jds4zts === 1) {
      this.jds4tmxs(app.globalData.jds4zts); //题目显示
      this.jds4qcxxhc(app.globalData.jds4zts); //取出选项的缓存
      app.globalData.jds4count3 = app.globalData.jds4zts,
        app.globalData.jds4count2 = app.globalData.jds4zts,
        app.globalData.jds4count = app.globalData.jds4zts
      this.jds4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.jds4count2 === 1) { //如果题目计数为1，则输出，并累加
        this.jds4tmxs(app.globalData.jds4count2); //题目显示
        app.globalData.jds4count3 = app.globalData.jds4count2,
          app.globalData.jds4count = app.globalData.jds4count2 + 1
        this.jds4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为第一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.jds4count2 === (app.globalData.jds4zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
        this.jds4tmxs(app.globalData.jds4count2); //题目显示
        app.globalData.jds4count3 = app.globalData.jds4count2,
          app.globalData.jds4count = app.globalData.jds4count2 + 1,
          app.globalData.jds4count2 = app.globalData.jds4count2 - 1
        this.jds4ccdqth(); //存储当前题号
      } else if (app.globalData.jds4count2 > 1) { //否则,正常输出并累加
        this.jds4tmxs(app.globalData.jds4count2); //题目显示
        app.globalData.jds4count3 = app.globalData.jds4count2,
          app.globalData.jds4count = app.globalData.jds4count2 + 1,
          app.globalData.jds4count2 = app.globalData.jds4count2 - 1
        this.jds4ccdqth(); //存储当前题号

      } else {

      }
    }
    this.jds4qcxxhc(app.globalData.jds4count3); //取出选项的缓存

  },

  //核对答案按钮
  jds4clickButton2: function(e) {
    var that = this
    if (app.globalData.jds4count3 === 1) {
      //已正确答题个数2
      this.jds4yzqdtgs2();
    } else if (app.globalData.jds4count3 === app.globalData.jds4zts) {
      //已正确答题个数2
      this.jds4yzqdtgs2();
    } else if (app.globalData.jds4count3 > 1) {
      //已正确答题个数2
      this.jds4yzqdtgs2();
    } else {
      console.log('Other!')
    }
    wx.getStorage({
      key: 'jdsctkhc[' + app.globalData.jds4count3 + ']',
      success: function(res) {
        that.setData({
          daxs: '正确答案：' + app.globalData.jds[res.data].da
        })
      },
    })
  },

  //重置按钮
  jds4clickButton4: function(e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function(res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.jds4zts + 1); i++) {
            wx.removeStorage({
              key: 'jds4dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds4dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds4dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds4dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds4dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds4zqdaflag[' + i + ']',
            })
            that.jds4jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'jds4zqdacount',
          })
          wx.removeStorage({
            key: 'jds4thcount',
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
            jds4ysxxa: 'black',
            jds4ysxxb: 'black',
            jds4ysxxc: 'black',
            jds4ysxxd: 'black',
            jds4ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
            ctkth: '0',
          })
          app.globalData.jds4ysflagxxa = '0',
            app.globalData.jds4ysflagxxb = '0',
            app.globalData.jds4ysflagxxc = '0',
            app.globalData.jds4ysflagxxd = '0',
            app.globalData.jds4ysflagxxe = '0',

            app.globalData.jds4count = 1,
            app.globalData.jds4count2 = 0,
            app.globalData.jds4count3 = 0,
            that.jds4djs();//倒计时10秒
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
  jds4clickButton5: function(e) {
    var that = this

    if (app.globalData.jds4zts > 0 && app.globalData.jds4count3 > 0) {
      //调整正确答案个数
      wx.getStorage({
        key: 'jdsctkhc[' + app.globalData.jds4count3 + ']',
        success: function(res) {
          var temp = parseInt(res.data)
          wx.getStorage({
            key: 'jds4zqdaflag[' + temp + ']',
            success: function(res) {
              if (res.data === '1') {
                wx.getStorage({
                  key: 'jds4zqdacount',
                  success: function(res) {
                    wx.setStorage({
                      key: 'jds4zqdacount',
                      data: parseInt(res.data) - 1
                    })
                  }
                })
              }
            }
          })
          wx.removeStorage({
            key: 'jds4zqdaflag[' + temp + ']',
          })
        },
      })
      wx.getStorage({
        key: 'jds4zqdacount',
        success: function(res) {
          that.setData({
            ddts: res.data
          })
        }
      })
      if (app.globalData.jds4count3 === 1) {
        wx.getStorage({
          key: 'jdsctkhc[' + app.globalData.jds4count3 + ']',
          success: function(res) {
            wx.removeStorage({
              key: 'jdsctkhccountflag[' + res.data + ']',
            })
          }
        })
        that.jdsctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'jdsctkhc[' + app.globalData.jds4zts + ']',
        })
        app.globalData.jds4count3 = 1
        app.globalData.jds4count2 = 1
        app.globalData.jds4count = 2
      } else if (app.globalData.jds4count3 === app.globalData.jds4zts) {
        wx.getStorage({
          key: 'jdsctkhc[' + app.globalData.jds4zts + ']',
          success: function(res) {
            app.globalData.jdsctksc2 = res.data
            wx.removeStorage({
              key: 'jdsctkhccountflag[' + app.globalData.jdsctksc2 + ']',
            })
          }
        })
        wx.removeStorage({
          key: 'jdsctkhc[' + app.globalData.jds4zts + ']',
        })
        app.globalData.jds4count3 = app.globalData.jds4zts - 1
        app.globalData.jds4count2 = app.globalData.jds4zts - 2
        app.globalData.jds4count = app.globalData.jds4zts - 1
      } else if (app.globalData.jds4count3 > 1 && app.globalData.jds4count3 < app.globalData.jds4zts) {
        wx.getStorage({
          key: 'jdsctkhc[' + app.globalData.jds4count3 + ']',
          success: function(res) {
            app.globalData.jdsctksc2 = res.data
            wx.removeStorage({
              key: 'jdsctkhccountflag[' + app.globalData.jdsctksc2 + ']',
            })
          }
        })
        that.jdsctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'jdsctkhc[' + app.globalData.jds4zts + ']',
        })
        app.globalData.jds4count2 = app.globalData.jds4count3 - 1
        app.globalData.jds4count = app.globalData.jds4count3 + 1
      } else {

      }
      wx.removeStorage({
        key: 'jds4dahca[' + app.globalData.jds4zts + ']',
      })
      wx.removeStorage({
        key: 'jds4dahcb[' + app.globalData.jds4zts + ']',
      })
      wx.removeStorage({
        key: 'jds4dahcc[' + app.globalData.jds4zts + ']',
      })
      wx.removeStorage({
        key: 'jds4dahcd[' + app.globalData.jds4zts + ']',
      })
      wx.removeStorage({
        key: 'jds4dahce[' + app.globalData.jds4zts + ']',
      })
      wx.getStorage({ //错题总数减1
        key: 'jdsctkhccount',
        success: function(res) {
          if (res.data === 1) {
            that.jds4clickButton4();
          }
          var a = res.data - 1
          wx.setStorage({
            key: 'jdsctkhccount',
            data: a
          })
        }
      })
      app.globalData.jds4zts = app.globalData.jds4zts - 1
      that.setData({
        zts: app.globalData.jds4zts
      })
      wx.showModal({
        title: '提示',
        content: '此题已从错题库中删除！',
        showCancel: false, //不显示 否 的选项
        confirmText: '朕知道了',
        success: function(res) {
          if (res.confirm) {
            that.jdsctkxssx(); //错题库显示刷新
          } else if (res.cancel) {
            that.jdsctkxssx(); //错题库显示刷新
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
  jds4tzth: function(e) {
    app.globalData.jds4tzthinputx = e.detail.value
  },

  //跳转按钮
  jds4clickButton6: function(e) {

    var c = parseInt(app.globalData.jds4tzthinputx);
    this.jds4ybccxx(app.globalData.jds4count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.jds4zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.jds4count2 = 1
          app.globalData.jds4count = 2
          break;
        case app.globalData.jds4zts:
          app.globalData.jds4count2 = app.globalData.jds4zts - 1
          app.globalData.jds4count = app.globalData.jds4zts
          break;
        case c:
          app.globalData.jds4count2 = c - 1
          app.globalData.jds4count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.jds4count3 = c;
      this.jds4tmxs(c); //题目显示
      this.jds4qcxxhc(app.globalData.jds4count3); //取出选项的缓存
    } else {
      this.jds4qcxxhc(app.globalData.jds4count3); //取出选项的缓存
      wx.showToast({
        title: '题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }

  },

  //清空
  jds4clickButton7: function() {
    var that = this;

    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'jdsctkhccount',
      success: function(res) {
        var b = parseInt(res.data)
        wx.showModal({
          title: '提示',
          content: '确定要清空错题库吗？',
          success: function(res) {
            if (res.confirm) { //用户点击确定
              that.setData({
                dsxs: '正在清空，请稍等！'
              })
              for (var i = 0; i < (app.globalData.jds4zts + 1); i++) {
                wx.removeStorage({
                  key: 'jds4dahca[' + i + ']',
                })
                wx.removeStorage({
                  key: 'jds4dahcb[' + i + ']',
                })
                wx.removeStorage({
                  key: 'jds4dahcc[' + i + ']',
                })
                wx.removeStorage({
                  key: 'jds4dahcd[' + i + ']',
                })
                wx.removeStorage({
                  key: 'jds4dahce[' + i + ']',
                })
                wx.removeStorage({
                  key: 'jds4zqdaflag[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.jds4zts) {
                  that.setData({
                    jdt: parseInt(i / app.globalData.jds4zts * 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'jds4zqdacount',
              })
              wx.removeStorage({
                key: 'jds4thcount',
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
                jds4ysxxa: 'black',
                jds4ysxxb: 'black',
                jds4ysxxc: 'black',
                jds4ysxxd: 'black',
                jds4ysxxe: 'black',
                dapd: '',
                dapdys: 'white',
                daxs: '',
                ddts: '0',
                ts: "0",
                tx: '-',
                ctkth: '0',
                zts: '0',
              })
              app.globalData.jds4ysflagxxa = '0',
                app.globalData.jds4ysflagxxb = '0',
                app.globalData.jds4ysflagxxc = '0',
                app.globalData.jds4ysflagxxd = '0',
                app.globalData.jds4ysflagxxe = '0',

                app.globalData.jds4count = 1,
                app.globalData.jds4count2 = 0,
                app.globalData.jds4count3 = 0
              for (var i = 0; i < (b + 1); i++) {
                wx.getStorage({
                  key: 'jdsctkhc[' + i + ']',
                  success: function(res) {
                    wx.removeStorage({
                      key: 'jdsctkhccountflag[' + res.data + ']',
                    })
                  }
                })
                wx.removeStorage({
                  key: 'jdsctkhc[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.jds4zts) {
                  that.setData({
                    jdt: parseInt(i / b * 50 + 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'jdsctkhccount',
              })
              app.globalData.jds4zts = 0
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
      fail: function() {
        wx.showToast({
          title: '已清空错题库！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      }
    })

  },

  // 获取到焦点
  focus: function(e) {
    var that = this;
    console.log(e.detail.height)
    this.setData({
      focus: true,
      input_bottom: e.detail.height
    })
  },

  // 失去焦点
  no_focus: function(e) {
    this.setData({
      focus: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '近代史 错题库'
    });
    var that = this
    wx.getStorage({
      key: 'jdsctkhccount',
      success: function(res) { //如果取得 错题个数统计 的数据
        app.globalData.jds4zts = parseInt(res.data)
        that.setData({
          zts: app.globalData.jds4zts
        })
      },
      fail: function(res) {
        app.globalData.jds4zts = 0;
        that.setData({
          zts: app.globalData.jds4zts
        })
      }
    })

    wx.getStorage({
      key: 'jds4zqdacount',
      success: function(res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'jds4thcount',
      success: function(res) {
        if (parseInt(res.data) === 1) {
          app.globalData.jds4count2 = 1,
            app.globalData.jds4count = 2
        } else if (parseInt(res.data) === app.globalData.jds4zts) {
          app.globalData.jds4count2 = app.globalData.jds4zts - 1,
            app.globalData.jds4count = app.globalData.jds4zts
        } else if (res.data > 0 && res.data < (app.globalData.jds4zts + 1)) {
          app.globalData.jds4count2 = parseInt(res.data) - 1,
            app.globalData.jds4count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.jds4count3 = parseInt(res.data);
        that.jds4tmxs(res.data); //题目显示
        that.jds4qcxxhc(res.data); //取出选项的缓存
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.jds4ybccxx(app.globalData.jds4count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.jds4ybccxx(app.globalData.jds4count3); //异步存储选项到缓存当中
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})