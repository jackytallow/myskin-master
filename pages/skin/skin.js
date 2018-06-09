// pages/skin/skin.js
var config = require('../../api/config.js')
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    skinList:config.skinList,
    nowSkin:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that = this
     wx.getStorage({
       key:'skin',
       success:function(res){
         if(res.data == " "){
           that.setData({
             nowSkin:config.skinList[0].imgUrl
           })
         }else{
           that.setData({
             nowSkin:res.data
           })
         }
       }
     })
  },

  //选择图片背景的时候
  chooseSkin:function(e){
    var url = e.currentTarget.dataset.url
    wx.setStorage({
      key:'skin',
      data:url,
      success:function(res){
        wx.navigateBack({
          delta:1,
          success:function(res){
            //替换成功后在后台打印
            console.log("success")
          }
        })
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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