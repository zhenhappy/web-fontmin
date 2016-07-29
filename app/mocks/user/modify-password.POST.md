# 修改用户密码

### request

```js
//<request>
{
  requestSystem: 'sdkportal',
  ts: '20150723150028',
  accessToken: 'xxxx',
  loginPwd: '新密码加密',
  oldPwd: '加密',
  loginPwdMd5: 'md5("oldpass")',
  sign: 'xxxx'
}

```

### response with 200

```js
//<response=200>
{
  code: 0,
  msg: 'xxxx',
  data: {
  }
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
