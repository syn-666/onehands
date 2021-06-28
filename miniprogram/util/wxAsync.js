//登录(获取用户信息)
export const getUserInfo=(res)=>{
    return new Promise((resolve,reject)=>{
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              resolve(res)
            },
            fail:(err)=>{
              reject(err);
            }
          })
    })
}

//获取用户地址
export const getUserAddress=(res)=>{
    return new Promise((resolve,reject)=>{
        wx.chooseAddress({
            success: (result)=>{
                resolve(result)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}