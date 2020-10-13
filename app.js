//app.js
wx.cloud.init({
  env: 'yiyi-62qxe'
})
const db = wx.cloud.database({
  env: 'yiyi-62qxe'
})
const app = getApp()
let userInfo = {
  jzjd: 0,
}
App({
  globalData: {
    tim: 0,
    total_data: null, //总数据
    total_num: null, //总长度
    pos: 0, //当前题目位置
    name: "", //对应近代史、思修、马原、毛概、自定义题库
    name_type: "", //对应顺序、随机、错题库
    msg:""
  },

  // 获取数据
  getUserInfo() {
    return userInfo
  },
  // 更新用户信息
  updateUserInfo(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      userInfo[key] = obj[key]
    }
  },
  onLaunch: function () {
    var that = this
    wx.cloud.init({
      env: 'yiyi-62qxe',
      traceUser: true
    })
    wx.showShareMenu({})
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {

    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启小程序？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
    wx.getStorage({
      key: 'sz_dyh_btn',
      fail: function () {
        wx.setStorageSync('sz_dyh_btn', "1")
      }
    })
    wx.getStorage({
      key: 'sz_sec_btn',
      fail: function () {
        wx.setStorageSync('sz_sec_btn', "1")
      }
    })
    wx.getStorage({
      key: 'sz_cdl_btn',
      fail: function () {
        wx.setStorageSync('sz_cdl_btn', "1")
      }
    })
    wx.getStorage({
      key: 'sz_rl_btn',
      fail: function () {
        wx.setStorageSync('sz_rl_btn', "1")
      }
    })
    db.collection('message').doc("6b81e0b4-e39f-47a1-bc7c-b604ffb2914e").get().then(res => {
      var temp = res.data
      wx.setStorageSync('message',temp['message'])
      wx.getStorage({
        key: 'version',
        success: function (resault) {
          if (resault.data === temp["update_version"]) {
            wx.getStorage({
              key: 'up_data',
              success: function (resault2) {
                var kk = resault2.data
                if (kk < temp["update_data"]) { //不删缓存更新数据
                  var test;
                  wx.cloud.downloadFile({
                    fileID: temp['file_id'], // 文件 ID
                    success: res => {
                      wx.getFileSystemManager().readFile({ //读文件
                        filePath: res.tempFilePath,
                        encoding: 'utf8',
                        success(res) {
                          test = res.data
                          var da_ta = test
                          da_ta = da_ta.split("/%*/")
                          wx.setStorageSync('d_jds', da_ta[0])
                          wx.setStorageSync('d_sx', da_ta[1])
                          wx.setStorageSync('d_my', da_ta[2])
                          wx.setStorageSync('d_mg', da_ta[3])
                          wx.setStorageSync('version', temp['update_version']) //版本号，用来检测是否需要升级
                          wx.setStorage({
                            key: "up_data",
                            data: temp['update_data']
                          })
                        },
                      })
                    },
                  })
                }
              }
            })
          }else{//版本号不相等，删缓存
            var test;
            var temp_d_jds = wx.getStorageSync('d_jds')
            var temp_d_sx = wx.getStorageSync('d_sx')
            var temp_d_my = wx.getStorageSync('d_my')
            var temp_d_mg = wx.getStorageSync('d_mg')
            var temp_sz_dyh_btn = wx.getStorageSync('sz_dyh_btn')
            var temp_sz_sec_btn = wx.getStorageSync('sz_sec_btn')
            var temp_sz_cdl_btn = wx.getStorageSync('sz_cdl_btn')
            var temp_sz_rl_btn = wx.getStorageSync('sz_rl_btn')
            wx.getStorage({
              key: 'd_zdy',
              success: function (res2) {
                wx.clearStorage();
                wx.setStorageSync('d_jds', temp_d_jds)
                wx.setStorageSync('d_sx', temp_d_sx)
                wx.setStorageSync('d_my', temp_d_my)
                wx.setStorageSync('d_mg', temp_d_mg)
                wx.setStorageSync('sz_dyh_btn', temp_sz_dyh_btn)
                wx.setStorageSync('sz_sec_btn', temp_sz_sec_btn)
                wx.setStorageSync('sz_cdl_btn', temp_sz_cdl_btn)
                wx.setStorageSync('sz_rl_btn', temp_sz_rl_btn)
                wx.setStorageSync('d_zdy', res2.data)
              },
              fail: function () {
                wx.clearStorage(); //删除所有缓存
                wx.setStorageSync('d_jds', temp_d_jds) //重新写入部分必要缓存
                wx.setStorageSync('d_sx', temp_d_sx)
                wx.setStorageSync('d_my', temp_d_my)
                wx.setStorageSync('d_mg', temp_d_mg)
                wx.setStorageSync('sz_dyh_btn', temp_sz_dyh_btn)
                wx.setStorageSync('sz_sec_btn', temp_sz_sec_btn)
                wx.setStorageSync('sz_cdl_btn', temp_sz_cdl_btn)
                wx.setStorageSync('sz_rl_btn', temp_sz_rl_btn)
              }
            })
            wx.cloud.downloadFile({
              fileID: temp['file_id'], // 文件 ID
              success: res => {
                wx.getFileSystemManager().readFile({ //读文件
                  filePath: res.tempFilePath,
                  encoding: 'utf8',
                  success(res) {
                    test = res.data
                    var da_ta = test
                    da_ta = da_ta.split("/%*/")
                    wx.setStorageSync('d_jds', da_ta[0])
                    wx.setStorageSync('d_sx', da_ta[1])
                    wx.setStorageSync('d_my', da_ta[2])
                    wx.setStorageSync('d_mg', da_ta[3])
                    wx.setStorageSync('version', temp['update_version']) //版本号，用来检测是否需要升级
                    wx.setStorage({
                      key: "up_data",
                      data: temp['update_data']
                    })
                  },
                })
              },
            })
          }
        },
        fail: function () { //删缓存并更新数据
          var test;
          var temp_d_jds = wx.getStorageSync('d_jds')
          var temp_d_sx = wx.getStorageSync('d_sx')
          var temp_d_my = wx.getStorageSync('d_my')
          var temp_d_mg = wx.getStorageSync('d_mg')
          var temp_sz_dyh_btn = wx.getStorageSync('sz_dyh_btn')
          var temp_sz_sec_btn = wx.getStorageSync('sz_sec_btn')
          var temp_sz_cdl_btn = wx.getStorageSync('sz_cdl_btn')
          var temp_sz_rl_btn = wx.getStorageSync('sz_rl_btn')
          wx.getStorage({
            key: 'd_zdy',
            success: function (res2) {
              wx.clearStorage();
              wx.setStorageSync('d_jds', temp_d_jds)
              wx.setStorageSync('d_sx', temp_d_sx)
              wx.setStorageSync('d_my', temp_d_my)
              wx.setStorageSync('d_mg', temp_d_mg)
              wx.setStorageSync('sz_dyh_btn', temp_sz_dyh_btn)
              wx.setStorageSync('sz_sec_btn', temp_sz_sec_btn)
              wx.setStorageSync('sz_cdl_btn', temp_sz_cdl_btn)
              wx.setStorageSync('sz_rl_btn', temp_sz_rl_btn)
              wx.setStorageSync('d_zdy', res2.data)
            },
            fail: function () {
              wx.clearStorage(); //删除所有缓存
              wx.setStorageSync('d_jds', temp_d_jds) //重新写入部分必要缓存
              wx.setStorageSync('d_sx', temp_d_sx)
              wx.setStorageSync('d_my', temp_d_my)
              wx.setStorageSync('d_mg', temp_d_mg)
              wx.setStorageSync('sz_dyh_btn', temp_sz_dyh_btn)
              wx.setStorageSync('sz_sec_btn', temp_sz_sec_btn)
              wx.setStorageSync('sz_cdl_btn', temp_sz_cdl_btn)
              wx.setStorageSync('sz_rl_btn', temp_sz_rl_btn)
            }
          })
          wx.cloud.downloadFile({
            fileID: temp['file_id'], // 文件 ID
            success: res => {
              wx.getFileSystemManager().readFile({ //读文件
                filePath: res.tempFilePath,
                encoding: 'utf8',
                success(res) {
                  test = res.data
                  var da_ta = test
                  da_ta = da_ta.split("/%*/")
                  wx.setStorageSync('d_jds', da_ta[0])
                  wx.setStorageSync('d_sx', da_ta[1])
                  wx.setStorageSync('d_my', da_ta[2])
                  wx.setStorageSync('d_mg', da_ta[3])
                  wx.setStorageSync('version', temp['update_version']) //版本号，用来检测是否需要升级
                  wx.setStorage({
                    key: "up_data",
                    data: temp['update_data']
                  })
                },
              })
            },
          })
        }
      })
    })

  },
  "cloud": true,

})