"use strict";
var app = getApp();
var config = require('../../api/config.js')

Page({
  data: {
    //定义用户信息的json配置
     userInfo: {},
     skin:'',
  },
  onLoad: function (cb) {
    var that = this
    console.log(app.globalData.userInfo)
    //检测是否存在用户信息
    if(app.globalData.userInfo != null){
          that.setData({
              userInfo:app.globalData.userInfo
          })
    } else{
        app.getUserInfo()
    }
      typeof cb  == 'function' && cb()
  //   var that = this;
  //   app.getUserInfo(function (userInfo) {
  // //后台打印出用户信息
  //     // console.log(userInfo);
  //     //设置用户信息
  //     that.setData({
  //       userInfo: userInfo
  //     })
  //   });
  },
  onReady: function () {
  
  },
  onShow: function () {
      var that  = this
      wx.getStorage({
          key:'skin',
          success:function(res){
              if(res.data == ""){
                that.setData({
                     skin:config.skinList[0].imgUrl
                })
              } else{
                 that.setData({
                      skin:res.data
                 })
              }
          }
      })
  },

//加载完后停止刷新
onPullDownRefresh:function(){
     this.onLoad(function(){
         wx.stopPullDownRefresh()
     })
},

//点击跳转到背景页面
  viewSkin:function(){
      wx.navigateTo({
      url: "../skin/skin"
    })
  },

  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})