#  重置密码

### Api url

/reset-password

### request

```js
//<request>

{
  'type': 'reset-password',
  'requestSystem': 'sdkportal',
  'ts': '201505050404',
  'accessToken': 'sadfdgfdhtyjutkilp',
  'loginPwd': 'dsfdsgrtytrut',
  'sign': 'dsgrthrtyjitul879p90[0dsfer4et5uy]ruyi'
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
