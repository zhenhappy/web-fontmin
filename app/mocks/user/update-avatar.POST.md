# 修改用户头像

### Api url

/users/:userId/avatar


### request

url: /users/:userId/avatar

```js
//<request>
{
  type: 'update-avatar',
  requestSystem: 'sdkportal',
  ts: '20150723150028',
  accessToken: 'xxxx',
  file: 'a blob',
  fileName: 'xxx.png'
  sign: 'xxxx'
}

```

### response with 200

```js
//<response=200>
{
  url: ''
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
