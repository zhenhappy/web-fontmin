# 手机验证码

### Api url

/sms-captcha

### request

```js
//<request>
{
  type: 'sms-captcha',
  requestSystem: 'sdkportal',
  ts: '20150405060404',
  mobile: '18576768484',
  sign: 'wefergrthyukiuliodfrhtyjyupo'
}

```

### response with 200

```js
//<response=200>
// 返回200
{
  code: '0',
  msg: 'success'
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
