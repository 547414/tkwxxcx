// pages/xqy/xqy.js
var startX, startY, endX, endY //检测左右划动
var pos, pos_prev, pos_next //分别指向当前题目,上一个题目和下一个题目
var total_data //总数据
const app = getApp() //全局变量
var tz_num //题目总数量
var color_xa_flag = 0,
  color_xb_flag = 0,
  color_xc_flag = 0 //选项文本颜色控制标志
var color_xd_flag = 0,
  color_xe_flag = 0,
  color_xf_flag = 0,
  color_xg_flag = 0
var xx, xx_flag //选项，选项标志
var dd_l = 0
var name_type
var t_point
var touch_pd = 1 //触摸判断(使能)
var tmxs_pd = 1, //题目显示-使能
  cdxs_pd = 1, //菜单显示
  tz_pd = 1, //跳转
  jrctk_pd = 1, //加入错题库
  cz_pd = 1, //重置
  qk_pd = 1, //清空
  ds_pd = 1, //打散
  dapd_pd = 1 //答案判断
var sz_cdl = 1 //第一行按钮显示控制
var sz_rl = 1 //第二行按钮显示控制
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tm: "", //题目
    xa: "", //选项A
    xb: "", //选项B
    xc: "", //选项C
    xd: "", //选项D
    xe: "", //选项E
    xf: "", //选项F
    xg: "", //选项G
    dapd: "", //答案判断
    dapd_color: "green", //答案判断的颜色
    zqda: "", //正确答案
    dqh: null, //当前号
    tkh: null, //题库号
    tx: null, //题型
    ddl: null, //答对量
    ztl: null, //总题量
    color_xa: "black", //选项a文本颜色
    color_xb: "black", //选项b文本颜色
    color_xc: "black", //选项c文本颜色
    color_xd: "black", //选项d文本颜色
    color_xe: "black", //选项e文本颜色
    color_xf: "black", //选项f文本颜色
    color_xg: "black", //选项g文本颜色
    sz_dyh: "block", //第一行按钮显示控制
    sz_deh: "block", //第二行按钮显示控制
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    name_type = app.globalData.name_type
    touch_pd = 1
    tmxs_pd = 1, cdxs_pd = 1, tz_pd = 1, jrctk_pd = 1, cz_pd = 1, qk_pd = 1, ds_pd = 1, dapd_pd = 1
    var hh = wx.getStorageSync("d_" + app.globalData.name)
    total_data = hh.replace(/^\s*|\s*$/g, "").split('\n') //去除首位空格(换行)，并以回车符分割
    app.globalData.total_num = total_data.length / 11
    if (wx.getStorageSync('sz_dyh_btn') === "0") {
      that.setData({
        sz_dyh: "none",
      })
    } else {
      that.setData({
        sz_dyh: "block",
      })
    }
    if (wx.getStorageSync('sz_sec_btn') === "0") {
      that.setData({
        sz_deh: "none",
      })
    } else {
      that.setData({
        sz_deh: "block",
      })
    }
    if (wx.getStorageSync('sz_cdl_btn') === "0") {
      sz_cdl = 0
    } else {
      sz_cdl = 1
    }
    if (wx.getStorageSync('sz_rl_btn') === "0") {
      sz_rl = 0
    } else {
      sz_rl = 1
    }
    var title_type
    var title_name
    if (name_type === "sx") {
      title_type = "顺序"
    }
    if (name_type === "sj") {
      title_type = "随机"
    }
    if (name_type === "ctk") {
      title_type = "错题库"
    }
    if (app.globalData.name === "jds") {
      title_name = "近代史"
    }
    if (app.globalData.name === "sx") {
      title_name = "思修"
    }
    if (app.globalData.name === "my") {
      title_name = "马原"
    }
    if (app.globalData.name === "mg") {
      title_name = "毛概"
    }
    if (app.globalData.name === "zdy") {
      title_name = "自定义"
    }
    wx.setNavigationBarTitle({
      title: title_name + "-" + title_type
    });
    if (name_type === "sx") {
      touch_pd = 1
      tmxs_pd = 1, cdxs_pd = 1, tz_pd = 1, jrctk_pd = 1, cz_pd = 1, qk_pd = 0, ds_pd = 0, dapd_pd = 1
      let newArr = new Array(app.globalData.total_num).fill('').map((item, index) => index + 1);
      t_point = newArr
      wx.setStorageSync('sx_point', newArr)
      wx.getStorage({
        key: "sx_point",
        success: function (res) {
          t_point = res.data
        }
      })
      /*
        wx.getStorage({ //顺序数组
          key: 'sx_point',
          success: function (res) {
            t_point = res.data
          },
          fail: function () {
            let newArr = new Array(app.globalData.total_num).fill('').map((item, index) => index + 1);
            t_point = newArr
            wx.setStorageSync('sx_point', newArr)
            wx.getStorage({
              key: "sx_point",
              success: function (res) {
                t_point = res.data
              }
            })
          }
        })*/
      if (app.globalData.name === "zdy" && wx.getStorageSync('flag_zdy_sx') === "true") {
        //解决覆盖后题目长度不一样导致超出部分不显示的问题
        that.cz()
        wx.removeStorage({
          key: "flag_zdy_sx",
          success: function () {

          },
          fail: function () {

          }
        })
      }
    }
    if (name_type === "sj") {
      touch_pd = 1
      tmxs_pd = 1, cdxs_pd = 1, tz_pd = 1, jrctk_pd = 1, cz_pd = 1, qk_pd = 0, ds_pd = 1, dapd_pd = 1
      wx.getStorage({
        key: app.globalData.name + "_sj" + "_point",
        success: function (res) {
          t_point = res.data
        },
        fail: function () {
          that.ds()
          t_point = wx.getStorageSync(app.globalData.name + "_sj" + "_point")
        }
      })
      if (app.globalData.name === "zdy" && wx.getStorageSync('flag_zdy_sj') === "true") {
        //解决覆盖后题目长度不一样导致超出部分不显示的问题
        that.cz()
        wx.removeStorage({
          key: "flag_zdy_sj",
          success: function () {

          },
          fail: function () {

          }
        })
      }
    }
    if (name_type === "ctk") {
      wx.getStorage({
        key: app.globalData.name + "_ctk_point",
        success: function (res) {
          t_point = res.data
          app.globalData.total_num = t_point.length
          touch_pd = 1
          tmxs_pd = 1, cdxs_pd = 1, tz_pd = 1, jrctk_pd = 0, cz_pd = 1, qk_pd = 1, ds_pd = 0, dapd_pd = 1
        },
        fail: function () {
          app.globalData.total_num = null
          touch_pd = 0
          tmxs_pd = 0, cdxs_pd = 0, tz_pd = 0, jrctk_pd = 0, cz_pd = 0, qk_pd = 0, ds_pd = 0, dapd_pd = 0
          pos = null
          pos_prev = null
          pos_next = null
          wx.showToast({
            title: '没有错题！',
            icon: 'none',
            duration: 1500
          })
        }
      })
      if (app.globalData.name === "zdy" && wx.getStorageSync('flag_zdy_ctk') === "true") {
        //解决覆盖后题目长度不一样导致超出部分不显示的问题
        that.cz()
        wx.removeStorage({
          key: "flag_zdy_ctk",
          success: function () {

          },
          fail: function () {

          }
        })
      }
    }
    pos = app.globalData.pos
    pos_prev = pos - 11
    pos_next = pos + 11

    wx.getStorage({ //显示上一次退出时对应的题目
      key: app.globalData.name + "_" + name_type + "_pos",
      fail: function () {
        pos = 0
        pos_prev = 0
        pos_next = 11
        that.get_storage(pos) //取出缓存
        that.tmxs(pos) //题目显示
        that.cdxs(pos) //菜单显示
      },
      success: function (res) {
        pos = res.data
        if (pos === 0) {
          pos_prev = 0
          pos = 0
          pos_next = 11
        } else if (pos === app.globalData.total_num * 11 - 11) {
          pos = app.globalData.total_num * 11 - 11
          pos_prev = pos - 11
          pos_next = pos
        } else {
          pos_next = pos + 11
          pos_prev = pos - 11
        }
        that.get_storage(pos)
        that.tmxs(pos) //题目显示
        that.cdxs(pos) //菜单显示
      }
    })
    wx.getStorage({ //初始化答对量
      key: app.globalData.name + "_" + name_type + '_ddl',
      success: function (res) {
        dd_l = res.data
        that.setData({
          ddl: dd_l
        })
      },
      fail: function () {
        dd_l = 0
        that.setData({
          ddl: dd_l
        })
      }
    })
  },
  jrctk: function (e) { //加入错题库
    if (jrctk_pd === 1) {
      wx.getStorage({
        key: app.globalData.name + "_ctk_point",
        success: function (res) {
          var temp = res.data
          var temp_b = t_point[pos / 11]
          var index = temp.indexOf(temp_b)
          if (index < 0) {
            temp.push(temp_b)
            wx.setStorageSync(app.globalData.name + "_ctk_point", temp)
            wx.showToast({
              title: '加入成功！',
              icon: 'none',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '请勿重复添加！',
              icon: 'none',
              duration: 1500
            })
          }
        },
        fail: function () {
          var temp = []
          var temp_b = t_point[pos / 11]
          var index = temp.indexOf(temp_b)
          if (index < 0) {
            temp.push(temp_b)
            wx.setStorageSync(app.globalData.name + "_ctk_point", temp)
            wx.showToast({
              title: '加入成功！',
              icon: 'none',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '请勿重复添加！',
              icon: 'none',
              duration: 1500
            })
          }
        }
      })
    }
  },
  qk: function (e) { //清空
    var that = this
    if (qk_pd === 1) {
      wx.showModal({
        title: '提示',
        content: '确定清空错题库？',
        confirmText: '清空',
        cancelText: '取消',
        success: function (res) {
          if (res.confirm) {
            wx.showLoading({
              title: '清空中···',
              mask: true,
              icon: 'loading',
              duration: 10000
            });
            that.cz()
            wx.removeStorage({
              key: app.globalData.name + "_" + name_type + "_point",
            })
            app.globalData.total_num = null
            touch_pd = 0
            tmxs_pd = 0, cdxs_pd = 0, tz_pd = 0, jrctk_pd = 0, cz_pd = 0, qk_pd = 0, ds_pd = 0, dapd_pd = 0
            pos = null
            pos_prev = null
            pos_next = null
            complete: () => {
              wx.hideLoading()
            }
            wx.showToast({
              title: '清空成功！',
              icon: 'none',
              duration: 1500
            })
            that.setData({
              tm: "", //题目
              xa: "", //选项A
              xb: "", //选项B
              xc: "", //选项C
              xd: "", //选项D
              xe: "", //选项E
              xf: "", //选项F
              xg: "", //选项G
              dapd: "", //答案判断
              zqda: "", //正确答案
              dqh: null, //当前号
              tkh: null, //题库号
              tx: null, //题型
              ddl: 0, //答对量
              ztl: null, //总题量
            })
          } else if (res.cancel) {
            wx.showToast({
              title: '已取消清空！',
              icon: 'success',
              duration: 1500
            })
          }
        }
      })
    }
  },
  cz: function (e) { //重置
    if (cz_pd === 1 || wx.getStorageSync('flag_zdy') === "true") {
      var title_text = "提示"
      var that = this
      wx.showModal({
        title: title_text,
        content: '确认重置？如果系统自动弹出此页面，请点重置！',
        confirmText: '重置',
        cancelText: '取消',
        success: function (res) {
          if (res.confirm) {
            wx.showLoading({
              title: '重置中···',
              mask: true,
              icon: 'loading',
              duration: 10000
            });
            for (var i = 1; i <= app.globalData.total_num; i++) {
              wx.removeStorage({
                key: app.globalData.name + "_" + name_type + "_dapd[" + i + "]", //删除每题的答案核对判断
              })
              wx.removeStorage({
                key: app.globalData.name + "_" + name_type + "[" + i + "]", //删除每题的选项记录
              })
            }
            wx.removeStorage({
              key: app.globalData.name + "_" + name_type + "_pos", //删除上一次退出题目序号记录
            })
            wx.removeStorage({
              key: app.globalData.name + "_" + name_type + "_ddl", //删除答对量
            })
            complete: () => {
              wx.hideLoading()
            }
            wx.showToast({
              title: '重置成功！',
              icon: 'success',
              duration: 1500
            })
            pos = 0
            pos_prev = 0
            pos_next = 11
            that.onLoad()
            dd_l = 0
            that.setData({
              ddl: dd_l
            })
          } else if (res.cancel) {
            wx.showToast({
              title: '已取消重置！',
              icon: 'none',
              duration: 1500
            })
          }
        }
      })
    }
  },
  ds_btn: function (e) { //打散-按钮
    if (ds_pd === 1) {
      var that = this
      wx.getStorage({
        key: app.globalData.name + "_sj" + "_point",
        success: function () {
          wx.showModal({
            title: '提示',
            content: '当前已有打散的记录，是否重新打散？',
            confirmText: '打散',
            cancelText: '取消',
            success: function (res) {
              if (res.confirm) {
                that.ds();
                that.cz()
                wx.showToast({
                  title: '打散成功！',
                  icon: 'success',
                  duration: 1500
                })
              } else if (res.cancel) {
                wx.showToast({
                  title: '已取消打散！',
                  icon: 'none',
                  duration: 1500
                })
              }
            }
          })
        },
        fail: function () {
          that.ds();
          that.cz()
          wx.showToast({
            title: '打散成功！',
            icon: 'success',
            duration: 1500
          })
        }
      })
    }
  },
  ds: function (e) { //打散--函数
    if (ds_pd === 1) {
      var tempa, tempb
      let newArr = new Array(app.globalData.total_num).fill('').map((item, index) => index + 1); //生成1到n的顺序数组
      for (var i = newArr.length - 1; i >= 0; i--) { //洗牌算法(换牌),即：每次随机产生一个下标，和最后一个交换，直到第一个
        tempa = newArr[i]
        tempb = Math.floor(Math.random() * i)
        newArr[i] = newArr[tempb]
        newArr[tempb] = tempa
      }
      wx.setStorage({
        data: newArr,
        key: app.globalData.name + "_sj" + "_point",
      })
      wx.showToast({
        title: '打散完成！',
        icon: 'none',
        duration: 1500
      })
    }
  },
  click_xa: function () { //选项a单机切换颜色
    var color = ""
    if (color_xa_flag === 0) {
      color = "blue"
      color_xa_flag = 1
    } else {
      color = "black"
      color_xa_flag = 0
    }
    this.setData({
      color_xa: color
    })
  },
  click_xb: function () { //选项b单机切换颜色
    var color = ""
    if (color_xb_flag === 0) {
      color = "blue"
      color_xb_flag = 1
    } else {
      color = "black"
      color_xb_flag = 0
    }
    this.setData({
      color_xb: color
    })
  },
  click_xc: function () { //选项c单机切换颜色
    var color = ""
    if (color_xc_flag === 0) {
      color = "blue"
      color_xc_flag = 1
    } else {
      color = "black"
      color_xc_flag = 0
    }
    this.setData({
      color_xc: color
    })
  },
  click_xd: function () { //选项d单机切换颜色
    var color = ""
    if (color_xd_flag === 0) {
      color = "blue"
      color_xd_flag = 1
    } else {
      color = "black"
      color_xd_flag = 0
    }
    this.setData({
      color_xd: color
    })
  },
  click_xe: function () { //选项e单机切换颜色
    var color = ""
    if (color_xe_flag === 0) {
      color = "blue"
      color_xe_flag = 1
    } else {
      color = "black"
      color_xe_flag = 0
    }
    this.setData({
      color_xe: color
    })
  },
  click_xf: function () { //选项f单机切换颜色
    var color = ""
    if (color_xf_flag === 0) {
      color = "blue"
      color_xf_flag = 1
    } else {
      color = "black"
      color_xf_flag = 0
    }
    this.setData({
      color_xf: color
    })
  },
  click_xg: function () { //选项g单机切换颜色
    var color = ""
    if (color_xg_flag === 0) {
      color = "blue"
      color_xg_flag = 1
    } else {
      color = "black"
      color_xg_flag = 0
    }
    this.setData({
      color_xg: color
    })
  },
  tmxs: function (pos) { //题目显示-函数
    if (tmxs_pd === 1) {
      var that = this
      for (var i = 11 * (t_point[pos / 11] - 1); i < 11 * (t_point[pos / 11] - 1) + 11; i = i + 1) { //把$#变成空
        let a = String(total_data[i]).replace(/\s+/g, "") //replace，去除所有空格
        if (a === "$#") {
          total_data[i] = ""
        }
      }
      that.setData({
        tm: total_data[11 * (t_point[pos / 11] - 1) + 2], //题目
        xa: total_data[11 * (t_point[pos / 11] - 1) + 3], //选项A
        xb: total_data[11 * (t_point[pos / 11] - 1) + 4], //选项B
        xc: total_data[11 * (t_point[pos / 11] - 1) + 5], //选项C
        xd: total_data[11 * (t_point[pos / 11] - 1) + 6], //选项D
        xe: total_data[11 * (t_point[pos / 11] - 1) + 7], //选项E
        xf: total_data[11 * (t_point[pos / 11] - 1) + 8], //选项F
        xg: total_data[11 * (t_point[pos / 11] - 1) + 9], //选项G
        dapd: "", //答案判断
        zqda: "" //正确答案
      })
    }
  },
  cdxs: function (pos) { //菜单显示
    if (cdxs_pd === 1) {
      var that = this
      var num
      if (pos == 0) {
        num = 1
      } else {
        num = pos / 11 + 1
      }
      that.setData({
        dqh: num, //当前号
        tkh: t_point[pos / 11], //题库号
        tx: total_data[11 * (t_point[pos / 11] - 1) + 1], //题型
        ddl: dd_l, //答对量
        ztl: app.globalData.total_num, //总题量
      })
    }
  },
  tzth: function (e) { //跳转题号input
    tz_num = parseInt(e.detail.value) * 11 - 11
  },
  tz: function (e) { //跳转
    if (tz_pd === 1) {
      var that = this
      if (tz_num >= 0 && tz_num <= app.globalData.total_num * 11) {
        that.tmxs(tz_num) //题目显示
        that.cdxs(tz_num) //菜单显示
        if (tz_num === 0) {
          pos_prev = 0
          pos = 0
          pos_next = 11
          wx.showToast({
            title: '此题为第一题！',
            icon: 'none',
            duration: 1500
          })
        } else if (tz_num === (app.globalData.total_num * 11 - 11)) {
          pos = app.globalData.total_num * 11 - 11
          pos_prev = pos - 11
          pos_next = pos
          wx.showToast({
            title: '此题为最后一题！',
            icon: 'none',
            duration: 1500
          })
        } else {
          pos_prev = tz_num - 11
          pos = tz_num
          pos_next = tz_num + 11
        }
        that.get_storage(pos)
      } else {
        wx.showToast({
          title: '题号非法！',
          icon: 'none',
          duration: 1500
        })
      }
    }
  },
  set_storge: function (po_s) { //写入缓存，记录选项的选中情况
    var ke_y = (po_s) / 11 + 1
    var valu_e = ""
    if (color_xa_flag === 1) {
      valu_e = valu_e + "t"
    } else {
      valu_e = valu_e + "f"
    }
    if (color_xb_flag === 1) {
      valu_e = valu_e + " t"
    } else {
      valu_e = valu_e + " f"
    }
    if (color_xc_flag === 1) {
      valu_e = valu_e + " t"
    } else {
      valu_e = valu_e + " f"
    }
    if (color_xd_flag === 1) {
      valu_e = valu_e + " t"
    } else {
      valu_e = valu_e + " f"
    }
    if (color_xe_flag === 1) {
      valu_e = valu_e + " t"
    } else {
      valu_e = valu_e + " f"
    }
    if (color_xf_flag === 1) {
      valu_e = valu_e + " t"
    } else {
      valu_e = valu_e + " f"
    }
    if (color_xg_flag === 1) {
      valu_e = valu_e + " t"
    } else {
      valu_e = valu_e + " f"
    }
    wx.setStorageSync(app.globalData.name + "_" + name_type + "[" + ke_y + "]", valu_e)
  },
  get_storage: function (po_s) { //取出选项选中缓存，并判断更改选项选中情况
    var that = this
    color_xa_flag = 0
    color_xb_flag = 0
    color_xc_flag = 0
    color_xd_flag = 0
    color_xe_flag = 0
    color_xf_flag = 0
    color_xg_flag = 0
    that.setData({
      color_xa: "black",
      color_xb: "black",
      color_xc: "black",
      color_xd: "black",
      color_xe: "black",
      color_xf: "black",
      color_xg: "black",
    })
    var ke_y_num = po_s / 11 + 1
    var valu_e = ""
    wx.getStorage({
      key: app.globalData.name + "_" + name_type + "[" + ke_y_num + "]",
      success: function (res) {
        valu_e = res.data.split(" ")
        var res_a = "black",
          res_b = "black",
          res_c = "black",
          res_d = "black",
          res_e = "black",
          res_f = "black",
          res_g = "black"
        if (valu_e[0] === "t") {
          color_xa_flag = 1
          res_a = "blue"
        }
        if (valu_e[1] === "t") {
          color_xb_flag = 1
          res_b = "blue"
        }
        if (valu_e[2] === "t") {
          color_xc_flag = 1
          res_c = "blue"
        }
        if (valu_e[3] === "t") {
          color_xd_flag = 1
          res_d = "blue"
        }
        if (valu_e[4] === "t") {
          color_xe_flag = 1
          res_e = "blue"
        }
        if (valu_e[5] === "t") {
          color_xf_flag = 1
          res_f = "blue"
        }
        if (valu_e[6] === "t") {
          color_xg_flag = 1
          res_g = "blue"
        }
        that.setData({
          color_xa: res_a,
          color_xb: res_b,
          color_xc: res_c,
          color_xd: res_d,
          color_xe: res_e,
          color_xf: res_f,
          color_xg: res_g,
        })
      },
    })
  },
  dapd: function (e) { //答案判断
    if (dapd_pd === 1) {
      var that = this
      var num = pos / 11 + 1
      var da = ""
      if (color_xa_flag === 1) {
        da = da + "a"
      }
      if (color_xb_flag === 1) {
        da = da + "b"
      }
      if (color_xc_flag === 1) {
        da = da + "c"
      }
      if (color_xd_flag === 1) {
        da = da + "d"
      }
      if (color_xe_flag === 1) {
        da = da + "e"
      }
      if (color_xf_flag === 1) {
        da = da + "f"
      }
      if (color_xg_flag === 1) {
        da = da + "g"
      }
      if (da === total_data[11 * (t_point[pos / 11] - 1) + 10].replace(/\s+/g, "")) {
        that.setData({
          dapd: "答案正确",
          dapd_color: "green",
          zqda: "正确答案：" + total_data[11 * (t_point[pos / 11] - 1) + 10],
          ddl: dd_l
        })
        wx.getStorage({
          key: app.globalData.name + "_" + name_type + '_dapd[' + num + "]",
          fail: function () { //如果调用失败，则此题未核对过答案
            wx.getStorage({
              key: app.globalData.name + "_" + name_type + '_ddl',
              success: function (res) { //调用成功，使答对量加1
                dd_l = res.data + 1
                wx.setStorageSync(app.globalData.name + "_" + name_type + "_ddl", res.data + 1)
                that.setData({
                  dapd: "答案正确",
                  dapd_color: "green",
                  zqda: "正确答案：" + total_data[11 * (t_point[pos / 11] - 1) + 10],
                  ddl: dd_l
                })
              },
              fail: function (res2) { //调用失败，设置答对量为1
                dd_l = 1
                wx.setStorageSync(app.globalData.name + "_" + name_type + "_ddl", 1)
                that.setData({
                  dapd: "答案正确",
                  dapd_color: "green",
                  zqda: "正确答案：" + total_data[pos + 10],
                  ddl: dd_l
                })
              }
            })
            wx.setStorageSync(app.globalData.name + "_" + name_type + '_dapd[' + num + "]", 1)
          }
        })
      } else {
        that.setData({
          dapd: "答案错误",
          dapd_color: "red",
          zqda: "正确答案：" + total_data[11 * (t_point[pos / 11] - 1) + 10]
        })
        wx.getStorage({
          key: 'jds_dapd[' + num + "]",
          fail: function (res) {
            wx.setStorageSync(app.globalData.name + "_" + name_type + '_dapd[' + num + "]", 0)
          }
        })
      }
    }
  },
  touchStart(e) { //触摸开始
    startX = e.changedTouches[0].clientX
    startY = e.changedTouches[0].clientY
  },
  touchEnd(e) { //触摸结束
    if (touch_pd === 1) {
      var that = this
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;
      if (endX - startX > 50 && Math.abs(endY - startY) < 50) { //右滑，下一题
        if (sz_rl === 1) {
          that.btn_xyt()
        }
      } else if (endX - startX < -50 && Math.abs(endY - startY) < 50) { //左滑，上一题
        if (sz_rl === 1) {
          that.btn_syt()
        }
      }
    }
  },
  btn_syt: function () { //按钮-上一题
    if (touch_pd === 1) {
      var that = this
      that.set_storge(pos) //将选项选中情况写入缓存
      if (pos === 0) {
        pos_prev = 0
        pos = 0
        pos_next = 11
        wx.showToast({
          title: '此题为第一题！',
          icon: 'none',
          duration: 1500
        })
      } else {
        pos_next = pos
        pos = pos_prev
        pos_prev = pos_prev - 11
      }
      that.get_storage(pos)
      that.tmxs(pos) //题目显示
      that.cdxs(pos) //菜单显示
    }
  },
  btn_hdda: function () { //按钮-核对答案
    var that = this
    if (sz_cdl === 1) {
      that.dapd()
    }
  },
  btn_xyt: function () { //按钮-下一题
    if (touch_pd === 1) {
      var that = this
      that.set_storge(pos) //将选项选中情况写入缓存
      if (pos === (app.globalData.total_num * 11 - 11)) {
        pos = app.globalData.total_num * 11 - 11
        pos_prev = pos - 11
        pos_next = pos
        wx.showToast({
          title: '此题为最后一题！',
          icon: 'none',
          duration: 1500
        })
      } else {
        pos_prev = pos
        pos = pos_next
        pos_next = pos_next + 11
      }
      that.get_storage(pos)
      that.tmxs(pos) //题目显示
      that.cdxs(pos) //菜单显示
    }
  },
  btn_cz: function () { //按钮-重置
    var that = this
    if (sz_cdl === 1) {
      that.cz()
    }
  },
  btn_ct: function () { //按钮-错题
    var that = this
    if (sz_cdl === 1) {
      that.jrctk()
    }
  },
  btn_qk: function () { //按钮-清空
    var that = this
    if (sz_cdl === 1) {
      that.qk()
    }
  },
  btn_ds: function () { //按钮-打散
    var that = this
    if (sz_cdl === 1) {
      that.ds_btn()
    }
  },
  btn_tz: function () { //按钮-跳转
    var that = this
    if (sz_cdl === 1) {
      that.tz()
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
    wx.setStorageSync(app.globalData.name + "_" + name_type + '_pos', pos)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.onHide()
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