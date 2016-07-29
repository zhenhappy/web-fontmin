# 用户注册

### Api url

/register-user


### request

```js
//<request>
{
  type: 'login-access-token',
  requestSystem: 'sdkportal',
  ts: '2015060604040',
  xgAppId: 'xg',
  accessToken: 'xxxx',
  sign: 'xxxx'
}


```

### response with 200

```js
//<response=200>
// 200
{
  uid: 'xxxx',
  status: '1'
  ts: '23424242',
  sign: 'xxxx'
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
