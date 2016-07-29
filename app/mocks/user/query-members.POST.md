# 用户(成员)列表

### request

```js
//<request>
{
  type: 'query-members',
  requestSystem: 'sdkportal',
  accessToken: 'xxxxx',
  ts: '201505050404',
  appId: '12',
  sign: '2243rfdsfdhg'
}
```

### response with 200

```js
//<response=200>
//{"code":"0","msg":"查询游戏成员成功","data":{"uid":"xgportal__d871439daeac86d54767deafbc3c56f3297077d969449c4475385b6699ba4bc8","nickName":"LIHAO4","email":"lihao4@kingsoft.com","mobile":null,"role":"ADMIN"}}
{
  code: 0,
  msg: 'dfdf',
  data: [
    {
      uid: 211,
      nickName: '高菲',
      email: 'hello@gmail.com',
      role: 'ADMIN',
      mobile: '232435346',
      headImgUrl: 'https://striker.teambition.net/thumbnail/110b052ab868643d907036cd3ae9e670bfb6/w/200/h/200'
    },
    {
      uid: 211,
      nickName: '曼玲',
      email: '12sfdg8@qq.com',
      role: 'USER',
      mobile: '232435346',
      headImgUrl: 'https://striker.teambition.net/thumbnail/110b052ab868643d907036cd3ae9e670bfb6/w/200/h/200'
    },
    {
      uid: 211,
      nickName: '志毅',
      email: '17568@qq.com',
      role: 'ADMIN',
      mobile: '232435346',
      headImgUrl: 'https://striker.teambition.net/thumbnail/110b052ab868643d907036cd3ae9e670bfb6/w/200/h/200'
    },
    {
      uid: 211,
      nickName: '山山',
      email: '123w546567568@qq.com',
      role: 'ADMIN',
      mobile: '232435346'
    },
    {
      uid: 211,
      nickName: '宋琳',
      email: '123w546567568@qq.com',
      role: 'ADMIN',
      mobile: '232435346'
    }
  ]

}


```

### response with 400

```js
//<response=400>
{
  code: 101,
  msg: '签名错误',
  description: '签名不对'
}

```
