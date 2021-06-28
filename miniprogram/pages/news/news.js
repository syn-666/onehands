Page({

  data:{

  },

  onLoad(){
    console.log(123);
  },

  send(){
    console.log(456);
    wx.cloud.callFunction({
      name: 'zhenzisms',
      data: {
        $url: 'sendCode',
        apiUrl: 'https://sms_developer.zhenzikj.com',
        message: '您的验证码为:{2222}',
        number: '15503530245',
        messageId: 'aaabbb',
        seconds: 60,
        length: 4
      }
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    })

} 

})