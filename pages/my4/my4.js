// pages/my4/my4.js
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
    my4ysxxa: 'black',
    my4ysxxb: 'black',
    my4ysxxc: 'black',
    my4ysxxd: 'black',
    my4ysxxe: 'black',

    dapd: '', //用于显示答案是否正确
    dapdys: 'white',

    daxs: '', //用于显示正确答案

    ddts: '0', //答对题数

    ts: "0", //当前题数

    zts: app.globalData.my4zts, //总题数

    ctkth: '0', //错题库顺序的题号

    tx: '-', //题型


  },

  //函数 题目选项是否选中
  my4xxsfxz: function (e) {
    if (e === '0') {
      app.globalData.my4yscontrol = 'blue'
      app.globalData.my4ysflagcontrol = '1'
    } else {
      app.globalData.my4yscontrol = 'black'
      app.globalData.my4ysflagcontrol = '0'
    }
  },

  //函数 异步存储选项到缓存当中
  my4ybccxx: function (b) {
    var that = this;
    var a = b;

    wx.setStorage({
      key: 'my4dahca[' + a + ']',
      data: that.data.my4ysxxa
    }),
      wx.setStorage({
        key: 'my4dahcb[' + a + ']',
        data: that.data.my4ysxxb
      }),
      wx.setStorage({
        key: 'my4dahcc[' + a + ']',
        data: that.data.my4ysxxc
      }),
      wx.setStorage({
        key: 'my4dahcd[' + a + ']',
        data: that.data.my4ysxxd
      }),
      wx.setStorage({
        key: 'my4dahce[' + a + ']',
        data: that.data.my4ysxxe
      })

    that.setData({ //清空，有助于下一题或者上一题的存储
      my4ysxxa: 'black',
      my4ysxxb: 'black',
      my4ysxxc: 'black',
      my4ysxxd: 'black',
      my4ysxxe: 'black',
      dapd: '',
      daxs: ''
    })
    app.globalData.my4ysflagxxa = '0',
      app.globalData.my4ysflagxxb = '0',
      app.globalData.my4ysflagxxc = '0',
      app.globalData.my4ysflagxxd = '0',
      app.globalData.my4ysflagxxe = '0'

  },

  //函数 取出选项的缓存
  my4qcxxhc: function (a) {
    var that = this;
    var b = a;
    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'my4dahca[' + b + ']',
      success: function (res) {
        that.setData({
          my4ysxxa: res.data
        })
        if (res.data === 'black') {
          app.globalData.my4ysflagxxa = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my4ysflagxxa = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my4dahcb[' + b + ']',
      success: function (res) {
        that.setData({
          my4ysxxb: res.data
        })
        if (res.data === 'black') {
          app.globalData.my4ysflagxxb = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my4ysflagxxb = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my4dahcc[' + b + ']',
      success: function (res) {
        that.setData({
          my4ysxxc: res.data
        })
        if (res.data === 'black') {
          app.globalData.my4ysflagxxc = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my4ysflagxxc = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my4dahcd[' + b + ']',
      success: function (res) {
        that.setData({
          my4ysxxd: res.data
        })
        if (res.data === 'black') {
          app.globalData.my4ysflagxxd = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my4ysflagxxd = '1'
        }
      },
    })
    wx.getStorage({
      key: 'my4dahce[' + b + ']',
      success: function (res) {
        that.setData({
          my4ysxxe: res.data
        })
        if (res.data === 'black') {
          app.globalData.my4ysflagxxe = '0'
        }
        if (res.data === 'blue') {
          app.globalData.my4ysflagxxe = '1'
        }
      },
    })

    //如果没有找到缓存，则将选项设为黑色（未选择的状态）
    wx.getStorage({
      key: 'my4dahca[' + b + ']',
      fail: function (res) {
        that.setData({
          my4ysxxa: 'black'
        })
        app.globalData.my4ysflagxxa = '0'
      },
    })
    wx.getStorage({
      key: 'my4dahcb[' + b + ']',
      fail: function (res) {
        that.setData({
          my4ysxxb: 'black'
        })
        app.globalData.my4ysflagxxb = '0'
      },
    })
    wx.getStorage({
      key: 'my4dahcc[' + b + ']',
      fail: function (res) {
        that.setData({
          my4ysxxc: 'black'
        })
        app.globalData.my4ysflagxxc = '0'
      },
    })
    wx.getStorage({
      key: 'my4dahcd[' + b + ']',
      fail: function (res) {
        that.setData({
          my4ysxxd: 'black'
        })
        app.globalData.my4ysflagxxd = '0'
      },
    })
    wx.getStorage({
      key: 'my4dahce[' + b + ']',
      fail: function (res) {
        that.setData({
          my4ysxxe: 'black'
        })
        app.globalData.my4ysflagxxe = '0'
      },
    })

  },

  //函数 已正确答题个数
  my4yzqdtgs: function (a) {
    var b = a
    var c = parseInt(b)
    var that = this;
    wx.getStorage({
      key: 'my4zqdaflag[' + c + ']',
      fail: function (res) { //如果缓存里没有 标记已经正确答题的 标志
        wx.setStorage({ //将 标记已经正确答题的 标志 设置为 1 
          key: 'my4zqdaflag[' + c + ']',
          data: '1'
        })
        wx.getStorage({
          key: 'my4zqdacount',
          success: function (res) { //如果取得 已经正确答题个数统计 的数据
            //函数parseInt()将字符串转为数字
            app.globalData.my4zqdacount = parseInt(res.data) + 1;
            that.setData({ //输出 已经正确答题个数
              ddts: app.globalData.my4zqdacount
            })
            wx.setStorage({ //写入缓存 已经正确答题个数
              key: 'my4zqdacount',
              data: app.globalData.my4zqdacount
            })
          }
        })
        wx.getStorage({
          key: 'my4zqdacount',
          fail: function (res) { //如果 已答题个数缓存获取失败 则设为1
            wx.setStorage({
              key: 'my4zqdacount',
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
  my4yzqdtgs2() {
    var hdda = '';
    var that = this;
    if (that.data.my4ysxxa === 'blue') {
      hdda = hdda + 'a'
    }
    if (that.data.my4ysxxb === 'blue') {
      hdda = hdda + 'b'
    }
    if (that.data.my4ysxxc === 'blue') {
      hdda = hdda + 'c'
    }
    if (that.data.my4ysxxd === 'blue') {
      hdda = hdda + 'd'
    }
    if (that.data.my4ysxxe === 'blue') {
      hdda = hdda + 'e'
    }
    wx.getStorage({
      key: 'myctkhc[' + app.globalData.my4count3 + ']',
      success: function (res) {
        if (app.globalData.my[res.data].da === hdda) {
          that.setData({
            dapd: '答案正确',
            dapdys: 'green'
          })
          //已正确答题个数
          that.my4yzqdtgs(res.data);
        } else {
          that.setData({
            dapd: '答案错误',
            dapdys: 'red'
          })
          wx.setStorage({ //将 标记已经答错的题的 标志 设置为 0 
            key: 'my4zqdaflag[' + res.data + ']',
            data: '0'
          })
        }
      },
    })


  },

  //函数 题目显示
  my4tmxs: function (a) {
    var b = a;
    var that = this;
    that.setData({
      ctkth: b
    })
    wx.getStorage({
      key: 'myctkhc[' + b + ']',
      success: function (res) {
        that.setData({
          tm: app.globalData.my[res.data].tm,
          xxa: app.globalData.my[res.data].xxa,
          xxb: app.globalData.my[res.data].xxb,
          xxc: app.globalData.my[res.data].xxc,
          xxd: app.globalData.my[res.data].xxd,
          xxe: app.globalData.my[res.data].xxe,
          ts: res.data,
          tx: app.globalData.my[res.data].tx,
        })
      },
    })

  },

  //函数 存储当前题号
  my4ccdqth: function () {
    wx.setStorage({
      key: 'my4thcount',
      data: app.globalData.my4count3
    })
  },

  //函数 倒计时10S
  my4djs: function () {
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
  my4jdt: function (b) {
    var a = b;
    var that = this;
    if (a === 1) {
      that.setData({
        jdtwidth: 12,
        jdtinfo: true
      })
    }
    if (a <= app.globalData.my4zts * 0.9) {
      that.setData({
        jdt: parseInt(a / app.globalData.my4zts * 100)
      })
    }
  },

  //函数 挪动缓存
  myctkndhc: function () {
    var that = this;
    that.setData({
      dsxs: '正在交换缓存位置，请稍等'
    })
    for (var i = app.globalData.my4count3 + 1; i < (app.globalData.my4zts + 1); i++) { //循环挪动缓存
      (function (i) {
        var j = i - 1
        wx.getStorage({
          key: 'myctkhc[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'myctkhc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'my4dahca[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'my4dahca[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'my4dahcb[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'my4dahcb[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'my4dahcc[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'my4dahcc[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'my4dahcd[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'my4dahcd[' + j + ']',
              data: res.data
            })
          }
        })
        wx.getStorage({
          key: 'my4dahce[' + i + ']',
          success: function (res) {
            wx.setStorage({
              key: 'my4dahce[' + j + ']',
              data: res.data
            })
          }
        })
      })(i)
      if (i === parseInt(app.globalData.my4count3 + 1)) {
        that.setData({
          jdtwidth: 12,
          jdtinfo: true
        })
      }
      if (i <= app.globalData.my4zts) {
        that.setData({
          jdt: parseInt(i / app.globalData.my4zts * 100)
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
  myctkxssx: function () {
    var that = this
    that.my4tmxs(app.globalData.my4count3); //题目显示
    that.my4qcxxhc(app.globalData.my4count3); //取出选项的缓存
    wx.getStorage({
      key: 'my4zqdacount',
      success: function (res) {
        that.setData({
          ddts: res.data
        })
      }
    })
  },

  //题目选项是否选中
  my4clickxxa: function (e) {
    this.my4xxsfxz(app.globalData.my4ysflagxxa) //调用函数
    this.setData({
      my4ysxxa: app.globalData.my4yscontrol, //让选项颜色发生改变
    })
    //改变 颜色选项控制开关 状态
    app.globalData.my4ysflagxxa = app.globalData.my4ysflagcontrol
  },

  my4clickxxb: function (e) {
    this.my4xxsfxz(app.globalData.my4ysflagxxb)
    this.setData({
      my4ysxxb: app.globalData.my4yscontrol,
    })
    app.globalData.my4ysflagxxb = app.globalData.my4ysflagcontrol
  },

  my4clickxxc: function (e) {
    this.my4xxsfxz(app.globalData.my4ysflagxxc)
    this.setData({
      my4ysxxc: app.globalData.my4yscontrol,
    })
    app.globalData.my4ysflagxxc = app.globalData.my4ysflagcontrol
  },

  my4clickxxd: function (e) {
    this.my4xxsfxz(app.globalData.my4ysflagxxd)
    this.setData({
      my4ysxxd: app.globalData.my4yscontrol,
    })
    app.globalData.my4ysflagxxd = app.globalData.my4ysflagcontrol
  },

  my4clickxxe: function (e) {
    this.my4xxsfxz(app.globalData.my4ysflagxxe)
    this.setData({
      my4ysxxe: app.globalData.my4yscontrol,
    })
    app.globalData.my4ysflagxxe = app.globalData.my4ysflagcontrol
  },

  //下一题 按钮
  my4clickButton3: function (e) {
    var that = this;
    this.my4ybccxx(app.globalData.my4count3); //异步存储选项到缓存当中
    if (app.globalData.my4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.my4zts === 1) {
      this.my4tmxs(app.globalData.my4zts); //题目显示
      this.my4qcxxhc(app.globalData.my4zts); //取出选项的缓存
      app.globalData.my4count3 = app.globalData.my4zts,
        app.globalData.my4count2 = app.globalData.my4zts,
        app.globalData.my4count = app.globalData.my4zts
      this.my4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.my4count === 1) { //如果题目计数为1，则输出，并累加
        this.my4tmxs(app.globalData.my4count); //题目显示
        this.my4qcxxhc(app.globalData.my4count); //取出选项的缓存
        app.globalData.my4count3 = app.globalData.my4count,
          app.globalData.my4count2 = app.globalData.my4count,
          app.globalData.my4count = app.globalData.my4count + 1
        this.my4ccdqth(); //存储当前题号
      } else if (app.globalData.my4count === app.globalData.my4zts) { //否则，如果题目计数为max，则输出，并将计数重置
        this.my4tmxs(app.globalData.my4count); //题目显示
        this.my4qcxxhc(app.globalData.my4count); //取出选项的缓存
        app.globalData.my4count3 = app.globalData.my4count,
          app.globalData.my4count2 = app.globalData.my4count - 1,
          this.my4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为最后一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.my4count > 1) { //否则,正常输出并累加
        this.my4tmxs(app.globalData.my4count); //题目显示
        this.my4qcxxhc(app.globalData.my4count); //取出选项的缓存
        app.globalData.my4count3 = app.globalData.my4count,
          app.globalData.my4count2 = app.globalData.my4count - 1,
          app.globalData.my4count = app.globalData.my4count + 1
        this.my4ccdqth(); //存储当前题号
      } else {

      }

    }

  },

  //上一题按钮
  my4clickButton1: function (e) {
    this.setData({
      dapd: '',
      daxs: ''
    })
    var that = this;
    this.my4ybccxx(app.globalData.my4count3); //异步存储选项到缓存当中
    if (app.globalData.my4zts === 0) {
      wx.showToast({
        title: '没有错题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else if (app.globalData.my4zts === 1) {
      this.my4tmxs(app.globalData.my4zts); //题目显示
      this.my4qcxxhc(app.globalData.my4zts); //取出选项的缓存
      app.globalData.my4count3 = app.globalData.my4zts,
        app.globalData.my4count2 = app.globalData.my4zts,
        app.globalData.my4count = app.globalData.my4zts
      this.my4ccdqth(); //存储当前题号
      wx.showToast({
        title: '仅此一题！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    } else {
      if (app.globalData.my4count2 === 1) { //如果题目计数为1，则输出，并累加
        this.my4tmxs(app.globalData.my4count2); //题目显示
        app.globalData.my4count3 = app.globalData.my4count2,
          app.globalData.my4count = app.globalData.my4count2 + 1
        this.my4ccdqth(); //存储当前题号
        wx.showToast({
          title: '此题为第一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
      } else if (app.globalData.my4count2 === (app.globalData.my4zts - 1)) { //否则，如果题目计数为max，则输出，并将计数重置
        this.my4tmxs(app.globalData.my4count2); //题目显示
        app.globalData.my4count3 = app.globalData.my4count2,
          app.globalData.my4count = app.globalData.my4count2 + 1,
          app.globalData.my4count2 = app.globalData.my4count2 - 1
        this.my4ccdqth(); //存储当前题号
      } else if (app.globalData.my4count2 > 1) { //否则,正常输出并累加
        this.my4tmxs(app.globalData.my4count2); //题目显示
        app.globalData.my4count3 = app.globalData.my4count2,
          app.globalData.my4count = app.globalData.my4count2 + 1,
          app.globalData.my4count2 = app.globalData.my4count2 - 1
        this.my4ccdqth(); //存储当前题号

      } else {

      }
    }
    this.my4qcxxhc(app.globalData.my4count3); //取出选项的缓存

  },

  //核对答案按钮
  my4clickButton2: function (e) {
    var that = this
    if (app.globalData.my4count3 === 1) {
      //已正确答题个数2
      this.my4yzqdtgs2();
    } else if (app.globalData.my4count3 === app.globalData.my4zts) {
      //已正确答题个数2
      this.my4yzqdtgs2();
    } else if (app.globalData.my4count3 > 1) {
      //已正确答题个数2
      this.my4yzqdtgs2();
    } else {
      console.log('Other!')
    }
    wx.getStorage({
      key: 'myctkhc[' + app.globalData.my4count3 + ']',
      success: function (res) {
        that.setData({
          daxs: '正确答案：' + app.globalData.my[res.data].da
        })
      },
    })
  },

  //重置按钮
  my4clickButton4: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要重置吗？',
      success: function (res) {
        if (res.confirm) { //用户点击确定
          that.setData({
            dsxs: '正在重置，请稍等！'
          })
          for (var i = 0; i < (app.globalData.my4zts + 1); i++) {
            wx.removeStorage({
              key: 'my4dahca[' + i + ']',
            })
            wx.removeStorage({
              key: 'my4dahcb[' + i + ']',
            })
            wx.removeStorage({
              key: 'my4dahcc[' + i + ']',
            })
            wx.removeStorage({
              key: 'my4dahcd[' + i + ']',
            })
            wx.removeStorage({
              key: 'my4dahce[' + i + ']',
            })
            wx.removeStorage({
              key: 'my4zqdaflag[' + i + ']',
            })
            that.my4jdt(i);//进度条
          }
          wx.removeStorage({
            key: 'my4zqdacount',
          })
          wx.removeStorage({
            key: 'my4thcount',
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
            my4ysxxa: 'black',
            my4ysxxb: 'black',
            my4ysxxc: 'black',
            my4ysxxd: 'black',
            my4ysxxe: 'black',
            dapd: '',
            dapdys: 'white',
            daxs: '',
            ddts: '0',
            ts: "0",
            tx: '-',
            ctkth: '0',
          })
          app.globalData.my4ysflagxxa = '0',
            app.globalData.my4ysflagxxb = '0',
            app.globalData.my4ysflagxxc = '0',
            app.globalData.my4ysflagxxd = '0',
            app.globalData.my4ysflagxxe = '0',

            app.globalData.my4count = 1,
            app.globalData.my4count2 = 0,
            app.globalData.my4count3 = 0,
            that.my4djs();//倒计时10秒
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
  my4clickButton5: function (e) {
    var that = this

    if (app.globalData.my4zts > 0 && app.globalData.my4count3 > 0) {
      //调整正确答案个数
      wx.getStorage({
        key: 'myctkhc[' + app.globalData.my4count3 + ']',
        success: function (res) {
          var temp = parseInt(res.data)
          wx.getStorage({
            key: 'my4zqdaflag[' + temp + ']',
            success: function (res) {
              if (res.data === '1') {
                wx.getStorage({
                  key: 'my4zqdacount',
                  success: function (res) {
                    wx.setStorage({
                      key: 'my4zqdacount',
                      data: parseInt(res.data) - 1
                    })
                  }
                })
              }
            }
          })
          wx.removeStorage({
            key: 'my4zqdaflag[' + temp + ']',
          })
        },
      })
      wx.getStorage({
        key: 'my4zqdacount',
        success: function (res) {
          that.setData({
            ddts: res.data
          })
        }
      })
      if (app.globalData.my4count3 === 1) {
        wx.getStorage({
          key: 'myctkhc[' + app.globalData.my4count3 + ']',
          success: function (res) {
            wx.removeStorage({
              key: 'myctkhccountflag[' + res.data + ']',
            })
          }
        })
        that.myctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'myctkhc[' + app.globalData.my4zts + ']',
        })
        app.globalData.my4count3 = 1
        app.globalData.my4count2 = 1
        app.globalData.my4count = 2
      } else if (app.globalData.my4count3 === app.globalData.my4zts) {
        wx.getStorage({
          key: 'myctkhc[' + app.globalData.my4zts + ']',
          success: function (res) {
            app.globalData.myctksc2 = res.data
            wx.removeStorage({
              key: 'myctkhccountflag[' + app.globalData.myctksc2 + ']',
            })
          }
        })
        wx.removeStorage({
          key: 'myctkhc[' + app.globalData.my4zts + ']',
        })
        app.globalData.my4count3 = app.globalData.my4zts - 1
        app.globalData.my4count2 = app.globalData.my4zts - 2
        app.globalData.my4count = app.globalData.my4zts - 1
      } else if (app.globalData.my4count3 > 1 && app.globalData.my4count3 < app.globalData.my4zts) {
        wx.getStorage({
          key: 'myctkhc[' + app.globalData.my4count3 + ']',
          success: function (res) {
            app.globalData.myctksc2 = res.data
            wx.removeStorage({
              key: 'myctkhccountflag[' + app.globalData.myctksc2 + ']',
            })
          }
        })
        that.myctkndhc(); //挪动缓存
        wx.removeStorage({
          key: 'myctkhc[' + app.globalData.my4zts + ']',
        })
        app.globalData.my4count2 = app.globalData.my4count3 - 1
        app.globalData.my4count = app.globalData.my4count3 + 1
      } else {

      }
      wx.removeStorage({
        key: 'my4dahca[' + app.globalData.my4zts + ']',
      })
      wx.removeStorage({
        key: 'my4dahcb[' + app.globalData.my4zts + ']',
      })
      wx.removeStorage({
        key: 'my4dahcc[' + app.globalData.my4zts + ']',
      })
      wx.removeStorage({
        key: 'my4dahcd[' + app.globalData.my4zts + ']',
      })
      wx.removeStorage({
        key: 'my4dahce[' + app.globalData.my4zts + ']',
      })
      wx.getStorage({ //错题总数减1
        key: 'myctkhccount',
        success: function (res) {
          if (res.data === 1) {
            that.my4clickButton4();
          }
          var a = res.data - 1
          wx.setStorage({
            key: 'myctkhccount',
            data: a
          })
        }
      })
      app.globalData.my4zts = app.globalData.my4zts - 1
      that.setData({
        zts: app.globalData.my4zts
      })
      wx.showModal({
        title: '提示',
        content: '此题已从错题库中删除！',
        showCancel: false, //不显示 否 的选项
        confirmText: '朕知道了',
        success: function (res) {
          if (res.confirm) {
            that.myctkxssx(); //错题库显示刷新
          } else if (res.cancel) {
            that.myctkxssx(); //错题库显示刷新
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
  my4tzth: function (e) {
    app.globalData.my4tzthinputx = e.detail.value
  },

  //跳转按钮
  my4clickButton6: function (e) {

    var c = parseInt(app.globalData.my4tzthinputx);
    this.my4ybccxx(app.globalData.my4count3); //异步存储选项到缓存当中
    var that = this;
    if (0 < c && c < (app.globalData.my4zts + 1)) {
      switch (c) {
        case 1:
          app.globalData.my4count2 = 1
          app.globalData.my4count = 2
          break;
        case app.globalData.my4zts:
          app.globalData.my4count2 = app.globalData.my4zts - 1
          app.globalData.my4count = app.globalData.my4zts
          break;
        case c:
          app.globalData.my4count2 = c - 1
          app.globalData.my4count = c + 1
          break;
        default:
          console.log("default");
      }
      app.globalData.my4count3 = c;
      this.my4tmxs(c); //题目显示
      this.my4qcxxhc(app.globalData.my4count3); //取出选项的缓存
    } else {
      this.my4qcxxhc(app.globalData.my4count3); //取出选项的缓存
      wx.showToast({
        title: '题号非法！',
        icon: 'none',
        duration: 1500 //持续的时间
      })
    }

  },

  //清空
  my4clickButton7: function () {
    var that = this;

    wx.getStorage({ //如果找到缓存，则将选项设为对应的状态
      key: 'myctkhccount',
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
              for (var i = 0; i < (app.globalData.my4zts + 1); i++) {
                wx.removeStorage({
                  key: 'my4dahca[' + i + ']',
                })
                wx.removeStorage({
                  key: 'my4dahcb[' + i + ']',
                })
                wx.removeStorage({
                  key: 'my4dahcc[' + i + ']',
                })
                wx.removeStorage({
                  key: 'my4dahcd[' + i + ']',
                })
                wx.removeStorage({
                  key: 'my4dahce[' + i + ']',
                })
                wx.removeStorage({
                  key: 'my4zqdaflag[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.my4zts) {
                  that.setData({
                    jdt: parseInt(i / app.globalData.my4zts * 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'my4zqdacount',
              })
              wx.removeStorage({
                key: 'my4thcount',
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
                my4ysxxa: 'black',
                my4ysxxb: 'black',
                my4ysxxc: 'black',
                my4ysxxd: 'black',
                my4ysxxe: 'black',
                dapd: '',
                dapdys: 'white',
                daxs: '',
                ddts: '0',
                ts: "0",
                tx: '-',
                ctkth: '0',
                zts: '0',
              })
              app.globalData.my4ysflagxxa = '0',
                app.globalData.my4ysflagxxb = '0',
                app.globalData.my4ysflagxxc = '0',
                app.globalData.my4ysflagxxd = '0',
                app.globalData.my4ysflagxxe = '0',

                app.globalData.my4count = 1,
                app.globalData.my4count2 = 0,
                app.globalData.my4count3 = 0
              for (var i = 0; i < (b + 1); i++) {
                wx.getStorage({
                  key: 'myctkhc[' + i + ']',
                  success: function (res) {
                    wx.removeStorage({
                      key: 'myctkhccountflag[' + res.data + ']',
                    })
                  }
                })
                wx.removeStorage({
                  key: 'myctkhc[' + i + ']',
                })
                if (i === 1) {
                  that.setData({
                    jdtwidth: 12,
                    jdtinfo: true
                  })
                }
                if (i <= app.globalData.my4zts) {
                  that.setData({
                    jdt: parseInt(i / b * 50 + 50)
                  })
                }
              }
              wx.removeStorage({
                key: 'myctkhccount',
              })
              app.globalData.my4zts = 0
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
      title: '马列 错题库'
    });
    var that = this
    wx.getStorage({
      key: 'myctkhccount',
      success: function (res) { //如果取得 错题个数统计 的数据
        app.globalData.my4zts = parseInt(res.data)
        that.setData({
          zts: app.globalData.my4zts
        })
      },
      fail: function (res) {
        app.globalData.my4zts = 0;
        that.setData({
          zts: app.globalData.my4zts
        })
      }
    })

    wx.getStorage({
      key: 'my4zqdacount',
      success: function (res) { //如果取得 已经正确答题个数统计 的数据
        that.setData({
          ddts: res.data
        })
      }
    })
    wx.getStorage({ //取出上一次的答题位置的对应的题目
      key: 'my4thcount',
      success: function (res) {
        if (parseInt(res.data) === 1) {
          app.globalData.my4count2 = 1,
            app.globalData.my4count = 2
        } else if (parseInt(res.data) === app.globalData.my4zts) {
          app.globalData.my4count2 = app.globalData.my4zts - 1,
            app.globalData.my4count = app.globalData.my4zts
        } else if (res.data > 0 && res.data < (app.globalData.my4zts + 1)) {
          app.globalData.my4count2 = parseInt(res.data) - 1,
            app.globalData.my4count = parseInt(res.data) + 1
        } else {

        }
        app.globalData.my4count3 = parseInt(res.data);
        that.my4tmxs(res.data); //题目显示
        that.my4qcxxhc(res.data); //取出选项的缓存
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
    this.my4ybccxx(app.globalData.my4count3); //异步存储选项到缓存当中
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.my4ybccxx(app.globalData.my4count3); //异步存储选项到缓存当中
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