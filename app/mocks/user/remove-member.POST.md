# 移除成员

### request

```js
//<request>
{
  type: 'remove-member',
  requestSystem: 'sdkportal',
  appId: '12',
  uid: '2133',
  accessToken: 'xxxxx',
  ts: '201505050404',
  sign: '2243rfdsfdhg'
}
```

### response with 200

```js
//<response=200>
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
