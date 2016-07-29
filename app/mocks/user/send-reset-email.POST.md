# 发送重置密码邮件

### Api url

/send-reset-email.POST

### request

```js
//<request>
{
  'type': 'sms-captcha',
  'requestSystem': 'sdkportal',
  'ts': '201505050404',
  'email': '123@qq.com',
  'sign': '2243rfdsfdhgjytj'
}

```

### response with 200

```js
//<response=200>
// 200

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
