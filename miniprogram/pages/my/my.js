// pages/my/my.js
import {getUserAddress,getUserInfo} from '../../util/wxAsync'
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    address:{},
    id:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('user').get()
    .then(res=>{
      console.log(res);
    })
  },

  onShow(){
    let user = wx.getStorageSync('userInfo');
    if(!user){
      return;
    }
    this.setData({
      userInfo:user,
      id:user.id
    })
  },

  //获取用户信息,并新增用户表(不规则登录授权逻辑)
  async getUserInfo(){
    const res = await getUserInfo();
    if(res){
      this.setData({
        userInfo:res.userInfo
      })
    }
    //插入授权时间到用户表
    db.collection('user').add({
      data:{
        _createTime:Date.now()
      }
    })
    .then(res=>{
      //插入时间到用户表之后返回自动生成的_id,并存入变量中
      this.data.userInfo['id'] = res._id
      this.setData({
        id:res._id
      })
      //存入缓存
      wx.setStorageSync('userInfo', this.data.userInfo)
    })
  },

  //获取地址
  async getAddress(){
    const res = await getUserAddress();
    console.log(res);
    if(res){
      this.setData({
        address:res
      })
    }
  },
})