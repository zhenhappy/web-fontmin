#  用户登录

### request

```js
//<request>
// TODO
{
  type: 'logout-user',
  requestSystem: 'sdkportal',
  ts: '20150723150028',
  accessToken: 'xxxx',
  sign: 'xxxx'
}

```

### response with 200

```js
//<response=200>
// 返回200
  code: 0,
  msg: 'ok'
  data: null
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
