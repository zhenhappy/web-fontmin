# 检验token是否合法

### Api url

/verify-session

### request

```js
//<request>
{
  type: 'verify-session',
  requestSystem: 'sdkportal',
  ts: '20150405060404',
  accessToken: 'dfdfdgfdh',
  sign: 'wefergrthyukiuliodfrhtyjyupo'
}

```

### response with 200

```js
//<response=200>
{
  code: 0,
  msg: '成功'
}
// 返回200
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
