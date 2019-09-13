// pages/jds2/jds2.js
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
    jds2ysxxa: 'black',
    jds2ysxxb: 'black',
    jds2ysxxc: 'black',
    jds2ysxxd: 'black',
    jds2ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //对应题号

    zts: app.globalData.jds2zts, //总题数

    tx: '-', //题型

    dsxs: '-', //打散显示

    th: '0', //当前题号
  },

  //函数 题目选项是否选中
  jds2xxsfxz: function(e) {
    if (e === '0') {
      app.globalData.jds2yscontrol = 'blue'
      app.globalData.jds2ysflagcontrol = '1'
    } else {
      app.globalData.jds2yscontrol = 'black'
      app.globalData.jds2ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  jds2ybccxx: function(b) {
    var that = this;
    var a = b;

    wx.setStorage({
        key: 'jds2dahca[' + a + ']',
        data: that.data.jds2ysxxa
      }),
      wx.setStorage({
        key: 'jds2dahcb[' + a + ']',
        data: that.data.jds2ysxxb
      }),
      wx.setStorage({
        key: 'jds2dahcc[' + a + ']',
        data: that.data.jds2ysxxc
      }),
      wx.setStorage({
        key: 'jds2dahcd[' + a + ']',
        data: that.data.jds2ysxxd
      }),
      wx.setStorage({
        key: 'jds2dahce[' + a + ']',
        data: that.data.jds2ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      jds2ysxxa: 'black',
      jds2ysxxb: 'black',
      jds2ysxxc: 'black',
      jds2ysxxd: 'black',
      jds2ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.jds2ysflagxxa = '0',
      app.globalData.jds2ysflagxxb = '0',
      app.globalData.jds2ysflagxxc = '0',
      app.globalData.jds2ysflagxxd = '0',
      app.globalData.jds2ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  jds2qcxxhc: function(a) {

    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'jds2dahca[' + b + ']',
      success: function(res) {
        that.setData({
          jds2ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds2ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds2ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds2dahcb[' + b + ']',
      success: function(res) {
        that.setData({
          jds2ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds2ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds2ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds2dahcc[' + b + ']',
      success: function(res) {
        that.setData({
          jds2ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds2ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds2ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds2dahcd[' + b + ']',
      success: function(res) {
        that.setData({
          jds2ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds2ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds2ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'jds2dahce[' + b + ']',
      success: function(res) {
        that.setData({
          jds2ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.jds2ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.jds2ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'jds2dahca[' + b + ']',
      fail: function(res) {
        that.setData({
          jds2ysxxa: 'black'
        })
        app.globalData.jds2ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'jds2dahcb[' + b + ']',
      fail: function(res) {
        that.setData({
          jds2ysxxb: 'black'
        })
        app.globalData.jds2ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'jds2dahcc[' + b + ']',
      fail: function(res) {
        that.setData({
          jds2ysxxc: 'black'
        })
        app.globalData.jds2ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'jds2dahcd[' + b + ']',
      fail: function(res) {
        that.setData({
          jds2ysxxd: 'black'
        })
        app.globalData.jds2ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'jds2dahce[' + b + ']',
      fail: function(res) {
        that.setData({
          jds2ysxxe: 'black'
        })
        app.globalData.jds2ysflagxxe = '0'
      },
    })

  },

  //函数 已正确答题个数
  jds2yzqdtgs: function(a) {
    var b = a
    var c = parseInt(b)
    var that = this;
    wx.getStorage({
      key: 'jds2zqdaflag[' + c + ']',
      fail: function(res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'jds2zqdaflag[' + c + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'jds2zqdacount',
          success: function(res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.jds2zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.jds2zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'jds2zqdacount',
              data: app.globalData.jds2zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'jds2zqdacount',
          fail: function(res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'jds2zqdacount',
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
  jds2yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.jds2ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.jds2ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.jds2ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.jds2ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.jds2ysxxe === 'blue') {
      hdda = hdda + 'e'
    }
    wx.getStorage({
      key: 'jds2sjthhc[' + app.globalData.jds2count3 + ']',
      success: function(res) {
        if (app.globalData.jds[res.data].da === hdda) {
          that.setData({
            dapd: '答案正确',
            dapdys: 'green'
          })
          //已正确答题个数
          that.jds2yzqdtgs(res.data);
        } else {
          that.setData({
            dapd: '答案错误',
            dapdys: 'red'
          })
          wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
            key: 'jds2zqdaflag[' + res.data + ']',
            data: '0'
          })
        }
      },
    })


  },

  //函数 题目显示
  jds2tmxs: function(a) {
    var b = a;
    var that = this
    wx.getStorage({
      key: 'jds2sjthhc[' + b + ']',
      success: function(res) {
        var c = parseInt(res.data)
        that.setData({
          tm: app.globalData.jds[c].tm,
          xxa: app.globalData.jds[c].xxa,
          xxb: app.globalData.jds[c].xxb,
          xxc: app.globalData.jds[c].xxc,
          xxd: app.globalData.jds[c].xxd,
          xxe: app.globalData.jds[c].xxe,
          ts: c,
          tx: app.globalData.jds[c].tx,
          th: b
        })
      }
    })


  },

  //函数 存储当前题号
  jds2ccdqth: function() {
    wx.setStorage({
      key: 'jds2thcount',
      data: app.globalData.jds2count3
    })
  },

  //函数 倒计时10S
  jds2djs:function(){
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
  jds2jdt:function(b){
    var a=b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.jds2zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.jds2zts * 100)
      })
    }
  },

  //题目选项是否选中
  jds2clickxxa: function(e) {
    this.jds2xxsfxz(app.globalData.jds2ysflagxxa) //调用函数
    this.setData({
      jds2ysxxa: app.globalData.jds2yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.jds2ysflagxxa = app.globalData.jds2ysflagcontrol
  },

  jds2clickxxb: function(e) {
    this.jds2xxsfxz(app.globalData.jds2ysflagxxb)
    this.setData({
      jds2ysxxb: app.globalData.jds2yscontrol,
    })
    app.globalData.jds2ysflagxxb = app.globalData.jds2ysflagcontrol
  },

  jds2clickxxc: function(e) {
    this.jds2xxsfxz(app.globalData.jds2ysflagxxc)
    this.setData({
      jds2ysxxc: app.globalData.jds2yscontrol,
    })
    app.globalData.jds2ysflagxxc = app.globalData.jds2ysflagcontrol
  },

  jds2clickxxd: function(e) {
    this.jds2xxsfxz(app.globalData.jds2ysflagxxd)
    this.setData({
      jds2ysxxd: app.globalData.jds2yscontrol,
    })
    app.globalData.jds2ysflagxxd = app.globalData.jds2ysflagcontrol
  },

  jds2clickxxe: function(e) {
    this.jds2xxsfxz(app.globalData.jds2ysflagxxe)
    this.setData({
      jds2ysxxe: app.globalData.jds2yscontrol,
    })
    app.globalData.jds2ysflagxxe = app.globalData.jds2ysflagcontrol
  },

  //函数 打散
  jds2ds: function() {
    var that = this
    that.setData({
      dsxs: '正在将题目顺序打散，请稍等！'
    })
    var a = []
    for (var i = 1; i <= app.globalData.jds2zts; i = i + 1) {
      var c = Math.floor(Math.random() * app.globalData.jds2zts + 1)
      var d = a.indexOf(String(c))
      if (d < 0) {
        a[i] = String(c)
        wx.setStorage({
          key: 'jds2sjthhc[' + i + ']',
          data: a[i]
        })
      } else {
        i = i - 1
      }
      if (i === app.globalData.jds2zts) {
        break;
      }
    }
    for (var i = 0; i < (app.globalData.jds2zts + 1); i++) {
      wx.removeStorage({
        key: 'jds2dahca[' + i + ']',
      })
      wx.removeStorage({
        key: 'jds2dahcb[' + i + ']',
      })
      wx.removeStorage({
        key: 'jds2dahcc[' + i + ']',
      })
      wx.removeStorage({
        key: 'jds2dahcd[' + i + ']',
      })
      wx.removeStorage({
        key: 'jds2dahce[' + i + ']',
      })
      wx.removeStorage({
        key: 'jds2zqdaflag[' + i + ']',
      })
      that.jds2jdt(i);//进度条
    }

    wx.removeStorage({
      key: 'jds2zqdacount',
    })
    wx.removeStorage({
      key: 'jds2thcount',
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
      jds2ysxxa: 'black',
      jds2ysxxb: 'black',
      jds2ysxxc: 'black',
      jds2ysxxd: 'black',
      jds2ysxxe: 'black',
      dapd: '',
      dapdys: 'white',
      daxs: '',
      ddts: '0',
      ts: "0",
      tx: '-',
      th: '0'
    })
    app.globalData.jds2ysflagxxa = '0',
    app.globalData.jds2ysflagxxb = '0',
    app.globalData.jds2ysflagxxc = '0',
    app.globalData.jds2ysflagxxd = '0',
    app.globalData.jds2ysflagxxe = '0',

    app.globalData.jds2count = 1,
    app.globalData.jds2count2 = 0,
    app.globalData.jds2count3 = 0

    that.jds2djs();//倒计时10秒
  },

  //打散 按钮
  jds2clickButton7: function(e) {
    var that = this
    wx.getStorage({
      key: 'jds2sjthhc[1]',
      fail: function(res) {
        that.jds2ds();
      },
      success: function() {
        wx.showModal({
          title: '提示',
          content: '当前已有打散的记录，是否重新打散？',
          confirmText: '打散',
          cancelText: '取消',
          success: function(res) {
            if (res.confirm) {
              that.jds2ds();
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
  jds2clickButton3: function(e) {
    var that = this;
    this.jds2ybccxx(app.globalData.jds2count3); //异步存储选项到缓存当中
    if (app.globalData.jds2count === 1) { //如果题目计数为1，则输出，并累加
      this.jds2tmxs(app.globalData.jds2count); //题目显示
      this.jds2qcxxhc(app.globalData.jds2count); //取出选项的缓存
      app.globalData.jds2count3 = app.globalData.jds2count,
        app.globalData.jds2count2 = app.globalData.jds2count,
        app.globalData.jds2count = app.globalData.jds2count + 1
      this.jds2ccdqth(); //存储当前题号
    } else if (app.globalData.jds2count === app.globalData.jds2zts) { //否则，如果题目计数为max，则输出，并将计数重置
      this.jds2tmxs(app.globalData.jds2count); //题目显示
      this.jds2qcxxhc(app.globalData.jds2count); //取出选项的缓存
      app.globalData.jds2count3 = app.globalData.jds2count,
        app.globalData.jds2count2 = app.globalData.jds2count - 1,
        this.jds2ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为最后一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.jds2count > 1) { //否则,正常输出并累加
      this.jds2tmxs(app.globalData.jds2count); //题目显示
      this.jds2qcxxhc(app.globalData.jds2count); //取出选项的缓存
      app.globalData.jds2count3 = app.globalData.jds2count,
        app.globalData.jds2count2 = app.globalData.jds2count - 1,
        app.globalData.jds2count = app.globalData.jds2count + 1
      this.jds2ccdqth(); //存储当前题号
    } else {

    }

  },

  //上一题按钮
  jds2clickButton1: function(e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.jds2ybccxx(app.globalData.jds2count3); //异步存储选项到缓存当中
    if (app.globalData.jds2count2 === 1) { //如果题目计数为1，则输出，并累加
      this.jds2tmxs(app.globalData.jds2count2); //题目显示
      app.globalData.jds2count3 = app.globalData.jds2count2,
        app.globalData.jds2count = app.globalData.jds2count2 + 1
      this.jds2ccdqth(); //存储当前题号
      wx.showToast({
        title: '此题为第一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.jds2count2 === (app.globalData.jds2zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
      this.jds2tmxs(app.globalData.jds2count2); //题目显示
      app.globalData.jds2count3 = app.globalData.jds2count2,
        app.globalData.jds2count = app.globalData.jds2count2 + 1,
        app.globalData.jds2count2 = app.globalData.jds2count2 - 1
      this.jds2ccdqth(); //存储当前题号
    } else if (app.globalData.jds2count2 > 1) { //否则,正常输出并累加
      this.jds2tmxs(app.globalData.jds2count2); //题目显示
      app.globalData.jds2count3 = app.globalData.jds2count2,
        app.globalData.jds2count = app.globalData.jds2count2 + 1,
        app.globalData.jds2count2 = app.globalData.jds2count2 - 1
      this.jds2ccdqth(); //存储当前题号

    } else {

    }

    this.jds2qcxxhc(app.globalData.jds2count3); //取出选项的缓存

  },

  //核对答案按钮
  jds2clickButton2: function(e) {
    var that = this
    if (app.globalData.jds2count3 === 1) {
      //已正确答题个数2
      this.jds2yzqdtgs2();
    } else if (app.globalData.jds2count3 === app.globalData.jds2zts) {
      //已正确答题个数2
      this.jds2yzqdtgs2();
    } else if (app.globalData.jds2count3 > 1) {
      //已正确答题个数2
      this.jds2yzqdtgs2();
    } else {
      console.log('Other!')
    }
    wx.getStorage({
      key: 'jds2sjthhc[' + app.globalData.jds2count3 + ']',
      success: function(res) {
        var c = parseInt(res.data)
        that.setData({
          daxs: '正确答案：' + app.globalData.jds[c].da
        })
      },
    })
  },

  //重置按钮
  jds2clickButton4: function(e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function(res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.jds2zts + 1); i++) {
            wx.removeStorage({
              key: 'jds2dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds2dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds2dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds2dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds2dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'jds2zqdaflag[' + i + ']',
            })
            that.jds2jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'jds2zqdacount',
          })
          wx.removeStorage({
            key: 'jds2thcount',
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
            jds2ysxxa: 'black',
            jds2ysxxb: 'black',
            jds2ysxxc: 'black',
            jds2ysxxd: 'black',
            jds2ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
            th: '0',
          })
          app.globalData.jds2ysflagxxa = '0',
            app.globalData.jds2ysflagxxb = '0',
            app.globalData.jds2ysflagxxc = '0',
            app.globalData.jds2ysflagxxd = '0',
            app.globalData.jds2ysflagxxe = '0',

            app.globalData.jds2count = 1,
            app.globalData.jds2count2 = 0,
            app.globalData.jds2count3 = 0,

            that.jds2djs();//倒计时10秒
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
  jds2clickButton5: function(e) {
    var that = this;
    if (app.globalData.jds2count3 > 0 && app.globalData.jds2count3 < (app.globalData.jds2zts + 1)) {
      wx.getStorage({
        key: 'jds2sjthhc[' + app.globalData.jds2count3 + ']',
        success: function(res) {
          var a = parseInt(res.data)
          wx.getStorage({
            key: 'jdsctkhccountflag[' + a + ']',
            success: function(res) {
              wx.showToast({
                title: '请勿重复添加！',
                icon: 'none',
                duration: 1500 //持续的时间
              })
            },
          })

          wx.getStorage({
            key: 'jdsctkhccountflag[' + a + ']',
            fail: function(res) {

              wx.getStorage({
                key: 'jdsctkhccount',
                success: function(res) {
                  var k = parseInt(res.data) + 1;
                  wx.setStorage({
                    key: 'jdsctkhccount',
                    data: k
                  })
                  wx.setStorage({
                    key: 'jdsctkhccountflag[' + a + ']',
                    data: 1
                  })
                  wx.setStorage({
                    key: 'jdsctkhc[' + k + ']',
                    data: a
                  })
                  wx.showToast({
                    title: '成功增加！',
                    icon: 'success',
                    duration: 1500 //持续的时间
                  })
                },

                fail: function(res) {
                  wx.setStorage({
                    key: 'jdsctkhccount',
                    data: 1
                  })
                  wx.setStorage({
                    key: 'jdsctkhccountflag[' + a + ']',
                    data: 1
                  })
                  wx.setStorage({
                    key: 'jdsctkhc[1]',
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
  jds2tzth: function(e) {
    app.globalData.jds2tzthinputx = e.detail.value
  },

  //跳转按钮
  jds2clickButton6: function(e) {

    var c = parseInt(app.globalData.jds2tzthinputx);
    this.jds2ybccxx(app.globalData.jds2count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.jds2zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.jds2count2 = 1
          app.globalData.jds2count = 2
          break;
        case app.globalData.jds2zts:
          app.globalData.jds2count2 = app.globalData.jds2zts - 1
          app.globalData.jds2count = app.globalData.jds2zts
          break;
        case c:
          app.globalData.jds2count2 = c - 1
          app.globalData.jds2count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.jds2count3 = c;
      this.jds2tmxs(c); //题目显示
      this.jds2qcxxhc(app.globalData.jds2count3); //取出选项的缓存
    } else {
      this.jds2qcxxhc(app.globalData.jds2count3); //取出选项的缓存
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
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '近代史 随机出题'
    });

    var that = this
    wx.getStorage({
      key: 'jds2zqdacount',
      success: function(res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'jds2thcount',
      success: function(res) {
        if (parseInt(res.data) === 1) {
          app.globalData.jds2count2 = 1,
            app.globalData.jds2count = 2
        } else if (parseInt(res.data) === app.globalData.jds2zts) {
          app.globalData.jds2count2 = app.globalData.jds2zts - 1,
            app.globalData.jds2count = app.globalData.jds2zts
        } else if (res.data > 0 && res.data < (app.globalData.jds2zts + 1)) {
          app.globalData.jds2count2 = parseInt(res.data) - 1,
            app.globalData.jds2count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.jds2count3 = parseInt(res.data);
        that.jds2tmxs(res.data); //题目显示
        that.jds2qcxxhc(res.data); //取出选项的缓存
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
    this.jds2ybccxx(app.globalData.jds2count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.jds2ybccxx(app.globalData.jds2count3); //异步存储选项到缓存当中
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